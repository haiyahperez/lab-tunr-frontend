import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Song from "./Components/Song";
import SongDetails from "./Components/SongDetails";

import NavBar from "./Components/NavBar"

const App = () => {
  return <div className="App">
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Index />} />
          <Route path="/songs/:id" element={<SongDetails />} />
        </Routes>
      </main>
    </Router>
    </div>;
};

export default App;
