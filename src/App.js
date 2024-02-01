import React from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import NavBar from './componenet/navBar/navBar'
import Footer from './componenet/footer/Footer'
import HomePage from './componenet/Home.jsx'
import Shopping_cart from './componenet/cart/ShoppingCart.jsx'
import About from './componenet/About/About.jsx'
import Shop from './componenet/Shop/Shop.jsx'
import Contact from './componenet/Contact/Contact.jsx'
import Home1 from './componenet/Home/Home1.jsx'
import {CakePro} from './componenet/Shop/Product.jsx'
import {CupCakePro} from './componenet/Shop/Product.jsx'
import {BreadPro} from './componenet/Shop/Product.jsx'
import { CookiesPro } from './componenet/Shop/Product.jsx'
import { RollsPro } from './componenet/Shop/Product.jsx'
import { DonutPro } from './componenet/Shop/Product.jsx'
function Layout() {
  const location = useLocation()
  return (
    <>
      {location.pathname !== '/' && <NavBar />}
      <Routes>
        <Route path="/" element={<Home1 />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Shopping" element={<Shopping_cart />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/CakePro" element={<CakePro />} />
        <Route path="/CupCakePro" element={<CupCakePro />} />
        <Route path="/BreadPro" element={<BreadPro />} />
        <Route path="/CakePro" element={<DonutPro />} />
        <Route path="/CupCakePro" element={<CookiesPro />} />
        <Route path="/BreadPro" element={<RollsPro />} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}

export default App