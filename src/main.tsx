import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router'
import { Routes, Route } from 'react-router-dom'
import Home from "./sites/Home"
import Shop from "./sites/Shop"
import Navigation from "./components/Navigation"
import Events from "./sites/Events"
import Footer from './components/Footer'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<>
        <Navigation />
        <Home />
        <Footer />
      </>} />
      <Route path="/shop" element={
        <>
          <Navigation />
          <Shop />
          <Footer />
        </>
      } />
      <Route path="/events" element={
        <>
          <Navigation />
          <Events />
          <Footer />
        </>
      } />
    </Routes>
  </BrowserRouter>
)
