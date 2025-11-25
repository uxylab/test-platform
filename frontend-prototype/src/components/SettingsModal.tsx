import React from 'react';

interface SettingsModalProps {
  currentTheme: 'light' | 'dark';
  onThemeChange: () => void;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({
  currentTheme,
  onThemeChange,
  onClose,
}) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>Settings</h2>
          <button className="modal-close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          <div className="setting-item">
            <label htmlFor="theme-toggle">Theme</label>
            <div className="theme-toggle">
              <span className={currentTheme === 'light' ? 'active' : ''}>Light</span>
              <button
                id="theme-toggle"
                className={`toggle-switch ${currentTheme === 'dark' ? 'active' : ''}`}
                onClick={onThemeChange}
                aria-label="Toggle theme"
              >
                <span
                  className={`toggle-slider ${currentTheme === 'dark' ? 'dark' : ''}`}
                />
              </button>
              <span className={currentTheme === 'dark' ? 'active' : ''}>Dark</span>
            </div>
          </div>
          <div className="setting-item">
            <label htmlFor="notifications">Notifications</label>
            <input type="checkbox" id="notifications" defaultChecked />
          </div>
          <div className="setting-item">
            <label htmlFor="language">Language</label>
            <select id="language" defaultValue="en">
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
            </select>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn btn-primary" onClick={onClose}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
