// app/ankara-lezzetleri/page.js
"use client"; // Bunu ekleyin

import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import styles from './ankara-lezzetleri.module.css';

export default function AnkaraLezzetleri() {
  const dispatch = useDispatch();
  const backgroundColor = useSelector(state => state.backgroundColor);

  const changeBackground = (color) => {
    dispatch({ type: 'CHANGE_BACKGROUND', payload: color });
  };

  return (
    <div className={styles.container} style={{ backgroundColor }}>
      <h1 className={styles.title}>Ankara'nın Lezzetleri</h1>
      <div className={styles.buttonContainer}>
        <button onClick={() => changeBackground('red')} className={styles.colorButton}>Kırmızı</button>
        <button onClick={() => changeBackground('green')} className={styles.colorButton}>Yeşil</button>
        <button onClick={() => changeBackground('blue')} className={styles.colorButton}>Mavi</button>
      </div>

      <div className={styles.content}>
        <h2 className={styles.dishTitle}>Ankara Tava</h2>
        <img 
          src="https://cdn.yemek.com/mnresize/940/940/uploads/2017/08/ankara-tava-tarifi.jpg" 
          alt="Ankara Tava" 
          className={styles.image} 
        />
        <div className={styles.description}>
          <p>Ankara Tava, özel olarak hazırlanmış kuzu etinin, pirinç ve sebzelerle birlikte pişirilmesiyle yapılan lezzetli bir yemektir.</p>
        </div>
        <div className={styles.buttonContainer}>
          <Link href="https://g.co/kgs/XJY1d9J">
            <button className={styles.button}>Yenecek Yer</button>
          </Link>
        </div>
      </div>
      
      <div className={styles.content}>
        <h2 className={styles.dishTitle}>Ankara Simiti</h2>
        <img 
          src="https://cdn.yemek.com/mnresize/940/940/uploads/2023/10/citir-ankara-simidi-tarifi.jpeg" 
          alt="Ankara Simiti" 
          className={styles.image} 
        />
        <div className={styles.description}>
          <p>Ankara Simiti, dışı çıtır çıtır, içi ise yumuşak olan, tahin ve susamla kaplanmış lezzetli bir simittir.</p>
        </div>
        <div className={styles.buttonContainer}>
          <Link href="https://g.co/kgs/9uQVsDb">
            <button className={styles.button}>Yenecek Yer</button>
          </Link>
        </div>
      </div>

      <Link href="/">
        <button className={styles.backButton}>Geri Dön</button>
      </Link>
    </div>
  );
}
