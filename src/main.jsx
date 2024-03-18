import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Introduction from './components/Introduction.jsx'
import OurHistory from './components/OurHistory.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Introduction/>
    <OurHistory/>
  </React.StrictMode>,
)
