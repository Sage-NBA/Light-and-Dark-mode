import { Navbar } from "./Components";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Technology from "./Pages/Technology.tsx";
import Home from "./Pages/Home.tsx";
import Features from "./Pages/Features.tsx";
import Create from "./Pages/Create.tsx";

function App() {
  const [lightMode, setLightMode] = useState(false);

  return (
    <div
      className={`${
        lightMode ? "light" : "dark"
      } min-h-screen bg-black text-white light:bg-white light:text-black transition-colors duration-300 flex flex-col`}
    >
      <Navbar />

      <main className="flex-1 w-full overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Technology" element={<Technology />} />
          <Route path="/Features" element={<Features />} />
          <Route path="/Create" element={<Create />} />
        </Routes>
      </main>

      {/* Floating Theme Switcher */}
      <button
        type="button"
        onClick={() => setLightMode(!lightMode)}
        aria-label={lightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 p-2.5 sm:p-3 rounded-full bg-white/20 light:bg-black/10 hover:bg-white/30 light:hover:bg-black/20 border border-white/20 light:border-black/15 backdrop-blur-md shadow-lg transition-transform hover:scale-110 active:scale-95 flex items-center justify-center text-xl sm:text-2xl cursor-pointer"
        title={lightMode ? "Switch to Dark Mode" : "Switch to Light Mode"}
      >
        <span aria-hidden="true">{lightMode ? "🌙" : "☀️"}</span>
      </button>
    </div>
  );
}

export default App;
