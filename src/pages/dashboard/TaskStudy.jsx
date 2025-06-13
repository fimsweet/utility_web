import React from 'react';

export default function TaskStudy() {
  return (
    <div className="content-section">
      <h2>📚 Task & Study</h2>
      <div className="card-grid">
        <div className="content-card">
          <div className="card-body">
            <h3>📝 Todo List</h3>
            <p>Manage your daily tasks and assignments</p>
            <div className="card-tag">Development</div>
          </div>
        </div>
        <div className="content-card">
          <div className="card-body">
            <h3>⏰ Deadline Tracker</h3>
            <p>Keep track of assignment and project deadlines</p>
            <div className="card-tag">Academic</div>
          </div>
        </div>
      </div>
    </div>
  );
}
