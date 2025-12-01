import React from 'react';
import { services } from '../data/portfolioData';
import { FiCode, FiSmartphone, FiZap, FiEdit3 } from 'react-icons/fi'; // FiLayers removed
import { motion } from 'framer-motion';

// --- Note on 3D Flip Card ---
// The flip effect is now implemented using Tailwind's arbitrary value syntax for 
// the necessary 3D properties: `[perspective:1000px]`, `[transform-style:preserve-3d]`, 
// and `[backface-visibility:hidden]`.

const ServiceFlipCard: React.FC<{ service: typeof services[0], index: number }> = ({ service, index }) => {
    
    const getIconComponent = (icon: string) => {
        switch (icon) {
            case '💻':
                return <FiCode className="text-white" size={32} />;
            case '📱':
                return <FiSmartphone className="text-white" size={32} />;
            case '🎨':
                return <FiEdit3 className="text-white" size={32} />;
            case '⚡':
                return <FiZap className="text-white" size={32} />;
            default:
                return <span className="text-3xl text-white">{icon}</span>;
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group [perspective:1000px] h-96" // Perspective container
        >
            <div
                className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
            >
                {/* Front Side */}
                <div
                    className="absolute inset-0 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-t-4 border-primary-500 flex flex-col justify-start items-start [backface-visibility:hidden]"
                >
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mb-6 shadow-md">
                        {getIconComponent(service.icon)}
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                        {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                        {service.description}
                    </p>

                    <div className="inline-flex items-center text-primary-600 dark:text-primary-500 font-medium">
                        Hover to see details →
                    </div>
                </div>

                {/* Back Side */}
                <div
                    className="absolute inset-0 bg-gray-900 dark:bg-gray-700 rounded-2xl p-8 shadow-xl flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]"
                >
                    <h3 className="text-xl font-bold text-primary-400 mb-4 border-b border-primary-700 pb-2">
                        Key Features
                    </h3>
                    
                    <ul className="space-y-3 flex-grow">
                        {service.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-200 dark:text-gray-300">
                                <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 flex-shrink-0"></span>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <a href="#contact" className="inline-flex items-center gap-2 mt-6 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium">
                        Start a Project
                        <FiZap />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Services: React.FC = () => {
    return (
        <section id="services" className="py-16 md:py-28 bg-gray-50 dark:bg-gray-950">
            <div className="container mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2 
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4"
                    >
                        My Quality <span className="text-primary-600 dark:text-primary-500">Services</span>
                    </motion.h2>
                    <motion.p 
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
                    >
                        I provide comprehensive digital solutions, combining technical excellence with creative design.
                    </motion.p>
                </div>

                {/* Services Grid with Flip Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {services.map((service, index) => (
                        <ServiceFlipCard key={service.id} service={service} index={index} />
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center mt-20">
                    <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
                        Ready to transform your ideas into reality?
                    </p>
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-10 py-4 rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg"
                    >
                        Discuss a Project
                        <FiCode size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;