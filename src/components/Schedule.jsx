import React from "react";

const events = [
  { time: "4:00 PM", title: "Ceremony Begins", description: "Join us for the wedding ceremony in the garden." },
  { time: "5:00 PM", title: "Cocktail Hour", description: "Enjoy drinks and hors d'oeuvres." },
  { time: "6:00 PM", title: "Reception & Dinner", description: "Dinner and celebration in the main hall." },
  { time: "8:00 PM", title: "Dancing & Celebration", description: "Dance the night away with us!" },
  { time: "10:00 PM", title: "Farewell", description: "Send-off and goodbyes." },
];

const Schedule = () => {
  return (
    <section className="py-12 bg-secondary">
      <h2 className="font-serif text-3xl md:text-4xl mb-8 text-primary text-center">Wedding Schedule</h2>
      <div className="max-w-2xl mx-auto">
        <ol className="relative border-l-2 border-primary">
          {events.map((event, idx) => (
            <li key={idx} className="mb-8 ml-6">
              <span className="absolute -left-3 flex items-center justify-center w-6 h-6 bg-primary rounded-full ring-4 ring-secondary font-serif text-white text-sm">
                {idx + 1}
              </span>
              <div className="pl-2">
                <time className="block mb-1 text-lg font-serif text-primary">{event.time}</time>
                <h3 className="text-xl font-serif font-bold mb-1">{event.title}</h3>
                <p className="text-base font-sans text-gray-700">{event.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Schedule; 