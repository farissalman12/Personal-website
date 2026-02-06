import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const PhysicsBackground = ({ theme, activeSection }) => {
    const sceneRef = useRef(null);
    const engineRef = useRef(null);
    const renderRef = useRef(null);
    const runnerRef = useRef(null);
    
    // Track theme ref for updating existing bodies if needed, or simplier: rebuild on theme change.
    // Rebuilding might be jarring. Accessing theme inside loop?
    // Better: Update render properties of existing bodies in useEffect when theme changes.
    
    // Wait, the main useEffect runs once. If theme changes, we need to update bodies.
    const bodiesRef = useRef([]);
    const themeRef = useRef(theme); // Track latest theme for render loop

    useEffect(() => {
        themeRef.current = theme;
        if (bodiesRef.current.length > 0) {
           bodiesRef.current.forEach(body => {
               body.render.strokeStyle = theme === 'light' ? '#333333' : '#ffffff';
           });
        }
    }, [theme]);

    useEffect(() => {
        // Module aliases
        const Engine = Matter.Engine,
              Render = Matter.Render,
              World = Matter.World,
              Bodies = Matter.Bodies,
              Mouse = Matter.Mouse,
              MouseConstraint = Matter.MouseConstraint,
              Runner = Matter.Runner,
              Events = Matter.Events,
              Composite = Matter.Composite;

        // Create engine
        const engine = Engine.create();
        const world = engine.world;
        engine.world.gravity.y = 0; // Zero gravity

        // Create renderer
        const render = Render.create({
            element: sceneRef.current,
            engine: engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                background: 'transparent',
                wireframes: false,
                // pixelRatio: window.devicePixelRatio // Removed to fix coordinate mismatch on high-DPI screens
            }
        });

        // Store refs for cleanup
        engineRef.current = engine;
        renderRef.current = render;

        // Create particles
        const particleCount = 200; // Optimized density for performance
        const bodies = [];

        for (let i = 0; i < particleCount; i++) {
            const x = Math.random() * window.innerWidth;
            const y = Math.random() * window.innerHeight;
            const radius = Math.random() * 2 + 1; 

            const body = Bodies.circle(x, y, radius, {
                restitution: 0.1, // Low bounce
                friction: 0.0001,
                frictionAir: 0.02, // Gentle resistance
                render: {
                    visible: false // Turn off default rendering to use custom draw
                }
            });
            
            // Custom properties for orbit
            body.plugin = { 
                baseOrbitRadius: Math.random() * 80 + 80, // Larger base orbit (80-160px)
                angleSpeed: (Math.random() * 0.01) + 0.01, // Uniform direction (clock-wise), varying speed
                visualRadius: radius // Store original radius for custom rendering
            };

            // Add initial random velocity
            Matter.Body.setVelocity(body, {
                x: (Math.random() - 0.5) * 2,
                y: (Math.random() - 0.5) * 2
            });

            bodies.push(body);
        }
        bodiesRef.current = bodies;

        World.add(world, bodies);
        
        // Add walls (invisible)
        const walls = [
            Bodies.rectangle(window.innerWidth / 2, -40, window.innerWidth, 80, { isStatic: true, render: { visible: false } }), 
            Bodies.rectangle(window.innerWidth / 2, window.innerHeight + 40, window.innerWidth, 80, { isStatic: true, render: { visible: false } }), 
            Bodies.rectangle(window.innerWidth + 40, window.innerHeight / 2, 80, window.innerHeight, { isStatic: true, render: { visible: false } }), 
            Bodies.rectangle(-40, window.innerHeight / 2, 80, window.innerHeight, { isStatic: true, render: { visible: false } }) 
        ];
        World.add(world, walls);

        // Add mouse control
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });
        World.add(world, mouseConstraint);
        render.mouse = mouse;

        // Mouse Attraction & Orbit Logic
        let isMouseActive = false;
        let lastMouseX = window.innerWidth / 2;
        let lastMouseY = window.innerHeight / 2;
        let mouseTimeout;

        // Flag to prevent initial mousemove from immediately snapping if mouse is already in center
        let initialLoad = true;
        setTimeout(() => { initialLoad = false; }, 1000);

        const handleMouseMove = () => {
             if (initialLoad) return;
             isMouseActive = true;
        };

        const handleMouseOut = (e) => {
             // Check if the mouse actually left the document (relatedTarget is null)
             // This works reliably for the HTML document boundary
             if (!e.relatedTarget && !e.toElement) {
                 isMouseActive = false;
             }
        };

        const handleMouseEnter = () => {
            isMouseActive = true;
        };
        
        // Use 'mousemove' on window to catch movement anywhere, but guard with initialLoad
        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseout', handleMouseOut);
        document.addEventListener('mouseenter', handleMouseEnter);

        let currentTargetX = window.innerWidth / 2;
        let currentTargetY = window.innerHeight / 2;
        // Start fully expanded (Orbit Mode)
        let currentExpansion = 2.5; 

        Events.on(engine, 'beforeUpdate', function() {
            const time = Date.now();
            const pulsation = Math.sin(time / 500); // Gentle breathing

            // Determine desired target
            const destX = isMouseActive ? mouse.position.x : window.innerWidth / 2;
            const destY = isMouseActive ? mouse.position.y : window.innerHeight / 2;
            const destExpansion = isMouseActive ? 1 : 2.5;

            // Smoothly interpolate current target towards destination (LERP)
            // Lower factor = slower drift
            const lerpFactor = 0.005; // Extremely slow drift
            const expansionLerp = 0.005; // Extremely slow expansion

            currentTargetX += (destX - currentTargetX) * lerpFactor;
            currentTargetY += (destY - currentTargetY) * lerpFactor;
            currentExpansion += (destExpansion - currentExpansion) * expansionLerp;

            bodies.forEach(body => {
                // Stricter Velocity Cap
                const speed = Math.sqrt(body.velocity.x ** 2 + body.velocity.y ** 2);
                if (speed > 2) { // Relaxed flow cap
                     Matter.Body.setVelocity(body, {
                         x: (body.velocity.x / speed) * 2,
                         y: (body.velocity.y / speed) * 2
                     });
                }

                const dx = currentTargetX - body.position.x;
                const dy = currentTargetY - body.position.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // 1. Orbital Attraction (Pull to Ring)
                // Use smooth currentExpansion
                const targetRadius = (body.plugin.baseOrbitRadius * currentExpansion) + pulsation * 20; 
                
                if (distance < 3000) { 
                    const deviation = distance - targetRadius;
                    // Scale force by mass to ensure uniform acceleration for all particle sizes
                    const forceMagnitude = deviation * 0.0002 * body.mass; // Slightly stronger pull

                    // Apply radial force (push/pull to orbit)
                    Matter.Body.applyForce(body, body.position, {
                        x: dx / distance * forceMagnitude,
                        y: dy / distance * forceMagnitude
                    });

                    // 2. Angular Momentum (Spin around cursor/center)
                    // Calculate tangent vector (-dy, dx)
                    const tangentX = -dy / distance;
                    const tangentY = dx / distance;
                    
                    // Apply tangential force for spin, scaled by mass
                    // Unified direction (clockwise) to promote smooth flow and even distribution
                    const spinForce = 0.0001 * body.mass;   
                    
                    Matter.Body.applyForce(body, body.position, {
                        x: tangentX * spinForce,
                        y: tangentY * spinForce
                    });
                }
            });
        });

        Events.on(render, 'afterRender', () => {
            const context = render.context;
            context.beginPath();
            bodies.forEach(body => {
                const { x, y } = body.position;
                // Draw circle slightly smaller than physical body to create visual gap
                // Physical radius is body.circleRadius. We draw 65% of that.
                const visualR = body.plugin.visualRadius * 0.65; 

                context.moveTo(x + visualR, y);
                context.arc(x, y, visualR, 0, 2 * Math.PI);
            });
            context.fillStyle = 'transparent'; // Placeholder, stroke logic below
            context.lineWidth = 1;
            // Access latest theme state via ref
            context.strokeStyle = themeRef.current === 'light' ? '#333333' : '#ffffff';
            context.stroke();
        });

        // Run the engine
        const runner = Runner.create();
        runnerRef.current = runner;
        Runner.run(runner, engine);
        Render.run(render);

        // Handle Resize
        const handleResize = () => {
            render.canvas.width = window.innerWidth;
            render.canvas.height = window.innerHeight;
            
            // Re-center/resize walls (remove old, add new)
            // Simplified: Just reload page or more complex update logic. 
            // For now, let's just update bounds of existing walls if possible or simpler: reload logic is safest for physics bounds usually.
            // But let's try to update positions:
            const width = window.innerWidth;
            const height = window.innerHeight;

            Matter.Body.setPosition(walls[0], { x: width / 2, y: -10 });
            Matter.Body.setVertices(walls[0], Matter.Bodies.rectangle(width / 2, -10, width, 20).vertices);
            
            Matter.Body.setPosition(walls[1], { x: width / 2, y: height + 10 });
            Matter.Body.setVertices(walls[1], Matter.Bodies.rectangle(width / 2, height + 10, width, 20).vertices);

            Matter.Body.setPosition(walls[2], { x: width + 10, y: height / 2 });
            Matter.Body.setVertices(walls[2], Matter.Bodies.rectangle(width + 10, height / 2, 20, height).vertices);

            Matter.Body.setPosition(walls[3], { x: -10, y: height / 2 });
            Matter.Body.setVertices(walls[3], Matter.Bodies.rectangle(-10, height / 2, 20, height).vertices);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseout', handleMouseOut);
            document.removeEventListener('mouseenter', handleMouseEnter);
            Render.stop(render);
            Runner.stop(runner);
            if (render.canvas) render.canvas.remove();
            World.clear(world);
            Engine.clear(engine);
        };
    }, []);

    // Pause physics when not on home to save resources for modal animations
    useEffect(() => {
        if (!runnerRef.current || !engineRef.current) return;

        if (activeSection !== 'home') {
            // Pause
            Matter.Runner.stop(runnerRef.current);
        } else {
            // Resume
            Matter.Runner.run(runnerRef.current, engineRef.current);
        }
    }, [activeSection]);

    return (
        <div 
            ref={sceneRef} 
            style={{ 
                position: 'absolute', 
                top: 0, 
                left: 0, 
                width: '100%', 
                height: '100%', 
                pointerEvents: 'auto', // Allow mouse interaction
                zIndex: 0 
            }} 
        />
    );
};

export default PhysicsBackground;
