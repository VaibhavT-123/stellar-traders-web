import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Main from './pages/Main'
import ProductDetails from './pages/ProductDetails'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/product/:productId' element={<ProductDetails/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
