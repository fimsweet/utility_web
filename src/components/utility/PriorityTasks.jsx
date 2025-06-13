import React from 'react';

export default function PriorityTasks() {
  return (
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
  );
}
