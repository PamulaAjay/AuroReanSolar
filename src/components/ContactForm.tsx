"use client";

import { FormEvent, useState } from "react";
import { submitContactEnquiry } from "../api/contact";
import styles from "../styles/Contact.module.css";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<Awaited<ReturnType<typeof submitContactEnquiry>> | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    const readField = (name: string) => String(fields.get(name) ?? "").trim();

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const result = await submitContactEnquiry({
        full_name: readField("name"),
        email: readField("email"),
        phone: readField("phone"),
        property_type: readField("propertyType"),
        city: readField("city"),
        average_monthly_electricity_bill: readField("electricityBill") || undefined,
        how_can_we_help: readField("message") || undefined,
      });

      setFeedback(result);
      if (result.success) form.reset();
    } catch {
      setFeedback({ success: false, message: "We couldn’t submit your enquiry. Please try again." });
    } finally {
      setIsSubmitting(false);
    }
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
            <option value="1000">Below ₹2,000</option>
            <option value="3500">₹2,000 – ₹5,000</option>
            <option value="7500">₹5,000 – ₹10,000</option>
            <option value="17500">₹10,000 – ₹25,000</option>
            <option value="25001">Above ₹25,000</option>
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

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting…" : "Request a free consultation"}
      </button>
      <p className={styles.privacy}>By submitting, you agree to be contacted about your enquiry.</p>

      {feedback && (
        <div className={feedback.success ? styles.success : styles.error} role={feedback.success ? "status" : "alert"}>
          {feedback.message}
        </div>
      )}
    </form>
  );
}
