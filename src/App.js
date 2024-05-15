import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="/profile.jpeg" className="App-logo" alt="Picture of You" />
        <h1>Kimberly Boyle</h1>
        <p>kimbo</p>
        <p>Hi! My name is Kim and I am a junior Information Systems student at the University of Nevada, Las Vegas.</p>
        <h2>Resume</h2>
        <ul>
          <li>Lets Talk! Therapy, Las Vegas Dermatology, Spa and Fitness Center at Southern Highlands</li>
        </ul>
        <h2>Projects/Work</h2>
        {/* Cloudsurf */}
        <h2>Education</h2>
          <p>Northwest Career and Technical Academy - 2016-2020 and University of Nevada Las Vegas 2021-2025</p>
        <h2>Contact</h2>
        <p>Email: kxmverly@gmail.com</p>
        <p>GitHub: <a href="https://github.com/kxmverly">Your GitHub Profile</a></p>
      </header>
    </div>
  );
}

export default App;
