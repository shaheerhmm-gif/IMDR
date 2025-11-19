import React from 'react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(clsx(inputs));
}

const Button = ({
    children,
    variant = 'primary',
    className,
    icon: Icon,
    ...props
}) => {
    const variants = {
        primary: "bg-gold-400 text-navy-900 hover:bg-white hover:text-navy-900",
        outline: "border border-gold-400/30 text-gold-400 hover:bg-gold-400 hover:text-navy-900",
        glass: "bg-white/10 backdrop-blur-md text-white border border-white/10 hover:bg-white/20",
        ghost: "text-offwhite hover:text-gold-400",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 group",
                variants[variant],
                className
            )}
            {...props}
        >
            <span className="relative z-10">{children}</span>
            {Icon && (
                <Icon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            )}
        </motion.button>
    );
};

export default Button;
