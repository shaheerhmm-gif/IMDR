import React from 'react';
import { motion } from 'framer-motion';
import { cn } from './Button';

const Card = ({
    children,
    className,
    hoverEffect = true,
    noPadding = false
}) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -10, transition: { duration: 0.3 } } : {}}
            className={cn(
                "glass-card rounded-2xl overflow-hidden relative group",
                noPadding ? "" : "p-6 md:p-8",
                className
            )}
        >
            {/* Gradient Glow on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/0 to-gold-400/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />

            {/* Border Gradient */}
            <div className="absolute inset-0 border border-white/5 rounded-2xl group-hover:border-gold-400/20 transition-colors duration-500 pointer-events-none" />

            <div className="relative z-10">
                {children}
            </div>
        </motion.div>
    );
};

export default Card;
