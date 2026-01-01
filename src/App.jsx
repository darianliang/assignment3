import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand-link" href="#">
          MusicConnect
        </a>
        <ul className="nav-links">
          <li><a href="#explore">Explore</a></li>
          <li><a href="#saved">Saved</a></li>
          <li><a href="#profile">Profile</a></li>
        </ul>
        <a className="nav-cta" href="#signin">Sign In</a>
      </nav>
    </header>
  );
}

function App() {
  const [count, setCount] = useState(0)
  const PROFILES = [
    { id: 1, name: "Mark Grayson" },
    { id: 2, name: "Peter Parker" },
    { id: 3, name: "Jason Nguyen" },
    { id: 4, name: "Hannah Lam" },
    { id: 5, name: "Steve Jobs" },
    { id: 6, name: "Larry Ling" }
  ];

  return (
    <>
      <NavBar />
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

        <h2>Profiles</h2>
        <ul>
          {PROFILES.map(profile => (
            <li key={profile.id}>{profile.name}</li>
          ))}
        </ul>
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