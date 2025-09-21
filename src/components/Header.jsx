import { Search, Bell, Settings, Sun, Moon, Menu, Grid, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const Header = ({ isDark, toggleTheme, showNotifications, setShowNotifications, onToggleMobileSidebar }) => {
  return (
    <header className={`${isDark ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-b px-6 py-4 flex items-center justify-between`}>
      {/* Left section - Breadcrumb */}
      <div className="flex items-center space-x-4">
        <button 
          onClick={onToggleMobileSidebar}
          className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors lg:hidden`}
        >
          <Menu size={20} className={isDark ? 'text-gray-300' : 'text-gray-600'} />
        </button>
        <div className="flex items-center space-x-2">
          <Grid size={16} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
          <Star size={16} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
          <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>Dashboards</span>
          <span className={isDark ? 'text-gray-600' : 'text-gray-300'}>/</span>
          <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>Default</span>
        </div>
      </div>

      {/* Center section - Search */}
      <div className="flex-1 max-w-md mx-4 lg:mx-8 hidden sm:block">
        <div className="relative">
          <Search size={16} className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type="text"
            placeholder="Search"
            className={`w-full pl-10 pr-12 py-2 rounded-lg border ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-blue-500' 
                : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500 focus:border-blue-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all`}
          />
          <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'} bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded hidden md:block`}>
            ⌘/
          </div>
        </div>
      </div>

      {/* Right section - Actions */}
      <div className="flex items-center space-x-2">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
        >
          {isDark ? (
            <Sun size={18} className="text-gray-300" />
          ) : (
            <Moon size={18} className="text-gray-600" />
          )}
        </button>

        {/* Settings */}
        <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}>
          <Settings size={18} className={isDark ? 'text-gray-300' : 'text-gray-600'} />
        </button>

        {/* Notifications */}
        <button
          onClick={() => setShowNotifications(!showNotifications)}
          className={`relative p-2 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
        >
          <Bell size={18} className={isDark ? 'text-gray-300' : 'text-gray-600'} />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </button>

        {/* Full Screen */}
        <button className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className={isDark ? 'text-gray-300' : 'text-gray-600'}>
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;