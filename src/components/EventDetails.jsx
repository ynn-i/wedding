import React from "react";

const EventDetails = () => {
  return (
    <section className="py-12 bg-white text-center">
      <h2 className="font-serif text-3xl md:text-4xl mb-6 text-primary">Event Details</h2>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        <div>
          <p className="font-sans text-lg mb-2">Date</p>
          <p className="font-serif text-2xl">September 21, 2025</p>
        </div>
        <div>
          <p className="font-sans text-lg mb-2">Time</p>
          <p className="font-serif text-2xl">4:00 PM</p>
        </div>
        <div>
          <p className="font-sans text-lg mb-2">Venue</p>
          <p className="font-serif text-2xl">Rosewood Gardens</p>
          <a
            href="https://goo.gl/maps/xyz123"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent underline text-base mt-1 block"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default EventDetails; 