import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const Campus = () => {
    const images = [
        { src: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1986&auto=format&fit=crop', title: 'Main Building' },
        { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop', title: 'Library' },
        { src: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?q=80&w=1974&auto=format&fit=crop', title: 'Auditorium' },
        { src: 'https://images.unsplash.com/photo-1592334873219-42ca023e48ce?q=80&w=2000&auto=format&fit=crop', title: 'Cafeteria' },
        { src: 'https://images.unsplash.com/photo-1571260899304-42d98b60d713?q=80&w=2076&auto=format&fit=crop', title: 'Sports Complex' },
        { src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop', title: 'Classrooms' },
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {images.map((img, index) => (
                        <Card key={index} noPadding className="aspect-[4/3] group cursor-pointer overflow-hidden">
                            <img
                                src={img.src}
                                alt={img.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
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
