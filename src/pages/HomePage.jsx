
import { useState } from 'react';
import '../styles/main.css';
import Sidebar from '../components/Sidebar';
import Dashboard from './dashboard/Dashboard';
import TaskStudy from './dashboard/TaskStudy';
import Projects from './dashboard/Projects';
import Hobbies from './dashboard/Hobbies';
import DiaryMood from './dashboard/DiaryMood';
import Finance from './dashboard/Finance';
import Settings from './dashboard/Settings';
import AriaAssistant from './dashboard/AriaAssistant';
import PlayGround from './dashboard/PlayGround';

function renderMainContent(activeKey) {
  switch (activeKey) {
    case 'dashboard':
      return <Dashboard />;
    case 'task_study':
      return <TaskStudy />;
    case 'projects':
      return <Projects />;
    case 'hobbies':
      return <Hobbies />;
    case 'diary_mood':
      return <DiaryMood />;
    case 'finance':
      return <Finance />;
    case 'settings':
      return <Settings />;
    case 'aria_assistant':
      return <AriaAssistant />;
    case 'playground':
      return <PlayGround />;
    default:
      return <div className="placeholder-content">Content for {activeKey.replace('_', ' ')}</div>;
  }
}

export default function HomePage() {
  const [activeKey, setActiveKey] = useState('dashboard');

  return (
    <div className="page-container">
      <Sidebar activeKey={activeKey} setActiveKey={setActiveKey} />
      <main className="main-content">
        {renderMainContent(activeKey)}
      </main>
    </div>
  );
}
