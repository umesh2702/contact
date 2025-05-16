"use client"

import { useEffect, useState } from "react"
import "./Bake.css"
import logo from './Resize image project.png'

const Bake = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeCard, setActiveCard] = useState(null)
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    // Handle scroll effects
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    // Handle splash screen
    const timer = setTimeout(() => {
      setShowSplash(false)
    }, 2000)

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(timer)
    }
  }, [])

  const handleCardHover = (index) => {
    setActiveCard(index)
  }

  const handleCardLeave = () => {
    setActiveCard(null)
  }

  // Card data
  const cards = [
    {
      title: "WhatsApp",
      subtitle: "Chat with us for quick orders",
      icon: "ri-whatsapp-line",
      pattern: "ri-chat-3-line",
      link: "https://wa.me/917815990499"
    },
    {
      title: "Instagram",
      subtitle: "DM us on Instagram",
      icon: "ri-instagram-line",
      pattern: "ri-camera-line",
      link: "https://www.instagram.com/sugar_twist_bakes/",
    },
    {
      title: "Website",
      subtitle: "Browse our full menu",
      icon: "ri-store-2-line",
      pattern: "ri-store-line",
      link: "https://sugartwistbakes.com/",
    },
    {
      title: "Call",
      subtitle: "Speak with our team",
      icon: "ri-phone-line",
      pattern: "ri-phone-fill",
      link: "tel:+917815990499",
    },
  ]

  // Background decorations
  const bgDecorations = [
    { className: "cupcake-1", icon: "ri-cake-2-line" },
    { className: "cupcake-2", icon: "ri-cake-3-line" },
    { className: "brownie", icon: "ri-checkbox-blank-fill" },
    { className: "cookie-1", icon: "ri-record-circle-line" },
    { className: "cookie-2", icon: "ri-checkbox-blank-circle-line" },
    { className: "muffin", icon: "ri-cup-fill" },
    { className: "pastry", icon: "ri-pie-chart-fill" },
    { className: "donut", icon: "ri-donut-chart-fill" },
    { className: "cake-slice", icon: "ri-pie-chart-2-fill" },
  ]

  if (showSplash) {
    return (
      <div className="splash-screen">
        <div className="splash-content">
          <div className="splash-logo floating">
            <img src={logo} alt='logo' height='180px' width='180px' />
          </div>
          <h1 className="splash-brand">Explore the Twist in Taste</h1>
          <div className="splash-loader">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="app">
      {/* Background Decorations */}
      {bgDecorations.map((decoration, index) => (
        <div key={index} className={`bg-decoration ${decoration.className} ${scrolled ? "scroll-animate" : ""}`}>
          <i className={decoration.icon}></i>
        </div>
      ))}

      {/* SVG Background Patterns */}
      <div className="bg-pattern top-right">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#B78735"
            d="M42.8,-65.2C54.9,-56.3,63.8,-43.2,69.5,-28.8C75.2,-14.4,77.7,1.3,74.4,15.9C71.1,30.5,62,44,49.8,53.2C37.6,62.4,22.3,67.3,6.2,69.5C-9.9,71.7,-26.8,71.2,-40.8,64.1C-54.8,57,-65.8,43.3,-71.9,27.7C-78,12.1,-79.2,-5.4,-74.7,-20.8C-70.2,-36.2,-60,-49.5,-46.8,-58.1C-33.6,-66.7,-17.4,-70.6,-0.9,-69.3C15.7,-68,30.7,-74.1,42.8,-65.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="bg-pattern bottom-left">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#241627"
            d="M47.7,-73.2C62.1,-67.3,74.5,-54.9,79.8,-40C85.2,-25.1,83.5,-7.7,79.9,8.4C76.3,24.5,70.8,39.3,60.8,50.2C50.8,61.1,36.3,68.1,21.2,72.3C6.1,76.5,-9.6,77.9,-24.4,74.1C-39.2,70.3,-53.1,61.3,-63.1,48.8C-73.1,36.3,-79.2,20.3,-80.4,3.8C-81.6,-12.7,-77.9,-29.8,-68.8,-42.9C-59.7,-56,-45.2,-65.1,-30.8,-70.9C-16.4,-76.8,-2.1,-79.4,12.4,-78.3C26.9,-77.2,33.3,-79.1,47.7,-73.2Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="bg-pattern center-right">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#493A52"
            d="M39.9,-65.7C51.1,-60.5,59.5,-48.8,65.2,-36.1C70.9,-23.3,73.9,-9.6,73.3,4.1C72.7,17.8,68.5,31.4,60.4,42.1C52.3,52.8,40.3,60.6,27.2,65.9C14.1,71.3,-0.2,74.2,-13.9,72.1C-27.6,70,-40.7,62.9,-51.4,52.7C-62.1,42.5,-70.3,29.2,-74.4,14.3C-78.5,-0.6,-78.4,-17.1,-72.2,-30.4C-66,-43.7,-53.7,-53.8,-40.5,-57.9C-27.3,-62,-13.7,-60.1,0.2,-60.4C14,-60.7,28.7,-70.9,39.9,-65.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="container">
        {/* Header Section */}
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
          <div className="logo-container">
            <div className="logo floating">
              <img src={logo} alt='logo' height='180px' width='180px' />
            </div>
          </div>
          <h1 className="brand-name">Explore the Twist in Taste</h1>
        </header>

        {/* Card Grid Section */}
        <section className="card-grid">
          {cards.map((card, index) => (
            <a
              key={index}
              href={card.link}
              className={`card ${activeCard === index ? "active" : ""}`}
              onMouseEnter={() => handleCardHover(index)}
              onMouseLeave={handleCardLeave}
              onClick={(e) => {
                // Add click animation
                const element = e.currentTarget
                element.classList.add("clicked")
                setTimeout(() => {
                  element.classList.remove("clicked")
                }, 300)
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card-content">
                <div className={`card-pattern ${card.title.toLowerCase()}`}>
                  <i className={card.pattern}></i>
                </div>
                <div className="card-icon">
                  <i className={card.icon}></i>
                </div>
                <h2 className="card-title">{card.title}</h2>
                <p className="card-subtitle">{card.subtitle}</p>
                <div className="card-sparkles">
                  <i className="ri-sparkles-line"></i>
                </div>
              </div>
            </a>
          ))}
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Taste the Difference</h2>
          <p>
            Our artisanal baked goods are made with love using only the finest ingredients. From classic chocolate chip
            cookies to innovative seasonal treats.
          </p>
        </section>
      </div>

      {/* Footer Section */}
      <footer>
        <div className="footer-pattern left">
          <i className="ri-cake-3-line"></i>
        </div>
        <div className="footer-pattern right">
          <i className="ri-cookie-line"></i>
        </div>
        <div className="container">
          <div className="footer-content">
            <p className="copyright">&copy; {new Date().getFullYear()} SugarTwistBakes. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Bake