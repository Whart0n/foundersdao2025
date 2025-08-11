"use client";

import Image from "next/image";
import { useState } from "react";

const schedule = [
  {
    day: "Friday, September 19 — Day 1: Kicking Off & Looking Ahead",
    events: [
      "12:00 PM - 1:30 PM - Check-in & Welcome Lunch - Meet-and-greet with opening remarks.",
      "2:00 PM - 3:00 PM - Session 1: The Evolution of Our DAO - a retrospective discussion",
      "3:30 PM - 4:30 PM - Session 2: The Future of DAOs & Governance - Industry trends open discussion.",
      "5:00 PM - 6:00 PM - Session 3: Fireside Chat with OG Members - Panel interview with Q&A.",
      "7:30 PM - 8:30 PM - Group Dinner & Social - Private dining at a top Vegas restaurant."
    ]
  },
  {
    day: "Saturday, September 20 — Day 2: Building & Learning Together",
    events: [
      "9:00 AM - 10:30 AM - Breakfast & Coffee Networking - Informal networking session.",
      "11:00 AM - 12:00 PM - Session 4: Web3 Business Monetization - Revenue and sustainability",
      "1:30 PM - 2:30 PM - Session 5: Building in Bear & Bull Markets - Strategies for sustainability",
      "3:00 PM - 4:00 PM - Session 6: Workshop: DAO Tooling & Infrastructure",
      "7:00 PM - 10:00 PM - Gala Dinner & Awards - Celebrating achievements and networking"
    ]
  },
  {
    day: "Sunday, September 21 — Day 3: Wrapping Up & Moving Forward",
    events: [
      "10:00 AM - 11:00 AM - Brunch & Closing Keynote",
      "11:30 AM - 1:00 PM - Open Forum & Community Building",
      "1:30 PM - 3:00 PM - Breakout Sessions & Working Groups",
      "3:30 PM - 4:30 PM - Closing Ceremony & Next Steps"
    ]
  }
];

const sponsors = [
  { name: "GFUNK Capital", logo: "/sponsors/gfunk.png" },
  { name: "Rug Radio", logo: "/sponsors/rug-radio.png" },
  { name: "Mayo", logo: "/sponsors/mayo.png" },
  { name: "Vercel", logo: "/sponsors/vercel.png" }
];

function RegistrationPopup({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300">
      <div className="glass-card border border-cyan-400/30 rounded-xl p-8 max-w-md w-full mx-4 relative backdrop-blur-lg shadow-2xl shadow-cyan-500/20">
        <div className="absolute inset-0 rounded-xl border border-cyan-400/20 pointer-events-none"></div>
        <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-600/20 to-purple-600/20 -z-10 blur opacity-70"></div>
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-cyan-300 hover:text-white transition-colors text-xl font-light"
          aria-label="Close"
        >
          ✕
        </button>
        
        <div className="text-center">
          <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
            Registration Closed
          </h3>
          <p className="text-gray-300 mb-6 text-lg">
            We&apos;re sorry, registration for this event closed on June 30th, 2025.
          </p>
          <button
            onClick={onClose}
            className="relative overflow-hidden group px-8 py-3 rounded-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:scale-105"
          >
            <span className="relative z-10">Close</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleRequestInvite = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPopupOpen(true);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="header">
        <div className="bg-grid"></div>
        <div className="container hero-inner text-center flex flex-col items-center">
          <div className="badge mb-4 mx-auto w-max shine">
            <span className="dot" />
            FoundersDAO • Las Vegas
          </div>
          <Image
            src="/logo.png"
            alt="Founder&apos;s DAO Logo"
            width={120}
            height={120}
            className="block mx-auto mb-4 logo-glow"
            priority
          />
          <h1 className="neon-text text-5xl sm:text-6xl font-extrabold tracking-tight mb-3">
            FoundersDAO Conference
          </h1>
          <h2 className="subtle text-xl sm:text-2xl mb-6">Las Vegas • September 19–21, 2025</h2>
          <div className="w-full flex justify-center">
            <p className="subtle text-base sm:text-lg mb-8 max-w-2xl text-center">
              Celebrating 4 years of building together. Web3 founders, operators, and investors converge for three days of insight, connection, and momentum.
            </p>
          </div>
          <div className="btns">
            <a href="#schedule" className="btn primary">View Agenda</a>
            <button onClick={handleRequestInvite} className="btn ghost">Request Invite</button>
          </div>
        </div>
      </header>

      <main className="container py-10">
        {/* Schedule Section */}
        <section id="schedule" className="schedule">
          <h2 className="neon-text text-3xl sm:text-4xl font-bold mb-8 text-center">Conference Schedule</h2>
          
          {schedule.map((day, index) => (
            <div key={index} className="day">
              <h3 className="text-2xl font-semibold mb-4">{day.day}</h3>
              <div className="events">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="event">
                    {event}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Sponsors Section */}
        <section className="sponsors">
          <h2 className="neon-text text-3xl sm:text-4xl font-bold mb-8 text-center">Our Esteemed Sponsors</h2>
          <div className="sponsor-logos">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-logo-container">
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={120}
                  height={80}
                  className="sponsor-logo"
                />
                <p className="mt-2 text-sm">{sponsor.name}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <RegistrationPopup 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Founder&apos;s DAO Conference. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
