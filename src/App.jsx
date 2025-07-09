import React from "react";
import HeroSection from "./components/HeroSection";
import EventDetails from "./components/EventDetails";
import RSVPForm from "./components/RSVPForm";
import PhotoGallery from "./components/PhotoGallery";
import Schedule from "./components/Schedule";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-secondary min-h-screen flex flex-col">
      <HeroSection />
      <EventDetails />
      <RSVPForm />
      <PhotoGallery />
      <Schedule />
      <Footer />
    </div>
  );
}

export default App;
