'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function AboutSection() {
    return (
        <section className="py-12 md:py-20 w-full relative z-10">
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Text Content */}
                    <AnimatedContainer className="text-left max-w-2xl">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-blue-950 dark:text-white mb-6 leading-tight">
                            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">NeuroWings</span>
                        </h2>
                        <p className="text-blue-900/80 dark:text-slate-300 text-lg md:text-xl font-light leading-relaxed">
                            NeuroWings is at the forefront of digital innovation, specializing in AI-powered forensic intelligence and next-generation security systems. We build tools that empower organizations to stay ahead of threats with proactive, intelligent defense mechanisms.
                        </p>
                        
                        <div className="mt-10">
                            <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-blue-600 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.3)]">
                                <span className="relative z-10">Learn more</span>
                                <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        </div>
                    </AnimatedContainer>

                    {/* Right Image Container */}
                    <AnimatedContainer delay={0.2} className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[500px] rounded-[2rem] overflow-hidden bg-gradient-to-br from-blue-50 to-[#f0f5ff] dark:from-slate-800 dark:to-slate-900 border border-blue-100 dark:border-slate-700 shadow-2xl shadow-blue-900/5 dark:shadow-black/20 group">
                        {/* Placeholder Content - Replace with actual <img> tag */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-300 dark:text-slate-500">
                            <svg className="w-16 h-16 mb-4 text-blue-100 dark:text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="font-medium text-sm tracking-widest uppercase">Image Space</span>
                        </div>
                        {/* Uncomment when adding image: <img src="/your-image.jpg" alt="About NeuroWings" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" /> */}
                    </AnimatedContainer>
                </div>
            </div>
        </section>
    );
}

function AnimatedContainer({ className, delay = 0.1, children }: { className?: string, delay?: number, children: React.ReactNode }) {
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
