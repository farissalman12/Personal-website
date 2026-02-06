import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ClipAnimation = ({ words }) => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000); // Change word every 3 seconds

        return () => clearInterval(interval);
    }, [words]);

    return (
        <span style={{ position: 'relative', display: 'inline-block', verticalAlign: 'top', minWidth: '10px' }}>
             <AnimatePresence mode='wait'>
                <motion.b
                    key={index}
                    className="is-visible"
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    exit={{ width: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    style={{ 
                        display: 'inline-block', 
                        overflow: 'hidden', 
                        whiteSpace: 'nowrap',
                        verticalAlign: 'top',
                        fontWeight: 400
                    }}
                >
                    {words[index]}
                </motion.b>
            </AnimatePresence>
            <span style={{ 
                position: 'absolute', 
                right: -2, 
                top: 0, 
                height: '100%', 
                width: '2px', 
                backgroundColor: '#b9b9b9' 
            }}></span>
        </span>
    );
};

export default ClipAnimation;
