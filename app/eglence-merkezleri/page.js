// app/page.js
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ankara Gezi Rehberi</h1>
      <div className={styles.grid}>
        <div className={styles.card}>
          <Link href="/ankara-tarihi">
            Ankara Tarihi
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/gezilecek-yerler">
            Ankara'da Gezilecek Yerler
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/ankara-harita">
            Ankara Harita
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/ankara-lezzetleri">
            Ankara'nın Lezzetleri
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/ankara-tarihi-mekanlar">
            Ankara'nın Tarihi Mekanları
          </Link>
        </div>
        <div className={styles.card}>
          <Link href="/ankara-eglence-merkezleri"> {/* Burayı güncelledik */}
            Ankara'nın Eğlence ve Alışveriş Merkezleri
          </Link>
        </div>
      </div>
    </div>
  );
}
