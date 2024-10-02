import Link from 'next/link';
import styles from './page.module.css';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ankara Gezi Rehberi</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <Link href="/ankara-tarihi">Ankara Tarihi</Link>
        </div>
        <div className={styles.card}>
          <Link href="/gezilecek-yerler">Ankara'da Gezilecek Yerler</Link>
        </div>
        <div className={styles.card}>
          <Link href="/ankara-harita">Ankara Harita</Link>
        </div>
        <div className={styles.card}>
          <Link href="/ankara-lezzetleri">Ankara'nın Lezzetleri</Link>
        </div>
        <div className={styles.card}>
          <Link href="/eglence-merkezleri">Ankara'nın Eğlence ve Alışveriş Merkezleri</Link>
        </div>
        <div className={styles.card}>
          <Link href="/blog">Blog Sayfası</Link>
        </div>
      </div>
      <div className={styles.socials}>
        <Link href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </Link>
      </div>
    </div>
  );
}
