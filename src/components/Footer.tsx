"use client";
import React from "react";
import styles from "../styles/Footer.module.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Left Section */}

        <div className={styles.left}>

          <div className={styles.logoContainer}>
        <Image className={styles.logo} src="/images/AuroReanSolar.png" alt="Banner" />
        <div className={styles.logoText}>
          <p>AUROREAN SOLAR <span>Innovating with every ray</span></p>
        </div>
      </div>

          <p className={styles.tagline}>
            Rooftop solar made simple. We don’t just sell solar — we give you peace of mind.
          </p>
          <p className={styles.contact}>
            <FaPhoneAlt /> 7995541071
            <span className={styles.email}>
            <MdEmail /> auroreansolar@gmail.com
          </span>
          </p>
          
          <h4 className={styles.follow}>Follow Us</h4>
          <div className={styles.socials}>
            <a href="https://web.whatsapp.com/" target="_blank"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/" target="_blank"><FaInstagram /></a>
            <a href="https://www.facebook.com/" target="_blank"><FaFacebook /></a>
            <a href="https://www.youtube.com/@myloveforyou" target="_blank"><FaYoutube /></a>
          </div>
        </div>

        {/* Middle + Right + Address (Grouped Together) */}
        <div className={styles.middleRightAddress}>
          <div className={styles.rightWrapper}>
            <div className={styles.center}>
              <h4>Our Solutions</h4>
              <ul>
                <li><Image  src="/images/right_arrow.png" alt="Banner" width="20" height="20" /><a href="#">Homes</a></li>
                <li><Image  src="/images/right_arrow.png" alt="Banner" width="20" height="20" /><a href="#">Commercial</a></li>
                <li><Image  src="/images/right_arrow.png" alt="Banner" width="20" height="20" /><a href="#">Housing Society</a></li>
              </ul>
            </div>

            <div className={styles.right}>
              <h4>Quick Links</h4>
              <div className={styles.linkColumns}>
                <ul>
                  <li><Image  src="/images/right_arrow.png" alt="Banner" width="20" height="20" /><a href="#">About Us</a></li>
                  <li><Image  src="/images/right_arrow.png" alt="Banner" width="20" height="20" /><a href="#">On-Grid Solar</a></li>
                  <li><Image  src="/images/right_arrow.png" alt="Banner" width="20" height="20" /><a href="#">Off-Grid Solar</a></li>

                </ul>
                <ul>
                  <li><Image  src="/images/right_arrow.png" alt="Banner" width="20" height="20" /><a href="#">Solar Water Heater</a></li>
                  <li><Image  src="/images/right_arrow.png" alt="Banner" width="20" height="20" /><a href="#">Solar Fencing</a></li>
                  <li><Image  src="/images/right_arrow.png" alt="Banner" width="20" height="20" /><a href="#">Solar Street Lights</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.address}>
            <h4>Address</h4>
            <p>
              Head Office: Hyderabad | Peddapalli | Karimnagar | Telangana <br/>
              Office number: +91 73370 69230
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className={styles.copyright}>
        © 2025 AuroReanSolar. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
