
import NavBar from './componenet/navBar/navBar'
import Footer from './componenet/footer/Footer'
import HomePage from './componenet/Home.jsx'
import  React  from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shopping_cart from './componenet/Shopping cart/ShoppingCart.jsx'
import About from './componenet/About/About.jsx'
function App() {
  return (
    <>
       <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/HomePage" element={<HomePage />}/>

        <Route path="/Shopping" element={<Shopping_cart/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Contact" element={<HomePage/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>


      {/* <NavBar />
      <AboutSec />
      <Icon_slider />
      <Slider />
      <About_bar />
      <Class_sec />
      <Footer /> */}
    </>
  );
}

export default App;
