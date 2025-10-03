import React, { useState, useEffect } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import "../styles/Home.css";
import farm1 from "../assets/farm1.jpg";
import farm2 from "../assets/farm2.jpg";
import farm3 from "../assets/farm3.jpg";
import farm4 from "../assets/farm4.jpg";
import farm6 from "../assets/farm6.png";
import Inquiry from "../components/Inquiry/Inquiry";

const Home = () => {
  const [current, setCurrent] = useState(0);
  const images = [farm1, farm2, farm3];

  //   features
  const features = [
    {
      icon: <IoMdCheckmarkCircleOutline size={32} />,
      title: "Quality Assured",
      description: "Premium products with guaranteed quality",
    },
    {
      icon: <IoMdCheckmarkCircleOutline size={32} />,
      title: "Global Shipping",
      description: "We deliver worldwide with care",
    },
    {
      icon: <IoMdCheckmarkCircleOutline size={32} />,
      title: "Expert Support",
      description: "Professional guidance for all your needs",
    },
    {
      icon: <IoMdCheckmarkCircleOutline size={32} />,
      title: "Best Prices",
      description: "Competitive pricing for bulk orders",
    },
  ];

  //   categories
  const categories = [
    {
      name: "Farm 1",
      description: "Fresh onions directly from local farms",
      image: farm6,
    },
    {
      name: "Farm 2",
      description: "Industrial grade resin for multiple uses",
      image: farm1,
    },
    {
      name: "Farm 3",
      description: "Modern tractors and farming machines",
      image: farm2,
    },
    {
      name: "Farm 4",
      description: "Other agriculture & industrial equipment",
      image: farm3,
    },
    //   {
    //     name: "Farm 5",
    //     description: "Premium fresh farm products",
    //     image: farm5,
    //   },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home">
      {/* Hero Section with Carousel */}
      <section className="hero">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`slide-${index}`}
              className="hero-image"
            />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features-container">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Category Section */}
      <section className="categories">
        <div className="categories-header">
          <h2>Our Product Categories</h2>
          <p>Explore our wide range of agricultural products and equipment</p>
        </div>

        <div className="categories-grid">
          {categories.map((category, index) => (
            <Link key={index} to={`/product`} className="category-card">
              <div className="category-img">
                <img src={category.image} alt={category.name} />
              </div>
              <div className="category-content">
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <span className="explore">
                  Explore <FiArrowRight className="arrow" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Inquiry />
    </div>
  );
};

export default Home;
