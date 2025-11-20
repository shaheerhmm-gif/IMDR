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
            semesters: [
                {
                    title: 'Semester 1',
                    subjects: [
                        'Accounting for Managers', 'Sociology for Managers', 'Managerial Economics',
                        'Self and Career Development', 'Management Processes', 'Business Communication - I',
                        'Legal Aspects of Business', 'Organizational Behavior and Psychology for Managers',
                        'Business Statistics', 'Commercial Geography and International Trade', 'Business Information Systems'
                    ]
                },
                {
                    title: 'Semester 2',
                    subjects: [
                        'Business Research Methods', 'Introduction to Supply Chain and Operations Management',
                        'Business Communication - II', 'Human Resource Management', 'Emotional Intelligence',
                        'Introduction to Enterprise Resource Planning (ERP)', 'Financial Management', 'Marketing Management',
                        'Entrepreneurship and Business Planning OR Agri Value Chain and Allied Ventures'
                    ]
                }
            ]
        },
        {
            year: 'Year 2',
            semesters: [
                {
                    title: 'Semester 3',
                    generic: [
                        'Strategic Management', 'Systems Thinking', 'Corporate Social Responsibility and Social Impact Assessment',
                        'Services Management', 'Risk Management', 'Management of Quality'
                    ],
                    specializations: [
                        { name: 'Marketing', subjects: ['Personal Selling and Sales Management', 'Business-to-Business Marketing', 'Product and Brand Management', 'Integrated Marketing Communication', 'Consumer Behaviour', 'Direct Marketing and Customer Relationship Management', 'Digital Marketing and Social Media Strategy', 'Data Visualization'] },
                        { name: 'Finance', subjects: ['Security Analysis and Portfolio Management', 'Financial Institutions, Markets and Service', 'Taxation Dynamics: Indian & Global Framework', 'Fixed Income Securities', 'Credit Risk Management', 'International Finance', 'Financial Technology and Blockchain', 'Data Visualization'] },
                        { name: 'Human Resource', subjects: ['HR Planning & Talent Acquisition', 'Performance Management Systems', 'Employee Legislation', 'Employee Learning & Development', 'Competency Based HRM', 'HR Automation and Process Improvement'] },
                        { name: 'Supply Chain & Operations', subjects: ['Logistics Management', 'Procurement Management', 'Inventory Management', 'Facility Management', 'Manufacturing Management', 'Global Sourcing', 'Advanced Quantitative Methods for Business'] },
                        { name: 'International Trade', subjects: ['Geopolitics and International Relations', 'EXIM Policy and Customs', 'International Finance', 'Global Sourcing', 'Economies of Foreign Trade'] },
                        { name: 'Business Analytics', subjects: ['Database Management and Warehousing', 'Business and Data Understanding', 'Data Science for Business', 'Ethics and AI', 'Data Visualization', 'Advanced Quantitative Methods for Business'] },
                        { name: 'Business Technology & Systems', subjects: ['Managing Digital Transformation and Innovation', 'Digital Marketing and Social Media Strategy', 'Business Intelligence and Decision Support Systems', 'Financial Technology and Blockchain', 'Database Management and Warehousing', 'HR Automation and Process Improvement', 'Data Visualization'] },
                        { name: 'Entrepreneurship & Startup Management', subjects: ['Emerging Startup Business Opportunities', 'Innovation and IPR', 'Entrepreneurship Ecosystem', 'Agri Entrepreneurship and Innovation'] },
                        { name: 'Agri-Business Management', subjects: ['Agri Finance and Risk Management', 'Agri Marketing and Brand Management', 'Agri Supply Chain Management', 'Agri Food Business Management', 'Agri Entrepreneurship and Innovation'] }
                    ]
                },
                {
                    title: 'Semester 4',
                    generic: [
                        'Business Ethics and Values', 'Project Management', 'Business Analysis', 'Design Thinking',
                        'Environment, Social, and Governance Impact and Frameworks', 'Conflict Management and Negotiation'
                    ],
                    specializations: [
                        { name: 'Marketing', subjects: ['Marketing Strategy', 'Marketing Research and Analytics', 'Retail Management', 'Distribution Management', 'International Sales and Marketing', 'Pricing Management', 'Digital Infrastructure and Ecosystem'] },
                        { name: 'Finance', subjects: ['Corporate Finance', 'Derivatives', 'Financial Planning and Behavioural Finance', 'Strategic Cost Management', 'Mergers, Acquisitions and Corporate Restructuring', 'Venture Capital and Private Equity', 'Project Finance', 'Financial Modelling and Analytics', 'Digital Infrastructure and Ecosystem'] },
                        { name: 'Human Resource', subjects: ['Employee & Industrial Relations', 'Employee Compensation & Benefits', 'Strategic Human Resource Management', 'Organisation Design & Development', 'International Human Resource & Cross Cultural Management', 'Financial Planning and Behavioural Finance', 'HR Analytics'] },
                        { name: 'Supply Chain & Operations', subjects: ['Production Planning & Control', 'Strategic Initiatives', 'Operations Research', 'Quality Tools and Techniques', 'Distribution Management', 'Transport Insurance', 'Strategic Cost Management'] },
                        { name: 'International Trade', subjects: ['International Human Resource & Cross Cultural Management', 'Global Business Environment and Strategy', 'International Marketing', 'Transport Insurance', 'International Conventions and Institutions'] },
                        { name: 'Business Analytics', subjects: ['Big Data Analytics', 'Machine Learning Using Advanced Analytical Tools', 'Cloud Computing', 'Marketing Research and Analytics', 'Agri Informatics', 'HR Analytics'] },
                        { name: 'Business Technology & Systems', subjects: ['Information Security and Cybersecurity', 'Prompt Engineering and Generative AI', 'Digital Infrastructure and Ecosystem', 'Financial Modelling and Analytics', 'Cloud Computing', 'Data Competency for Business Leaders', 'Agri Technology and Digital Innovation'] },
                        { name: 'Entrepreneurship & Startup Management', subjects: ['Venture Capital and Private Equity', 'Family Business Management', 'Rural Entrepreneurship', 'Entrepreneurship Lab', 'Digital Infrastructure and Ecosystem'] },
                        { name: 'Agri-Business Management', subjects: ['Agri Export Management and International Trade', 'Sustainable Agriculture and Environmental Management', 'Agri Technology and Digital Innovation', 'Agri Informatics', 'Allied Sectors in Agri-Business'] }
                    ]
                }
            ]
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
                <div className="max-w-6xl mx-auto space-y-20">
                    {curriculum.map((yearData, yearIndex) => (
                        <div key={yearIndex} className="space-y-12">
                            <h3 className="text-3xl font-serif text-gold-400 border-b border-white/10 pb-4">{yearData.year}</h3>

                            {yearData.semesters.map((sem, semIndex) => (
                                <div key={semIndex} className="space-y-8">
                                    <h4 className="text-2xl font-serif text-white">{sem.title}</h4>

                                    {/* Year 1 Layout */}
                                    {sem.subjects && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                            {sem.subjects.map((sub, i) => (
                                                <Card key={i} className="p-4 bg-white/5 hover:bg-white/10 transition-colors">
                                                    <p className="text-gray-300 text-sm font-medium">{sub}</p>
                                                </Card>
                                            ))}
                                        </div>
                                    )}

                                    {/* Year 2 Layout */}
                                    {sem.generic && (
                                        <div className="space-y-8">
                                            <div>
                                                <h5 className="text-lg text-gold-400 font-bold uppercase tracking-widest mb-4">Generic Electives</h5>
                                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                    {sem.generic.map((sub, i) => (
                                                        <Card key={i} className="p-4 bg-white/5 hover:bg-white/10 transition-colors">
                                                            <p className="text-gray-300 text-sm font-medium">{sub}</p>
                                                        </Card>
                                                    ))}
                                                </div>
                                            </div>

                                            <div>
                                                <h5 className="text-lg text-gold-400 font-bold uppercase tracking-widest mb-6">Specializations</h5>
                                                <div className="grid grid-cols-1 gap-8">
                                                    {sem.specializations.map((spec, i) => (
                                                        <div key={i} className="bg-white/5 rounded-xl p-6 border border-white/5">
                                                            <h6 className="text-xl text-white font-serif mb-4">{spec.name}</h6>
                                                            <div className="flex flex-wrap gap-2">
                                                                {spec.subjects.map((sub, j) => (
                                                                    <span key={j} className="px-3 py-1 bg-navy-900 rounded-full text-xs text-gray-400 border border-white/10">
                                                                        {sub}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </Section>

            {/* Fees Structure */}
            <Section dark>
                <h2 className="text-4xl font-serif text-white text-center mb-16">Fees Structure</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <Card className="text-center p-8 border-t-4 border-gold-400">
                            <h3 className="text-xl text-gray-400 mb-2">1st Year</h3>
                            <p className="text-3xl font-serif text-white font-bold">₹ 3,00,000</p>
                        </Card>
                        <Card className="text-center p-8 border-t-4 border-gold-400">
                            <h3 className="text-xl text-gray-400 mb-2">2nd Year</h3>
                            <p className="text-3xl font-serif text-white font-bold">₹ 3,00,000</p>
                        </Card>
                        <Card className="text-center p-8 bg-gold-400/10 border-t-4 border-gold-400">
                            <h3 className="text-xl text-gold-400 mb-2">Total Fees</h3>
                            <p className="text-3xl font-serif text-white font-bold">₹ 6,00,000</p>
                        </Card>
                    </div>
                    <p className="text-center text-gray-500 mt-8 text-sm">
                        * The fees mentioned above are subject to change as per university guidelines.
                    </p>
                </div>
            </Section>
        </div>
    );
};

export default Academics;
