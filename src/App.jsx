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

function ProfileCard({ profile }) {
  return (
    <li className="card">
      <article>
        <p className="avatar" aria-hidden="true">{profile.initials}</p>
        <h3>{profile.name}</h3>
        <p className="meta">Genres: {profile.genresLabel}</p>
      </article>
    </li>
  );
}

function App() {
  
  const PROFILES = [
    { id: 1, name: "Mark Grayson", initials: "MG", genresLabel: "Indie, Rock" },
    { id: 2, name: "Peter Parker", initials: "PP", genresLabel: "Pop, R&B" },
    { id: 3, name: "Jason Nguyen", initials: "JN", genresLabel: "R&B, Pop" },
    { id: 4, name: "Hannah Lam", initials: "HL", genresLabel: "Jazz, Classical" },
    { id: 5, name: "Steve Jobs", initials: "SJ", genresLabel: "Rock, Indie" },
    { id: 6, name: "Larry Ling", initials: "LL", genresLabel: "Hip-hop, Pop" }
  ];
  const GENRES = [
    { label: "Hip-hop", value: "hiphop" },
    { label: "R&B", value: "rnb" },
    { label: "Pop", value: "pop" },
    { label: "Rock", value: "rock" },
    { label: "Indie", value: "indie" },
    { label: "Jazz", value: "jazz" },
    { label: "Classical", value: "classical" },
    { label: "Electronic", value: "electronic" }
  ]
  const [selectedGenres, setSelectedGenres] = useState([]);

  function toggleGenre(genreValue) {
    setSelectedGenres(prevSelected => {
      if (prevSelected.includes(genreValue)) {
        return prevSelected.filter(g => g !== genreValue);
      }
      return [...prevSelected, genreValue];
    });
  }

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
          <section className="panel" aria-labelledby='genres-title'>
            <h2 id="genres-title">Select Genres</h2>
            <fieldset className="genre-filters">
              <div className="filters-grid">
                {GENRES.map((genre) => {
                  const id = `genre-${genre.value}`;
                  return (
                    <label className="check" key={genre.value} htmlFor={id}>
                      <input
                        type="checkbox"
                        id={id}
                        name="genres"
                        checked={selectedGenres.includes(genre.value)}
                        onChange={() => toggleGenre(genre.value)}
                      />
                      <span>{genre.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            
          </section>
        </header>

        <h2>Profiles</h2>
        <ul className="profile-grid">
          {PROFILES.map(profile => (
            <ProfileCard key={profile.id} profile={profile} />
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