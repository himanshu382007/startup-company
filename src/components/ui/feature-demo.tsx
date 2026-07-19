'use client';
import React from 'react';
import { Zap, Cpu, Fingerprint, Pencil, Settings2, Sparkles } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { FeatureCard } from '@/components/ui/grid-feature-cards';

const features = [
	{
		title: 'Lightning Fast',
		icon: Zap,
		description: 'Optimized for speed and smooth interactions across all modern devices.',
	},
	{
		title: 'Powerful Engine',
		icon: Cpu,
		description: 'Built to support complex applications with high performance and reliability.',
	},
	{
		title: 'Secure by Design',
		icon: Fingerprint,
		description: 'Designed with best practices to keep your applications safe and stable.',
	},
	{
		title: 'Fully Customizable',
		icon: Pencil,
		description: 'Easily adapt the layout, content, and 3D elements to match your needs.',
	},
	{
		title: 'Complete Control',
		icon: Settings2,
		description: 'Fine-tune every detail and behavior to create the exact experience you want.',
	},
	{
		title: 'Built for AI',
		icon: Sparkles,
		description: 'Perfect starting point for AI tools, SaaS platforms, and modern products.',
	},
];

export default function DemoOne() {
	return (
		<section className="py-24 md:py-32 w-full relative">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/50 to-transparent pointer-events-none" />
			<div className="mx-auto w-full max-w-6xl space-y-16 px-4 relative z-10">
				<AnimatedContainer className="mx-auto max-w-3xl text-center">
					<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6 backdrop-blur-md">
						<Sparkles className="w-4 h-4 mr-2 text-blue-600" />
						Core Features
					</div>
					<h2 className="text-4xl font-extrabold tracking-tight text-balance md:text-5xl lg:text-6xl text-blue-950">
						Power. Speed. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Control.</span>
					</h2>
					<p className="text-blue-900/80 mt-6 text-base md:text-lg tracking-wide text-balance max-w-2xl mx-auto font-light leading-relaxed">
						A powerful foundation designed to help you build fast, scalable, and interactive web experiences without compromising on design.
					</p>
				</AnimatedContainer>

				<AnimatedContainer
					delay={0.2}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
				>
					{features.map((feature, i) => (
						<FeatureCard key={i} feature={feature} />
					))}
				</AnimatedContainer>
			</div>
		</section>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: React.ComponentProps<typeof motion.div>['className'];
	children: React.ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
	const shouldReduceMotion = useReducedMotion();

	if (shouldReduceMotion) {
		return <div className={className}>{children}</div>;
	}

	return (
		<motion.div
			initial={{ filter: 'blur(10px)', y: 20, opacity: 0 }}
			whileInView={{ filter: 'blur(0px)', y: 0, opacity: 1 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ delay, duration: 0.8, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
