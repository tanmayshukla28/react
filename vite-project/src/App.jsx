import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import "./App.css";
import Chatbot from "./components/Chatbot";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Features />
      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
