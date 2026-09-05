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
          <div className={styles.contact}>
            <a className={styles.contactItem} href="tel:+917995541071">
              <FaPhoneAlt aria-hidden="true" />
              <span>+91 79955 41071</span>
            </a>
            <a className={styles.contactItem} href="mailto:auroreansolar@gmail.com">
              <MdEmail aria-hidden="true" />
              <span>auroreansolar@gmail.com</span>
            </a>
          </div>
          
          <h4 className={styles.follow}>Follow Us</h4>
          <div className={styles.socials}>
            <Link href="https://wa.me/917995541071" target="_blank" aria-label="WhatsApp"><FaWhatsapp /></Link>
            <Link href="https://www.instagram.com/" target="_blank"><FaInstagram /></Link>
            {/* <Link href="https://www.facebook.com/" target="_blank"><FaFacebook /></Link> */}
            <Link href="https://www.youtube.com/@myloveforyou" target="_blank"><FaYoutube /></Link>
          </div>
        </div>

        {/* Middle + Right + Address (Grouped Together) */}
        <div className={styles.middleRightAddress}>
          <div className={styles.rightWrapper}>
            <div className={styles.center}>
              <h4>Our Solutions</h4>
              <ul>
                <li><Image src="/images/right_arrow.png" alt="" width="20" height="20" /><Link href="/residential">Homes</Link></li>
                <li><Image src="/images/right_arrow.png" alt="" width="20" height="20" /><Link href="/commercial">Commercial</Link></li>
                <li><Image src="/images/right_arrow.png" alt="" width="20" height="20" /><Link href="/housing-society">Housing Society</Link></li>
              </ul>
            </div>

            <div className={styles.right}>
              <h4>Quick Links</h4>
              <div className={styles.linkColumns}>
                <ul>
                  <li><Image src="/images/right_arrow.png" alt="" width="20" height="20" /><Link href="/">About Us</Link></li>
                  <li><Image src="/images/right_arrow.png" alt="" width="20" height="20" /><Link href="/on-grid">On-Grid Solar</Link></li>
                  <li><Image src="/images/right_arrow.png" alt="" width="20" height="20" /><Link href="/off-grid">Off-Grid Solar</Link></li>

                </ul>
                <ul>
                  <li><Image src="/images/right_arrow.png" alt="" width="20" height="20" /><Link href="/solar-water-heater">Solar Water Heater</Link></li>
                  <li><Image src="/images/right_arrow.png" alt="" width="20" height="20" /><Link href="/solar-fencing">Solar Fencing</Link></li>
                  <li><Image src="/images/right_arrow.png" alt="" width="20" height="20" /><Link href="/solar-street-lights">Solar Street Lights</Link></li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.address}>
            <h4>Address</h4>
            <p>
              Head Office: Hyderabad | Korutla | Karimnagar | Telangana <br/>
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
