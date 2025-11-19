import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';

const About = () => {
    return (
        <div className="bg-navy-900 min-h-screen pt-20">
            {/* Hero */}
            <Section className="text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-serif font-bold text-white mb-8"
                >
                    Our <span className="text-gold-400">Legacy</span>
                </motion.h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    The Deccan Education Society (DES) was established in 1884 by the stalwarts of India's freedom struggle, including Bal Gangadhar Tilak and Gopal Ganesh Agarkar.
                </p>
            </Section>

            {/* History Content */}
            <Section dark>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="order-2 md:order-1">
                        <Card noPadding className="aspect-[3/4]">
                            <img
                                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2070&auto=format&fit=crop"
                                alt="History"
                                className="w-full h-full object-cover"
                            />
                        </Card>
                    </div>
                    <div className="space-y-8 order-1 md:order-2">
                        <h2 className="text-4xl font-serif text-white">139 Years of Excellence</h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                The Deccan Education Society has been a beacon of learning for over a century. It was founded with the belief that education is the most powerful tool for national regeneration.
                            </p>
                            <p>
                                IMDR, established in 1974, carries this torch forward in the field of management education. As an autonomous institute, we have the freedom to innovate and adapt to the changing needs of the business world while staying true to our core values.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Vision & Mission */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="p-10">
                        <h3 className="text-3xl font-serif text-gold-400 mb-6">Vision</h3>
                        <p className="text-gray-300 text-lg">
                            To be a vibrant community of learning, creating and disseminating knowledge for the betterment of society.
                        </p>
                    </Card>
                    <Card className="p-10">
                        <h3 className="text-3xl font-serif text-gold-400 mb-6">Mission</h3>
                        <p className="text-gray-300 text-lg">
                            To develop thoughtful, ethical and socially conscious business leaders through a curriculum that balances theory with practice.
                        </p>
                    </Card>
                </div>
            </Section>
        </div>
    );
};

export default About;
