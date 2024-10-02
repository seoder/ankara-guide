// app/login/page.js
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './styles.css'; // Include CSS file

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registeredUsers, setRegisteredUsers] = useState([]); // Array to store registered users
  const [isRegistering, setIsRegistering] = useState(false); // State to track registration
  const router = useRouter();

  useEffect(() => {
    // Load registered users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    setRegisteredUsers(storedUsers);
    console.log("Registered Users Loaded:", storedUsers); // Debugging log
  }, []);

  const handleLogin = () => {
    const user = registeredUsers.find(
      (user) => user.username === username && user.password === password
    );

    console.log("Attempting login for:", username); // Debugging log

    if (user) {
      // Set cookie for session
      document.cookie = "isLoggedIn=true; path=/"; // Set cookie to indicate logged in

      console.log("User logged in:", user); // Debugging log

      // Redirect to blog page
      router.push('/blog'); 
    } else {
      alert('Kullanıcı adı veya şifre hatalı');
    }
  };

  const handleRegister = () => {
    const existingUser = registeredUsers.find(user => user.username === username);
    
    if (existingUser) {
      alert('Bu kullanıcı adı zaten mevcut.');
    } else {
      const newUser = { username, password };
      const updatedUsers = [...registeredUsers, newUser];
      setRegisteredUsers(updatedUsers); // Add new user
      localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers)); // Save to localStorage
      alert('Kayıt başarılı. Giriş yapabilirsiniz.');
      setUsername(''); // Clear username
      setPassword(''); // Clear password
      setIsRegistering(false); // Close registration form
    }
  };

  const handleGoBack = () => {
    router.push('/'); // Redirect to home page
  };

  return (
    <div className="container">
      <h1 className="heading">{isRegistering ? 'Üye Ol' : 'Giriş Yap'}</h1>
      <input
        type="text"
        placeholder="Kullanıcı Adı"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Şifre"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
      />
      {isRegistering ? (
        <button onClick={handleRegister} className="button">Kayıt Ol</button>
      ) : (
        <button onClick={handleLogin} className="button">Giriş Yap</button>
      )}
      <p className="paragraph">
        {isRegistering ? 'Zaten üye misiniz? ' : 'Üye değil misiniz?  '}
        <button onClick={() => setIsRegistering(!isRegistering)} className="button-secondary">
          {isRegistering ? 'Giriş Yap' : 'Üye Ol'}
        </button>
      </p>
      <button className="go-back-button" onClick={handleGoBack} style={{ marginTop: '20px' }}>
        Geri Dön
      </button>
    </div>
  );
}
