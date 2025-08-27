import styles from '../styles/Body.module.css';
import Image from 'next/image';
// import banner from '/public/images/next.svg';

const Body = () => {
  return (
    <main className={styles.bodyWrapper}>
      <h2 style={{display:'flex',justifyContent:'center'}}>Welcome to Aurorean Solar</h2>
      <br />
      <Image src="/images/AuroReanSolar.png" alt="Banner" width="400" height="200" />
      <br />
      <p style={{display:'flex',justifyContent:'center'}}>Innovating with every ray</p>
    </main>
  );
};

export default Body;

