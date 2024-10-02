'use client'; // Client Component olarak işaretle

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = (e) => {
    e.preventDefault();
    
    // Kayıt işlemi (Gerçek uygulamada veritabanına kaydetmeniz gerekir)
    document.cookie = `username=${username}; path=/`; // Kullanıcı adını cookie'ye kaydetme
    document.cookie = "isLoggedIn=true; path=/"; // Kullanıcıyı girişli olarak ayarlama
    router.push('/blog'); // Blog sayfasına yönlendir
  };

  return (
    <div>
      <h1>Kayıt Ol</h1>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
}
