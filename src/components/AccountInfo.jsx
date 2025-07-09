import React from "react";

const accounts = [
  { label: "신랑", name: "김도현", bank: "카카오뱅크", number: "1111-1111-1111-1111" },
  { label: "신랑 아버지", name: "김종혁", bank: "카카오뱅크", number: "1111-1111-1111-1111" },
  { label: "신랑 어머니", name: "최은혜", bank: "카카오뱅크", number: "1111-1111-1111-1111" },
  { label: "신부", name: "이지유", bank: "카카오뱅크", number: "1111-1111-1111-1111" },
  { label: "신부 아버지", name: "이주영", bank: "카카오뱅크", number: "1111-1111-1111-1111" },
  { label: "신부 어머니", name: "강지은", bank: "카카오뱅크", number: "1111-1111-1111-1111" },
];

export default function AccountInfo() {
  return (
    <section className="py-8 bg-secondary">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-serif text-center mb-4">마음 전하실 곳</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {accounts.map((acc, idx) => (
            <div key={idx} className="bg-white rounded shadow p-4 flex flex-col items-center">
              <h3 className="font-serif text-lg mb-1">{acc.label}</h3>
              <p className="text-sm text-gray-700 mb-1">{acc.bank} {acc.number}</p>
              <p className="text-xs text-gray-500">{acc.name}</p>
              <button
                className="mt-2 px-3 py-1 bg-primary text-white rounded text-xs hover:bg-opacity-90"
                onClick={() => navigator.clipboard.writeText(acc.number)}
              >
                복사 PAY
              </button>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-gray-600 mt-4">소중한 축하를 보내주셔서 감사드리며, 따뜻한 마음에 깊이 감사드립니다.</p>
      </div>
    </section>
  );
} 