"use client";
import React, { useEffect, useState } from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHome, FaBuilding, FaCity, FaSolarPanel, FaLightbulb, FaWater, FaShieldAlt, FaRoad } from "react-icons/fa";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1050) {
        setMobileMenuOpen(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Link href="/" className={styles.brandLink} onClick={closeMenu} aria-label="AuroRean Solar home">
          <Image className={styles.logo} src="/images/AuroReanSolar.png" alt="AuroRean Solar logo" width={58} height={48}/>
        </Link>
        <div className={styles.logoText}>
          <p>AUROREAN SOLAR <span>Innovating with every ray</span></p>
        </div>
      </div>


      {/* Hamburger Icon (mobile only) */}
      <button
        type="button"
        className={styles.hamburger}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-expanded={mobileMenuOpen}
        aria-controls="primary-navigation"
        aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <span aria-hidden="true">{mobileMenuOpen ? "×" : "☰"}</span>
      </button>

      {/* Navigation */}
      <nav id="primary-navigation" className={`${styles.nav} ${mobileMenuOpen ? styles.active : ""}`}>
        <ul>
          <li><Link href="/" onClick={closeMenu}>Home</Link></li>

          {/* Roof Top Solar */}
          <li
            className={styles.dropdown}
            onClick={() => toggleDropdown("rooftop")}
          >
            <button type="button" className={styles.dropdownLabel} aria-expanded={activeDropdown === "rooftop"}>Roof Top Solar <Image src="/images/down_arrow.png" alt="" width="16" height="16" /></button>
            {activeDropdown === "rooftop" && (
              <ul className={styles.dropdownMenu}>
                <li><Link href="/residential" onClick={closeMenu}><FaHome className={styles.icon} /> Residential</Link></li>
                <li><Link href="/commercial" onClick={closeMenu}><FaBuilding className={styles.icon} /> Commercial</Link></li>
                <li><Link href="/housing-society" onClick={closeMenu}><FaCity className={styles.icon} /> Housing Society</Link></li>
              </ul>
            )}
          </li>

          {/* Solar Solutions */}
          <li
            className={styles.dropdown}
            onClick={() => toggleDropdown("solutions")}
          >
            <button type="button" className={styles.dropdownLabel} aria-expanded={activeDropdown === "solutions"}>Solar Solutions <Image src="/images/down_arrow.png" alt="" width="16" height="16" /></button>
            {activeDropdown === "solutions" && (
              <ul className={styles.dropdownMenu}>
                <li><Link href="/off-grid" onClick={closeMenu}><FaSolarPanel className={styles.icon} /> Off-Grid</Link></li>
                <li><Link href="/on-grid" onClick={closeMenu}><FaLightbulb className={styles.icon} /> On-Grid</Link></li>
                <li><Link href="/solar-water-heater" onClick={closeMenu}><FaWater className={styles.icon} /> Solar Water Heater</Link></li>
                <li><Link href="/solar-fencing" onClick={closeMenu}><FaShieldAlt className={styles.icon} /> Solar Fencing</Link></li>
                <li><Link href="/solar-street-lights" onClick={closeMenu}><FaRoad className={styles.icon} /> Solar Street Lights</Link></li>
              </ul>
            )}
          </li>

          <li><Link href="/blogs" onClick={closeMenu}>Blogs</Link></li>
          <li><Link href="/contact" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
      </nav>

      {/* Contact Number */}
      <a className={styles.contact} href="tel:+917995541071">
        <FaPhoneAlt />+91 79955 41071
      </a>
    </header>
  );
};

export default Header;
