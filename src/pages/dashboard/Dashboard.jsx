import React, { useRef, useState } from 'react';

export default function Dashboard() {
  const [selectedColor, setSelectedColor] = useState('#3b82f6');
  const [uploadedImage, setUploadedImage] = useState(null);
  const [pickedColor, setPickedColor] = useState('');
  const [showImagePopup, setShowImagePopup] = useState(false);
  const [imageScale, setImageScale] = useState(1);
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);
  const imageRef = useRef(null);
  const popupCanvasRef = useRef(null);
  const popupImageRef = useRef(null);
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageLoad = () => {
    const canvas = canvasRef.current;
    const img = imageRef.current;
    if (canvas && img) {
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
    }
  };
  const handlePopupImageLoad = () => {
    const canvas = popupCanvasRef.current;
    const img = popupImageRef.current;
    if (canvas && img) {
      const ctx = canvas.getContext('2d');
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.drawImage(img, 0, 0);
    }
  };  const handleImageClick = () => {
    setShowImagePopup(true);
    setImageScale(1);
    setImagePosition({ x: 0, y: 0 });
  };

  const handleClosePopup = () => {
    setShowImagePopup(false);
  };

  const handleRemoveImage = () => {
    setUploadedImage(null);
    setPickedColor('');
    setShowImagePopup(false);
  };

  const handleZoom = (delta) => {
    setImageScale(prev => Math.min(Math.max(prev + delta, 0.5), 3));
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX - imagePosition.x,
      y: e.clientY - imagePosition.y
    });
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setImagePosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const hexToRgb = (hex) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  const rgbToHsl = (r, g, b) => {
    r /= 255;
    g /= 255;
    b /= 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if (max === min) {
      h = s = 0;
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  };

  const getColorFormats = (hexColor) => {
    const rgb = hexToRgb(hexColor);
    if (!rgb) return {};
    
    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    
    return {
      hex: hexColor.toUpperCase(),
      rgb: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
      rgba: `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 1)`,
      hsl: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`,
      hsla: `hsla(${hsl.h}, ${hsl.s}%, ${hsl.l}%, 1)`
    };
  };
  const handleCanvasClick = (event, isPopup = false) => {
    const canvas = isPopup ? popupCanvasRef.current : canvasRef.current;
    const img = isPopup ? popupImageRef.current : imageRef.current;
    
    if (canvas && img) {
      const rect = canvas.getBoundingClientRect();
      
      let x, y;
      
      if (isPopup) {
        // For popup canvas with zoom and pan
        const canvasRect = canvas.getBoundingClientRect();
        const imgRect = img.getBoundingClientRect();
        
        // Get click position relative to canvas
        const clickX = event.clientX - canvasRect.left;
        const clickY = event.clientY - canvasRect.top;
        
        // Map to image coordinates accounting for scale and position
        const scaleX = canvas.width / canvasRect.width;
        const scaleY = canvas.height / canvasRect.height;
        
        x = Math.floor(clickX * scaleX);
        y = Math.floor(clickY * scaleY);
        
        // Clamp to canvas bounds
        x = Math.max(0, Math.min(x, canvas.width - 1));
        y = Math.max(0, Math.min(y, canvas.height - 1));
      } else {
        // For preview image
        const scaleX = canvas.width / rect.width;
        const scaleY = canvas.height / rect.height;
        
        x = Math.floor((event.clientX - rect.left) * scaleX);
        y = Math.floor((event.clientY - rect.top) * scaleY);
      }
      
      const ctx = canvas.getContext('2d');
      const imageData = ctx.getImageData(x, y, 1, 1);
      const [r, g, b] = imageData.data;
      
      const hex = '#' + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      }).join('');
        setPickedColor(hex);
      
      // Không đóng popup sau khi pick màu
      // if (isPopup) {
      //   setShowImagePopup(false);
      // }
    }
  };

  const copyToClipboard = (color) => {
    navigator.clipboard.writeText(color);
    // You could add a toast notification here
  };

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
        </section>        {/* Priority Tasks */}
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

        {/* Color Picker Tool */}
        <section className="utility-section color-picker-section">
          <div className="section-header">
            <h3>🎨 Color Picker</h3>
          </div>
          <div className="color-picker-content">
            {/* Direct Color Picker */}
            <div className="color-input-group">
              <label className="color-label">Chọn màu trực tiếp:</label>
              <div className="color-input-wrapper">
                <input
                  type="color"
                  value={selectedColor}
                  onChange={(e) => setSelectedColor(e.target.value)}
                  className="color-input"
                />
                <div className="color-info">
                  <span className="color-code">{selectedColor}</span>
                  <button onClick={() => copyToClipboard(selectedColor)} className="copy-btn">
                    📋 Copy
                  </button>
                </div>
              </div>
            </div>

            {/* Image Upload for Color Picking */}
            <div className="image-picker-group">
              <label className="color-label">Upload ảnh để pick màu:</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="file-input"
              />
              
              {uploadedImage && (
                <div className="image-canvas-container">
                  <div className="image-preview">
                    <img
                      ref={imageRef}
                      src={uploadedImage}
                      alt="Uploaded for color picking"
                      onLoad={handleImageLoad}
                      onClick={handleImageClick}
                      className="preview-image"
                    />
                    <button 
                      className="remove-image-btn"
                      onClick={handleRemoveImage}
                      title="Xóa ảnh"
                    >
                      ✕
                    </button>
                    <canvas
                      ref={canvasRef}
                      onClick={handleCanvasClick}
                      className="color-picker-canvas"
                      style={{ display: 'none' }}
                    />
                  </div>
                  <p className="pick-instruction">🖌️ Click vào ảnh để mở popup và pick màu</p>
                    {pickedColor && (
                    <div className="picked-color-display">
                      <div 
                        className="color-swatch" 
                        style={{ backgroundColor: pickedColor }}
                      ></div>
                      <div className="color-formats">
                        {Object.entries(getColorFormats(pickedColor)).map(([format, value]) => (
                          <div key={format} className="color-format-item">
                            <span className="format-label">{format.toUpperCase()}</span>
                            <span className="format-value">{value}</span>
                            <button onClick={() => copyToClipboard(value)} className="copy-btn-small">
                              📋
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      </div>      {/* Image Popup for easier color picking */}
      {showImagePopup && uploadedImage && (
        <div className="image-popup-overlay" onClick={handleClosePopup}>
          <div className="image-popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={handleClosePopup}>
              ✕
            </button>
            <h3 className="popup-title">🎨 Pick màu từ ảnh</h3>
            
            {/* Zoom Controls */}
            <div className="popup-controls">
              <button className="zoom-btn" onClick={() => handleZoom(-0.2)}>🔍-</button>
              <span className="zoom-display">{Math.round(imageScale * 100)}%</span>
              <button className="zoom-btn" onClick={() => handleZoom(0.2)}>🔍+</button>
              <button className="reset-btn" onClick={() => {setImageScale(1); setImagePosition({x: 0, y: 0})}}>
                🔄 Reset
              </button>
            </div>            <div className="popup-image-container"
                 onMouseMove={handleMouseMove}
                 onMouseUp={handleMouseUp}
                 onMouseLeave={handleMouseUp}>
              <div className="popup-image-wrapper"
                   style={{
                     transform: `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(${imageScale})`,
                     transformOrigin: 'center center',
                     transition: isDragging ? 'none' : 'transform 0.2s ease'
                   }}>
                <img
                  ref={popupImageRef}
                  src={uploadedImage}
                  alt="Popup for color picking"
                  onLoad={handlePopupImageLoad}
                  className="popup-image"
                  onMouseDown={handleMouseDown}
                  style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
                />
                <canvas
                  ref={popupCanvasRef}
                  onClick={(e) => handleCanvasClick(e, true)}
                  className="popup-canvas"
                />
              </div>
            </div>
            <p className="popup-instruction">💡 Kéo để di chuyển ảnh • Zoom +/- • Click để lấy màu</p>
            
            {pickedColor && (
              <div className="popup-picked-color">
                <div className="color-swatch" style={{ backgroundColor: pickedColor }}></div>
                <div className="popup-color-formats">
                  {Object.entries(getColorFormats(pickedColor)).map(([format, value]) => (
                    <div key={format} className="popup-color-format">
                      <span className="format-label">{format.toUpperCase()}</span>
                      <code className="format-value">{value}</code>
                      <button onClick={() => copyToClipboard(value)} className="copy-btn-mini">📋</button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
