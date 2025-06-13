import { useState } from 'react';
import '../styles/AppHomePage.css'; // Updated import path

// Placeholder icons - consider using an icon library like react-icons
const ProfileIcon = () => <div style={{width: 40, height: 40, borderRadius: '50%', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px', fontWeight: 'bold'}}>CM</div>;
const BottomLogoIcon = () => <div style={{width: 40, height: 40, borderRadius: '8px', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '18px'}}>◈</div>;


const MAIN_NAV_ITEMS = [
  { key: 'explore', label: 'Explore'},
  { key: 'ventures', label: 'Ventures'},
  { key: 'templates', label: 'Templates', tag: 'NEW' },
  { key: 'blog', label: 'Blog'},
  { key: 'hire_me', label: 'Hire me'},
];

const RESOURCE_ITEMS = [
  { key: 'stack', label: 'Stack'},
  { key: 'bookmarks', label: 'Bookmarks'},
  { key: 'now', label: 'Now',},
];

const SOCIAL_ITEMS = [
  { key: 'twitter', label: 'Twitter'},
  { key: 'youtube', label: 'YouTube'},
  { key: 'read_cv', label: 'Read CV'},
];

// Placeholder content for different sections
function renderMainContent(activeKey) {
  switch (activeKey) {
    case 'explore':
      return (
        <div className="explore-dashboard-content">
          <header className="explore-welcome-header">
            <h1>Welcome on board! 👋</h1>
            <p>test1-2-3-4</p>
            {/* Using existing btn classes to maintain color scheme */}
            <button className="btn btn-primary">Create your first Content type →</button>
          </header>

          <div className="explore-main-area">
            <section className="learning-resources-col">
              <div className="resource-card-item">
                <span className="resource-card-icon">📖</span>
                <div>
                  <h3>Read the documentation</h3>
                  <p>Discover the concepts, reference, guides and tutorials.</p>
                </div>
              </div>
              <div className="resource-card-item">
                <span className="resource-card-icon">💻</span>
                <div>
                  <h3>Code example</h3>
                  <p>Learn by testing real project developed by the community.</p>
                </div>
              </div>
              <div className="resource-card-item">
                <span className="resource-card-icon">🎓</span>
                <div>
                  <h3>Tutorial</h3>
                  <p>Discover the concepts, reference, guides and tutorials.</p>
                </div>
              </div>
              <div className="resource-card-item">
                <span className="resource-card-icon">📄</span>
                <div>
                  <h3>Blog</h3>
                  <p>Discover the concepts, reference, guides and tutorials.</p>
                </div>
              </div>
            </section>

            <aside className="community-info-col">
              <h3>Join the community</h3>
              <p>Discuss with team members, contributors and developers on different channels.</p>
              <a href="#" className="roadmap-link">SEE OUR ROAD MAP →</a>
              <div className="community-social-links">
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">Slack</a>
                <a href="#" className="social-link">Reddit</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Medium</a>
                <a href="#" className="social-link">Discourse</a>
              </div>
            </aside>
          </div>

        </div>
      );
    // Add cases for other main nav items if they have unique content
    // case 'ventures':
    //   return <div>Ventures Content Here</div>;
    default:
      return <div className="placeholder-content">Content for {activeKey.replace('_', ' ')}</div>;
  }
}

export default function HomePage() {
  const [activeKey, setActiveKey] = useState('explore');

  const NavLink = ({ item, isActive, onClick }) => (
    <a
      href="#"
      key={item.key}
      className={`sidebar-link ${isActive ? 'active' : ''}`}
      onClick={(e) => { e.preventDefault(); onClick(item.key); }}
    >
      <span className="link-icon">{item.icon}</span>
      {item.label}
      {item.tag && <span className="link-tag">{item.tag}</span>}
    </a>
  );

  return (
    <div className="page-container">
      <aside className="sidebar">
        <div className="sidebar-profile">
          <ProfileIcon />
          <div className="profile-info">
            <span className="profile-name">Ohboi</span>
            <span className="profile-title">hehe boi</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {MAIN_NAV_ITEMS.map(item => (
            <NavLink key={item.key} item={item} isActive={activeKey === item.key} onClick={setActiveKey} />
          ))}
        </nav>

        <div className="sidebar-section">
          <h3 className="sidebar-section-title">RESOURCES</h3>
          <nav className="sidebar-nav">
            {RESOURCE_ITEMS.map(item => (
              <NavLink key={item.key} item={item} isActive={activeKey === item.key} onClick={setActiveKey} />
            ))}
          </nav>
        </div>

        <div className="sidebar-section">
          <h3 className="sidebar-section-title">SOCIAL</h3>
          <nav className="sidebar-nav">
            {SOCIAL_ITEMS.map(item => (
              <NavLink key={item.key} item={item} isActive={activeKey === item.key} onClick={setActiveKey} />
            ))}
          </nav>
        </div>
      </aside>

      <main className="main-content">
        {renderMainContent(activeKey)}
      </main>
    </div>
  );
}
