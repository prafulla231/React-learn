import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'; 
import Card from './Card.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Card username ="apple card" buttontext = "go there"/>
    <Card username ="microsoft card" buttontext = "come here"/>
  </React.StrictMode>
)
