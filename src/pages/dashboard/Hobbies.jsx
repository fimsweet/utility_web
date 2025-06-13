import React from 'react';

export default function Hobbies() {
  return (
    <div className="content-section">
      <h2>🎌 Hobbies</h2>
      <div className="card-grid">
        <div className="content-card">
          <div className="card-body">
            <h3>📺 Anime & Light Novels</h3>
            <p>Track your watching and reading progress</p>
            <div className="card-tag">Entertainment</div>
          </div>
        </div>
        <div className="content-card">
          <div className="card-body">
            <h3>🎮 Game Tracker</h3>
            <p>Monitor your gaming progress and achievements</p>
            <div className="card-tag">Gaming</div>
          </div>
        </div>
      </div>
    </div>
  );
}
