
import React from 'react';
import { GlowingEffect } from './glowing-effect';
import { cn } from '@/lib/utils';


interface GlowingCardProps {
    children: React.ReactNode;
    className?: string;
    glow?: boolean;
    spread?: number;
    proximity?: number;
    inactiveZone?: number;
    borderWidth?: number;
    variant?: "default" | "white";
}

export const GlowingCard = ({ 
    children, 
    className, 
    glow = true, 
    spread = 40, 
    proximity = 64, 
    inactiveZone = 0.01, 
    borderWidth = 3,
    variant = "default"
}: GlowingCardProps) => {
    return (
        <div className={cn("relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3", className)}>
            <GlowingEffect
                spread={spread}
                glow={glow}
                disabled={false}
                proximity={proximity}
                inactiveZone={inactiveZone}
                borderWidth={borderWidth}
                variant={variant}
            />
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
                {children}
            </div>
        </div>
    );
};
