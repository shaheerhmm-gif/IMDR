import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Stats from '../components/ui/Stats';

const Placements = () => {
    const stats = [
        { value: '14.71', label: 'Highest Package', suffix: ' LPA' },
        { value: '6.56', label: 'Average Package', suffix: ' LPA' },
        { value: '92', label: 'Placement Rate', suffix: '%' },
        { value: '50', label: 'Recruiters', suffix: '+' },
    ];

    const recruiters = [
        'Deloitte', 'HDFC Bank', 'ICICI Bank', 'TCS', 'Capgemini',
        'Amazon', 'Bajaj Finserv', 'Godrej', 'Berger Paints', 'Mercedes Benz'
    ];

    return (
        <div className="bg-navy-900 min-h-screen pt-20">
            <Section className="text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-serif font-bold text-white mb-8"
                >
                    Career <span className="text-gold-400">Success</span>
                </motion.h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Our students are preferred by top organizations for their ethical grounding and practical skills.
                </p>
            </Section>

            <Section dark>
                <Stats items={stats} />
            </Section>

            <Section>
                <h2 className="text-4xl font-serif text-white text-center mb-16">Top Recruiters</h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                    {recruiters.map((company, index) => (
                        <Card key={index} className="flex items-center justify-center h-32 hover:bg-white/5 transition-colors">
                            <span className="text-xl font-bold text-gray-300">{company}</span>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Placements;
