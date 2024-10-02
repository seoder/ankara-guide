// app/layout.js
"use client"; // Bunu ekleyin

import { Provider } from 'react-redux';
import store from '../app/redux/store'; // Redux store'unuzu içe aktarın
import './globals.css';
import Weather from '../app/components/Weather'; 

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <html lang="tr">
        <body className="antialiased">
          <Weather />
          {children}
        </body>
      </html>
    </Provider>
  );
}
