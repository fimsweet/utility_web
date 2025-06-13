import React from 'react';

export default function Projects() {
  return (
    <div className="content-section">
      <h2>🎮 Projects</h2>
      <div className="card-grid">
        <div className="content-card">
          <div className="card-body">
            <h3>🕹️ Game Dev Log</h3>
            <p>Development journal for your pixel 2D game</p>
            <div className="card-tag">Game Dev</div>
          </div>
        </div>
        <div className="content-card">
          <div className="card-body">
            <h3>🤖 Lore Raven</h3>
            <p>Armored Core 6 lore notes and PvP builds</p>
            <div className="card-tag">Gaming</div>
          </div>
        </div>
        <div className="content-card">
          <div className="card-body">
            <h3>💡 Side Projects</h3>
            <p>Small ideas and experimental projects</p>
            <div className="card-tag">Ideas</div>
          </div>
        </div>
      </div>
    </div>
  );
}
