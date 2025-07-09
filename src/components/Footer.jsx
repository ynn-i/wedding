import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-4">
        <div className="text-center md:text-left">
          <p className="font-serif text-lg">Contact us: <a href="mailto:wedding@email.com" className="underline">wedding@email.com</a></p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-accent transition" aria-label="Instagram">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a href="#" className="hover:text-accent transition" aria-label="Facebook">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M18 2h-3a4 4 0 0 0-4 4v3H7v4h4v8h4v-8h3l1-4h-4V6a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a href="#" className="hover:text-accent transition" aria-label="Twitter">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 22.4 1s-4.18 2-6.29 2.13A4.48 4.48 0 0 0 3 7.5a12.94 12.94 0 0 1-9-4.57s-4 9 5 13a13.07 13.07 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
          </a>
        </div>
      </div>
      <p className="text-center mt-4 text-sm">&copy; 2025 Alex & Jamie's Wedding. All rights reserved.</p>
    </footer>
  );
};

export default Footer; 