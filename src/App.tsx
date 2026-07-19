/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SplineSceneBasic } from "@/components/ui/demo";
import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer-section";
import { FlyingDrone } from "@/components/ui/flying-drone";
import { AboutSection } from "@/components/ui/about-section";
import { ProductsSection } from "@/components/ui/products-section";
import { ServicesSection } from "@/components/ui/services-section";
import { SchemesSection } from "@/components/ui/schemes-section";
import { CertificationsSection } from "@/components/ui/certifications-section";
import { ThemeProvider } from "@/lib/theme-context";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#f4f7ff] dark:bg-slate-950 text-blue-950 dark:text-slate-100 selection:bg-blue-300 selection:text-blue-900 dark:selection:bg-blue-700 dark:selection:text-white flex flex-col items-center relative overflow-x-hidden font-sans transition-colors duration-500">
        <FlyingDrone />
        
        {/* Premium Background Effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.12)_0%,transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08)_0%,transparent_70%)]" />
          <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-blue-100/60 via-blue-50/30 to-transparent dark:from-blue-950/40 dark:via-slate-900/20 dark:to-transparent" />
        </div>

        <Navbar />
        
        <main className="w-full flex flex-col items-center relative z-10">
          <div id="home" className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-24">
            <SplineSceneBasic />
          </div>
          
          <div id="about" className="w-full"><AboutSection /></div>
          <div id="products" className="w-full"><ProductsSection /></div>
          <div id="services" className="w-full"><ServicesSection /></div>
          <div id="industries" className="w-full"><SchemesSection /></div>
          <CertificationsSection />
          

        </main>

        <div id="contact" className="w-full"><Footer /></div>
      </div>
    </ThemeProvider>
  );
}
