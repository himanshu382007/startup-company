'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MakeInIndiaIllustration, DefaultSchemeVisual } from './scheme-illustrations';

const schemes = [
    {
        title: 'Make in India',
        subtitle: 'Indigenous Manufacturing',
        description: 'Our hardware systems and drones are fully manufactured in India, aligning with the national initiative to boost domestic manufacturing.',
    },
    {
        title: 'Digital India',
        subtitle: 'Secure Infrastructure',
        description: 'Empowering the nation digitally by providing the underlying secure forensic architecture for e-governance platforms.',
    },
    {
        title: 'Startup India',
        subtitle: 'Innovation Hub',
        description: 'Recognized as an innovative startup driving cutting-edge R&D in AI and cybersecurity domains under the flagship initiative.',
    },
    {
        title: 'Cyber Swachhta',
        subtitle: 'Botnet Cleaning',
        description: 'Actively contributing to creating a secure cyber ecosystem by eliminating malicious software and reinforcing digital hygiene.',
    }
];

export function SchemesSection() {
    return (
        <section className="py-20 md:py-32 w-full relative z-10 bg-white dark:bg-slate-900/50">
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
                <AnimatedContainer className="max-w-3xl mb-16 mx-auto text-center">
                    <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 text-blue-700 dark:text-blue-300 text-sm font-medium mb-6 backdrop-blur-md">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                        </svg>
                        National Initiatives
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-950 dark:text-white mb-6 leading-tight">
                        Government <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500 dark:from-blue-400 dark:to-teal-400">Aligned Schemes</span>
                    </h2>
                    <p className="text-blue-900/80 dark:text-slate-300 text-lg md:text-xl font-light leading-relaxed">
                        NeuroWings is deeply committed to supporting and integrating with impactful government frameworks for a safer, self-reliant digital future.
                    </p>
                </AnimatedContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {schemes.map((scheme, index) => (
                        <AnimatedContainer 
                            key={index}
                            delay={0.1 + (index * 0.1)} 
                            className="flex flex-col rounded-[2rem] bg-blue-50/40 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 dark:hover:shadow-black/20 transition-all duration-300 overflow-hidden group"
                        >
                            {/* Image Section */}
                            {scheme.title === 'Make in India' ? <MakeInIndiaIllustration /> : <DefaultSchemeVisual />}

                            {/* Card Content */}
                            <div className="p-6 md:p-8 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-1">{scheme.title}</h3>
                                    <p className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">{scheme.subtitle}</p>
                                </div>
                                <p className="text-blue-900/80 dark:text-slate-300 font-light text-[14px] leading-relaxed mb-4 flex-1">
                                    {scheme.description}
                                </p>
                            </div>
                        </AnimatedContainer>
                    ))}
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
