import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Products from "./components/products/Products";
import Cart from "./components/products/Cart";


const App = () => {
  const links = [
      { name: 'Home', path: '/home' },
      { name: 'About', path: '/about' },
      { name: 'Contact', path: '/contact' },
      { name: 'Blog', path: '/blog' },
      { name: 'Services', path: '/services' },
    ];
  return (
    <div className="App">
    <header>
      <Cart products={Products} />
      <Header />
      
      <Navbar links={links} />
    </header>
    <main>
      <Products />
      
    </main>
    </div>
  )
};
export default App;


