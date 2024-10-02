"use client"; // Bunu ekleyin

import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import styles from './gezilecek-yerler.module.css';

export default function GezilecekYerler() {
  const dispatch = useDispatch();
  const backgroundColor = useSelector(state => state.backgroundColor);

  const changeBackground = (color) => {
    dispatch({ type: 'CHANGE_BACKGROUND', payload: color });
  };

  const places = [
    {
      name: "Anıtkabir",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Ataturk%27s_Mausoleum_%286225341313%29.jpg/270px-Ataturk%27s_Mausoleum_%286225341313%29.jpg",
      description: "Mustafa Kemal Atatürk'ün anıt mezarıdır ve Türkiye'nin en önemli sembollerinden biridir."
    },
    {
      name: "Eymir Gölü",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Lake_Eymir2.jpg",
      description: "Ankara'nın güzel göllerinden biri olan Eymir Gölü, doğa yürüyüşleri ve piknik için ideal bir yerdir."
    },
    {
      name: "Hamamönü",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8ieVljdJRogw-G54HmT3ZkTaHOGlwx5_mig&s",
      description: "Ankara'nın tarihi bir mahallesi olan Hamamönü, restore edilmiş Osmanlı evleriyle ünlüdür."
    },
    {
      name: "Ankara Kalesi",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/86/Ankara_Castle.jpg",
      description: "Şehrin en yüksek noktasında bulunan bu kale, Ankara'nın tarihi simgelerinden biridir."
    },
    {
      name: "Beypazarı",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/3X0A6495_Beypazar%C4%B1.jpg/1200px-3X0A6495_Beypazar%C4%B1.jpg",
      description: "Tarihi evleri ve doğal güzellikleriyle bilinen Beypazarı, özellikle tarhanasıyla meşhurdur."
    },
    {
      name: "Kızılcahamam",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQnVFdLv2AKdz2YvakHXyeiuL33bdcl9IjlA&s",
      description: "Doğal kaplıcalarıyla ünlü olan Kızılcahamam, hem dinlenme hem de sağlık için tercih edilen bir yerdir."
    },
    {
      name: "Estergon Kalesi",
      imageUrl: "https://holitera.com/blog/wp-content/uploads/2023/01/60cdb25cc8c37311b0e8c749.webp",
      description: "Estergon Kalesi, tarihi dokusu ve muhteşem manzarasıyla ziyaretçileri kendine hayran bırakır."
    },
  ];

  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <h1 className={styles.title}>Ankara'da Gezilecek Yerler</h1>
      <div className={styles.gallery}>
        {places.map((place, index) => (
          <div key={index} className={styles.imageWrapper}>
            <img src={place.imageUrl} alt={place.name} className={styles.image} />
            <h2 className={styles.imageTitle}>{place.name}</h2>
            <p className={styles.imageDescription}>{place.description}</p>
          </div>
        ))}
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
