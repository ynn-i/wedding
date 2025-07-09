import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative z-10 text-center text-white">
        <h1 className="font-serif text-5xl md:text-7xl font-bold mb-4 drop-shadow-lg">Alex & Jamie</h1>
        <p className="font-sans text-2xl md:text-3xl mb-2 drop-shadow">September 21, 2025</p>
        <p className="font-sans text-lg">You're invited to celebrate our wedding</p>
      </div>
    </section>
  );
};

export default HeroSection; 