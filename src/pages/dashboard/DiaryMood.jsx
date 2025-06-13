import React from 'react';

export default function DiaryMood() {
  return (
    <div className="content-section">
      <h2>📖 Diary & Mood</h2>
      <div className="card-grid">
        <div className="content-card">
          <div className="card-body">
            <h3>📝 Daily Journal</h3>
            <p>Your personal daily thoughts and reflections</p>
            <div className="card-tag">Personal</div>
          </div>
        </div>
        <div className="content-card">
          <div className="card-body">
            <h3>😊 Mood Tracker</h3>
            <p>Track your daily emotions and feelings</p>
            <div className="card-tag">Wellness</div>
          </div>
        </div>
      </div>
    </div>
  );
}
