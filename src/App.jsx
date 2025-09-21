import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import NotificationPanel from './components/NotificationPanel';

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('default');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  // Apply theme class to document root
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className={`flex h-screen ${isDark ? 'bg-gray-950' : 'bg-gray-50'} overflow-hidden`}>
      {/* Sidebar */}
      <Sidebar 
        activeSection={activeSection} 
        onSectionChange={setActiveSection}
        isDark={isDark}
        showMobile={showMobileSidebar}
        onCloseMobile={() => setShowMobileSidebar(false)}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Header 
          isDark={isDark} 
          toggleTheme={toggleTheme}
          showNotifications={showNotifications}
          setShowNotifications={setShowNotifications}
          onToggleMobileSidebar={() => setShowMobileSidebar(!showMobileSidebar)}
        />

        {/* Dashboard Content */}
        <AnimatePresence mode="wait">
          <Dashboard 
            key={activeSection}
            isDark={isDark} 
            activeSection={activeSection}
          />
        </AnimatePresence>
      </div>

      {/* Notification Panel */}
      <NotificationPanel 
        isOpen={showNotifications}
        onClose={() => setShowNotifications(false)}
        isDark={isDark}
      />
    </div>
  );
}

export default App;
