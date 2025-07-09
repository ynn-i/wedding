import React from "react";

export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-white h-[60vh] md:h-[60vh] w-full md:w-full min-h-[360px] md:min-h-0"
      style={{ backgroundImage: "url('/1.png')", backgroundSize: 'cover', backgroundPosition: 'center', height: '60vh' }}
    >
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="relative z-10 text-center w-full px-4"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: '60px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <h1 className="text-4xl font-serif mb-2">신랑 김도연 & 신부 이지유</h1>
        <p className="text-xl mb-1">2026년 3월 21일 토요일 오후 1시 30분</p>
        <p className="text-lg">더살롱드웨딩홀 1층 레터홀</p>
        <p className="mt-4">저희 결혼합니다. 부담없이 오셔서 축하해 주세요.</p>
      </div>
      <style>{`
        @media (max-width: 768px) {
          section.hero-section {
            height: 100vh !important;
            width: 100vw !important;
          }
          section.hero-section .hero-content {
            bottom: 60px !important;
          }
        }
      `}</style>
    </section>
  );
} 