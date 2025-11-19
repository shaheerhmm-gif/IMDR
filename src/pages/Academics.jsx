import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Download } from 'lucide-react';

const Academics = () => {
    const curriculum = [
        {
            year: 'Year 1',
            title: 'Foundation & Core',
            description: 'Building a strong base in management principles.',
            subjects: ['Marketing Management', 'Financial Accounting', 'Organizational Behavior', 'Business Statistics', 'Managerial Economics']
        },
        {
            year: 'Year 2',
            title: 'Specialization & Strategy',
            description: 'Deep dive into your chosen field and strategic thinking.',
            subjects: ['Strategic Management', 'International Business', 'Electives (Marketing/Finance/HR/Ops)', 'Capstone Project', 'Internship']
        }
    ];

    return (
        <div className="bg-navy-900 min-h-screen pt-20">
            {/* Hero */}
            <Section className="text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-serif font-bold text-white mb-8"
                >
                    Academic <span className="text-gold-400">Excellence</span>
                </motion.h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Our PGDM program is designed to create industry-ready professionals with a strong ethical foundation.
                </p>
            </Section>

            {/* PGDM Overview */}
            <Section dark>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl font-serif text-white">Post Graduate Diploma in Management</h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                IMDR's PGDM is a two-year full-time program approved by AICTE. It is equivalent to an MBA degree.
                            </p>
                            <p>
                                The program focuses on experiential learning, case studies, and industry interaction. We believe in "learning by doing".
                            </p>
                        </div>
                        <Button variant="primary" icon={Download}>Download Curriculum</Button>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gold-400/20 rounded-full blur-3xl opacity-20" />
                        <Card noPadding className="aspect-video">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop"
                                alt="Classroom"
                                className="w-full h-full object-cover"
                            />
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Curriculum Timeline */}
            <Section>
                <h2 className="text-4xl font-serif text-white text-center mb-16">Program Structure</h2>
                <div className="max-w-4xl mx-auto relative">
                    {/* Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />

                    {curriculum.map((item, index) => (
                        <div key={index} className={`relative flex flex-col md:flex-row gap-8 mb-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                            {/* Dot */}
                            <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-gold-400 rounded-full -translate-x-1/2 hidden md:block shadow-[0_0_20px_rgba(207,174,98,0.5)]" />

                            <div className="flex-1 md:w-1/2" />
                            <div className="flex-1 md:w-1/2">
                                <Card className="h-full">
                                    <span className="text-gold-400 text-sm font-bold uppercase tracking-widest mb-2 block">{item.year}</span>
                                    <h3 className="text-2xl font-serif text-white mb-4">{item.title}</h3>
                                    <p className="text-gray-400 mb-6">{item.description}</p>
                                    <ul className="space-y-2">
                                        {item.subjects.map((sub, i) => (
                                            <li key={i} className="text-sm text-gray-500 flex items-center gap-2">
                                                <span className="w-1 h-1 bg-gold-400 rounded-full" /> {sub}
                                            </li>
                                        ))}
                                    </ul>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Academics;
