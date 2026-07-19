import React from 'react';

export function Footer() {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/5 pt-16 pb-8 mt-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="text-white font-semibold tracking-wide text-lg mb-4">
              Brand
            </div>
            <p className="text-neutral-400 text-sm font-light leading-relaxed">
              Building the next generation of digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white text-sm font-medium mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-neutral-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white text-sm font-medium mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-neutral-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white text-sm font-medium mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-neutral-400 font-light">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs font-light">
            © {new Date().getFullYear()} Brand Inc. All rights reserved.
          </p>
          <div className="flex gap-6 text-neutral-500 text-xs font-light">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
