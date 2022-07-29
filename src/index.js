import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Prices from './components/Prices';
import Contact from './components/Contact';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Hero />
    <Services />
    <Prices />
    <Contact />
    <Footer />
  </React.StrictMode>
);
