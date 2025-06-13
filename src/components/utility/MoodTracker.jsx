import React from 'react';

export default function MoodTracker() {
  return (
    <section className="utility-section mood-section">
      <div className="section-header">
        <h3>😊 Mood Tracker</h3>
      </div>
      <div className="mood-tracker">
        <div className="mood-week">
          <div className="mood-day">
            <span className="day">Mon</span>
            <span className="mood-emoji">😴</span>
          </div>
          <div className="mood-day">
            <span className="day">Tue</span>
            <span className="mood-emoji">🤔</span>
          </div>
          <div className="mood-day">
            <span className="day">Wed</span>
            <span className="mood-emoji">😎</span>
          </div>
          <div className="mood-day">
            <span className="day">Thu</span>
            <span className="mood-emoji">🔥</span>
          </div>
          <div className="mood-day today">
            <span className="day">Fri</span>
            <span className="mood-emoji">💪</span>
          </div>
        </div>
      </div>
    </section>
  );
}
