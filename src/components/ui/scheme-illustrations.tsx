'use client';
import React from 'react';

export function MakeInIndiaIllustration() {
    return (
        <div className="relative w-full aspect-[4/3] overflow-hidden" style={{ background: 'linear-gradient(145deg, #050b14 0%, #081122 50%, #040810 100%)' }}>
            {/* Background Grid */}
            <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)', backgroundSize: '15px 15px', transform: 'perspective(500px) rotateX(60deg) scale(2.5)', transformOrigin: 'bottom' }} />

            {/* Top Left: India Map & Flag */}
            <div className="absolute top-[10%] left-[5%] w-[35%] h-[40%]">
                {/* India Map Dotted Silhouette (Simplified abstract shape) */}
                <svg viewBox="0 0 100 100" className="absolute top-0 right-0 w-[70%] h-full fill-blue-500/30 drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]">
                    <path d="M40,10 Q50,0 60,10 L70,20 Q80,30 75,40 L65,50 L70,60 Q60,80 50,90 Q40,80 30,60 L35,50 L25,40 Q20,30 30,20 Z" />
                </svg>
                {/* Flagpole & Flag */}
                <div className="absolute left-[10%] bottom-0 h-[80%] flex items-end">
                    {/* Pole */}
                    <div className="w-1 h-full bg-gradient-to-r from-slate-400 to-slate-600 rounded-t-full shadow-lg relative z-10">
                        <div className="absolute -bottom-1 -left-2 w-5 h-2 bg-slate-700 rounded-full border border-slate-500" />
                    </div>
                    {/* Flag */}
                    <div className="absolute left-[100%] top-[10%] w-16 h-10 flex flex-col rounded-r-sm overflow-hidden border border-white/10 shadow-[0_5px_15px_rgba(0,0,0,0.5)]" style={{ transformOrigin: 'left', transform: 'perspective(200px) rotateY(15deg) skewY(-5deg)' }}>
                        <div className="flex-1 bg-[#FF9933]" />
                        <div className="flex-1 bg-white flex items-center justify-center relative overflow-hidden">
                            <svg viewBox="0 0 24 24" className="w-4 h-4 text-[#000080]" fill="none" stroke="currentColor" strokeWidth="1"><circle cx="12" cy="12" r="5"/><path d="M12 7v10M7 12h10M8.5 8.5l7 7M8.5 15.5l7-7"/></svg>
                        </div>
                        <div className="flex-1 bg-[#138808]" />
                    </div>
                </div>
            </div>

            {/* Top Center: Make in India Logo */}
            <div className="absolute top-[10%] left-[45%] w-[25%] aspect-square rounded-full border border-blue-400/50 flex flex-col items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.3),inset_0_0_10px_rgba(59,130,246,0.2)]">
                {/* Abstract Lion Silhouette */}
                <svg viewBox="0 0 24 24" className="w-[60%] h-[40%] fill-blue-400 drop-shadow-[0_0_5px_rgba(96,165,250,0.8)]">
                    <path d="M18,16 L18,14 Q19,12 17,10 Q16,8 14,10 L12,12 L10,10 Q8,8 7,10 Q5,12 6,14 L6,16 Z" />
                    <circle cx="15" cy="11" r="0.5" fill="#0f172a" />
                    <circle cx="9" cy="11" r="0.5" fill="#0f172a" />
                    <path d="M7,12 Q12,14 17,12 L17,14 Q12,16 7,14 Z" />
                </svg>
                <div className="text-center mt-1">
                    <p className="text-[4px] font-bold text-blue-200 tracking-wider">MADE IN</p>
                    <p className="text-[6px] font-black text-blue-300 tracking-widest leading-none drop-shadow-[0_0_2px_rgba(59,130,246,0.8)]">INDIA</p>
                    <div className="flex justify-center gap-0.5 mt-0.5">
                        {[1,2,3].map(i=><svg key={i} viewBox="0 0 24 24" className="w-1.5 h-1.5 fill-blue-400"><path d="M12 2l2.4 7.4h7.6l-6 4.6 2.3 7.4-6.3-4.6-6.3 4.6 2.3-7.4-6-4.6h7.6z"/></svg>)}
                    </div>
                </div>
            </div>

            {/* Top Right: Robotic Arm/Factory context (Abstract) */}
            <div className="absolute top-[10%] right-[5%] w-[25%] h-[35%] opacity-20 border border-blue-500/30 bg-slate-900/50 rounded flex items-center justify-center p-1" style={{ transform: 'perspective(400px) rotateY(-20deg)' }}>
                <svg viewBox="0 0 50 50" className="w-full h-full stroke-blue-300" fill="none" strokeWidth="1">
                    <path d="M10,50 L10,30 L25,15 L40,25 L40,35" strokeWidth="2" />
                    <circle cx="10" cy="30" r="3" />
                    <circle cx="25" cy="15" r="3" />
                    <circle cx="40" cy="25" r="3" />
                    <path d="M38,35 L42,35 L40,40 Z" fill="#60a5fa" className="animate-pulse" />
                </svg>
            </div>

            {/* Bottom Section (Hardware & Drone) */}

            {/* Industrial PC / Server */}
            <div className="absolute left-[10%] bottom-[20%] w-[35%] h-[25%]" style={{ transform: 'perspective(500px) rotateX(60deg) rotateZ(-15deg)' }}>
                <div className="w-full h-full bg-slate-800 rounded shadow-[15px_15px_20px_rgba(0,0,0,0.8)] border border-slate-600 relative">
                    {/* Heatsink top */}
                    <div className="absolute inset-0 flex flex-col justify-evenly px-1">
                        {[...Array(8)].map((_, i) => <div key={i} className="w-full h-[2px] bg-slate-900" />)}
                    </div>
                    {/* Front Panel (Ports) */}
                    <div className="absolute bottom-[-20%] left-0 w-full h-[20%] bg-slate-700 rounded-b border border-slate-600 flex items-center px-2 gap-1" style={{ transformOrigin: 'top', transform: 'rotateX(-90deg)' }}>
                        {[...Array(4)].map((_, i) => <div key={i} className="w-3 h-2 bg-black rounded-sm border border-slate-500 flex items-center justify-center"><div className="w-2 h-0.5 bg-blue-500" /></div>)}
                        <div className="w-2 h-2 rounded-full bg-green-500 ml-auto shadow-[0_0_5px_#22c55e]" />
                    </div>
                </div>
            </div>

            {/* PCB / Circuit Board */}
            <div className="absolute left-[35%] bottom-[5%] w-[25%] h-[20%]" style={{ transform: 'perspective(500px) rotateX(60deg) rotateZ(10deg)' }}>
                <div className="w-full h-full bg-[#0a1f15] border border-[#166534] rounded shadow-[10px_10px_15px_rgba(0,0,0,0.8)] p-1 relative overflow-hidden">
                    {/* Traces */}
                    <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 2px, #22c55e 2px, #22c55e 3px)' }} />
                    {/* Chips */}
                    <div className="absolute top-[20%] left-[20%] w-[40%] h-[40%] bg-slate-900 border border-slate-700 shadow-inner flex items-center justify-center">
                        <span className="text-[3px] text-slate-500">IC1</span>
                    </div>
                    <div className="absolute top-[10%] right-[10%] w-[20%] h-[30%] bg-slate-800 border border-slate-600" />
                    <div className="absolute bottom-[10%] left-[10%] w-[30%] h-[20%] bg-slate-800 border border-slate-600" />
                    {/* Connectors */}
                    <div className="absolute bottom-0 right-0 w-[40%] h-[15%] bg-[#b8860b] flex justify-evenly">
                        {[...Array(6)].map((_, i) => <div key={i} className="w-[10%] h-full bg-[#daa520]" />)}
                    </div>
                </div>
            </div>

            {/* Quadcopter Drone */}
            <div className="absolute right-[5%] bottom-[25%] w-[40%] h-[30%] drop-shadow-2xl">
                {/* Central Body */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30%] h-[20%] bg-gradient-to-r from-slate-700 via-slate-600 to-slate-800 rounded-full shadow-[0_5px_10px_rgba(0,0,0,0.8)] border border-slate-500 relative z-10">
                    <div className="absolute top-0 w-full h-1/2 bg-white/10 rounded-t-full" />
                </div>
                
                {/* Arms & Rotors */}
                {[
                    { arm: 'top-[40%] left-[20%] w-[30%] rotate-[-30deg]', rot: 'top-[30%] left-[10%]' },
                    { arm: 'top-[40%] right-[20%] w-[30%] rotate-[30deg]', rot: 'top-[30%] right-[10%]' },
                    { arm: 'bottom-[40%] left-[20%] w-[30%] rotate-[30deg]', rot: 'bottom-[30%] left-[10%]' },
                    { arm: 'bottom-[40%] right-[20%] w-[30%] rotate-[-30deg]', rot: 'bottom-[30%] right-[10%]' }
                ].map((pos, i) => (
                    <React.Fragment key={i}>
                        {/* Arm */}
                        <div className={`absolute h-[2px] bg-slate-600 border border-slate-700 origin-center ${pos.arm}`} />
                        {/* Rotor */}
                        <div className={`absolute w-[20%] aspect-[2/1] border border-slate-600 rounded-[50%] ${pos.rot}`}>
                            <div className="w-full h-full bg-slate-800/80 rounded-[50%] animate-spin" style={{ animationDuration: '0.05s' }}>
                                <div className="w-full h-px bg-slate-400 absolute top-1/2 -translate-y-1/2" />
                            </div>
                        </div>
                    </React.Fragment>
                ))}

                {/* Drone Camera Payload (EO/IR) */}
                <div className="absolute bottom-[20%] left-1/2 -translate-x-1/2 w-[15%] aspect-square bg-slate-800 rounded-b border border-slate-600 z-0 flex flex-col items-center justify-end p-0.5">
                    <div className="w-full h-1/2 bg-black rounded-full border border-slate-700 flex items-center justify-evenly">
                        <div className="w-[30%] aspect-square rounded-full bg-blue-900 shadow-[inset_0_0_2px_#3b82f6]" />
                        <div className="w-[30%] aspect-square rounded-full bg-red-900 shadow-[inset_0_0_2px_#ef4444]" />
                    </div>
                </div>
            </div>

            {/* Standalone Sensor / Camera Module */}
            <div className="absolute right-[15%] bottom-[10%] w-[10%] aspect-square drop-shadow-xl z-10" style={{ transform: 'perspective(300px) rotateY(-20deg)' }}>
                <div className="w-full h-full bg-slate-800 rounded-t-lg border border-slate-600 flex flex-col items-center justify-center p-1 relative">
                    <div className="flex gap-1">
                        <div className="w-3 h-3 rounded-full bg-black border border-slate-700 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-800" />
                        </div>
                        <div className="w-3 h-3 rounded-full bg-black border border-slate-700 flex items-center justify-center">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-800" />
                        </div>
                    </div>
                    {/* Base */}
                    <div className="absolute bottom-[-10%] w-[120%] h-[20%] bg-slate-900 rounded-full border border-slate-700" />
                </div>
            </div>

            {/* Ambient Lighting */}
            <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-40 h-40 rounded-full opacity-10 pointer-events-none" style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }} />
            <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8)' }} />
        </div>
    );
}

export function DefaultSchemeVisual() {
    return (
        <div className="relative w-full aspect-[4/3] bg-white dark:bg-slate-700 overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-blue-300 dark:text-slate-400 bg-gradient-to-br from-blue-50 dark:from-slate-700 to-[#f0f5ff] dark:to-slate-800 group-hover:scale-105 transition-transform duration-700">
                <svg className="w-10 h-10 mb-2 text-blue-200 dark:text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                </svg>
                <span className="font-semibold text-[10px] tracking-widest uppercase opacity-70">Image Space</span>
            </div>
        </div>
    );
}
