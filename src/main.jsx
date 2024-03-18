import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Introduction from './components/Introduction.jsx'
import OurHistory from './components/OurHistory.jsx'
import Footer from './components/Footer.jsx'
import Candys from './components/Candys.jsx'
import Values from './components/Values.jsx'
import Forms from './components/Forms'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Introduction/>
    <OurHistory/>
    <Candys/>
    <Values/>
    <Forms/>
    <Footer/>
  </React.StrictMode>,
)
