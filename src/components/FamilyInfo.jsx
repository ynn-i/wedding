import React from "react";

export default function FamilyInfo() {
  return (
    <section className="py-8 bg-secondary">
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-serif text-xl mb-2">신랑측 가족</h3>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>아버지: 故 김종혁</li>
            <li>어머니: 故 최은혜</li>
          </ul>
        </div>
        <div>
          <h3 className="font-serif text-xl mb-2">신부측 가족</h3>
          <ul className="text-gray-700 text-sm space-y-1">
            <li>아버지: 故 이주영</li>
            <li>어머니: 故 강지은</li>
          </ul>
        </div>
      </div>
    </section>
  );
} 