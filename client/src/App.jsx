import React, { useState, useContext } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import UserContext from './context/UserContext'
import './App.css'

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    email: '',
    password: '',
    favResorts: [],
  })
  return (
    <div className="App">
      <header className='App-header'>
        <Header />
      </header>
      <main className='App-main'>
        <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
          <Main />
        </UserContext.Provider>
      </main>
      <footer className='App-footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default App
