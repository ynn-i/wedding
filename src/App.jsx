import React from "react";
import HeroSection from "./components/HeroSection";
import CoupleIntro from "./components/CoupleIntro";
import FamilyInfo from "./components/FamilyInfo";
import Interview from "./components/Interview";
import EventInfo from "./components/EventInfo";
import Timeline from "./components/Timeline";
import PhotoGallery from "./components/PhotoGallery";
import RSVPForm from "./components/RSVPForm";
import AccountInfo from "./components/AccountInfo";
import Guestbook from "./components/Guestbook";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <HeroSection />
      <CoupleIntro />
      <FamilyInfo />
      <Interview />
      <EventInfo />
      <Timeline />
      <PhotoGallery />
      <RSVPForm />
      <AccountInfo />
      <Guestbook />
      <Footer />
    </div>
  );
}

export default App;
