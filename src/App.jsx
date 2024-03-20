import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Edit from "./Pages/Edit";

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
          <Route path="/songs/new" element={<New />} />
          <Route path="/songs/:id/edit" element={<Edit />} />
        </Routes>
      </main>
    </Router>
    </div>;
};

export default App;
