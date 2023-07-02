import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Loign from './components/Loign'
import Main from './components/Main'
import Nav from './components/Nav'


function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <Header />
      </header>
      <main className='App-main'>
        <Main />
      </main>
    </div>
  )
}

export default App
