import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React from "react";

import NavBar from "./Components/NavBar"
const App = () => {
  return <div className="App">
    <Router>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/songs" element={<Index />} />
        </Routes>
      </main>
    </Router>
    </div>;
};

export default App;
