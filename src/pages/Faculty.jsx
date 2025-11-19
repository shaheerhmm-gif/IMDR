import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { Linkedin, Mail } from 'lucide-react';

const Faculty = () => {
    const faculty = [
        { name: 'Dr. Shikha Jain', title: 'Director', area: 'General Management' },
        { name: 'Dr. Abhijeet Shivane', title: 'Associate Professor', area: 'Marketing' },
        { name: 'Dr. Suraj Kamble', title: 'Associate Professor', area: 'Finance' },
        { name: 'Dr. Sanmath Shetty', title: 'Assistant Professor', area: 'Operations' },
        { name: 'Prof. Prajakta Pradhan', title: 'Assistant Professor', area: 'HR' },
        { name: 'Prof. Vipra Tiwari', title: 'Assistant Professor', area: 'Marketing' },
        { name: 'Dr. Prashant Dhopavkar', title: 'Associate Professor', area: 'Finance' },
        { name: 'Dr. Shweta Jain', title: 'Assistant Professor', area: 'General Management' },
    ];

    return (
        <div className="bg-navy-900 min-h-screen pt-20">
            <Section className="text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-serif font-bold text-white mb-8"
                >
                    Meet Our <span className="text-gold-400">Mentors</span>
                </motion.h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Our faculty comprises experienced academicians and industry practitioners dedicated to shaping the next generation of leaders.
                </p>
            </Section>

            <Section dark>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {faculty.map((member, index) => (
                        <Card key={index} className="text-center group relative overflow-hidden">
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gold-400/30 group-hover:border-gold-400 transition-colors">
                                <img
                                    src={`https://ui-avatars.com/api/?name=${member.name}&background=0B1A33&color=CFAE62`}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-serif text-white mb-2">{member.name}</h3>
                            <p className="text-gold-400 text-sm font-medium mb-1">{member.title}</p>
                            <p className="text-gray-500 text-sm mb-6">{member.area}</p>

                            <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={18} /></a>
                                <a href="#" className="text-gray-400 hover:text-white"><Mail size={18} /></a>
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Faculty;
