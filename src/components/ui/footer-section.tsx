'use client';
import React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FacebookIcon, FrameIcon, InstagramIcon, LinkedinIcon, TwitterIcon, ArrowUpRight } from 'lucide-react';

interface FooterLink {
	title: string;
	href: string;
	icon?: React.ComponentType<{ className?: string }>;
}

interface FooterSection {
	label: string;
	links: FooterLink[];
}

const footerLinks: FooterSection[] = [
	{
		label: 'Product',
		links: [
			{ title: 'Features', href: '#features' },
			{ title: 'Templates', href: '#templates' },
			{ title: 'Integrations', href: '#integrations' },
			{ title: 'Updates', href: '#updates' },
		],
	},
	{
		label: 'Company',
		links: [
			{ title: 'About', href: '/about' },
			{ title: 'Careers', href: '/careers' },
			{ title: 'Privacy Policy', href: '/privacy' },
			{ title: 'Terms of Service', href: '/terms' },
		],
	},
	{
		label: 'Resources',
		links: [
			{ title: 'Docs', href: '/docs' },
			{ title: 'Guides', href: '/guides' },
			{ title: 'Support', href: '/support' },
			{ title: 'Contact', href: '/contact' },
		],
	},
];

export function Footer() {
	return (
		<footer className="relative w-full mt-32 overflow-hidden border-t border-blue-100 dark:border-slate-800 bg-white dark:bg-slate-950">
			<div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-50/30 dark:to-slate-900/30 pointer-events-none" />
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-blue-200 dark:via-slate-600 to-transparent" />
			<div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[100px] bg-blue-100/50 dark:bg-blue-900/20 blur-[100px] rounded-full pointer-events-none" />

			<div className="relative z-10 max-w-[1440px] mx-auto px-6 py-16 md:py-24">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
					<AnimatedContainer className="lg:col-span-2 space-y-8">
						<div className="flex items-center gap-3">
							<img src="/logo.png" alt="NeuroWings Logo" className="w-15 h-15 object-contain drop-shadow-sm dark:brightness-0 dark:invert" />
							<span className="text-blue-950 dark:text-white font-bold text-3xl tracking-tight">NeuroWings</span>
						</div>
						<div className="text-blue-900/80 dark:text-slate-300 text-base max-w-sm leading-relaxed font-semibold flex flex-col gap-2 mt-2">
							<a href="mailto:contact@neurowings.co" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-2">
								<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
								contact@neurowings.co
							</a>
							<a href="tel:+9123457865" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center gap-2">
								<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
								+91 23457865
							</a>
						</div>
						<div className="flex items-center gap-4 pt-4">
							{[
								{ Icon: FacebookIcon, href: "https://www.facebook.com/profile.php?id=61572560586218" },
								{ Icon: InstagramIcon, href: "https://www.instagram.com/neurowings.tech?igsh=MXF1NmNkdzJpejNwcg==" },
								{ Icon: LinkedinIcon, href: "https://www.linkedin.com/company/neurowings/?viewAsMember=true" },
								{ Icon: TwitterIcon, href: "https://x.com/neurowings" }
							].map(({ Icon, href }, i) => (
								<a key={i} href={href} target={href !== "#" ? "_blank" : undefined} rel={href !== "#" ? "noopener noreferrer" : undefined} className="w-10 h-10 rounded-full bg-blue-50/40 dark:bg-slate-800 border border-blue-100 dark:border-slate-700 flex items-center justify-center text-blue-800/70 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-slate-700 hover:border-blue-100 dark:hover:border-slate-600 hover:scale-110 transition-all duration-300">
									<Icon className="size-4" />
								</a>
							))}
						</div>
					</AnimatedContainer>

					<div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-8">
						{footerLinks.map((section, index) => (
							<AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
								<h3 className="text-sm text-blue-950 dark:text-white font-semibold tracking-wider">{section.label}</h3>
								<ul className="mt-6 space-y-4">
									{section.links.map((link) => (
										<li key={link.title}>
											<a
												href={link.href}
												className="group inline-flex items-center text-blue-900/80 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 text-sm font-light"
											>
												{link.title}
												<ArrowUpRight className="size-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300" />
											</a>
										</li>
									))}
								</ul>
							</AnimatedContainer>
						))}
					</div>
				</div>

				<AnimatedContainer delay={0.4} className="mt-24 pt-8 border-t border-blue-100 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
					<p className="text-blue-800/70 dark:text-slate-500 text-sm font-light">
						© {new Date().getFullYear()} NeuroWings. All rights reserved.
					</p>
					<div className="flex items-center gap-6 text-sm font-light text-blue-800/70 dark:text-slate-500">
						<a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Privacy</a>
						<a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Terms</a>
						<a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cookies</a>
					</div>
				</AnimatedContainer>
			</div>
		</footer>
	);
}

type ViewAnimationProps = {
	delay?: number;
	className?: ComponentProps<typeof motion.div>['className'];
	children: ReactNode;
	key?: string | number;
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
			viewport={{ once: true, margin: "-50px" }}
			transition={{ delay, duration: 0.8, ease: "easeOut" }}
			className={className}
		>
			{children}
		</motion.div>
	);
}
