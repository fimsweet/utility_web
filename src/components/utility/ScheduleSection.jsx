import React from 'react';

export default function ScheduleSection() {
  return (
    <section className="utility-section schedule-section">
      <div className="section-header">
        <h3>📅 Today's Schedule</h3>
        <span className="date-badge">Nov 15, 2024</span>
      </div>
      <div className="schedule-list">
        <div className="schedule-item">
          <span className="time">09:00</span>
          <span className="task">Code Review - Game Engine</span>
        </div>
        <div className="schedule-item">
          <span className="time">14:00</span>
          <span className="task">Algorithm Assignment Due</span>
        </div>
        <div className="schedule-item">
          <span className="time">20:00</span>
          <span className="task">Anime Time - JJK S2</span>
        </div>
      </div>
    </section>
  );
}
