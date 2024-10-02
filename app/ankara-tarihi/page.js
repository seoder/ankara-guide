"use client"; // Bunu ekleyin

import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ankara-tarihi.module.css';

export default function AnkaraTarihi() {
  const dispatch = useDispatch();
  const backgroundColor = useSelector(state => state.background.color); // Arka plan rengi

  const changeBackground = (color) => {
    dispatch({ type: 'background/setBackgroundColor', payload: color });
  };

  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <h1 className={styles.title}>Ankara Tarihi</h1>
      <div className={styles.content}>
        <p>
          Ankara, Türkiye'nin başkenti olup, zengin bir tarihe sahiptir. Tarih boyunca birçok medeniyete ev sahipliği yapmış olan Ankara, özellikle Roma, Bizans ve Osmanlı dönemlerinde önemli bir merkez olmuştur.
        </p>
        <p>
          Şehir, özellikle Atatürk'ün Türkiye Cumhuriyeti'ni kurmasından sonra, modern bir başkent olarak gelişim göstermiştir. Bugün, hem tarihi hem de kültürel açıdan zengin bir şehir olarak dikkat çekmektedir.
        </p>
        <p>
          Ankara'nın tarihi yerleri arasında Anıtkabir, Roma Hamamı ve Haci Bayram Camii gibi önemli yapılar bulunmaktadır. Ziyaretçiler bu tarihi mekanları keşfederken, şehrin geçmişine tanıklık etme fırsatı bulmaktadırlar.
        </p>
      </div>
      <div className={styles.videoWrapper}>
        <iframe
          className={styles.video}
          width="560"
          height="315"
          src="https://www.youtube.com/embed/HD5sdphJWa4"
          title="Ankara Tarihi"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      {/* Arka Plan Rengini Değiştiren Butonlar */}
      <div className={styles.buttonContainer}>
        <button onClick={() => changeBackground('red')} className={styles.colorButton}>Kırmızı</button>
        <button onClick={() => changeBackground('green')} className={styles.colorButton}>Yeşil</button>
        <button onClick={() => changeBackground('blue')} className={styles.colorButton}>Mavi</button>
      </div>

      <Link href="/" className={styles.backButton}>
        Geri Dön
      </Link>
    </div>
  );
}
