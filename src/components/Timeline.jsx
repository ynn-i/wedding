import React from "react";

const events = [
  { date: "2021.12.24", title: "첫 만남", desc: "저희는 발리에서 처음 만났어요." },
  { date: "2022.12.24", title: "1주년", desc: "함께한 1년, 서로를 알아가는 시간이었어요." },
  { date: "2023.12.24", title: "2주년", desc: "함께한 2년, 우리는 결혼을 결심했어요." },
  { date: "2025.05.18", title: "WeddingDay", desc: "저희는 이날 결혼해요. 저희의 시작을 축하해주세요." },
];

export default function Timeline() {
  return (
    <section className="py-8 bg-white">
      <h2 className="text-2xl font-serif text-center mb-4">우리의 시간</h2>
      <div className="max-w-2xl mx-auto">
        <ol className="relative border-l-2 border-primary">
          {events.map((event, idx) => (
            <li key={idx} className="mb-8 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-4 ring-white font-serif text-white text-sm">
                {idx + 1}
              </span>
              <div className="pl-2">
                <time className="block mb-1 text-lg font-serif text-primary">{event.date}</time>
                <h3 className="text-xl font-serif font-bold mb-1">{event.title}</h3>
                <p className="text-base font-sans text-gray-700">{event.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
} 