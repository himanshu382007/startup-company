'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const certifications = [
    {
        title: 'ISO 27001:2022',
        subtitle: 'Information Security',
        description: 'Certified for maintaining the highest standards of information security management systems globally.',
    },
    {
        title: 'DPIIT Recognized',
        subtitle: 'Government of India',
        description: 'Officially recognized as an innovative startup under the Department for Promotion of Industry and Internal Trade.',
    },
    {
        title: 'CERT-In Empanelled',
        subtitle: 'Cyber Security Auditing',
        description: 'Authorized by the national nodal agency for responding to computer security incidents as it occurs.',
    },
    {
        title: 'NASSCOM Member',
        subtitle: 'Industry Excellence',
        description: 'Proud member of the premier trade body and chamber of commerce of the Tech industry in India.',
    }
];

export function CertificationsSection() {
    return (
        <section className="py-20 md:py-32 w-full relative z-10 bg-blue-50/40 dark:bg-slate-900/30">
            {/* Subtle background decoration */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 dark:from-blue-900/20 via-transparent to-transparent pointer-events-none" />
            
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
                <AnimatedContainer className="max-w-3xl mb-16 mx-auto text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-950 dark:text-white mb-6 leading-tight">
                        Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">Recognitions</span>
                    </h2>
                    <p className="text-blue-900/80 dark:text-slate-300 text-lg md:text-xl font-light leading-relaxed">
                        Our commitment to excellence is validated by industry-leading certifications and national recognitions.
                    </p>
                </AnimatedContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {certifications.map((cert, index) => (
                        <AnimatedContainer 
                            key={index}
                            delay={0.1 + (index * 0.1)} 
                            className="flex flex-col items-center text-center p-8 rounded-[2rem] bg-white dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700 shadow-lg shadow-blue-200/50 dark:shadow-black/20 hover:shadow-2xl hover:shadow-indigo-900/10 dark:hover:shadow-black/30 transition-all duration-300 overflow-hidden group relative"
                        >
                            {/* Decorative background glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/0 to-indigo-50/50 dark:from-indigo-900/0 dark:to-indigo-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                            {/* Image/Badge Placeholder Section */}
                            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-blue-50/40 dark:bg-slate-700/60 border-4 border-blue-50 dark:border-slate-600 mb-8 overflow-hidden shadow-inner flex shrink-0 group-hover:scale-105 transition-transform duration-500">
                                <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-300 dark:text-slate-400 bg-gradient-to-br from-[#f0f5ff] dark:from-slate-700 to-blue-100 dark:to-slate-800">
                                    <svg className="w-8 h-8 mb-1 text-indigo-200 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                    </svg>
                                    <span className="font-bold text-[8px] tracking-widest uppercase opacity-70">Logo</span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="flex-1 flex flex-col relative z-10 w-full">
                                <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-1">{cert.title}</h3>
                                <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider mb-4">{cert.subtitle}</p>
                                
                                <p className="text-blue-900/80 dark:text-slate-300 font-light text-[14px] leading-relaxed flex-1">
                                    {cert.description}
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
