import { Navbar } from "./Components";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Technology from "./Pages/Technology.tsx";
import Home from "./Pages/Home.tsx";

function App() {
  const [lightMode, setLightMode] = useState(false);

  return (
    <div
      className={`${
        lightMode ? "light" : "dark"
      } min-h-screen bg-black animate-scroll text-white light:bg-white light:text-black`}
    >
      <div className={lightMode ? "light" : "dark"}>
        {/* your whole website */}

        <button onClick={() => setLightMode(!lightMode)}>
          {lightMode ? "🌙" : "☀️"}
        </button>
      </div>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;
