import React, { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=600&q=80",
];

const PhotoGallery = () => {
  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <section className="py-12 bg-white">
      <h2 className="font-serif text-3xl md:text-4xl mb-6 text-primary text-center">Our Story</h2>
      <div className="flex flex-col items-center">
        <div className="relative w-full max-w-xl aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
          <img
            src={images[current]}
            alt={`Gallery ${current + 1}`}
            className="w-full h-full object-cover transition-all duration-500"
          />
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-2 hover:bg-opacity-60 transition"
            aria-label="Previous"
          >
            &#8592;
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white rounded-full p-2 hover:bg-opacity-60 transition"
            aria-label="Next"
          >
            &#8594;
          </button>
        </div>
        <div className="flex gap-2 mt-4">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${current === idx ? "bg-primary" : "bg-gray-300"}`}
              aria-label={`Go to image ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery; 