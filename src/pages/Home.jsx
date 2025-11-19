import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Calendar } from 'lucide-react';
import Section from '../components/ui/Section';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import Stats from '../components/ui/Stats';

const Home = () => {
    const stats = [
        { value: '14.71', label: 'Highest Package (LPA)', suffix: ' LPA' },
        { value: '6.56', label: 'Average Package (LPA)', suffix: ' LPA' },
        { value: '92', label: 'Placement Rate', suffix: '%' },
        { value: '50', label: 'Years of Legacy', suffix: '+' },
    ];

    const news = [
        { title: 'Pitch Perfect 2025', date: 'Upcoming', link: '#' },
        { title: 'AICTE-ATAL FDP on Deep Tech', date: 'Sep 15-20, 2025', link: '#' },
        { title: 'Partnership with TradingView', date: 'New', link: '#' },
        { title: 'Global Race for Tech Leadership', date: 'Mar 7-8, 2025', link: '#' },
    ];

    const scrollToPrograms = () => {
        const element = document.getElementById('programs');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-navy-900 min-h-screen">
            {/* Hero Section */}
            <div className="h-screen w-full relative flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-50 scale-105 animate-slow-spin z-0" style={{ animationDuration: '60s' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 via-navy-900/10 to-navy-900 z-10" />

                <div className="relative z-40 text-center px-6 max-w-6xl mx-auto mt-20">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block py-1 px-3 rounded-full border border-gold-400/30 text-gold-400 text-xs uppercase tracking-[0.2em] mb-12 backdrop-blur-sm"
                    >
                        Est. 1974 • Deccan Education Society
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold text-white mb-8 tracking-tight leading-none"
                    >
                        Business Leaders <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-yellow-100 italic">With Conscience</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed"
                    >
                        Pioneering management education in Pune. An autonomous institution dedicated to creating thoughtful, ethical, and skilled leaders.
                    </motion.p>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                >
                    <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-gold-400 to-transparent" />
                </motion.div>
            </div>

            {/* Stats Section */}
            <Section className="border-b border-white/5">
                <Stats items={stats} />
            </Section>

            {/* About Section */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight">
                            A Legacy of <span className="text-gold-400">Excellence</span>
                        </h2>
                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                IMDR, a leading Management Institute in Pune, was established in 1974 as a constituent unit of the Deccan Education Society.
                            </p>
                            <p>
                                In 1977, IMDR became an autonomous institution, allowing us to make our teaching programmes more comprehensive, flexible, and result-oriented. We don't just teach business; we cultivate a mindset of inquiry and ethical leadership.
                            </p>
                        </div>
                        <Button variant="outline" className="mt-4">Read Our History</Button>
                    </div>
                    <div className="relative group">
                        <div className="absolute -inset-8 bg-gradient-to-r from-gold-400/20 via-gold-400/10 to-transparent rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700" />
                        <Card noPadding className="overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900/60 via-navy-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <img
                                src="/assets/campus.jpg"
                                alt="IMDR Campus Life"
                                className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-1000"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                <p className="text-white text-sm font-light tracking-wide">IMDR Campus • Est. 1974</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </Section>

            {/* Programs Section */}
            <div id="programs">
                <Section dark>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-serif text-white mb-4">Our Programs</h2>
                        <p className="text-gray-400">Designed for the modern business landscape</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <Card className="group cursor-pointer">
                            <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-400 transition-colors">PGDM</h3>
                            <p className="text-gray-400 mb-6">
                                Post Graduate Diploma in Management. A comprehensive two-year full-time program approved by AICTE.
                            </p>
                            <ul className="space-y-2 mb-8 text-sm text-gray-500">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Marketing</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Finance</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Human Resources</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Operations</li>
                            </ul>
                            <span className="text-gold-400 text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                                View Curriculum <ArrowRight size={16} />
                            </span>
                        </Card>

                        <Card className="group cursor-pointer">
                            <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-400 transition-colors">FPM</h3>
                            <p className="text-gray-400 mb-6">
                                Fellow Programme in Management. For those who wish to pursue a career in research and academics.
                            </p>
                            <ul className="space-y-2 mb-8 text-sm text-gray-500">
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Research Methodology</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Advanced Theory</li>
                                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold-400" /> Publication Support</li>
                            </ul>
                            <span className="text-gold-400 text-sm uppercase tracking-wider flex items-center gap-2 group-hover:gap-4 transition-all">
                                View Details <ArrowRight size={16} />
                            </span>
                        </Card>
                    </div>
                </Section>
            </div>

            {/* News & Events */}
            <Section>
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <h2 className="text-4xl font-serif text-white mb-2">News & Events</h2>
                        <p className="text-gray-400">Latest updates from the campus</p>
                    </div>
                    <Button variant="ghost" className="hidden md:flex">View All News</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {news.map((item, i) => (
                        <Card key={i} hoverEffect className="flex flex-col justify-between h-full">
                            <div>
                                <div className="flex items-center gap-2 text-gold-400 text-xs uppercase tracking-wider mb-4">
                                    <Calendar size={14} />
                                    {item.date}
                                </div>
                                <h3 className="text-lg font-medium text-white mb-4 hover:text-gold-400 transition-colors">
                                    <a href={item.link}>{item.title}</a>
                                </h3>
                            </div>
                            <a href={item.link} className="text-sm text-gray-500 hover:text-white transition-colors flex items-center gap-2 mt-4">
                                Read More <ArrowRight size={14} />
                            </a>
                        </Card>
                    ))}
                </div>
                <div className="mt-8 md:hidden text-center">
                    <Button variant="ghost">View All News</Button>
                </div>
            </Section>

            {/* CTA Section */}
            <Section noPadding className="py-32 text-center bg-gradient-to-b from-navy-900 to-charcoal-900">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-4xl md:text-6xl font-serif text-white mb-8">Ready to Lead?</h2>
                    <p className="text-gray-400 text-lg mb-10">
                        Join a community of innovators, thinkers, and leaders. Applications for PGDM 2025-27 are now open.
                    </p>
                    <Button variant="primary" className="px-10 py-4 text-lg">Apply Now</Button>
                </div>
            </Section>
        </div>
    );
};

export default Home;
