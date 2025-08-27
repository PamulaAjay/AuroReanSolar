"use client";
import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { FaHome, FaBuilding, FaCity, FaSolarPanel, FaLightbulb, FaWater, FaShieldAlt, FaRoad } from "react-icons/fa";

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };


  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src="/images/AuroReanSolar.png" alt="Banner" />
        <div className={styles.logoText}>
          <p>AUROREAN SOLAR <span>Innovating with every ray</span></p>
        </div>
      </div>


      {/* Hamburger Icon (mobile only) */}
      <div
        className={styles.hamburger}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </div>

      {/* Navigation */}
      <nav className={`${styles.nav} ${mobileMenuOpen ? styles.active : ""}`}>
        <ul>
          <li><a href="/">Home</a></li>

          {/* Roof Top Solar */}
          <li
            className={styles.dropdown}
            onClick={() => toggleDropdown("rooftop")}
          >
            <span className={styles.dropdownLabel}>Roof Top Solar <Image  src="/images/down_arrow.png" alt="Banner" width="16" height="16" /></span>
            {activeDropdown === "rooftop" && (
              <ul className={styles.dropdownMenu}>
                <li><a href="/residential"><FaHome className={styles.icon} /> Residential</a></li>
                <li><a href="/commercial"><FaBuilding className={styles.icon} /> Commercial</a></li>
                <li><a href="/housing-society"><FaCity className={styles.icon} /> Housing Society</a></li>
              </ul>
            )}
          </li>

          {/* Solar Solutions */}
          <li
            className={styles.dropdown}
            onClick={() => toggleDropdown("solutions")}
          >
            <span className={styles.dropdownLabel}>Solar Solutions <Image src="/images/down_arrow.png" alt="Banner" width="16" height="16" /></span>
            {activeDropdown === "solutions" && (
              <ul className={styles.dropdownMenu}>
                <li><a href="/off-grid"><FaSolarPanel className={styles.icon} /> Off-Grid</a></li>
                <li><a href="/in-grid"><FaLightbulb className={styles.icon} /> On-Grid</a></li>
                <li><a href="/solar-water-heater"><FaWater className={styles.icon} /> Solar Water Heater</a></li>
                <li><a href="/solar-fencing"><FaShieldAlt className={styles.icon} /> Solar Fencing</a></li>
                <li><a href="/solar-street-lights"><FaRoad className={styles.icon} /> Solar Street Lights</a></li>
              </ul>
            )}
          </li>

          <li><a href="/blogs">Blogs</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </nav>

      {/* Contact Number */}
      <div className={styles.contact}>
        <FaPhoneAlt />+91 7995541071
      </div>
    </header>
  );
};

export default Header;
