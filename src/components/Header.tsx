"use client";
import React, { useState } from "react";
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


  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <Image className={styles.logo} src="/images/AuroReanSolar.png" alt="Banner"  width={58} height={48}/>
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
          <li><Link href="/">Home</Link></li>

          {/* Roof Top Solar */}
          <li
            className={styles.dropdown}
            onClick={() => toggleDropdown("rooftop")}
          >
            <span className={styles.dropdownLabel}>Roof Top Solar <Image  src="/images/down_arrow.png" alt="Banner" width="16" height="16" /></span>
            {activeDropdown === "rooftop" && (
              <ul className={styles.dropdownMenu}>
                <li><Link href="/residential"><FaHome className={styles.icon} /> Residential</Link></li>
                <li><Link href="/commercial"><FaBuilding className={styles.icon} /> Commercial</Link></li>
                <li><Link href="/housing-society"><FaCity className={styles.icon} /> Housing Society</Link></li>
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
                <li><Link href="/off-grid"><FaSolarPanel className={styles.icon} /> Off-Grid</Link></li>
                <li><Link href="/on-grid"><FaLightbulb className={styles.icon} /> On-Grid</Link></li>
                <li><Link href="/solar-water-heater"><FaWater className={styles.icon} /> Solar Water Heater</Link></li>
                <li><Link href="/solar-fencing"><FaShieldAlt className={styles.icon} /> Solar Fencing</Link></li>
                <li><Link href="/solar-street-lights"><FaRoad className={styles.icon} /> Solar Street Lights</Link></li>
              </ul>
            )}
          </li>

          <li><Link href="/blogs">Blogs</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
        </ul>
      </nav>

      {/* Contact Number */}
      <div className={styles.contact}>
        <FaPhoneAlt />+91 79955 41071
      </div>
    </header>
  );
};

export default Header;
