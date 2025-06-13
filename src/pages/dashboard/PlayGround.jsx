import React from 'react';

export default function PlayGround() {
  return (
    <div className="playground-content">
      <header className="page-header">
        <h1>🎮 All Playground</h1>
        <p>Khám phá các mini game và công cụ thú vị</p>
      </header>

      <div className="playground-grid">
        {/* Games Section */}
        <section className="utility-section games-section">
          <div className="section-header">
            <h3>🎯 Mini Games</h3>
            <button className="btn-small">+ Thêm Game</button>
          </div>
          <div className="games-list">
            <div className="game-card">
              <div className="game-icon">🐍</div>
              <div className="game-info">
                <h4>Snake Game</h4>
                <p>Game rắn săn mồi cổ điển</p>
                <span className="game-status available">Có thể chơi</span>
              </div>
              <button className="btn-play">Chơi ngay</button>
            </div>
            
            <div className="game-card">
              <div className="game-icon">🧩</div>
              <div className="game-info">
                <h4>Puzzle 2048</h4>
                <p>Trò chơi ghép số thông minh</p>
                <span className="game-status development">Đang phát triển</span>
              </div>
              <button className="btn-play" disabled>Sắp ra mắt</button>
            </div>

            <div className="game-card">
              <div className="game-icon">🎲</div>
              <div className="game-info">
                <h4>Memory Game</h4>
                <p>Trò chơi rèn luyện trí nhớ</p>
                <span className="game-status available">Có thể chơi</span>
              </div>
              <button className="btn-play">Chơi ngay</button>
            </div>
          </div>
        </section>

        {/* Tools Section */}
        <section className="utility-section tools-section">
          <div className="section-header">
            <h3>🛠️ Developer Tools</h3>
            <button className="btn-small">+ Thêm Tool</button>
          </div>
          <div className="tools-list">
            <div className="tool-card">
              <div className="tool-icon">🎨</div>
              <div className="tool-info">
                <h4>Color Palette Generator</h4>
                <p>Tạo bảng màu cho dự án</p>
              </div>
              <button className="btn-tool">Mở Tool</button>
            </div>

            <div className="tool-card">
              <div className="tool-icon">📏</div>
              <div className="tool-info">
                <h4>Unit Converter</h4>
                <p>Chuyển đổi đơn vị đo lường</p>
              </div>
              <button className="btn-tool">Mở Tool</button>
            </div>

            <div className="tool-card">
              <div className="tool-icon">🔤</div>
              <div className="tool-info">
                <h4>Text Generator</h4>
                <p>Tạo text lorem ipsum</p>
              </div>
              <button className="btn-tool">Mở Tool</button>
            </div>
          </div>
        </section>

        {/* Creative Section */}
        <section className="utility-section creative-section">
          <div className="section-header">
            <h3>🎨 Creative Corner</h3>
            <button className="btn-small">+ Thêm mới</button>
          </div>
          <div className="creative-list">
            <div className="creative-card">
              <div className="creative-icon">✏️</div>
              <div className="creative-info">
                <h4>Pixel Art Editor</h4>
                <p>Vẽ pixel art đơn giản</p>
                <div className="creative-stats">
                  <span>Canvas: 16x16</span>
                  <span>Colors: 8bit</span>
                </div>
              </div>
              <button className="btn-creative">Bắt đầu vẽ</button>
            </div>

            <div className="creative-card">
              <div className="creative-icon">🎵</div>
              <div className="creative-info">
                <h4>Music Generator</h4>
                <p>Tạo nhạc nền 8-bit</p>
                <div className="creative-stats">
                  <span>Tempo: 120 BPM</span>
                  <span>Scale: C Major</span>
                </div>
              </div>
              <button className="btn-creative">Sáng tác</button>
            </div>
          </div>
        </section>

        {/* Experiments Section */}
        <section className="utility-section experiments-section">
          <div className="section-header">
            <h3>🧪 Experiments</h3>
            <button className="btn-small">+ Thử nghiệm</button>
          </div>
          <div className="experiments-list">
            <div className="experiment-card">
              <div className="experiment-status active"></div>
              <div className="experiment-info">
                <h4>AI Chat Bot</h4>
                <p>Chatbot thông minh với AI</p>
                <div className="experiment-tags">
                  <span className="tag ai">AI</span>
                  <span className="tag beta">Beta</span>
                </div>
              </div>
              <button className="btn-experiment">Thử nghiệm</button>
            </div>

            <div className="experiment-card">
              <div className="experiment-status planning"></div>
              <div className="experiment-info">
                <h4>Voice Commands</h4>
                <p>Điều khiển bằng giọng nói</p>
                <div className="experiment-tags">
                  <span className="tag voice">Voice</span>
                  <span className="tag soon">Sắp tới</span>
                </div>
              </div>
              <button className="btn-experiment" disabled>Sắp ra mắt</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
