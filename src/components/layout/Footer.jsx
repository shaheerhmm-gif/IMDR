import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-charcoal-900 pt-20 pb-10 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-serif font-bold text-white">IMDR</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Institute of Management Development and Research, Pune.
                            Pioneering management education since 1974.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="text-gray-400 hover:text-gold-400 transition-colors">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-serif text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {['About Us', 'Admissions', 'Academics', 'Faculty', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Programs */}
                    <div>
                        <h3 className="text-white font-serif text-lg mb-6">Programs</h3>
                        <ul className="space-y-4">
                            {['PGDM General', 'PGDM Marketing', 'PGDM Finance', 'PGDM HR', 'PGDM Operations'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-400 hover:text-gold-400 text-sm transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-serif text-lg mb-6">Contact</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex gap-3 items-start">
                                <MapPin size={18} className="text-gold-400 shrink-0" />
                                <span>DES Campus, Agarkar Road, Deccan Gymkhana, Pune - 411004</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone size={18} className="text-gold-400 shrink-0" />
                                <span>+91 20 6765 6260</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail size={18} className="text-gold-400 shrink-0" />
                                <span>admissions@imdr.edu</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} IMDR Pune. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-gray-500 text-xs">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
