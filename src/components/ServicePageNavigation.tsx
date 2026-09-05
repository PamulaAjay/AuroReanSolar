import Link from "next/link";
import styles from "../styles/ServicePageNavigation.module.css";

type ServiceLink = {
  href: string;
  label: string;
};

type ServicePageNavigationProps = {
  previous?: ServiceLink;
  next?: ServiceLink;
};

export default function ServicePageNavigation({ previous, next }: ServicePageNavigationProps) {
  return (
    <nav className={styles.navigation} aria-label="Related solar services">
      {previous ? (
        <Link href={previous.href} className={styles.link} aria-label={`Previous service: ${previous.label}`}>
          <span className={styles.direction}>←</span>
          <span className={styles.label}>{previous.label}</span>
        </Link>
      ) : null}

      {next ? (
        <Link href={next.href} className={styles.link} aria-label={`Next service: ${next.label}`}>
          <span className={styles.label}>{next.label}</span>
          <span className={styles.direction}>→</span>
        </Link>
      ) : null}
    </nav>
  );
}
