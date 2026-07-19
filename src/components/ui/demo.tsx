'use client'

import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
 
export function SplineSceneBasic() {
  return (
    <div className="w-full min-h-[700px] md:min-h-[600px] md:h-[600px] relative overflow-hidden flex flex-col md:flex-row rounded-3xl border border-blue-100 dark:border-slate-700 bg-white/60 dark:bg-slate-900/60 backdrop-blur-md shadow-2xl shadow-blue-900/10 dark:shadow-black/30">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20 opacity-50"
        fill="rgb(59, 130, 246)"
      />
      
      <div className="flex flex-col md:flex-row w-full flex-1 relative z-10">
        {/* Left content */}
        <div className="flex-none md:flex-1 p-8 pt-12 pb-4 md:p-16 md:pt-16 md:pb-16 relative z-10 flex flex-col justify-center items-center text-center md:items-start md:text-left">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-b from-blue-950 via-blue-900 to-blue-700 dark:from-white dark:via-blue-100 dark:to-blue-300 tracking-tight leading-[1.1]"
          >
            AI-powered Forensic<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">Intelligence, Security Systems</span><br className="hidden md:block" />
            & digital innovation
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
          >
            <button className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-blue-600 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(37,99,235,0.3)]">
              <span className="relative z-10">Explore products</span>
              <ArrowRight className="relative z-10 size-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="px-8 py-3.5 text-sm font-medium text-blue-900 dark:text-blue-100 bg-white/80 dark:bg-slate-800/80 rounded-full border border-blue-200 dark:border-slate-600 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors shadow-sm">
              Talk to our experts
            </button>
          </motion.div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative min-h-[450px] sm:min-h-[500px] md:min-h-0 pointer-events-none md:pointer-events-auto">
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 dark:from-slate-900/40 via-transparent to-transparent z-10 pointer-events-none md:hidden" />
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}
