import Link from 'next/link'; // Link bileşenini içe aktar
import styles from './ankara-harita.module.css'; // CSS modülünü içe aktarın

export default function AnkaraHarita() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ankara Haritası</h1>
      <div className={styles.mapContainer}>
        {/* OpenStreetMap iframe ile harita */}
        <iframe 
          src="https://www.openstreetmap.org/export/embed.html?bbox=32.8587%2C39.9174%2C32.9866%2C39.9821&layer=mapnik" 
          width="100%" 
          height="600" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
        />
      </div>
      <Link href="/" className={styles.backButton}>
        Geri Dön
      </Link>
    </div>
  );
}
