import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ChatIcon from "./assets/ChatIcon.png";
function App() {
  const [visible, setVisible] = useState(true);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      {visible && (
        <div className="chat-button-container">
          <a
            href="https://open.kakao.com/o/ssWpZ6Nc"
            target="_blank"
            rel="noopener noreferrer"
            className="chat-button"
          >
            <img src={ChatIcon} alt="Chat" className="chat-icon" />
          </a>
          <button className="chat-close" onClick={() => setVisible(false)}>
            ✕
          </button>
        </div>
      )}
    </Router>
  );
}

export default App;
