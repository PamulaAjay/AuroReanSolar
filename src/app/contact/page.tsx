import Link from "next/link";
import {
  FaClock,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ContactForm from "../../components/ContactForm";
import styles from "../../styles/Contact.module.css";

const contactDetails = [
  {
    icon: <FaPhoneAlt aria-hidden="true" />,
    title: "Call our solar team",
    detail: "+91 79955 41071",
    secondary: "+91 73370 69230",
    href: "tel:+917995541071",
  },
  {
    icon: <FaEnvelope aria-hidden="true" />,
    title: "Send us an email",
    detail: "auroreansolar@gmail.com",
    secondary: "We usually reply within one business day",
    href: "mailto:auroreansolar@gmail.com",
  },
  {
    icon: <FaClock aria-hidden="true" />,
    title: "Working hours",
    detail: "Monday – Saturday",
    secondary: "9:00 AM – 6:00 PM",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>Let’s talk solar</span>
            <h1>Start saving with a solar plan made for you</h1>
            <p>
              From your first question to installation and support, our team is
              here to make your switch to solar simple.
            </p>
            <div className={styles.heroActions}>
              <a href="tel:+917995541071"><FaPhoneAlt aria-hidden="true" /> Call now</a>
              <a href="https://wa.me/917995541071" target="_blank" rel="noreferrer">
                <FaWhatsapp aria-hidden="true" /> WhatsApp us
              </a>
            </div>
          </div>
        </section>

        <section className={styles.contactSection}>
          <div className={styles.infoColumn}>
            <span className={styles.kicker}>Contact AuroRean Solar</span>
            <h2>Real guidance from a local solar team</h2>
            <p className={styles.intro}>
              Whether you need rooftop solar for a home, business or housing
              society, share your requirements and we’ll guide you through the
              suitable capacity, subsidy and installation process.
            </p>

            <div className={styles.detailList}>
              {contactDetails.map((item) => (
                <div className={styles.detailCard} key={item.title}>
                  <span className={styles.detailIcon}>{item.icon}</span>
                  <div>
                    <h3>{item.title}</h3>
                    {item.href ? <a href={item.href}>{item.detail}</a> : <strong>{item.detail}</strong>}
                    <p>{item.secondary}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.socialBox}>
              <div>
                <h3>Connect with us</h3>
                <p>Follow our work and latest solar updates.</p>
              </div>
              <div className={styles.socialLinks}>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://wa.me/917995541071" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>

          <ContactForm />
        </section>

        <section className={styles.locations}>
          <div className={styles.locationHeading}>
            <span className={styles.kicker}>Our presence</span>
            <h2>Serving Telangana from four locations</h2>
          </div>
          <div className={styles.locationGrid}>
            {["Hyderabad", "Peddapalli", "Karimnagar", "Telangana"].map((location, index) => (
              <div className={styles.locationCard} key={location}>
                <FaMapMarkerAlt aria-hidden="true" />
                <div>
                  <span>{index === 0 ? "Head office" : "Service location"}</span>
                  <h3>{location}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.bottomCta}>
          <div>
            <span>Prefer to learn first?</span>
            <h2>Explore our practical guides to choosing the right solar system.</h2>
          </div>
          <Link href="/blogs">Visit the solar blog</Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
