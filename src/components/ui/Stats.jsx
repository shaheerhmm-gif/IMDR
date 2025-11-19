import React from 'react';
import { motion } from 'framer-motion';
import { cn } from './Button';

const StatItem = ({ value, label, suffix = '', prefix = '' }) => {
    return (
        <div className="text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-serif font-bold text-gold-400 mb-2"
            >
                {prefix}{value}{suffix}
            </motion.div>
            <p className="text-gray-400 text-sm uppercase tracking-widest">{label}</p>
        </div>
    );
};

const Stats = ({ items, className }) => {
    return (
        <div className={cn("grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12", className)}>
            {items.map((item, index) => (
                <StatItem key={index} {...item} />
            ))}
        </div>
    );
};

export default Stats;
