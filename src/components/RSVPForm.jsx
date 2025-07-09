import React, { useState } from "react";

const RSVPForm = () => {
  const [form, setForm] = useState({ name: "", email: "", attendance: "yes", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="py-12 bg-secondary flex justify-center">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
          <h2 className="font-serif text-2xl mb-4 text-primary">Thank you for your RSVP!</h2>
          <p className="font-sans">We look forward to celebrating with you.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-secondary flex justify-center">
      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="font-serif text-2xl mb-6 text-primary text-center">RSVP</h2>
        <div className="mb-4">
          <label className="block mb-1 font-sans" htmlFor="name">Name*</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-sans" htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-sans">Will you attend?*</label>
          <div className="flex gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="attendance"
                value="yes"
                checked={form.attendance === "yes"}
                onChange={handleChange}
                className="accent-primary"
              />
              <span className="ml-2 font-sans">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="attendance"
                value="no"
                checked={form.attendance === "no"}
                onChange={handleChange}
                className="accent-primary"
              />
              <span className="ml-2 font-sans">No</span>
            </label>
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-1 font-sans" htmlFor="message">Message (optional)</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
            rows={3}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white font-serif py-2 rounded hover:bg-opacity-90 transition"
        >
          Submit RSVP
        </button>
      </form>
    </section>
  );
};

export default RSVPForm; 