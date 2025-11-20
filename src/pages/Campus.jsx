import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const Campus = () => {
    const images = [
        { src: '/assets/campus/campus-1.jpg', title: 'Campus Walkway' },
        { src: '/assets/campus/campus-2.jpg', title: 'Courtyard' },
        { src: '/assets/campus/campus-3.jpg', title: 'Academic Block' },
        { src: '/assets/campus/campus-4.jpg', title: 'Corridor' },
        { src: '/assets/campus/campus-5.jpg', title: 'Main Entrance' },
    ];

    return (
        <div className="bg-navy-900 min-h-screen pt-20">
            <Section className="text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-serif font-bold text-white mb-8"
                >
                    Life at <span className="text-gold-400">IMDR</span>
                </motion.h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    A vibrant campus nestled in the heart of Pune, offering a perfect blend of heritage and modernity.
                </p>
            </Section>

            <Section dark>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {images.map((img, index) => (
                        <Card key={index} noPadding className="group cursor-pointer overflow-hidden">
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                <h3 className="text-xl font-serif text-white">{img.title}</h3>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Campus;
