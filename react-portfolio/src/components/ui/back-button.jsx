import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

export const BackButton = ({ onClick, className }) => {
    return (
        <button 
            onClick={onClick}
            className={cn(
                "fixed top-6 left-6 z-[10000] flex items-center gap-2 px-4 py-2 rounded-full bg-background/20 backdrop-blur-md border border-white/10 shadow-sm hover:bg-background/40 hover:border-foreground/50 transition-all duration-300 group cursor-pointer",
                className
            )}
        >
            <ArrowLeft className="w-4 h-4 text-foreground/80 group-hover:text-foreground transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium uppercase tracking-wider opacity-80 group-hover:opacity-100 group-hover:text-foreground transition-colors">Back</span>
        </button>
    );
};
