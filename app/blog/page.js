// app/blog/page.js
'use client';

import { useEffect, useState } from 'react';
import './styles.css'; // CSS dosyasını import et

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [message, setMessage] = useState('');

  const handleLogout = () => {
    // Cookie'yi sil
    document.cookie = 'isLoggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = '/login'; // Giriş sayfasına yönlendir
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = e.target.elements.post.value;
    setPosts([...posts, newPost]);
    setMessage('Yazınız başarıyla gönderildi!');
    e.target.reset();
  };

  return (
    <div className="container">
      <h1>Blog Sayfası</h1>
      <button className="logout-button" onClick={handleLogout}>Çıkış Yap</button>
      <form onSubmit={handleSubmit}>
        <textarea name="post" placeholder="Buraya yazın..." required />
        <button type="submit">Gönder</button>
      </form>
      {message && <p className="message">{message}</p>}
      <div className="blog-container">
        <h2>Yazılar:</h2>
        {posts.length > 0 ? (
          <ul>
            {posts.map((post, index) => (
              <li key={index} style={{ color: 'black' }}>{post}</li> // Yazıları siyah yap
            ))}
          </ul>
        ) : (
          <p className="no-posts">Henüz hiç yazı yok.</p> // Mesajı kutucuk içine al
        )}
      </div>
    </div>
  );
}
