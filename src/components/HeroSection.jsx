import React, { useEffect, useRef } from "react";

// Prevent Tailwind from purging the animation class
const _purgeTailwind = ["animate-shape-shift"];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      el.classList.add("animate-shape-shift");
      const onStart = () => console.log("애니메이션 시작!");
      const onEnd = () => console.log("애니메이션 끝!");
      el.addEventListener("animationstart", onStart);
      el.addEventListener("animationend", onEnd);
      return () => {
        el.removeEventListener("animationstart", onStart);
        el.removeEventListener("animationend", onEnd);
      };
    }
  }, []);

  return (
    <section className="relative w-screen h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Tailwind purge 방지용 더미 div */}
      <div className="hidden animate-shape-shift"></div>
      <div
        ref={containerRef}
        className="absolute left-1/2 top-1/2 z-0 overflow-hidden animate-shape-shift"
        style={{
          width: "100vw",
          height: "100vh",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img
          src="/1.png"
          alt="Hero"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
      <div
        className="relative z-10 text-center w-full px-4"
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: '40px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <h1 className="text-4xl font-serif">신랑 김경섭 & 신부 곽예원</h1>
        <p className="text-xl mb-1">2026년 3월 21일 토요일 오후 1시 30분</p>
        <p className="text-md">더살롱드웨딩홀 1층 레터홀</p>
      </div>
    </section>
  );
} 