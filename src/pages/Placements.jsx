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
        'Kotak', 'Coca Cola', 'Zomato', 'Tata Capital', 'ICICI Bank',
        'Aditya Birla', 'UBS', 'DHL', 'Tata BlueScope Steel', 'Jaivik',
        'Markets and Markets', 'WNS', 'Team Global Logistics Pvt Ltd'
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
                <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
                    Our students are preferred by top organizations for their ethical grounding and practical skills.
                </p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <a
                        href="https://drive.google.com/file/d/15s0l5lTWX5HD52Y2b76uH0aBeshlAms6/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gold-400 text-navy-900 px-8 py-3 rounded-lg font-semibold hover:bg-white transition-colors"
                    >
                        View Placement Report
                    </a>
                </motion.div>
            </Section>

            <Section dark>
                <Stats items={stats} />
            </Section>

            <Section>
                <h2 className="text-4xl font-serif text-white text-center mb-16">Top Recruiters</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {recruiters.map((company, index) => (
                        <Card key={index} className="flex items-center justify-center min-h-[8rem] p-4 hover:bg-white/5 transition-colors">
                            <span className="text-lg font-bold text-gray-300 text-center leading-tight">{company}</span>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Placements;
