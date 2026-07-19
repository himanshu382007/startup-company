'use client';
import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const products = [
    {
        title: 'Child Safety Tracker',
        subtitle: 'GPS Monitoring & Alert',
        description: 'Advanced real-time wearable tracker ensuring child safety with geo-fencing and instant SOS alerts.',
    },
    {
        title: 'DPDP Compliance',
        subtitle: 'Data Protection Tool',
        description: 'Comprehensive software solution for managing complete compliance with the Digital Personal Data Protection Act.',
    },
    {
        title: 'Underwater Drone',
        subtitle: 'Aquatic Intelligence',
        description: 'Autonomous submarine drone equipped with high-resolution sensors for underwater mapping and surveillance.',
    },
    {
        title: 'AI Signature',
        subtitle: 'Verification System',
        description: 'Deep-learning powered forensic tool that detects forgeries and authenticates signatures with pinpoint accuracy.',
    }
];

/* ── Child Safety Tracker custom illustration ── */
function ChildSafetyIllustration() {
    return (
        <div className="relative w-full aspect-[4/3] overflow-hidden" style={{ background: 'linear-gradient(145deg, #060b18 0%, #0a1628 40%, #0d1a2d 100%)' }}>
            {/* Circuit-board grid ground */}
            <div className="absolute bottom-0 left-0 right-0 h-[55%]" style={{ perspective: '300px' }}>
                <div className="w-full h-full origin-bottom" style={{ transform: 'rotateX(55deg)', backgroundImage: 'linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
            </div>
            {/* Ground glow line */}
            <div className="absolute bottom-[18%] left-[10%] right-[10%] h-[2px] opacity-60" style={{ background: 'linear-gradient(90deg, transparent, #3b82f6, #06b6d4, #3b82f6, transparent)' }} />
            <div className="absolute bottom-[16%] left-[15%] right-[15%] h-[6px] rounded-full opacity-20" style={{ background: 'radial-gradient(ellipse, #3b82f6 0%, transparent 70%)', filter: 'blur(3px)' }} />

            {/* ── GPS Location Pin (left-center) ── */}
            <div className="absolute left-[18%] top-[22%] w-[28%]">
                {/* Pin glow */}
                <div className="absolute bottom-[-15%] left-1/2 -translate-x-1/2 w-8 h-3 rounded-full opacity-50" style={{ background: 'radial-gradient(ellipse, #3b82f6 0%, transparent 70%)' }} />
                {/* Concentric rings at base */}
                <svg viewBox="0 0 60 80" className="w-full h-auto">
                    <defs>
                        <linearGradient id="pinGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1e40af" />
                            <stop offset="100%" stopColor="#0c1b33" />
                        </linearGradient>
                        <filter id="pinGlow">
                            <feGaussianBlur stdDeviation="1.5" result="blur" />
                            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                        </filter>
                    </defs>
                    {/* Base rings */}
                    <ellipse cx="30" cy="72" rx="18" ry="4" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.4" />
                    <ellipse cx="30" cy="72" rx="12" ry="2.5" fill="none" stroke="#60a5fa" strokeWidth="0.5" opacity="0.6" />
                    {/* Pin shape */}
                    <path d="M30 68 L30 48" stroke="#3b82f6" strokeWidth="0.8" opacity="0.5" />
                    <path d="M30 8 Q30 8 45 20 Q50 28 45 38 L30 55 L15 38 Q10 28 15 20 Q30 8 30 8Z" fill="url(#pinGrad)" stroke="#60a5fa" strokeWidth="1" filter="url(#pinGlow)" />
                    {/* Person icon inside pin */}
                    <circle cx="30" cy="24" r="5" fill="none" stroke="#60a5fa" strokeWidth="1.2" />
                    <circle cx="30" cy="21" r="2.5" fill="#60a5fa" opacity="0.8" />
                    <path d="M25 29 Q25 26 30 26 Q35 26 35 29" fill="none" stroke="#60a5fa" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
            </div>

            {/* ── Drone (upper-right) ── */}
            <svg className="absolute right-[8%] top-[8%] w-[48%] h-auto" viewBox="0 0 120 70" fill="none">
                <defs>
                    <linearGradient id="droneBody" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1e293b" />
                        <stop offset="100%" stopColor="#0f172a" />
                    </linearGradient>
                    <filter id="droneShadow">
                        <feGaussianBlur stdDeviation="1" />
                    </filter>
                    <filter id="ledGlow">
                        <feGaussianBlur stdDeviation="2" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                </defs>
                {/* Arms */}
                <line x1="60" y1="35" x2="25" y2="18" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
                <line x1="60" y1="35" x2="95" y2="18" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
                <line x1="60" y1="35" x2="25" y2="52" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
                <line x1="60" y1="35" x2="95" y2="52" stroke="#334155" strokeWidth="3" strokeLinecap="round" />
                {/* Motor housings */}
                {[[25,18],[95,18],[25,52],[95,52]].map(([cx,cy], i) => (
                    <g key={i}>
                        <circle cx={cx} cy={cy} r="7" fill="url(#droneBody)" stroke="#475569" strokeWidth="0.8" />
                        <ellipse cx={cx} cy={cy} rx="12" ry="2" fill="none" stroke="#60a5fa" strokeWidth="0.3" opacity="0.3" />
                    </g>
                ))}
                {/* Center body */}
                <ellipse cx="60" cy="35" rx="12" ry="7" fill="url(#droneBody)" stroke="#475569" strokeWidth="0.8" />
                {/* Camera */}
                <circle cx="60" cy="38" r="2.5" fill="#0f172a" stroke="#334155" strokeWidth="0.5" />
                <circle cx="60" cy="38" r="1" fill="#1e40af" />
                {/* LED lights */}
                <circle cx="95" cy="18" r="1.5" fill="#3b82f6" filter="url(#ledGlow)" />
                <circle cx="25" cy="18" r="1" fill="#22c55e" filter="url(#ledGlow)" />
            </svg>

            {/* ── Dashed tracking path ── */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 150" preserveAspectRatio="none">
                <path d="M65 65 Q90 50 120 45 Q150 40 155 35" fill="none" stroke="#06b6d4" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.6" />
                {/* Small dots along path */}
                <circle cx="80" cy="57" r="1" fill="#06b6d4" opacity="0.5" />
                <circle cx="105" cy="47" r="1" fill="#06b6d4" opacity="0.4" />
                <circle cx="130" cy="42" r="1" fill="#06b6d4" opacity="0.3" />
            </svg>

            {/* ── SOS Badge ── */}
            <div className="absolute right-[10%] top-[48%] px-3 py-1.5 rounded-md border border-blue-400/30" style={{ background: 'rgba(15,23,42,0.85)', backdropFilter: 'blur(8px)' }}>
                <span className="text-[9px] font-extrabold tracking-[0.2em] text-blue-300">SOS</span>
            </div>

            {/* Ambient glows */}
            <div className="absolute top-[20%] left-[25%] w-20 h-20 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />
            <div className="absolute top-[10%] right-[20%] w-16 h-16 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }} />

            {/* Vignette */}
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.6)' }} />
        </div>
    );
}

/* ── DPDP Compliance custom illustration ── */
function DPDPIllustration() {
    return (
        <div className="relative w-full aspect-[4/3] overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0f1e 0%, #0d1b2a 40%, #111d2e 100%)' }}>
            {/* Subtle grid overlay */}
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

            {/* India map silhouette (faint) */}
            <svg className="absolute right-2 top-4 w-[45%] h-auto opacity-[0.06]" viewBox="0 0 200 220" fill="none">
                <path d="M100 10 L120 20 L130 15 L140 25 L150 20 L155 30 L165 35 L170 50 L175 65 L180 80 L178 95 L185 110 L180 120 L170 130 L165 145 L155 155 L145 170 L130 180 L120 190 L110 200 L100 210 L90 200 L80 190 L70 180 L60 170 L50 155 L45 140 L40 125 L35 110 L30 95 L28 80 L35 65 L40 50 L50 40 L60 30 L70 20 L80 15 L90 18Z" fill="#3b82f6"/>
            </svg>

            {/* Glow effects */}
            <div className="absolute top-[50%] right-[25%] w-32 h-32 rounded-full opacity-20" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />
            <div className="absolute bottom-0 left-[30%] w-40 h-20 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }} />

            {/* ── Dashboard mockup (left side) ── */}
            <div className="absolute left-[4%] top-[12%] w-[58%]" style={{ transform: 'perspective(600px) rotateY(8deg) rotateX(2deg)' }}>
                {/* Laptop frame */}
                <div className="rounded-lg overflow-hidden border border-blue-500/20 shadow-2xl shadow-blue-900/40" style={{ background: '#0f172a' }}>
                    {/* Title bar */}
                    <div className="flex items-center gap-1 px-2 py-1 border-b border-blue-500/10" style={{ background: '#0c1322' }}>
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
                        <span className="ml-2 text-[5px] text-blue-300/50 font-medium tracking-wider uppercase">DPDP Compliance Dashboard</span>
                    </div>

                    <div className="flex">
                        {/* Sidebar */}
                        <div className="w-[28%] border-r border-blue-500/10 p-1.5 space-y-1" style={{ background: '#0b1120' }}>
                            {['Overview', 'Data Inventory', 'Data Subjects', 'Consent Mgmt', 'Risk Assessment', 'Reports', 'Settings'].map((item, i) => (
                                <div key={i} className={`flex items-center gap-1 px-1 py-0.5 rounded text-[4px] ${i === 0 ? 'bg-blue-600/30 text-blue-300' : 'text-blue-400/40'}`}>
                                    <span className="w-1.5 h-1.5 rounded-sm bg-current opacity-40" />
                                    {item}
                                </div>
                            ))}
                        </div>

                        {/* Main content */}
                        <div className="flex-1 p-2 space-y-1.5">
                            {/* Compliance Status row */}
                            <div className="flex gap-1.5">
                                {/* Donut chart */}
                                <div className="flex-1 rounded border border-blue-500/10 p-1" style={{ background: '#0d1525' }}>
                                    <p className="text-[3.5px] text-blue-300/60 font-bold uppercase mb-1">Compliance Status</p>
                                    <div className="flex items-center justify-center">
                                        <svg viewBox="0 0 36 36" className="w-8 h-8">
                                            <circle cx="18" cy="18" r="14" fill="none" stroke="#1e293b" strokeWidth="4" />
                                            <circle cx="18" cy="18" r="14" fill="none" stroke="#3b82f6" strokeWidth="4" strokeDasharray="84 4" strokeLinecap="round" transform="rotate(-90 18 18)" />
                                            <text x="18" y="17" textAnchor="middle" className="text-[6px] font-bold fill-blue-300">94%</text>
                                            <text x="18" y="22" textAnchor="middle" className="text-[3px] fill-blue-400/60">Compliant</text>
                                        </svg>
                                    </div>
                                </div>
                                {/* Key Controls */}
                                <div className="flex-1 rounded border border-blue-500/10 p-1" style={{ background: '#0d1525' }}>
                                    <p className="text-[3.5px] text-blue-300/60 font-bold uppercase mb-1">Key Controls</p>
                                    {['Lawful Processing', 'Purpose Limitation', 'Data Minimization', 'Storage Limitation', 'Data Security'].map((c, i) => (
                                        <div key={i} className="flex items-center gap-0.5 mb-0.5">
                                            <span className={`w-1 h-1 rounded-full ${i < 4 ? 'bg-green-400' : 'bg-yellow-400'}`} />
                                            <span className="text-[3px] text-blue-300/50">{c}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Bottom row */}
                            <div className="flex gap-1.5">
                                <div className="flex-1 rounded border border-blue-500/10 p-1" style={{ background: '#0d1525' }}>
                                    <p className="text-[3.5px] text-blue-300/60 font-bold uppercase">Data Subject Requests</p>
                                    <p className="text-[7px] font-bold text-blue-200 mt-0.5">128</p>
                                </div>
                                <div className="flex-1 rounded border border-blue-500/10 p-1" style={{ background: '#0d1525' }}>
                                    <p className="text-[3.5px] text-blue-300/60 font-bold uppercase mb-0.5">Risk Overview</p>
                                    <div className="flex gap-1">
                                        <div className="text-center"><p className="text-[5px] font-bold text-green-400">32</p><p className="text-[3px] text-green-400/60">Low</p></div>
                                        <div className="text-center"><p className="text-[5px] font-bold text-yellow-400">8</p><p className="text-[3px] text-yellow-400/60">Med</p></div>
                                        <div className="text-center"><p className="text-[5px] font-bold text-red-400">2</p><p className="text-[3px] text-red-400/60">High</p></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Laptop base */}
                <div className="mx-auto w-[70%] h-[3px] rounded-b-lg" style={{ background: 'linear-gradient(to right, #1e293b, #334155, #1e293b)' }} />
            </div>

            {/* ── Shield with lock (right side) ── */}
            <div className="absolute right-[8%] top-[18%] w-[30%]">
                {/* Glow ring base */}
                <div className="absolute bottom-[-8%] left-1/2 -translate-x-1/2 w-[90%] h-3 rounded-full opacity-50" style={{ background: 'radial-gradient(ellipse, #3b82f6 0%, transparent 70%)' }} />
                {/* Concentric rings */}
                <svg viewBox="0 0 100 110" className="w-full h-auto">
                    <defs>
                        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#1e3a5f" />
                            <stop offset="50%" stopColor="#1e40af" />
                            <stop offset="100%" stopColor="#0c1b33" />
                        </linearGradient>
                        <linearGradient id="shieldStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#60a5fa" />
                            <stop offset="100%" stopColor="#3b82f6" />
                        </linearGradient>
                        <filter id="glow">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                        </filter>
                    </defs>
                    {/* Base rings */}
                    <ellipse cx="50" cy="95" rx="40" ry="6" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
                    <ellipse cx="50" cy="95" rx="30" ry="4" fill="none" stroke="#3b82f6" strokeWidth="0.5" opacity="0.5" />
                    {/* Shield shape */}
                    <path d="M50 15 L75 28 L75 55 Q75 75 50 90 Q25 75 25 55 L25 28 Z" fill="url(#shieldGrad)" stroke="url(#shieldStroke)" strokeWidth="1.5" filter="url(#glow)" />
                    {/* Lock icon */}
                    <rect x="40" y="48" width="20" height="16" rx="2" fill="#1e3a5f" stroke="#60a5fa" strokeWidth="1" />
                    <path d="M44 48 L44 40 Q44 33 50 33 Q56 33 56 40 L56 48" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="50" cy="56" r="2" fill="#60a5fa" />
                    <line x1="50" y1="58" x2="50" y2="61" stroke="#60a5fa" strokeWidth="1" />
                </svg>
            </div>

            {/* ── Floating badges ── */}
            {/* DPDP Compliant badge */}
            <div className="absolute right-[5%] top-[5%] flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg border border-blue-500/20" style={{ background: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(8px)' }}>
                <span className="text-[5px] font-bold text-blue-200 tracking-wider uppercase">DPDP</span>
                <span className="text-[4px] text-blue-300/70 tracking-wider uppercase">Compliant</span>
                <svg className="w-3 h-3 text-blue-400 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="10" />
                </svg>
            </div>

            {/* Small icon badges */}
            {[
                { label: 'Policies', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', top: '38%', right: '2%' },
                { label: 'Consent', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', top: '52%', right: '0%' },
                { label: 'Security', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z', top: '66%', right: '3%' },
            ].map((badge, i) => (
                <div key={i} className="absolute flex flex-col items-center gap-0.5 px-1.5 py-1 rounded-md border border-blue-500/15" style={{ top: badge.top, right: badge.right, background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(6px)' }}>
                    <svg className="w-2.5 h-2.5 text-blue-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d={badge.icon} />
                    </svg>
                    <span className="text-[3.5px] text-blue-300/60 uppercase tracking-wider">{badge.label}</span>
                </div>
            ))}

            {/* Book element (bottom-left) */}
            <div className="absolute bottom-[6%] left-[8%] w-[22%]">
                <div className="rounded-sm p-1.5 border border-blue-500/10" style={{ background: 'linear-gradient(135deg, #0f1729, #162033)' }}>
                    <div className="w-3 h-3 mx-auto mb-1 rounded-full border border-yellow-600/30 flex items-center justify-center" style={{ background: '#1a1a0a' }}>
                        <span className="text-[2.5px] text-yellow-500/50">⚖</span>
                    </div>
                    <p className="text-[3px] text-blue-200/50 text-center font-bold uppercase leading-tight">Digital Personal<br/>Data Protection Act<br/>2023</p>
                </div>
            </div>

            {/* Vignette */}
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5)' }} />
        </div>
    );
}

/* ── Underwater Drone custom illustration ── */
function UnderwaterDroneIllustration() {
    return (
        <div className="relative w-full aspect-[4/3] overflow-hidden" style={{ background: 'linear-gradient(180deg, #020a18 0%, #041428 25%, #061a30 50%, #071832 75%, #040e1e 100%)' }}>
            {/* Surface light rays */}
            <div className="absolute top-0 left-[30%] w-[40%] h-[60%] opacity-[0.07]" style={{ background: 'linear-gradient(180deg, rgba(100,180,255,0.4) 0%, transparent 100%)', clipPath: 'polygon(35% 0%, 65% 0%, 85% 100%, 15% 100%)' }} />
            <div className="absolute top-0 left-[45%] w-[20%] h-[45%] opacity-[0.05]" style={{ background: 'linear-gradient(180deg, rgba(150,210,255,0.5) 0%, transparent 100%)', clipPath: 'polygon(30% 0%, 70% 0%, 90% 100%, 10% 100%)' }} />

            {/* Underwater particles/bubbles */}
            {[[15,20],[80,15],[25,60],[70,45],[90,70],[10,75],[50,12],[60,65],[35,40],[85,35]].map(([x,y], i) => (
                <div key={i} className="absolute rounded-full" style={{ left: `${x}%`, top: `${y}%`, width: `${1 + (i % 3)}px`, height: `${1 + (i % 3)}px`, background: `rgba(100,180,255,${0.15 + (i % 4) * 0.08})` }} />
            ))}

            {/* ── Submarine Drone ── */}
            <svg className="absolute left-[12%] top-[18%] w-[55%] h-auto" viewBox="0 0 160 55" fill="none">
                <defs>
                    <linearGradient id="subBody" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1a2744" />
                        <stop offset="40%" stopColor="#0f1b2e" />
                        <stop offset="100%" stopColor="#0a1220" />
                    </linearGradient>
                    <linearGradient id="subHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#2a4060" />
                        <stop offset="100%" stopColor="#0f1b2e" />
                    </linearGradient>
                    <filter id="subGlow">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                    <filter id="headlightGlow">
                        <feGaussianBlur stdDeviation="4" result="blur" />
                        <feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                    </filter>
                </defs>
                {/* Main torpedo body */}
                <ellipse cx="80" cy="22" rx="55" ry="12" fill="url(#subBody)" stroke="#1e3450" strokeWidth="0.5" />
                {/* Top highlight */}
                <ellipse cx="80" cy="18" rx="40" ry="5" fill="url(#subHighlight)" opacity="0.4" />
                {/* Conning tower / dorsal fin */}
                <rect x="65" y="8" width="18" height="8" rx="3" fill="#152238" stroke="#1e3450" strokeWidth="0.5" />
                <rect x="70" y="5" width="3" height="5" rx="1" fill="#1e3450" />
                {/* Tail fin */}
                <path d="M133 12 L145 5 L145 15 Z" fill="#152238" stroke="#1e3450" strokeWidth="0.3" />
                <path d="M133 32 L145 38 L145 28 Z" fill="#152238" stroke="#1e3450" strokeWidth="0.3" />
                {/* Propeller area */}
                <circle cx="140" cy="22" r="4" fill="#0a1220" stroke="#1e3450" strokeWidth="0.3" />
                {/* Headlight */}
                <circle cx="30" cy="22" r="5" fill="#1e40af" filter="url(#headlightGlow)" />
                <circle cx="30" cy="22" r="3" fill="#3b82f6" />
                <circle cx="30" cy="22" r="1.5" fill="#93c5fd" />
                {/* Side details */}
                <line x1="50" y1="18" x2="65" y2="18" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.5" />
                <line x1="95" y1="18" x2="110" y2="18" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.5" />
                <circle cx="55" cy="25" r="1.5" fill="none" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.4" />
                <circle cx="105" cy="25" r="1.5" fill="none" stroke="#1e3a5f" strokeWidth="0.5" opacity="0.4" />
            </svg>

            {/* ── Scanning beam cone ── */}
            <div className="absolute left-[20%] top-[38%] w-[35%] h-[55%] opacity-30" style={{ clipPath: 'polygon(25% 0%, 30% 0%, 95% 100%, 0% 100%)', background: 'linear-gradient(180deg, rgba(59,130,246,0.6) 0%, rgba(59,130,246,0.05) 100%)' }} />
            {/* Beam scan lines */}
            <svg className="absolute left-[12%] top-[38%] w-[50%] h-[55%]" viewBox="0 0 100 80" preserveAspectRatio="none" fill="none">
                <line x1="30" y1="0" x2="5" y2="80" stroke="#3b82f6" strokeWidth="0.3" opacity="0.15" />
                <line x1="32" y1="0" x2="50" y2="80" stroke="#3b82f6" strokeWidth="0.3" opacity="0.15" />
                <line x1="31" y1="0" x2="28" y2="80" stroke="#3b82f6" strokeWidth="0.3" opacity="0.1" />
            </svg>

            {/* ── Wireframe terrain mesh (ocean floor) ── */}
            <svg className="absolute bottom-[5%] left-[5%] w-[70%] h-[35%]" viewBox="0 0 140 50" preserveAspectRatio="none" fill="none">
                {/* Horizontal wave lines */}
                <path d="M0 40 Q15 35 30 38 Q50 42 70 36 Q90 30 110 34 Q125 37 140 33" stroke="#3b82f6" strokeWidth="0.4" opacity="0.5" />
                <path d="M0 32 Q20 27 40 30 Q60 34 80 28 Q100 22 120 26 Q135 29 140 25" stroke="#3b82f6" strokeWidth="0.4" opacity="0.4" />
                <path d="M0 24 Q25 19 45 22 Q65 26 85 20 Q105 14 125 18 Q138 21 140 17" stroke="#3b82f6" strokeWidth="0.35" opacity="0.3" />
                <path d="M10 16 Q30 12 50 15 Q70 18 90 12 Q110 7 130 11" stroke="#3b82f6" strokeWidth="0.3" opacity="0.2" />
                <path d="M20 10 Q40 6 60 9 Q80 12 100 6 Q120 2 140 5" stroke="#3b82f6" strokeWidth="0.25" opacity="0.15" />
                {/* Vertical cross-lines for mesh effect */}
                {[10,25,40,55,70,85,100,115,130].map((x, i) => (
                    <line key={i} x1={x} y1={8 + (i % 3) * 2} x2={x - 3 + (i % 2) * 6} y2={42 + (i % 2) * 3} stroke="#3b82f6" strokeWidth="0.2" opacity={0.1 + (i % 3) * 0.05} />
                ))}
                {/* Glowing dots at mesh intersections */}
                {[[30,38],[70,36],[110,34],[40,30],[80,28],[120,26],[50,22],[90,20]].map(([x,y], i) => (
                    <circle key={i} cx={x} cy={y} r="0.8" fill="#60a5fa" opacity={0.4 + (i % 3) * 0.1} />
                ))}
            </svg>

            {/* ── HUD / Data display (upper-right) ── */}
            <div className="absolute right-[6%] top-[10%] w-[30%]">
                <div className="rounded border border-blue-500/20 p-1.5 space-y-1" style={{ background: 'rgba(8,18,35,0.85)', backdropFilter: 'blur(6px)' }}>
                    {/* Title bar */}
                    <div className="flex items-center gap-1 mb-1">
                        <span className="w-1 h-1 rounded-full bg-green-400" />
                        <span className="text-[3.5px] text-blue-300/60 font-bold uppercase tracking-wider">Sonar Display</span>
                    </div>
                    {/* Mini 3D terrain viz */}
                    <svg viewBox="0 0 60 25" className="w-full" fill="none">
                        <path d="M5 20 Q12 12 20 15 Q30 18 38 10 Q46 5 55 8" stroke="#3b82f6" strokeWidth="0.5" opacity="0.6" />
                        <path d="M5 22 Q12 16 20 18 Q30 20 38 14 Q46 9 55 12" stroke="#06b6d4" strokeWidth="0.4" opacity="0.4" />
                        {/* Dots */}
                        <circle cx="20" cy="15" r="0.8" fill="#60a5fa" />
                        <circle cx="38" cy="10" r="0.8" fill="#60a5fa" />
                        <circle cx="55" cy="8" r="0.8" fill="#60a5fa" />
                    </svg>
                    {/* Stats row */}
                    <div className="flex justify-between">
                        <div><p className="text-[3px] text-blue-400/50 uppercase">Depth</p><p className="text-[4.5px] font-bold text-blue-300">120m</p></div>
                        <div><p className="text-[3px] text-blue-400/50 uppercase">Speed</p><p className="text-[4.5px] font-bold text-cyan-300">3.2kn</p></div>
                        <div><p className="text-[3px] text-blue-400/50 uppercase">Batt</p><p className="text-[4.5px] font-bold text-green-400">87%</p></div>
                    </div>
                </div>
            </div>

            {/* ── Coral / seaweed silhouettes ── */}
            <svg className="absolute bottom-0 left-0 w-[25%] h-[30%]" viewBox="0 0 50 40" fill="none" preserveAspectRatio="xMinYMax meet">
                <path d="M5 40 Q5 28 8 22 Q12 16 10 10" stroke="#0a2540" strokeWidth="2" strokeLinecap="round" />
                <path d="M8 40 Q10 30 15 25 Q18 20 16 14" stroke="#0a2540" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M12 40 Q14 32 20 28 Q24 24 22 18" stroke="#0b2845" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 40 Q22 34 25 30 Q28 26 26 22" stroke="#0b2845" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="10" cy="10" r="5" fill="#0a2540" opacity="0.6" />
                <circle cx="16" cy="14" r="4" fill="#0b2845" opacity="0.5" />
                <circle cx="22" cy="18" r="3" fill="#0a2540" opacity="0.4" />
            </svg>
            <svg className="absolute bottom-0 right-0 w-[20%] h-[25%]" viewBox="0 0 40 35" fill="none" preserveAspectRatio="xMaxYMax meet">
                <path d="M30 35 Q28 25 32 20 Q35 15 33 10" stroke="#0a2540" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M35 35 Q33 28 36 23 Q38 18 36 13" stroke="#0b2845" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="33" cy="10" r="4" fill="#0a2540" opacity="0.5" />
                <circle cx="36" cy="13" r="3" fill="#0b2845" opacity="0.4" />
            </svg>

            {/* Ambient deep glow */}
            <div className="absolute top-[15%] left-[20%] w-24 h-24 rounded-full opacity-10" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />

            {/* Vignette */}
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 50px rgba(0,0,0,0.7)' }} />
        </div>
    );
}

/* ── Default video placeholder for other cards ── */
function DefaultCardVisual() {
    return (
        <div className="relative w-full aspect-video bg-slate-100 dark:bg-slate-700 overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-300 dark:text-slate-400 bg-gradient-to-br from-[#f0f5ff] dark:from-slate-700 to-blue-100 dark:to-slate-800 group-hover:scale-105 transition-transform duration-700">
                <svg className="w-10 h-10 mb-2 text-blue-200 dark:text-slate-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                </svg>
                <span className="font-semibold text-[10px] tracking-widest uppercase opacity-70">Video Space</span>
            </div>
        </div>
    );
}

export function ProductsSection() {
    return (
        <section className="py-20 md:py-32 w-full relative z-10 bg-white dark:bg-slate-900/50">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-50/30 dark:from-slate-800/20 to-transparent pointer-events-none" />
            
            <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 relative z-10">
                <AnimatedContainer className="max-w-3xl mx-auto mb-16 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-blue-950 dark:text-white mb-6 leading-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">Products</span>
                    </h2>
                    <p className="text-blue-900/80 dark:text-slate-300 text-lg md:text-xl font-light leading-relaxed">
                        Discover our suite of advanced intelligent solutions designed to protect, analyze, and empower.
                    </p>
                </AnimatedContainer>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product, index) => (
                        <AnimatedContainer 
                            key={index}
                            delay={0.1 + (index * 0.1)} 
                            className="flex flex-col rounded-[2rem] bg-white dark:bg-slate-800/80 border border-blue-100 dark:border-slate-700 shadow-xl shadow-blue-900/5 dark:shadow-black/20 hover:shadow-2xl hover:shadow-blue-900/10 dark:hover:shadow-black/30 transition-all duration-300 overflow-hidden group"
                        >
                            {/* Card Visual */}
                            {product.title === 'Child Safety Tracker' ? <ChildSafetyIllustration /> : product.title === 'DPDP Compliance' ? <DPDPIllustration /> : product.title === 'Underwater Drone' ? <UnderwaterDroneIllustration /> : <DefaultCardVisual />}

                            {/* Card Content */}
                            <div className="p-6 md:p-8 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-1">{product.title}</h3>
                                    <p className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">{product.subtitle}</p>
                                </div>
                                <p className="text-blue-900/80 dark:text-slate-300 font-light text-sm leading-relaxed mb-6 flex-1">
                                    {product.description}
                                </p>
                                
                                <button className="mt-auto inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 group/btn">
                                    Explore details
                                    <svg className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </AnimatedContainer>
                    ))}
                </div>
            </div>
        </section>
    );
}

function AnimatedContainer({ className, delay = 0.1, children }: { className?: string, delay?: number, children: React.ReactNode, key?: React.Key }) {
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
