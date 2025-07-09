import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [split, setSplit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setSplit(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      <img
        src="/1.png"
        alt="Hero Background"
        className="hero-bg"
        draggable={false}
      />
      <div className="split-overlay">
        <div
          className={`split-half left-half${split ? " split-left-anim" : ""}`}
        ></div>
        <div
          className={`split-half right-half${split ? " split-right-anim" : ""}`}
        ></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">신랑 김경섭 & 신부 곽예원</h1>
        <div className="hero-info">2026년 2월 28일 토요일 오후 1시</div>
        <div className="hero-info">더살롱드웨딩홀 1층 레터홀</div>
      </div>
      <style>{`
        .hero-section {
          position: relative;
          width: 100vw;
          height: 100vh;
          background: #e5e7eb;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          pointer-events: none;
          user-select: none;
        }
        .split-overlay {
          position: absolute;
          inset: 0;
          z-index: 50;
          display: flex;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }
        .split-half {
          width: 50%;
          height: 100%;
          background: rgba(185,255,91,1);
          transition: none;
        }
        .left-half {
          border-right: 1px solid rgba(0,0,0,0.03);
        }
        .right-half {
          border-left: 1px solid rgba(0,0,0,0.03);
        }
        .split-left-anim {
          animation: splitLeft 1.2s cubic-bezier(.4,0,.2,1) forwards;
        }
        .split-right-anim {
          animation: splitRight 1.2s cubic-bezier(.4,0,.2,1) forwards;
        }
        @keyframes splitLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes splitRight {
          0% { transform: translateX(0); }
          100% { transform: translateX(100%); }
        }
        .hero-content {
          position: absolute;
          z-index: 10;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: rgba(185,255,91,0.95);
          text-align: center;
          gap: 0.5em;
          text-shadow: 0 2px 8px rgba(0,0,0,0.18);
        }
        .hero-title {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 0.2em;
          letter-spacing: 0.01em;
        }
        .hero-info {
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 0.1em;
        }
        @media (min-width: 600px) {
          .hero-title { font-size: 3rem; }
          .hero-info { font-size: 1.5rem; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;