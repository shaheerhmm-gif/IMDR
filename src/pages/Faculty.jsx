import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/ui/Section';
import Card from '../components/ui/Card';
import { Linkedin, Mail } from 'lucide-react';

const Faculty = () => {
    const faculty = [
        { name: 'Dr. Shikha Jain', title: 'Director', qualifications: 'BA (Hons), MA, PGDM, SET, PhD', email: 'director@imdr.edu' },
        { name: 'Dr. Abhijeet Shivane', title: 'Professor (Operations)', qualifications: 'BE(Mech), MMS, PhD', email: 'abhijeet@imdr.edu' },
        { name: 'Dr. Suraj Kamble', title: 'Associate Professor (Marketing)', qualifications: 'PhD, NET, MBA-Marketing and HRM', email: 'suraj@imdr.edu' },
        { name: 'Dr. Sanmath Shetty', title: 'Associate Professor & Head – Training and Placement', qualifications: 'PhD, MBA-HRM and Finance, NET', email: 'sanmath.shetty@imdr.edu' },
        { name: 'Dr. Prashant Dhopavkar', title: 'Associate Professor (Business Analytics)', qualifications: 'PhD, MA(Economics), B.E(Electrical)', email: 'Prashant.dhopavkar@imdr.edu' },
        { name: 'Dr. Vipra Tiwari', title: 'Assistant Professor (Human Resource)', qualifications: 'BTech, PGDM, MPM,PhD', email: 'vipra@imdr.edu' },
        { name: 'Dr. Shweta Jain', title: 'Associate Professor (Finance)', qualifications: 'PhD, MBA, M.Com. NET, SET, PGDPM&LW', email: 'shweta.jain@imdr.edu' },
        { name: 'Dr. Sonali Khurjekar', title: 'Associate Professor (Human Resource)', qualifications: 'PhD, M.B.S.-HRM, B. Pharmacy', email: 'sonali.khurjekar@imdr.edu' },
        { name: 'Prof. Prajakta Pradhan', title: 'Assistant Professor (International Trade)', qualifications: 'MMM, MA (Economics), PGDIT', email: 'prajakta@imdr.edu' },
        { name: 'Dr. Gopa Das', title: 'Assistant professor (Human Resources and Business Communication)', qualifications: 'PhD, MBA – Human Resources, B.Com', email: 'gopa.das@imdr.edu' },
        { name: 'Dr. Pritha Ubgade', title: 'Assistant Professor (Marketing)', qualifications: 'PhD, MBA- Marketing and HR, BE – IT', email: '' },
        { name: 'Prof. Pratik Abhay Potdar', title: 'Assistant Professor (International Trade)', qualifications: 'M.Com MPhil, CS CA-Inter, SET', email: 'pratik.potdar@imdr.edu' },
        { name: 'Dr. Nishita Desai', title: 'Assistant Professor (Marketing & Human Resource Management)', qualifications: 'Ph.D. – Management, MBA – HRM, B.Com', email: 'nishitarohandesai@gmail.com' },
        { name: 'Prof. Darshan Bagade', title: 'Assistant Professor (Finance)', qualifications: 'M. Com, NET', email: 'darshan.bagade@imdr.edu' },
        { name: 'Prof. Shaunak Mainkar', title: 'Assistant Professor (Finance)', qualifications: 'M.Com, NET, SET, NISM Certified, SEBI Registered Research Analyst', email: 'shaunak.mainkar@imdr.edu' },
        { name: 'Prof. Hrishikesh Khaladkar', title: 'Assistant Professor (Business Analytics)', qualifications: 'MSc. Mathematics, B.Sc. Mathematics', email: 'hrishikesh.khaladkar@imdr.edu' },
        { name: 'Prof. Anjali Naik', title: 'Assistant Professor (Business Technology and Systems)', qualifications: 'M.Sc. Computer Science', email: 'Anjali.naik@imdr.edu' },
        { name: 'Prof. Nisha Sah Gangola', title: 'Assistant Professor (Marketing)', qualifications: 'M.Phil -Marketing, M. Com- Business Administration, NET- Commerce', email: 'nisha.gangola@imdr.edu' },
        { name: 'Dr. Sonal Patil', title: 'Assistant Professor (Agribusiness Management and Supply Chain)', qualifications: 'PhD Tech Food Engineering and Technology', email: 'sonal.patil@imdr.edu' },
        { name: 'Prof. Maneesh Shirke', title: 'Assistant Professor (Marketing)', qualifications: '', email: '' },
        { name: 'Prof. Paresh Satish Gore', title: 'Assistant Professor', qualifications: '', email: '' },
        { name: 'Prof. Janvi Sathe', title: 'Assistant Professor', qualifications: '', email: '' },
        { name: 'Prof. Gauri Kapoor', title: 'Assistant Professor (International Trade)', qualifications: '', email: '' },
        { name: 'Prof. Arati Pendse', title: 'Assistant Professor', qualifications: 'B.Sc. (Elect), LL.B.,ADCSSA, PGDCFC,M.A(Communication Psychology)', email: 'arati.pendse@imdr.edu' },
        { name: 'Mrs. Amita Kulkarni', title: 'Controller of Examinations', qualifications: 'BA (Economics) and Masters in Personal Management', email: 'amita@imdr.edu' },
        { name: 'Mr. Harshad Abhyankar', title: 'Exam Co-ordinator', qualifications: 'BBA, MBA (Masters in Business Administration)', email: '' },
        { name: 'Mrs. Chanda Gaikwad', title: 'Academic Coordinator', qualifications: 'B Com and MPBA(Masters Program in Business Administration )', email: '' },
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {faculty.map((member, index) => (
                        <Card key={index} className="text-center group relative overflow-hidden flex flex-col h-full">
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-gold-400/30 group-hover:border-gold-400 transition-colors flex-shrink-0">
                                <img
                                    src={`https://ui-avatars.com/api/?name=${member.name}&background=0B1A33&color=CFAE62`}
                                    alt={member.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-serif text-white mb-2">{member.name}</h3>
                            <p className="text-gold-400 text-sm font-medium mb-3">{member.title}</p>

                            {member.qualifications && (
                                <p className="text-gray-500 text-xs mb-4 flex-grow px-2">{member.qualifications}</p>
                            )}

                            <div className="flex justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto pb-4">
                                <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={18} /></a>
                                {member.email && (
                                    <a href={`mailto:${member.email}`} className="text-gray-400 hover:text-white"><Mail size={18} /></a>
                                )}
                            </div>
                        </Card>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Faculty;
