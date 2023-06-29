// jämförelse mellan vue och react
// improt vue from 'vue'
import React from 'react'
import ReactDOM from 'react-dom/client'

// import App from './App.vue'
import App from './App.jsx'
//import './index.css'
import './index.css'

import { registerSW } from 'virtual:pwa-register'

registerSW()

// Vue.createApp('#app').mount(App)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
