'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { PenTestIllustration, ThreatIntelIllustration, DigitalForensicsIllustration, ComplianceIllustration, AIThreatDetectionIllustration, SecurityArchitectureIllustration, DefaultServiceVisual } from './service-illustrations';

const services = [
    {
        title: 'Penetration Testing',
        description: 'Comprehensive security auditing and stress-testing to identify vulnerabilities before they can be exploited.',
    },
    {
        title: 'Threat Intelligence',
        description: 'Proactive monitoring and analysis of emerging cyber threats tailored to your organizational profile.',
    },
    {
        title: 'Digital Forensics',
        description: 'Post-incident investigation and deep data recovery to determine attack vectors and minimize impact.',
    },
    {
        title: 'Compliance Consulting',
        description: 'Strategic guidance to ensure alignment with global privacy regulations and data protection laws.',
    },
    {
        title: 'AI Threat Detection',
        description: 'Implementation of machine learning pipelines that continuously analyze network traffic for anomalies.',
    },
    {
        title: 'Security Architecture',
        description: 'Custom design and deployment of robust infrastructure engineered to defend against sophisticated attacks.',
    }
];

export function ServicesSection() {
    return (
        <section className="py-20 md:py-32 w-full relative z-10 bg-blue-50/40 dark:bg-slate-900/30">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/20 dark:to-slate-900/10 pointer-events-none" />
            
            <div className="mx-auto w-full max-w-[95rem] px-4 sm:px-6 lg:px-8 relative z-10">
                <AnimatedContainer className="max-w-3xl mx-auto mb-12 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-950 dark:text-white mb-6 leading-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">Services</span>
                    </h2>
                    <p className="text-blue-900/80 dark:text-slate-300 text-lg md:text-xl font-light leading-relaxed">
                        End-to-end security consulting and technical services to protect your digital assets.
                    </p>
                </AnimatedContainer>

                <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-12 xl:gap-16">
                    
                    {/* LEFT COLUMN: Services */}
                    <div>

                        {/* 3x2 Grid on Left Side */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {services.map((service, index) => (
                                <AnimatedContainer 
                                    key={index}
                                    delay={0.1 + (index * 0.1)} 
                                    className="flex flex-col rounded-[2rem] bg-white dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700 shadow-lg shadow-blue-200/50 dark:shadow-black/20 hover:shadow-2xl hover:shadow-blue-900/10 dark:hover:shadow-black/30 transition-all duration-300 overflow-hidden group"
                                >
                                    {/* Image Placeholder Section */}
                                    {service.title === 'Penetration Testing' ? <PenTestIllustration /> :
                                     service.title === 'Threat Intelligence' ? <ThreatIntelIllustration /> :
                                     service.title === 'Digital Forensics' ? <DigitalForensicsIllustration /> :
                                     service.title === 'Compliance Consulting' ? <ComplianceIllustration /> :
                                     service.title === 'AI Threat Detection' ? <AIThreatDetectionIllustration /> :
                                     service.title === 'Security Architecture' ? <SecurityArchitectureIllustration /> :
                                     <DefaultServiceVisual />}

                                    {/* Card Content */}
                                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                                        <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-3">{service.title}</h3>
                                        <p className="text-blue-900/80 dark:text-slate-300 font-light text-[15px] leading-relaxed mb-6 flex-1">
                                            {service.description}
                                        </p>
                                        
                                        <button className="mt-auto inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group/btn w-fit">
                                            Learn more
                                            <svg className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        </button>
                                    </div>
                                </AnimatedContainer>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT COLUMN: Why Choose Us? */}
                    <div className="relative mt-12 xl:mt-0 xl:pl-8">
                        {/* Sticky container so it stays in view while scrolling past the 6 cards */}
                        <div className="sticky top-32">
                            <AnimatedContainer delay={0.4} className="bg-blue-600 dark:bg-blue-700 rounded-[2.5rem] p-8 sm:p-10 lg:p-12 shadow-2xl text-white relative overflow-hidden group">
                                {/* Decorative background element */}
                                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-500 dark:bg-blue-600 rounded-full blur-3xl opacity-50 transition-transform duration-1000 group-hover:scale-110" />
                                
                                <div className="relative z-10">
                                    <h3 className="text-3xl md:text-4xl font-extrabold mb-6 tracking-tight">Why Choose Us?</h3>
                                    <p className="font-light text-blue-100 mb-10 text-lg leading-relaxed">
                                        We don't just secure systems—we empower your digital transformation with unparalleled operational intelligence.
                                    </p>
                                    
                                    <div className="space-y-8">
                                        <div className="flex items-start">
                                            <div className="bg-white/10 p-3 rounded-2xl mr-5 backdrop-blur-sm border border-white/10 shrink-0">
                                                <svg className="w-6 h-6 text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-xl mb-1.5">Elite Expertise</h4>
                                                <p className="text-blue-100 text-[15px] font-light leading-relaxed">Industry-leading experts with decades of combined forensic and tactical experience.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-white/10 p-3 rounded-2xl mr-5 backdrop-blur-sm border border-white/10 shrink-0">
                                                <svg className="w-6 h-6 text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-xl mb-1.5">Proactive Defense</h4>
                                                <p className="text-blue-100 text-[15px] font-light leading-relaxed">We identify and neutralize critical vulnerabilities long before threats can exploit them.</p>
                                            </div>
                                        </div>

                                        <div className="flex items-start">
                                            <div className="bg-white/10 p-3 rounded-2xl mr-5 backdrop-blur-sm border border-white/10 shrink-0">
                                                <svg className="w-6 h-6 text-blue-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-xl mb-1.5">Tailored Solutions</h4>
                                                <p className="text-blue-100 text-[15px] font-light leading-relaxed">Custom-built architectures designed to integrate perfectly with your operational needs.</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-12 flex flex-col gap-4">
                                        <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold w-full hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
                                            Talk to an Expert
                                        </button>
                                        <button className="bg-white backdrop-blur-sm text-blue-600 border border-blue-400/30 px-8 py-4 rounded-full font-bold w-full hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200">
                                            Call a consultation
                                        </button>
                                    </div>
                                </div>
                            </AnimatedContainer>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

function AnimatedContainer({ className, delay = 0.1, children, key }: { className?: string, delay?: number, children: React.ReactNode, key?: React.Key }) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(10px)', y: 20, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', y: 0, opacity: 1 }}
			viewport={{ once: true, margin: "-50px" }}
			transition={{ delay, duration: 0.8, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
