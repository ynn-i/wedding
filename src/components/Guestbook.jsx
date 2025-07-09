import React, { useState } from "react";

export default function Guestbook() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([{ text: input, date: new Date().toLocaleString() }, ...messages]);
      setInput("");
    }
  };

  return (
    <section className="py-8 bg-white">
      <h2 className="text-2xl font-serif text-center mb-4">방명록</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto flex gap-2 mb-6">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="축하 메시지를 남겨주세요!"
          className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <button type="submit" className="bg-primary text-white px-4 rounded">작성</button>
      </form>
      <div className="max-w-xl mx-auto space-y-3">
        {messages.length === 0 && <p className="text-center text-gray-400">아직 메시지가 없습니다.</p>}
        {messages.map((msg, idx) => (
          <div key={idx} className="bg-secondary rounded p-3 shadow text-sm">
            <div>{msg.text}</div>
            <div className="text-xs text-right text-gray-500 mt-1">{msg.date}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 