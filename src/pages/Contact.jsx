import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
    return (
        <div className="bg-navy-900 min-h-screen pt-20">
            <Section className="text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-serif font-bold text-white mb-8"
                >
                    Get in <span className="text-gold-400">Touch</span>
                </motion.h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    We'd love to hear from you. Reach out to us for admissions, collaborations, or general inquiries.
                </p>
            </Section>

            <Section dark>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <Card className="p-8">
                            <h3 className="text-2xl font-serif text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex gap-4 items-start">
                                    <MapPin className="text-gold-400 shrink-0" />
                                    <p className="text-gray-400">DES Campus, Agarkar Road, Deccan Gymkhana, Pune - 411004</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Phone className="text-gold-400 shrink-0" />
                                    <p className="text-gray-400">+91 20 6765 6260</p>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <Mail className="text-gold-400 shrink-0" />
                                    <p className="text-gray-400">admissions@imdr.edu</p>
                                </div>
                            </div>
                        </Card>

                        <div className="h-64 rounded-2xl overflow-hidden border border-white/10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.253617538391!2d73.8391663153855!3d18.51743498741085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf8430655555%3A0x6e5885d166416205!2sIMDR%20Pune!5e0!3m2!1sen!2sin!4v1677654321098!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <Card className="p-8">
                            <h3 className="text-2xl font-serif text-white mb-6">Send us a Message</h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400">First Name</label>
                                        <input type="text" className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm text-gray-400">Last Name</label>
                                        <input type="text" className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:outline-none transition-colors" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Email</label>
                                    <input type="email" className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:outline-none transition-colors" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm text-gray-400">Message</label>
                                    <textarea rows="4" className="w-full bg-navy-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-gold-400 focus:outline-none transition-colors" />
                                </div>
                                <Button variant="primary" className="w-full">Send Message</Button>
                            </form>
                        </Card>
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
