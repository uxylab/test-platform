import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Dashboard from './components/Dashboard';
import UserTable from './components/UserTable';
import SettingsModal from './components/SettingsModal';
import ConfirmationDialog from './components/ConfirmationDialog';

// Dummy user data for prototyping
const dummyUsers = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'Editor', status: 'Inactive' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'User', status: 'Active' },
];

type View = 'login' | 'register' | 'dashboard';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<View>('login');
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false);
  const [isConfirmDialogOpen, setIsConfirmDialogOpen] = useState<boolean>(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const handleLogin = (email: string, password: string) => {
    // Simulate login - accept any credentials for prototyping
    console.log('Login attempt:', email);
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleRegister = (name: string, email: string, password: string) => {
    // Simulate registration
    console.log('Register:', name, email);
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsConfirmDialogOpen(true);
  };

  const confirmLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('login');
    setIsConfirmDialogOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`app ${theme}`}>
      {isAuthenticated && (
        <Navbar
          onLogout={handleLogout}
          onSettingsClick={() => setIsSettingsModalOpen(true)}
          userName="John Doe"
        />
      )}

      <main className="main-content">
        {!isAuthenticated && currentView === 'login' && (
          <LoginForm
            onLogin={handleLogin}
            onSwitchToRegister={() => setCurrentView('register')}
          />
        )}

        {!isAuthenticated && currentView === 'register' && (
          <RegisterForm
            onRegister={handleRegister}
            onSwitchToLogin={() => setCurrentView('login')}
          />
        )}

        {isAuthenticated && currentView === 'dashboard' && (
          <>
            <Dashboard />
            <UserTable users={dummyUsers} />
          </>
        )}
      </main>

      {isSettingsModalOpen && (
        <SettingsModal
          currentTheme={theme}
          onThemeChange={toggleTheme}
          onClose={() => setIsSettingsModalOpen(false)}
        />
      )}

      {isConfirmDialogOpen && (
        <ConfirmationDialog
          title="Confirm Logout"
          message="Are you sure you want to log out?"
          onConfirm={confirmLogout}
          onCancel={() => setIsConfirmDialogOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
