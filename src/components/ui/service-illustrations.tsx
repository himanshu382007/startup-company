'use client';
import React from 'react';

export function PenTestIllustration() {
    return (
        <div className="relative w-full aspect-[16/10] overflow-hidden" style={{ background: 'linear-gradient(145deg, #060b18 0%, #0a1628 50%, #0d1a2d 100%)' }}>
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

            {/* Laptop with Security Assessment */}
            <div className="absolute left-[15%] top-[15%] w-[55%]" style={{ transform: 'perspective(500px) rotateY(5deg)' }}>
                <div className="rounded-md overflow-hidden border border-blue-500/20" style={{ background: '#0f172a' }}>
                    <div className="flex items-center gap-0.5 px-1.5 py-0.5 border-b border-blue-500/10" style={{ background: '#0c1322' }}>
                        <span className="w-1 h-1 rounded-full bg-red-400/60" /><span className="w-1 h-1 rounded-full bg-yellow-400/60" /><span className="w-1 h-1 rounded-full bg-green-400/60" />
                        <span className="ml-1 text-[3.5px] text-blue-300/50 uppercase tracking-wider">Security Assessment</span>
                    </div>
                    <div className="p-2 flex gap-2">
                        <div className="flex-1 flex flex-col items-center">
                            <svg viewBox="0 0 40 44" className="w-10 h-10">
                                <path d="M20 4 L34 12 L34 24 Q34 36 20 42 Q6 36 6 24 L6 12 Z" fill="#0c1b33" stroke="#3b82f6" strokeWidth="1" />
                                <path d="M14 22 L18 26 L27 17" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="flex-1 space-y-0.5">
                            <p className="text-[3px] text-blue-300/50 uppercase font-bold">Vulnerabilities</p>
                            <p className="text-[7px] font-bold text-blue-200">23 <span className="text-[3px] text-blue-400/60">Detected</span></p>
                            {[['Critical','05','bg-red-500'],['High','07','bg-orange-400'],['Medium','08','bg-yellow-400'],['Low','03','bg-green-400']].map(([l,v,c],i)=>(
                                <div key={i} className="flex items-center gap-0.5">
                                    <span className={`w-1 h-1 rounded-full ${c}`}/><span className="text-[3px] text-blue-300/50">{l}</span>
                                    <span className="text-[3px] text-blue-200 ml-auto font-bold">{v}</span>
                                </div>
                            ))}
                            <p className="text-[3px] text-blue-300/50 uppercase font-bold mt-1">Risk Level</p>
                            <p className="text-[4px] font-bold text-yellow-400">MEDIUM</p>
                        </div>
                    </div>
                </div>
                <div className="mx-auto w-[60%] h-[2px] rounded-b" style={{ background: 'linear-gradient(to right, #1e293b, #334155, #1e293b)' }} />
            </div>

            {/* Code Analysis floating panel */}
            <div className="absolute left-[3%] top-[8%] w-[22%] rounded border border-blue-500/15 p-1" style={{ background: 'rgba(8,18,35,0.9)', backdropFilter: 'blur(4px)' }}>
                <p className="text-[3.5px] text-blue-300/60 uppercase font-bold mb-0.5">Code Analysis</p>
                <svg className="w-3 h-3 text-yellow-400/70 mb-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                {[1,2,3].map(i=><div key={i} className="h-[1.5px] rounded mb-0.5" style={{width:`${40+i*15}%`,background:'#1e3a5f'}}/>)}
            </div>

            {/* System Scan panel */}
            <div className="absolute left-[3%] bottom-[12%] w-[25%] rounded border border-blue-500/15 p-1" style={{ background: 'rgba(8,18,35,0.9)', backdropFilter: 'blur(4px)' }}>
                <p className="text-[3.5px] text-blue-300/60 uppercase font-bold mb-1">System Scan</p>
                {['Network Security','App Security','Config Review','Access Control','Data Protection'].map((s,i)=>(
                    <div key={i} className="flex items-center gap-0.5 mb-0.5">
                        <span className="text-[3px] text-blue-300/40 flex-1">{s}</span>
                        <svg className="w-1.5 h-1.5 text-green-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                ))}
            </div>

            <div className="absolute top-[30%] left-[40%] w-20 h-20 rounded-full opacity-15" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.6)' }} />
        </div>
    );
}

export function ThreatIntelIllustration() {
    return (
        <div className="relative w-full aspect-[16/10] overflow-hidden" style={{ background: 'linear-gradient(145deg, #050a15 0%, #0a1122 50%, #070e1c 100%)' }}>
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.6) 1px, transparent 1px)', backgroundSize: '15px 15px', transform: 'perspective(500px) rotateX(60deg) scale(2.5)', transformOrigin: 'bottom' }} />

            {/* Threat Map Background */}
            <div className="absolute left-[5%] top-[5%] w-[60%] h-[45%] rounded-md border border-blue-500/20 p-2" style={{ background: 'rgba(8,16,32,0.8)', backdropFilter: 'blur(4px)' }}>
                <p className="text-[3.5px] text-blue-300/60 uppercase font-bold mb-1">Threat Map</p>
                {/* Simplified World Map Silhouette */}
                <div className="relative w-full h-[80%] opacity-40">
                    <svg viewBox="0 0 100 50" className="w-full h-full fill-blue-500/30">
                        <path d="M10,10 Q15,5 20,10 T30,15 T40,10 T50,20 T60,15 T70,25 T80,20 T90,30 L90,40 L10,40 Z" />
                        <path d="M25,25 Q30,20 35,25 T45,30 L25,30 Z" />
                        <path d="M65,10 Q70,5 75,10 T85,15 L65,15 Z" />
                    </svg>
                    {/* Threat Dots */}
                    {[
                        { top: '30%', left: '20%' },
                        { top: '45%', left: '45%' },
                        { top: '25%', left: '60%' },
                        { top: '50%', left: '75%' }
                    ].map((pos, i) => (
                        <div key={i} className="absolute" style={{ ...pos, transform: 'translate(-50%, -50%)' }}>
                            <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-ping opacity-75" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-red-300 rounded-full" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 border border-red-500/30 rounded-full" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Threat Activity Panel */}
            <div className="absolute right-[5%] top-[15%] w-[25%] rounded border border-blue-500/15 p-1.5" style={{ background: 'rgba(8,18,35,0.9)', backdropFilter: 'blur(4px)' }}>
                <p className="text-[3px] text-blue-300/60 uppercase font-bold mb-1">Threat Activity</p>
                {[['Critical', 'text-red-500', 'M2 12l5-5 5 5 5-5'], ['High', 'text-orange-400', 'M2 10l5 5 5-5 5 5'], ['Medium', 'text-blue-400', 'M2 8l5 5 5-5 5 5'], ['Low', 'text-slate-400', 'M2 6l5 5 5-5 5 5']].map(([l, c, d], i) => (
                    <div key={i} className="flex items-center gap-1 mb-0.5">
                        <span className={`text-[2.5px] uppercase w-6 ${c}`}>{l}</span>
                        <svg viewBox="0 0 20 15" className={`w-4 h-1.5 stroke-current ${c}`} fill="none" strokeWidth="1.5"><path d={d} strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </div>
                ))}
            </div>

            {/* Laptop Display */}
            <div className="absolute left-[8%] bottom-[5%] w-[50%]" style={{ transform: 'perspective(400px) rotateY(15deg)' }}>
                {/* Screen */}
                <div className="rounded-t-md border-x border-t border-blue-500/30 p-1" style={{ background: '#0a101d', height: '45%' }}>
                    <p className="text-[3px] text-blue-300/60 uppercase font-bold mb-0.5 border-b border-blue-500/20 pb-0.5">Threat Analysis</p>
                    <div className="flex gap-1 h-[80%]">
                        <div className="flex-1 border border-blue-500/10 rounded p-0.5">
                            <p className="text-[2.5px] text-blue-400/50 mb-0.5">Top Threats</p>
                            {['Malware', 'Phishing', 'Ransomware', 'Exploits'].map((t, i) => (
                                <div key={i} className="flex items-center gap-0.5 mb-[1px]">
                                    <span className="w-0.5 h-0.5 rounded-full bg-red-400" />
                                    <span className="text-[2px] text-blue-200">{t}</span>
                                </div>
                            ))}
                        </div>
                        <div className="w-[30%] border border-blue-500/10 rounded flex items-center justify-center relative">
                             <svg viewBox="0 0 36 36" className="w-5 h-5 -rotate-90">
                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#1e3a8a" strokeWidth="3" />
                                <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="78, 100" />
                            </svg>
                            <span className="absolute text-[3px] font-bold text-blue-200">78%</span>
                        </div>
                    </div>
                </div>
                {/* Keyboard Base */}
                <div className="w-full h-1.5 rounded-b border-x border-b border-slate-700" style={{ background: 'linear-gradient(to right, #1e293b, #334155, #1e293b)', transform: 'perspective(200px) rotateX(45deg)' }} />
            </div>

            {/* Drone */}
            <div className="absolute right-[20%] bottom-[25%] w-[25%] drop-shadow-2xl">
                {/* Drone Body */}
                <div className="relative w-full aspect-video bg-slate-900 rounded-full border border-slate-700 flex items-center justify-center" style={{ boxShadow: '0 10px 15px -3px rgba(0,0,0,0.8)' }}>
                    <div className="w-2/3 h-1/2 bg-slate-800 rounded-full" />
                    {/* Glowing Eyes */}
                    <div className="absolute right-[15%] top-1/2 -translate-y-1/2 flex gap-0.5">
                        <div className="w-1.5 h-1 bg-blue-400 rounded-full" style={{ boxShadow: '0 0 5px #60a5fa' }} />
                        <div className="w-1.5 h-1 bg-blue-400 rounded-full" style={{ boxShadow: '0 0 5px #60a5fa' }} />
                    </div>
                    {/* Propellers */}
                    {[
                        { top: '-10%', left: '0%' },
                        { top: '-10%', right: '0%' },
                        { bottom: '-10%', left: '0%' },
                        { bottom: '-10%', right: '0%' }
                    ].map((pos, i) => (
                        <div key={i} className="absolute w-4 h-1 border border-slate-600 rounded-[50%]" style={{ ...pos }}>
                            <div className="w-full h-full bg-slate-800/80 rounded-[50%] animate-spin" style={{ animationDuration: '0.1s' }} />
                        </div>
                    ))}
                    {/* Scanner Beam */}
                    <div className="absolute top-[80%] right-[30%] w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[40px] border-b-blue-500/20" style={{ filter: 'blur(2px)' }} />
                </div>
            </div>

            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.7)' }} />
        </div>
    );
}

export function DigitalForensicsIllustration() {
    return (
        <div className="relative w-full aspect-[16/10] overflow-hidden" style={{ background: 'linear-gradient(145deg, #040812 0%, #08101e 50%, #050a14 100%)' }}>
            {/* Background Grid & Binary */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.6) 1px, transparent 1px)', backgroundSize: '15px 15px', transform: 'perspective(500px) rotateX(60deg) scale(2.5)', transformOrigin: 'bottom' }} />
            <div className="absolute right-[5%] top-[10%] w-[30%] opacity-10 text-[6px] text-blue-400 font-mono leading-[8px] truncate" style={{ writingMode: 'vertical-rl' }}>
                01010010 01000101 01000011 01001111 01010110 01000101 01010010 01011001
            </div>

            {/* Laptop Display (Case Analysis) */}
            <div className="absolute left-[5%] bottom-[15%] w-[45%]" style={{ transform: 'perspective(400px) rotateY(15deg)' }}>
                {/* Screen */}
                <div className="rounded-t-md border-x border-t border-blue-500/30 p-1 flex flex-col" style={{ background: '#0a101d', height: '45%' }}>
                    <p className="text-[3px] text-blue-300/60 uppercase font-bold mb-0.5 border-b border-blue-500/20 pb-0.5">Case Analysis</p>
                    <div className="flex-1 flex items-center justify-center relative">
                        {/* Fingerprint Graphic */}
                        <div className="w-[45%] aspect-[3/4] border border-blue-500/30 rounded-[40%] flex items-center justify-center relative overflow-hidden" style={{ boxShadow: '0 0 10px rgba(59,130,246,0.2)' }}>
                            <svg viewBox="0 0 24 24" className="w-[80%] h-[80%] stroke-blue-400/80" fill="none" strokeWidth="0.5">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
                                <path d="M12 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                                <path d="M12 4v2" strokeDasharray="1 1" />
                            </svg>
                            {/* Scanning line */}
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-blue-400/50 blur-[1px] animate-[scan_2s_ease-in-out_infinite]" />
                        </div>
                    </div>
                    {/* Bottom stats */}
                    <div className="h-[20%] border-t border-blue-500/20 flex items-center justify-between px-1">
                        <span className="text-[2.5px] text-blue-300/50 uppercase">Data Recovery</span>
                        <div className="flex-1 mx-2 h-[1.5px] bg-blue-900/50 rounded overflow-hidden">
                            <div className="h-full bg-blue-400 w-[72%]" />
                        </div>
                        <span className="text-[2.5px] text-blue-200 font-bold">72%</span>
                    </div>
                </div>
                {/* Keyboard Base */}
                <div className="w-full h-1.5 rounded-b border-x border-b border-slate-700" style={{ background: 'linear-gradient(to right, #1e293b, #334155, #1e293b)', transform: 'perspective(200px) rotateX(45deg)' }} />
            </div>

            {/* File Recovery Panel */}
            <div className="absolute right-[5%] top-[10%] w-[35%] rounded border border-blue-500/20 p-2" style={{ background: 'rgba(8,16,32,0.8)', backdropFilter: 'blur(4px)' }}>
                <p className="text-[3.5px] text-blue-300/60 uppercase font-bold mb-1">File Recovery</p>
                <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 text-blue-400" fill="currentColor">
                        <path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z" />
                    </svg>
                    <div className="flex-1">
                        <div className="flex justify-between mb-0.5">
                            <span className="text-[3px] text-blue-300/50 uppercase">Recovering files...</span>
                            <span className="text-[3px] text-blue-200">85%</span>
                        </div>
                        <div className="h-[2px] bg-blue-900/50 rounded overflow-hidden">
                            <div className="h-full bg-blue-500 w-[85%]" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Artifacts Analysis Panel */}
            <div className="absolute right-[5%] top-[35%] w-[35%] rounded border border-blue-500/20 p-2" style={{ background: 'rgba(8,16,32,0.8)', backdropFilter: 'blur(4px)' }}>
                <p className="text-[3.5px] text-blue-300/60 uppercase font-bold mb-1">Artifacts Analysis</p>
                <div className="flex items-end gap-0.5 h-6 mt-1">
                    {[3, 5, 2, 7, 4, 8, 3, 6, 9, 4, 5, 2, 8, 6, 3, 7, 5].map((h, i) => (
                        <div key={i} className="flex-1 bg-blue-500/50 hover:bg-blue-400 transition-colors" style={{ height: `${h * 10}%` }} />
                    ))}
                </div>
            </div>

            {/* Hard Drive (HDD) Component */}
            <div className="absolute right-[20%] bottom-[10%] w-[30%] aspect-square" style={{ transform: 'perspective(400px) rotateX(60deg) rotateZ(-30deg)' }}>
                {/* Drive Base */}
                <div className="absolute inset-0 bg-slate-800 rounded border-2 border-slate-600 drop-shadow-2xl flex items-center justify-center">
                    {/* Platter (Disk) */}
                    <div className="w-[80%] h-[80%] rounded-full bg-gradient-to-tr from-slate-400 via-slate-200 to-slate-500 border border-slate-300 relative overflow-hidden" style={{ boxShadow: 'inset 0 0 10px rgba(0,0,0,0.5)' }}>
                        {/* Disk reflections */}
                        <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-white/20 rounded-bl-[100%]" />
                        <div className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-black/20 rounded-tr-[100%]" />
                        {/* Spindle */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20%] h-[20%] bg-slate-700 rounded-full border-2 border-slate-500" />
                    </div>
                    {/* Actuator Arm */}
                    <div className="absolute bottom-[10%] left-[10%] w-[40%] h-[15%] bg-slate-300 rounded-full border border-slate-400 origin-bottom-left rotate-[-20deg]">
                        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-2 h-2 bg-slate-800 rounded-full border border-slate-500" />
                    </div>
                </div>
            </div>

            {/* Magnifying Glass (Floating above HDD) */}
            <div className="absolute right-[30%] bottom-[25%] w-[15%] aspect-square" style={{ transform: 'rotate(-15deg)' }}>
                <div className="w-full h-full rounded-full border-4 border-slate-700 bg-blue-500/10 backdrop-blur-sm relative" style={{ boxShadow: '0 10px 20px rgba(0,0,0,0.5), inset 0 0 10px rgba(59,130,246,0.3)' }}>
                     {/* Reflection */}
                    <div className="absolute top-[10%] left-[10%] w-[30%] h-[20%] bg-white/20 rounded-full rotate-45" />
                    {/* Handle */}
                    <div className="absolute top-[90%] left-[90%] w-[100%] h-[25%] bg-slate-800 border border-slate-600 rounded-full origin-top-left rotate-45" />
                </div>
            </div>

            {/* Glowing accents */}
            <div className="absolute top-[50%] right-[30%] w-20 h-20 rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8)' }} />
        </div>
    );
}

export function ComplianceIllustration() {
    return (
        <div className="relative w-full aspect-[16/10] overflow-hidden" style={{ background: 'linear-gradient(145deg, #050b1a 0%, #0a1428 50%, #070e1c 100%)' }}>
            {/* Background Map & Grid */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.6) 1px, transparent 1px)', backgroundSize: '15px 15px', transform: 'perspective(500px) rotateX(60deg) scale(2.5)', transformOrigin: 'bottom' }} />
            
            {/* Floating Check Shields Background */}
            {[
                { top: '15%', left: '15%', scale: '0.6', opacity: '0.1' },
                { top: '25%', right: '15%', scale: '0.8', opacity: '0.15' },
                { top: '45%', left: '8%', scale: '0.5', opacity: '0.1' }
            ].map((pos, i) => (
                <div key={i} className="absolute" style={{ top: pos.top, left: pos.left, right: pos.right, transform: `scale(${pos.scale})`, opacity: pos.opacity }}>
                    <svg viewBox="0 0 24 24" className="w-16 h-16 stroke-blue-400" fill="none" strokeWidth="1">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            ))}

            {/* Glowing Wireframe Globe Background */}
            <div className="absolute top-[5%] left-[25%] w-[40%] aspect-square opacity-30" style={{ filter: 'drop-shadow(0 0 10px rgba(59,130,246,0.5))' }}>
                <svg viewBox="0 0 100 100" className="w-full h-full stroke-blue-500" fill="none" strokeWidth="0.5">
                    <circle cx="50" cy="50" r="45" />
                    <ellipse cx="50" cy="50" rx="20" ry="45" />
                    <ellipse cx="50" cy="50" rx="45" ry="15" />
                    <ellipse cx="50" cy="50" rx="45" ry="30" />
                    {/* Abstract Continents Lines */}
                    <path d="M30 30 Q40 40 50 35 T70 40" strokeWidth="1" className="stroke-blue-400" />
                    <path d="M40 60 Q50 70 60 65 T80 70" strokeWidth="1" className="stroke-blue-400" />
                </svg>
            </div>

            {/* Binder: Compliance Framework */}
            <div className="absolute left-[10%] bottom-[20%] w-[45%] h-[20%]" style={{ transform: 'perspective(400px) rotateX(45deg) rotateY(15deg) rotateZ(-10deg)' }}>
                {/* Book Cover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 rounded border border-blue-800 shadow-2xl flex flex-col justify-center px-4" style={{ boxShadow: '-5px 10px 15px rgba(0,0,0,0.8)' }}>
                    <p className="text-[6px] font-bold text-blue-200 uppercase tracking-widest" style={{ textShadow: '0 0 2px rgba(59,130,246,0.5)' }}>Compliance</p>
                    <p className="text-[5px] text-blue-300/80 uppercase tracking-wider mb-1">Framework</p>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-slate-600 bg-slate-800/50" style={{ boxShadow: 'inset 0 0 5px black' }} />
                </div>
                {/* Pages edge */}
                <div className="absolute bottom-[-15%] right-[-2%] w-[100%] h-[20%] bg-slate-300 rounded-b" style={{ transform: 'skewX(15deg)' }} />
            </div>

            {/* Clipboard: Privacy Regulations */}
            <div className="absolute right-[15%] bottom-[15%] w-[35%] aspect-[1/1.2]" style={{ transform: 'perspective(400px) rotateX(45deg) rotateY(-10deg) rotateZ(5deg)' }}>
                {/* Clipboard Base */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-md border-2 border-slate-700 shadow-2xl" style={{ boxShadow: '5px 10px 15px rgba(0,0,0,0.8)' }}>
                    {/* Clip */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[20%] w-[30%] h-[8%] bg-slate-400 rounded-sm border border-slate-300 flex justify-center items-center">
                        <div className="w-[80%] h-[2px] bg-slate-500 rounded" />
                    </div>
                    {/* Paper */}
                    <div className="absolute top-[8%] left-[5%] right-[5%] bottom-[5%] bg-slate-200/95 rounded-sm p-2 flex flex-col">
                        <p className="text-[5px] font-bold text-slate-800 text-center leading-tight mb-2">PRIVACY<br/>REGULATIONS</p>
                        {['GDPR', 'CCPA', 'ISO 27001', 'DATA PROTECTION'].map((item, i) => (
                            <div key={i} className="flex items-center gap-1 mb-1">
                                <div className="w-2 h-2 border border-slate-600 rounded-[1px] flex items-center justify-center bg-white">
                                    <svg viewBox="0 0 24 24" className="w-[80%] h-[80%] stroke-slate-800" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                                </div>
                                <span className="text-[4px] font-bold text-slate-700 uppercase">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                {/* Pen */}
                <div className="absolute right-[-10%] top-[40%] w-[5%] h-[60%] bg-gradient-to-b from-slate-900 via-slate-700 to-slate-900 rounded-full" style={{ transform: 'rotate(-25deg)', boxShadow: '2px 2px 5px rgba(0,0,0,0.5)' }}>
                    <div className="absolute bottom-[-10%] left-0 w-full h-[15%] bg-slate-300 clip-path-polygon-[50%_100%,0_0,100%_0]" style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }} />
                </div>
            </div>

            {/* Scales of Justice */}
            <div className="absolute right-[5%] top-[10%] w-[30%] h-[50%]" style={{ filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.6))' }}>
                <div className="relative w-full h-full flex flex-col items-center">
                    {/* Scale Center Pillar */}
                    <div className="w-[10%] h-[80%] bg-gradient-to-r from-slate-600 via-slate-400 to-slate-700 rounded-t-full border border-slate-500 z-10">
                         {/* Details on pillar */}
                         <div className="w-[120%] h-[5%] bg-slate-400 mx-[-10%] mt-[20%] rounded-sm" />
                         <div className="w-[120%] h-[5%] bg-slate-400 mx-[-10%] mt-[40%] rounded-sm" />
                    </div>
                    {/* Scale Base */}
                    <div className="w-[60%] h-[15%] bg-gradient-to-r from-slate-600 via-slate-400 to-slate-700 rounded-full border-b-[3px] border-slate-500 -mt-[5%]" />
                    <div className="w-[80%] h-[10%] bg-gradient-to-r from-slate-700 via-slate-500 to-slate-800 rounded-full border-b-[4px] border-slate-600 -mt-[2%]" />
                    
                    {/* Scale Beam */}
                    <div className="absolute top-[10%] w-[80%] h-[5%] bg-gradient-to-r from-slate-500 via-slate-300 to-slate-600 rounded-full border border-slate-400 z-10" />
                    
                    {/* Left Pan */}
                    <div className="absolute top-[15%] left-[5%] w-[25%] h-[60%] flex flex-col items-center">
                        <div className="flex justify-between w-full h-[80%]">
                            <div className="w-[2px] h-full bg-slate-500 origin-top rotate-[15deg]" />
                            <div className="w-[2px] h-full bg-slate-500 origin-top rotate-[-15deg]" />
                        </div>
                        <div className="w-[120%] h-[20%] bg-gradient-to-b from-slate-500 to-slate-700 rounded-b-full border border-slate-400 -mt-[10%]" />
                    </div>

                    {/* Right Pan */}
                    <div className="absolute top-[15%] right-[5%] w-[25%] h-[60%] flex flex-col items-center">
                        <div className="flex justify-between w-full h-[80%]">
                            <div className="w-[2px] h-full bg-slate-500 origin-top rotate-[15deg]" />
                            <div className="w-[2px] h-full bg-slate-500 origin-top rotate-[-15deg]" />
                        </div>
                        <div className="w-[120%] h-[20%] bg-gradient-to-b from-slate-500 to-slate-700 rounded-b-full border border-slate-400 -mt-[10%]" />
                    </div>
                </div>
            </div>

            {/* Ambient glows */}
            <div className="absolute top-[60%] left-[20%] w-20 h-20 rounded-full opacity-20 pointer-events-none" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />
            <div className="absolute top-[20%] right-[20%] w-30 h-30 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #60a5fa 0%, transparent 70%)' }} />
            
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8)' }} />
        </div>
    );
}

export function AIThreatDetectionIllustration() {
    return (
        <div className="relative w-full aspect-[16/10] overflow-hidden" style={{ background: 'linear-gradient(145deg, #040815 0%, #081225 50%, #060d1b 100%)' }}>
            {/* Background Grid & Particles */}
            <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.6) 1px, transparent 1px)', backgroundSize: '15px 15px', transform: 'perspective(500px) rotateX(60deg) scale(2.5)', transformOrigin: 'bottom' }} />
            
            {/* Desktop Monitor */}
            <div className="absolute left-[8%] bottom-[15%] w-[55%] h-[60%] flex flex-col items-center">
                {/* Monitor Screen */}
                <div className="w-full h-[85%] bg-slate-900 rounded-md border-2 border-slate-700 p-1.5 flex flex-col relative overflow-hidden" style={{ transform: 'perspective(600px) rotateY(10deg)', transformOrigin: 'left', boxShadow: '10px 10px 20px rgba(0,0,0,0.6), inset 0 0 10px rgba(59,130,246,0.1)' }}>
                    {/* Top Bar */}
                    <div className="flex items-center gap-1 mb-1 pb-1 border-b border-blue-500/20">
                        <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/></svg>
                        <span className="text-[3.5px] text-blue-300 font-bold uppercase tracking-wider">AI Threat Detection</span>
                    </div>

                    {/* Main Interface */}
                    <div className="flex-1 flex gap-1.5">
                        {/* Node Network Map */}
                        <div className="flex-[2] border border-blue-500/20 rounded bg-slate-800/50 relative overflow-hidden flex items-center justify-center p-1">
                            <div className="absolute inset-0 bg-blue-500/5" />
                            {/* Simple network visualization */}
                            <svg viewBox="0 0 100 60" className="w-full h-full opacity-60">
                                <path d="M20,30 L40,15 L60,25 L80,10 L70,40 L50,50 L30,45 Z" stroke="#3b82f6" fill="none" strokeWidth="0.5" opacity="0.5" />
                                <path d="M40,15 L70,40 M60,25 L30,45 M20,30 L50,50" stroke="#3b82f6" fill="none" strokeWidth="0.5" opacity="0.5" />
                                {/* Nodes */}
                                <circle cx="20" cy="30" r="1.5" fill="#60a5fa" />
                                <circle cx="40" cy="15" r="2" fill="#ef4444" className="animate-pulse" />
                                <circle cx="60" cy="25" r="1.5" fill="#60a5fa" />
                                <circle cx="80" cy="10" r="1.5" fill="#60a5fa" />
                                <circle cx="70" cy="40" r="2" fill="#ef4444" className="animate-pulse" />
                                <circle cx="50" cy="50" r="1.5" fill="#60a5fa" />
                                <circle cx="30" cy="45" r="1.5" fill="#60a5fa" />
                            </svg>
                        </div>
                        
                        {/* Right side panels */}
                        <div className="flex-1 flex flex-col gap-1.5">
                            {/* Anomaly Score Donut */}
                            <div className="flex-1 border border-blue-500/20 rounded bg-slate-800/50 flex flex-col items-center justify-center relative p-1">
                                <p className="absolute top-1 left-1 text-[2.5px] text-blue-300/70 uppercase font-bold">Anomaly Score</p>
                                <div className="relative w-8 h-8 flex items-center justify-center mt-2">
                                    <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#1e3a8a" strokeWidth="3" />
                                        <path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="92, 100" />
                                    </svg>
                                    <span className="absolute text-[4px] font-bold text-blue-200">92%</span>
                                </div>
                            </div>
                            {/* Traffic Analysis Chart */}
                            <div className="flex-1 border border-blue-500/20 rounded bg-slate-800/50 p-1 flex flex-col relative">
                                <p className="text-[2.5px] text-blue-300/70 uppercase font-bold mb-1">Traffic Analysis</p>
                                <div className="flex-1 flex items-end">
                                    <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible">
                                        <polyline points="0,35 10,25 20,30 30,10 40,20 50,5 60,15 70,2 80,10 90,0 100,20" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Detected Anomalies Table */}
                    <div className="h-[25%] mt-1.5 border border-blue-500/20 rounded bg-slate-800/50 p-1">
                        <p className="text-[2.5px] text-blue-300/70 uppercase font-bold mb-0.5">Detected Anomalies</p>
                        <div className="flex text-[2px] text-blue-400/60 uppercase border-b border-blue-500/20 pb-0.5 mb-0.5">
                            <span className="flex-[2]">Type</span><span className="flex-1">Severity</span><span className="flex-1">Status</span>
                        </div>
                        <div className="flex text-[2px] text-blue-200 mb-0.5 items-center">
                            <span className="flex-[2]">Data Exfiltration</span><span className="flex-1 flex items-center gap-0.5"><span className="w-0.5 h-0.5 rounded-full bg-red-500"/>High</span><span className="flex-1 text-red-400">Blocked</span>
                        </div>
                        <div className="flex text-[2px] text-blue-200 items-center">
                            <span className="flex-[2]">Port Scan</span><span className="flex-1 flex items-center gap-0.5"><span className="w-0.5 h-0.5 rounded-full bg-yellow-400"/>Medium</span><span className="flex-1 text-yellow-400">Monitoring</span>
                        </div>
                    </div>
                </div>
                
                {/* Monitor Stand */}
                <div className="w-[15%] h-[10%] bg-gradient-to-b from-slate-700 to-slate-900 border-x border-slate-600 relative z-[-1]" style={{ transform: 'perspective(600px) rotateY(10deg)', transformOrigin: 'left' }} />
                <div className="w-[30%] h-[5%] bg-slate-800 rounded-full border-t border-slate-600 drop-shadow-xl" style={{ transform: 'perspective(600px) rotateY(10deg)', transformOrigin: 'left' }} />
            </div>

            {/* AI Engine (Brain + Shield) */}
            <div className="absolute right-[10%] top-[10%] w-[25%] h-[80%] flex flex-col items-center justify-between py-4">
                {/* Glowing Brain */}
                <div className="w-[60%] aspect-square relative flex flex-col items-center justify-center">
                    <svg viewBox="0 0 24 24" className="w-full h-full stroke-blue-400/80 drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]" fill="none" strokeWidth="0.5">
                        <path d="M12 4c-3-2-6-1-8 2-1.5 2.5-1 6 1 8 1 1 2.5 1.5 4 2.5 1.5 1 2 2 2 3.5 0-1.5.5-2.5 2-3.5 1.5-1 3-1.5 4-2.5 2-2 2.5-5.5 1-8-2-3-5-4-8-2z" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M12 4v16M8 8c0 1-1 1-1 2s1 1 1 2M16 8c0 1 1 1 1 2s-1 1-1 2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 13.5c1 .5 2 1 3 2 1-1 2-1.5 3-2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <p className="absolute -bottom-4 text-[4px] font-bold text-blue-300 tracking-widest uppercase">AI Engine</p>
                </div>

                {/* Connection Line */}
                <div className="flex-1 w-px bg-gradient-to-b from-blue-400/50 to-blue-500/50 border-l border-blue-400/20 border-dashed my-6" />

                {/* Glowing Shield on Pedestal */}
                <div className="w-[80%] aspect-square relative flex flex-col items-center justify-end">
                    {/* Shield */}
                    <div className="w-[80%] aspect-square absolute bottom-[30%] left-1/2 -translate-x-1/2 flex items-center justify-center z-10">
                        <svg viewBox="0 0 24 24" className="w-full h-full stroke-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,1)]" fill="rgba(30,58,138,0.4)" strokeWidth="1">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                            <path d="M9 12l2 2 4-4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="stroke-white" />
                        </svg>
                    </div>
                    {/* Pedestal Base */}
                    <div className="w-full h-[20%] relative">
                        <div className="absolute bottom-0 w-full h-full rounded-[50%] bg-gradient-to-b from-slate-700 to-slate-900 border border-slate-600" />
                        <div className="absolute bottom-[20%] w-[80%] left-[10%] h-[80%] rounded-[50%] bg-blue-900/50 border border-blue-500/50" style={{ boxShadow: '0 0 15px rgba(59,130,246,0.6)' }} />
                        {/* Rings */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-[50%] border border-blue-500/30 -z-10" />
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] rounded-[50%] border border-blue-500/10 -z-10" />
                    </div>
                </div>
            </div>

            {/* Ambient glows */}
            <div className="absolute bottom-[20%] left-[30%] w-32 h-32 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 40px rgba(0,0,0,0.8)' }} />
        </div>
    );
}

export function SecurityArchitectureIllustration() {
    return (
        <div className="relative w-full aspect-[16/10] overflow-hidden" style={{ background: 'linear-gradient(145deg, #020617 0%, #081225 50%, #040a15 100%)' }}>
            {/* Background Grid & Connecting Lines */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.6) 1px, transparent 1px)', backgroundSize: '20px 20px', transform: 'perspective(500px) rotateX(60deg) scale(2.5)', transformOrigin: 'bottom' }} />
            
            {/* Glowing lines connecting elements */}
            <svg viewBox="0 0 100 60" className="absolute inset-0 w-full h-full stroke-blue-500/30" fill="none" strokeWidth="0.2">
                <path d="M50 30 L50 15" strokeDasharray="1 1" />
                <path d="M50 30 L30 20" />
                <path d="M50 30 L70 15" />
                <path d="M50 30 L25 40" />
                <path d="M50 30 L75 35" />
                <path d="M50 30 L80 25" />
            </svg>

            {/* Center: Shield on Pedestal */}
            <div className="absolute top-[20%] left-[35%] w-[30%] h-[50%] flex flex-col items-center justify-center z-20">
                {/* Shield */}
                <div className="w-[80%] aspect-[4/5] relative flex items-center justify-center" style={{ filter: 'drop-shadow(0 0 20px rgba(59,130,246,0.6))' }}>
                    <svg viewBox="0 0 24 24" className="w-full h-full stroke-blue-300 drop-shadow-[0_0_10px_rgba(147,197,253,0.8)]" fill="rgba(15,23,42,0.8)" strokeWidth="0.5">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeWidth="1" className="stroke-blue-400" />
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="url(#shield-grad)" />
                        <defs>
                            <linearGradient id="shield-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="rgba(59,130,246,0.2)" />
                                <stop offset="100%" stopColor="rgba(30,58,138,0.6)" />
                            </linearGradient>
                        </defs>
                    </svg>
                    {/* Inner glowing edge */}
                    <svg viewBox="0 0 24 24" className="absolute w-[80%] h-[80%] stroke-blue-400/50" fill="none" strokeWidth="0.5">
                        <path d="M12 20s6-3 6-8V6l-6-2-6 2v6c0 5 6 8 6 8z" />
                    </svg>
                    {/* Padlock Icon */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] aspect-[3/4] flex flex-col items-center">
                        <div className="w-[60%] h-[40%] rounded-t-full border-2 border-b-0 border-blue-300 shadow-[0_0_5px_#93c5fd]" />
                        <div className="w-full h-[60%] bg-blue-400 rounded-sm shadow-[0_0_10px_#60a5fa] flex items-center justify-center">
                            <div className="w-1.5 h-2 bg-blue-900 rounded-sm" />
                        </div>
                    </div>
                </div>
                
                {/* Pedestal */}
                <div className="absolute bottom-[-10%] w-[120%] h-[30%] flex flex-col items-center" style={{ transform: 'perspective(400px) rotateX(60deg)' }}>
                    <div className="w-full h-full border border-blue-400/50 bg-blue-900/20 rounded shadow-[0_0_30px_rgba(59,130,246,0.4)] flex items-center justify-center relative">
                         {/* Inner rings */}
                         <div className="w-[80%] h-[80%] border border-blue-300/30 rounded flex items-center justify-center">
                             <div className="w-[60%] h-[60%] border-2 border-blue-400/80 rounded bg-blue-500/20 shadow-[0_0_15px_#3b82f6]" />
                         </div>
                    </div>
                    <div className="w-full h-[20%] bg-blue-950/80 rounded-b border-b border-x border-blue-500/30" />
                </div>
            </div>

            {/* Top: Cloud Panel */}
            <div className="absolute top-[10%] left-[42%] w-[16%] h-[12%] z-10 border border-blue-400/30 rounded-md bg-slate-900/80 backdrop-blur-sm flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                <svg viewBox="0 0 24 24" className="w-[60%] h-[60%] stroke-blue-400 fill-blue-900/40" strokeWidth="1">
                    <path d="M17.5 19c2.485 0 4.5-2.015 4.5-4.5 0-2.34-1.782-4.269-4.068-4.484C17.65 6.723 15.044 4 12 4c-2.88 0-5.264 2.195-5.698 5.011C3.882 9.208 2 11.39 2 14c0 2.761 2.239 5 5 5h10.5z" />
                </svg>
                <div className="absolute w-[20%] aspect-[3/4] flex flex-col items-center mt-1">
                    <div className="w-[60%] h-[40%] rounded-t-full border border-b-0 border-blue-300" />
                    <div className="w-full h-[60%] bg-blue-400 rounded-[1px]" />
                </div>
            </div>

            {/* Left: Firewall Panel */}
            <div className="absolute top-[20%] left-[5%] w-[25%] h-[25%] z-10 border border-blue-400/30 rounded-md bg-slate-900/80 backdrop-blur-sm p-1 shadow-[0_0_15px_rgba(59,130,246,0.2)]" style={{ transform: 'perspective(400px) rotateY(15deg)' }}>
                <p className="text-[3px] text-blue-300 font-bold uppercase tracking-wider mb-1 px-1">Firewall</p>
                <div className="w-full h-[70%] border border-blue-500/20 bg-slate-800 rounded relative overflow-hidden flex flex-col justify-end">
                    {/* Brick Pattern */}
                    <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'linear-gradient(90deg, transparent 50%, rgba(59,130,246,0.5) 50%), linear-gradient(rgba(59,130,246,0.5) 50%, transparent 50%)', backgroundSize: '10px 4px' }} />
                    {/* Flame */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] aspect-square flex items-center justify-center z-10">
                         <svg viewBox="0 0 24 24" className="w-full h-full fill-blue-400 drop-shadow-[0_0_5px_#60a5fa]">
                            <path d="M12 2c0 0-4.5 4.5-4.5 9.5a4.5 4.5 0 0 0 9 0C16.5 6.5 12 2 12 2zm-1 12.5c-.83 0-1.5-.67-1.5-1.5 0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5c0 .83-.67 1.5-1.5 1.5z" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* Right Top: Secure Network */}
            <div className="absolute top-[15%] right-[5%] w-[25%] h-[20%] z-10 border border-blue-400/30 rounded-md bg-slate-900/80 backdrop-blur-sm p-1 shadow-[0_0_15px_rgba(59,130,246,0.2)]" style={{ transform: 'perspective(400px) rotateY(-15deg)' }}>
                <p className="text-[3px] text-blue-300 font-bold uppercase tracking-wider mb-0.5 px-1">Secure Network</p>
                <div className="w-full h-[75%] border border-blue-500/20 bg-slate-800 rounded flex items-center justify-center">
                    <svg viewBox="0 0 100 50" className="w-full h-full">
                        <path d="M20,25 L40,10 L60,25 L80,10 M40,40 L60,25 L80,40 M20,25 L40,40" stroke="#3b82f6" fill="none" strokeWidth="0.5" opacity="0.6" />
                        <circle cx="20" cy="25" r="2.5" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="0.5" />
                        <circle cx="40" cy="10" r="2.5" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="0.5" />
                        <circle cx="60" cy="25" r="2.5" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="0.5" />
                        <circle cx="80" cy="10" r="2.5" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="0.5" />
                        <circle cx="40" cy="40" r="2.5" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="0.5" />
                        <circle cx="80" cy="40" r="2.5" fill="#1e3a8a" stroke="#60a5fa" strokeWidth="0.5" />
                    </svg>
                </div>
            </div>

            {/* Bottom Left: Threat Prevention */}
            <div className="absolute bottom-[10%] left-[5%] w-[25%] h-[25%] z-10 border border-blue-400/30 rounded-md bg-slate-900/80 backdrop-blur-sm p-1 shadow-[0_0_15px_rgba(59,130,246,0.2)]" style={{ transform: 'perspective(400px) rotateY(15deg)' }}>
                <p className="text-[3px] text-blue-300 font-bold uppercase tracking-wider mb-1 px-1">Threat Prevention</p>
                <div className="w-full h-[70%] border border-blue-500/20 bg-slate-800 rounded flex items-end overflow-hidden p-0.5 relative">
                     {/* Background grid */}
                     <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,1) 1px, transparent 1px)', backgroundSize: '5px 5px' }} />
                     {/* Chart line */}
                     <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible z-10">
                         <polyline points="0,35 15,25 30,30 45,15 60,25 75,5 90,20 100,10" fill="none" stroke="#60a5fa" strokeWidth="1.5" style={{ filter: 'drop-shadow(0 2px 2px rgba(59,130,246,0.8))' }} />
                         <polygon points="0,40 0,35 15,25 30,30 45,15 60,25 75,5 90,20 100,10 100,40" fill="url(#chart-grad)" opacity="0.4" />
                         <defs>
                             <linearGradient id="chart-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                                 <stop offset="0%" stopColor="#3b82f6" />
                                 <stop offset="100%" stopColor="transparent" />
                             </linearGradient>
                         </defs>
                     </svg>
                </div>
            </div>

            {/* Bottom Right: Zero Trust Access */}
            <div className="absolute bottom-[10%] left-[65%] w-[22%] h-[30%] z-10 border border-blue-400/30 rounded-md bg-slate-900/80 backdrop-blur-sm p-1 shadow-[0_0_15px_rgba(59,130,246,0.2)]" style={{ transform: 'perspective(400px) rotateY(-15deg)' }}>
                <p className="text-[3px] text-blue-300 font-bold uppercase tracking-wider mb-2 px-1">Zero Trust Access</p>
                <div className="w-full h-[70%] border border-blue-500/20 bg-slate-800 rounded flex flex-col items-center justify-center relative">
                    <svg viewBox="0 0 24 24" className="w-[60%] h-[60%] stroke-blue-400/60" fill="none" strokeWidth="1">
                        <circle cx="12" cy="8" r="4" />
                        <path d="M4 20c0-4 4-6 8-6s8 2 8 6" />
                    </svg>
                    {/* Checkmark Badge */}
                    <div className="absolute bottom-[10%] right-[20%] w-[35%] aspect-square bg-blue-600 rounded-full border border-blue-300 flex items-center justify-center shadow-[0_0_10px_#3b82f6]">
                         <svg viewBox="0 0 24 24" className="w-[80%] h-[80%] stroke-white" fill="none" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                             <path d="M20 6L9 17l-5-5"/>
                         </svg>
                    </div>
                </div>
            </div>

            {/* Server Rack Background Right */}
            <div className="absolute top-[35%] right-[5%] w-[15%] h-[40%] bg-slate-900 border border-slate-700 rounded flex flex-col p-1 opacity-80" style={{ transform: 'perspective(400px) rotateY(-20deg)', boxShadow: 'inset 0 0 10px rgba(0,0,0,0.8)' }}>
                {[...Array(4)].map((_, i) => (
                    <div key={i} className="flex-1 border-b border-slate-800 p-0.5 flex items-center justify-between">
                        <div className="flex gap-0.5">
                            <div className="w-1 h-0.5 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: `${i*0.2}s` }} />
                            <div className="w-0.5 h-0.5 bg-green-500 rounded-full" />
                            <div className="w-0.5 h-0.5 bg-blue-400 rounded-full" />
                        </div>
                        <div className="w-4 h-1 bg-slate-800 rounded flex gap-0.5 px-0.5 items-center">
                            <div className="w-0.5 h-0.5 rounded-full bg-slate-600" />
                            <div className="w-0.5 h-0.5 rounded-full bg-slate-600" />
                        </div>
                    </div>
                ))}
            </div>

            {/* Ambient Lighting */}
            <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-48 h-48 rounded-full opacity-15 pointer-events-none" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8)' }} />
        </div>
    );
}

export function DefaultServiceVisual() {
    return (
        <div className="relative w-full aspect-[16/10] bg-slate-100 dark:bg-slate-700 overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-300 dark:text-slate-400 bg-gradient-to-br from-[#f0f5ff] dark:from-slate-700 to-blue-100 dark:to-slate-800 group-hover:scale-105 transition-transform duration-700">
                <svg className="w-10 h-10 mb-2 text-blue-200 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="font-semibold text-[10px] tracking-widest uppercase opacity-70">Image Space</span>
            </div>
        </div>
    );
}
