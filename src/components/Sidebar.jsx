import React from 'react';

const NavLink = ({ item, isActive, onClick }) => (
  <a
    href="#"
    key={item.key}
    className={`sidebar-link ${isActive ? 'active' : ''}`}
    onClick={(e) => { e.preventDefault(); onClick(item.key); }}
  >
    {item.label}
    {item.tag && <span className="link-tag">{item.tag}</span>}
  </a>
);

const MAIN_NAV_ITEMS = [
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'task_study', label: 'Task & Study' },
  { key: 'projects', label: 'Projects' },
  { key: 'hobbies', label: 'Hobbies' },
];

const PERSONAL_ITEMS = [
  { key: 'diary_mood', label: 'Diary & Mood' },
  { key: 'finance', label: 'Finance' },
];

const SYSTEM_ITEMS = [
  { key: 'settings', label: 'Settings' },
  { key: 'aria_assistant', label: 'ARIA - Assistant', tag: 'AI' },
];

const PLAYGROUND_ITEMS = [
  { key: 'playground', label: 'All Playground' },
];

export default function Sidebar({ activeKey, setActiveKey }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-profile">
        <div className="profile-info">
          <span className="profile-name">fimsweet</span>
          <span className="profile-title">Foodlover</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {MAIN_NAV_ITEMS.map(item => (
          <NavLink key={item.key} item={item} isActive={activeKey === item.key} onClick={setActiveKey} />
        ))}
      </nav>

      <div className="sidebar-section">
        <h3 className="sidebar-section-title">PERSONAL</h3>
        <nav className="sidebar-nav">
          {PERSONAL_ITEMS.map(item => (
            <NavLink key={item.key} item={item} isActive={activeKey === item.key} onClick={setActiveKey} />
          ))}
        </nav>
      </div>      <div className="sidebar-section">
        <h3 className="sidebar-section-title">SYSTEM</h3>
        <nav className="sidebar-nav">
          {SYSTEM_ITEMS.map(item => (
            <NavLink key={item.key} item={item} isActive={activeKey === item.key} onClick={setActiveKey} />
          ))}
        </nav>
      </div>

      <div className="sidebar-section">
        <h3 className="sidebar-section-title">PLAYGROUND</h3>
        <nav className="sidebar-nav">
          {PLAYGROUND_ITEMS.map(item => (
            <NavLink key={item.key} item={item} isActive={activeKey === item.key} onClick={setActiveKey} />
          ))}
        </nav>
      </div>
    </aside>
  );
}
