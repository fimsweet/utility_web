import React from 'react';

export default function Dashboard() {
  return (
    <div className="home-dashboard-content">
      <header className="home-welcome-header">
        <h1>Chào mừng quay trở lại !</h1>
        <p>Website tiện ích riêng cho Trường, ai tình cờ tìm được trang web này thì.... um... chào mừng ^^ .</p>
        <p>Hãy thoải mái khám phá nhé </p>
      </header>

      <div className="home-main-grid">
        {/* Today's Schedule */}
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

        {/* Priority Tasks */}
        <section className="utility-section priority-tasks-section">
          <div className="section-header">
            <h3>⚡ Priority Tasks</h3>
            <button className="btn-small">+ Add</button>
          </div>
          <div className="priority-tasks-list">
            <div className="priority-task high">
              <span className="priority-dot"></span>
              <span>Fix pixel collision bug</span>
            </div>
            <div className="priority-task medium">
              <span className="priority-dot"></span>
              <span>Study data structures</span>
            </div>
            <div className="priority-task low">
              <span className="priority-dot"></span>
              <span>Update game dev blog</span>
            </div>
          </div>
        </section>

        {/* Mood Tracker */}
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

        {/* Quote of the Day */}
        <section className="utility-section quote-section">
          <div className="section-header">
            <h3>💭 Quote of the Day</h3>
          </div>
          <div className="daily-quote">
            <blockquote>
              "The best way to predict the future is to create it."
            </blockquote>
            <cite>— Peter Drucker</cite>
          </div>
        </section>
      </div>
    </div>
  );
}
