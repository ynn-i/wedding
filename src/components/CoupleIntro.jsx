import React from "react";

export default function CoupleIntro() {
  return (
    <section className="py-8 bg-white">
      <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="flex-1 text-center">
          <img src="/groom.jpg" alt="신랑" className="mx-auto rounded-full w-32 h-32 object-cover mb-2" />
          <h2 className="font-serif text-2xl mb-1">신랑 김도연</h2>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>수다쟁이</li>
            <li>유머러스함</li>
            <li>운동 러버</li>
            <li>문제를 일으킴</li>
            <li>익스트림 사랑</li>
          </ul>
        </div>
        <div className="flex-1 text-center">
          <img src="/bride.jpg" alt="신부" className="mx-auto rounded-full w-32 h-32 object-cover mb-2" />
          <h2 className="font-serif text-2xl mb-1">신부 이지유</h2>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>잘 들어주는 사람</li>
            <li>감정 기복이 있는 편</li>
            <li>빵 러버</li>
            <li>문제에 동참함</li>
            <li>웃음이 많음</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 