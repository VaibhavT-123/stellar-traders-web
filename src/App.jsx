import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Main from './pages/Main';
import ProductDetails from './pages/ProductDetails';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';

const App = () => {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<Main />} />
          <Route path='/product/:productId' element={<ProductDetails />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
