import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.css";

import heroImg1 from "../assets/hero-illustration1.png";
import heroImg2 from "../assets/hero-illustration2.png";
import heroImg3 from "../assets/hero-illustration3.png";
import heroImg4 from "../assets/hero-illustration4.png";
import formIllustration from "../assets/form-illustration.png"; // ✅ new image

function Hero({ user }) {
  const images = [heroImg1, heroImg2, heroImg3, heroImg4];
  const [currentImage, setCurrentImage] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="hero">
      <div className="hero-content">
        {user ? (
          <>
            <h1>Hello {user.name}, welcome to our platform to strengthen your career journey</h1>
            <p>Explore colleges, careers, and resources tailored to your goals.</p>
            <div className="hero-buttons">
              <button onClick={() => navigate("/form")} className="btn-primary">Get Started</button>
              <button onClick={() => navigate("/about")} className="btn-secondary">Learn More</button>
            </div>
          </>
        ) : (
          <>
            <h1>One-Stop Personalized Career & Education Advisor</h1>
            <p>Helping students choose the right subjects after Class 12, find suitable government colleges, explore career outcomes, and access free resources & scholarships.</p>
            <div className="hero-buttons">
              <button onClick={() => navigate("/form")} className="btn-primary">Get Started</button>
              <button onClick={() => navigate("/about")} className="btn-secondary">Learn More</button>
            </div>
          </>
        )}
      </div>
      <div className="hero-image">
        <img
          src={user ? formIllustration : images[currentImage]}
          alt="Career Illustration"
        />
      </div>
    </section>
  );
}

export default Hero;
