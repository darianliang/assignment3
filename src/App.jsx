import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="site-header">
        <div className="container">
          <p className="brand">MusicConnect</p>
        </div>
      </header>

      <main id="main" className="container" tabIndex={-1}>
        <header className="page-header">
          <h1>Match through music</h1>
          <p className="subhead">
            Pick genres you like. We’ll show profiles with similar preferences.
          </p>
        </header>

        <section className="panel">
          <h2>Explore Page</h2>
          <p>Explore page with filters and profile grid</p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>MusicConnect — match by genre.</p>
        </div>
      </footer>
    </>
  );
}

export default App