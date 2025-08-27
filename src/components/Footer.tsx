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
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Left Section */}

        <div className={styles.left}>

          <div className={styles.logoContainer}>
        <Image className={styles.logo} src="/images/AuroReanSolar.png" alt="Banner" width={80} height={70}/>
        <div className={styles.logoText}>
          <p>AUROREAN SOLAR <span>Innovating with every ray</span></p>
        </div>
      </div>

          <p className={styles.tagline}>
            Rooftop solar made simple. We don’t just sell solar — we give you peace of mind.
          </p>
          <p className={styles.contact}>
            <FaPhoneAlt />79955 41071
            <span className={styles.email}>
            <MdEmail /> auroreansolar@gmail.com
          </span>
          </p>
          
          <h4 className={styles.follow}>Follow Us</h4>
          <div className={styles.socials}>
            <Link href="https://web.whatsapp.com/" target="_blank"><FaWhatsapp /></Link>
            <Link href="https://www.instagram.com/" target="_blank"><FaInstagram /></Link>
            <Link href="https://www.facebook.com/" target="_blank"><FaFacebook /></Link>
            <Link href="https://www.youtube.com/@myloveforyou" target="_blank"><FaYoutube /></Link>
          </div>
        </div>

        {/* Middle + Right + Address (Grouped Together) */}
        <div className={styles.middleRightAddress}>
          <div className={styles.rightWrapper}>
            <div className={styles.center}>
              <h4>Our Solutions</h4>
              <ul>
                <li><Image  src="/images/right_arrow.png" alt="Banner" width="20" height="20" /><Link href="#">Homes</Link></li>
                <li><Image  src="/images/right_arrow.png" alt="Banner" width="20" height="20" /><Link href="#">Commercial</Link></li>
                <li><Image  src="/images/right_arrow.png" alt="Banner" width="20" height="20" /><Link href="#">Housing Society</Link></li>
              </ul>
            </div>

            <div className={styles.right}>
              <h4>Quick Links</h4>
              <div className={styles.linkColumns}>
                <ul>
                  <li><Image  src="/images/right_arrow.png" alt="Banner" width="20" height="20" /><Link href="#">About Us</Link></li>
                  <li><Image  src="/images/right_arrow.png" alt="Banner" width="20" height="20" /><Link href="#">On-Grid Solar</Link></li>
                  <li><Image  src="/images/right_arrow.png" alt="Banner" width="20" height="20" /><Link href="#">Off-Grid Solar</Link></li>

                </ul>
                <ul>
                  <li><Image  src="/images/right_arrow.png" alt="Banner" width="20" height="20" /><Link href="#">Solar Water Heater</Link></li>
                  <li><Image  src="/images/right_arrow.png" alt="Banner" width="20" height="20" /><Link href="#">Solar Fencing</Link></li>
                  <li><Image  src="/images/right_arrow.png" alt="Banner" width="20" height="20" /><Link href="#">Solar Street Lights</Link></li>
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
