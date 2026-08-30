import Image from "next/image";
import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loader} role="status" aria-live="polite">
      <div className={styles.content}>
        <div className={styles.logoWrap}>
          <Image
            src="/images/AuroReanSolar.png"
            alt=""
            width={72}
            height={62}
            priority
          />
          <span className={styles.spinner} aria-hidden="true" />
        </div>
        <strong>Loading your solar solution</strong>
        <span className={styles.message}>Just a moment…</span>
      </div>
    </div>
  );
}
