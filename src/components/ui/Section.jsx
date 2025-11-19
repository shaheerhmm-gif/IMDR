import React from 'react';
import { motion } from 'framer-motion';
import { cn } from './Button';

const Section = ({
    children,
    className,
    id,
    noPadding = false,
    dark = false
}) => {
    return (
        <section
            id={id}
            className={cn(
                "relative w-full overflow-hidden",
                noPadding ? "" : "py-20 md:py-32",
                dark ? "bg-charcoal-900" : "bg-navy-900",
                className
            )}
        >
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={cn(noPadding ? "h-full w-full" : "container mx-auto px-6")}
            >
                {children}
            </motion.div>
        </section>
    );
};

export default Section;
