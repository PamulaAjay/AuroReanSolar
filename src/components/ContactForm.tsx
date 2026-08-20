"use client";

import { FormEvent, useState } from "react";
import styles from "../styles/Contact.module.css";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.formHeading}>
        <span>Free consultation</span>
        <h2>Tell us about your solar requirement</h2>
        <p>Share a few details and our solar team will help you plan the right system.</p>
      </div>

      <div className={styles.formGrid}>
        <label>
          Full name
          <input name="name" type="text" placeholder="Enter your name" required />
        </label>
        <label>
          Phone number
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            placeholder="+91 98765 43210"
            pattern="[+0-9 ()-]{10,18}"
            required
          />
        </label>
        <label>
          Email address
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label>
          Property type
          <select name="propertyType" defaultValue="" required>
            <option value="" disabled>Select property type</option>
            <option>Residential home</option>
            <option>Commercial building</option>
            <option>Housing society</option>
            <option>Industrial facility</option>
            <option>Other</option>
          </select>
        </label>
        <label>
          City
          <input name="city" type="text" placeholder="Your city" required />
        </label>
        <label>
          Average monthly electricity bill
          <select name="electricityBill" defaultValue="">
            <option value="" disabled>Select a range</option>
            <option>Below ₹2,000</option>
            <option>₹2,000 – ₹5,000</option>
            <option>₹5,000 – ₹10,000</option>
            <option>₹10,000 – ₹25,000</option>
            <option>Above ₹25,000</option>
          </select>
        </label>
      </div>

      <label className={styles.messageField}>
        How can we help?
        <textarea
          name="message"
          rows={5}
          placeholder="Tell us about your roof, power needs or preferred solar solution"
        />
      </label>

      <button type="submit">Request a free consultation</button>
      <p className={styles.privacy}>By submitting, you agree to be contacted about your enquiry.</p>

      {submitted && (
        <div className={styles.success} role="status">
          Thank you! The form is ready. Connect it to your email or CRM endpoint to receive submissions.
        </div>
      )}
    </form>
  );
}
