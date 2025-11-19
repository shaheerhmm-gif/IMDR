import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { CheckCircle } from 'lucide-react';

const Admissions = () => {
    const steps = [
        { title: 'Application', desc: 'Submit your application online with valid entrance exam scores (CAT/MAT/XAT/CMAT/ATMA/MH-CET).' },
        { title: 'Shortlisting', desc: 'Candidates are shortlisted based on their entrance exam scores and academic profile.' },
        { title: 'Personal Interview', desc: 'Shortlisted candidates appear for a Personal Interview (PI) round.' },
        { title: 'Final Selection', desc: 'Selection is based on entrance score, PI performance, and academic record.' },
    ];

    return (
        <div className="bg-navy-900 min-h-screen pt-20">
            <Section className="text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-7xl font-serif font-bold text-white mb-8"
                >
                    Join the <span className="text-gold-400">Legacy</span>
                </motion.h1>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                    Your journey to becoming a business leader starts here. Follow our simple admission process.
                </p>
                <div className="mt-10">
                    <Button variant="primary">Apply Now</Button>
                </div>
            </Section>

            <Section dark>
                <div className="max-w-4xl mx-auto">
                    {steps.map((step, index) => (
                        <div key={index} className="flex gap-6 mb-12 last:mb-0 group">
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-full bg-navy-800 border border-gold-400 flex items-center justify-center text-gold-400 font-bold z-10 group-hover:bg-gold-400 group-hover:text-navy-900 transition-colors">
                                    {index + 1}
                                </div>
                                {index !== steps.length - 1 && (
                                    <div className="w-px h-full bg-white/10 my-2 group-hover:bg-gold-400/30 transition-colors" />
                                )}
                            </div>
                            <Card className="flex-1 p-6 md:p-8 -mt-2">
                                <h3 className="text-2xl font-serif text-white mb-2">{step.title}</h3>
                                <p className="text-gray-400">{step.desc}</p>
                            </Card>
                        </div>
                    ))}
                </div>
            </Section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card className="text-center">
                        <h3 className="text-xl font-serif text-white mb-4">Eligibility</h3>
                        <p className="text-gray-400 text-sm">
                            Graduates from any discipline with 50% marks (45% for reserved categories). Final year students can also apply.
                        </p>
                    </Card>
                    <Card className="text-center">
                        <h3 className="text-xl font-serif text-white mb-4">Documents</h3>
                        <p className="text-gray-400 text-sm">
                            10th, 12th, Graduation marksheets, Entrance exam scorecard, Photo ID, etc.
                        </p>
                    </Card>
                    <Card className="text-center">
                        <h3 className="text-xl font-serif text-white mb-4">Fees</h3>
                        <p className="text-gray-400 text-sm">
                            Detailed fee structure available in the brochure. Financial aid options available.
                        </p>
                    </Card>
                </div>
            </Section>
        </div>
    );
};

export default Admissions;
