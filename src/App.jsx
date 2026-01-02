import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Link, Route, Routes } from 'react-router-dom';
import './App.css'

function NavBar() {
  return (
    <header className="site-header">
      <nav className="nav" aria-label="Primary navigation">
        <Link className="brand-link" to="/">
          MusicConnect
        </Link>

        <ul className="nav-links">
          <li><Link to="/">Explore</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>

        <a className="nav-cta" href="#signin">Sign In</a>
      </nav>
    </header>
  );
}

function ExplorePage() {
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
  ];

  const [selectedGenres, setSelectedGenres] = useState([]);

  useEffect(() => {
    console.log("Selected genres:", selectedGenres);
  }, [selectedGenres]);

  function toggleGenre(genreValue) {
    setSelectedGenres((prevSelected) =>
      prevSelected.includes(genreValue)
        ? prevSelected.filter((g) => g !== genreValue)
        : [...prevSelected, genreValue]
    );
  }

  return (
    <main id="main" className="container" tabIndex={-1}>
      <header className="page-header">
        <h1>Match through music</h1>
        <p className="subhead">
          Pick genres you like. We’ll show profiles with similar preferences.
        </p>

        <section className="panel" aria-labelledby="genres-title">
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
        {PROFILES.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </ul>
    </main>
  );
}

function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
        const res = await fetch("http://localhost:3001/users");
        const data = await res.json();
        setUsers(data);
      }

    loadUsers();
  }, []);

  return (
    <main className="container">
      <h1>Users</h1>

      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.first_name} {user.last_name} ({user.email})
          </li>
        ))}
      </ul>
    </main>
  );
}




function ProfileCard({ profile }) {
  return (
    <li className="card">
      <article>
        <p className="avatar" aria-hidden="true">
          {profile.initials}
        </p>
        <h3>{profile.name}</h3>
        <p className="meta">Genres: {profile.genresLabel}</p>
      </article>
    </li>
  );
}



function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<ExplorePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>

      <footer className="site-footer">
        <div className="container">
          <p>MusicConnect — match by genre.</p>
        </div>
      </footer>
    </>
  );
}


export default App