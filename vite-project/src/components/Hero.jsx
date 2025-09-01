import React, { useState, useEffect } from "react";
import "./Hero.css";

import heroImg1 from "../assets/hero-illustration1.png";
import heroImg2 from "../assets/hero-illustration2.png";
import heroImg3 from "../assets/hero-illustration3.png";
import heroImg4 from "../assets/hero-illustration4.png";

const handleClick = () => {
  console.log("Button clicked of main window");
};

function Hero() {
  const images = [heroImg1, heroImg2, heroImg3, heroImg4];
  const [currentImage, setCurrentImage] = useState(0);

  // Auto change image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval); // cleanup
  }, [images.length]);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>One-Stop Personalized Career & Education Advisor</h1>
        <p>
          Helping students choose the right subjects after Class 12, find suitable
          government colleges, explore career outcomes, and access free resources
          & scholarship.
        </p>
        <div className="hero-buttons">
          <button onClick={handleClick} className="btn-primary">
            Get Started
          </button>
          <button onClick={handleClick} className="btn-secondary">
            Learn More
          </button>
        </div>
      </div>
      <div className="hero-image">
        <img src={images[currentImage]} alt="Career Illustration" />
      </div>
    </section>
  );
}

export default Hero;
