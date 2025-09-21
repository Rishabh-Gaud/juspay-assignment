import { 
  LayoutDashboard, 
  User,
  Building2,
  FileText,
  CreditCard,
  MessageSquare,
  Settings,
  X,
  Folder,
  Grid3X3
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Sidebar = ({ activeSection, onSectionChange, isDark, showMobile, onCloseMobile }) => {
  const menuItems = [
    { section: 'favorites', label: 'Favorites', items: [
      { id: 'overview', label: 'Overview', icon: LayoutDashboard },
      { id: 'projects', label: 'Projects', icon: Folder }
    ]},
    { section: 'recently', label: 'Recently', items: [] },
    { section: 'dashboards', label: 'Dashboards', items: [
      { id: 'default', label: 'Default', icon: Grid3X3 },
      { id: 'ecommerce', label: 'eCommerce', icon: Grid3X3 },
      { id: 'projects-dash', label: 'Projects', icon: Grid3X3 },
      { id: 'online-courses', label: 'Online Courses', icon: Grid3X3 }
    ]},
    { section: 'pages', label: 'Pages', items: [
      { id: 'user-profile', label: 'User Profile', icon: User, nested: [
        { id: 'overview-nested', label: 'Overview' },
        { id: 'projects-nested', label: 'Projects' },
        { id: 'campaigns', label: 'Campaigns' },
        { id: 'documents', label: 'Documents' },
        { id: 'followers', label: 'Followers' }
      ]},
      { id: 'account', label: 'Account', icon: CreditCard },
      { id: 'corporate', label: 'Corporate', icon: Building2 },
      { id: 'blog', label: 'Blog', icon: FileText },
      { id: 'social', label: 'Social', icon: MessageSquare }
    ]}
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <motion.div 
        className={`w-60 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r flex flex-col h-screen hidden lg:flex`}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
      {/* Logo */}
      <div className={`px-4 py-6 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="flex items-center space-x-2">
          <div className={`w-6 h-6 ${isDark ? 'bg-white' : 'bg-gray-900'} rounded flex items-center justify-center`}>
            <span className={`${isDark ? 'text-gray-900' : 'text-white'} font-bold text-xs`}>B</span>
          </div>
          <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>ByeWind</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto py-4">
        {menuItems.map((section) => (
          <div key={section.section} className="mb-6">
            <div className="px-4 mb-3">
              <h3 className={`${isDark ? 'text-gray-500' : 'text-gray-400'} text-xs font-medium uppercase tracking-wide`}>
                {section.label}
              </h3>
            </div>
            <div className="space-y-1">
              {section.items.map((item) => (
                <div key={item.id}>
                  <motion.button
                    onClick={() => onSectionChange(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-2 text-left transition-all duration-200 relative ${
                      activeSection === item.id
                        ? isDark 
                          ? 'bg-gray-700 text-white'
                          : 'bg-blue-50 text-blue-600'
                        : isDark
                          ? 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {activeSection === item.id && (
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                    )}
                    {item.icon && <item.icon size={16} />}
                    <span className="text-sm font-medium">{item.label}</span>
                  </motion.button>
                  
                  {item.nested && activeSection === item.id && (
                    <div className="ml-8 mt-1 space-y-1">
                      {item.nested.map((nestedItem) => (
                        <button
                          key={nestedItem.id}
                          onClick={() => onSectionChange(nestedItem.id)}
                          className={`w-full text-left px-4 py-1 text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'} transition-colors`}
                        >
                          {nestedItem.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    
      </motion.div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {showMobile && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCloseMobile}
          />
          
          {/* Mobile Sidebar */}
          <motion.div
            className={`fixed left-0 top-0 h-full w-80 ${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-r shadow-2xl z-50 flex flex-col lg:hidden`}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Logo */}
            <div className={`px-4 py-6 border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className={`w-6 h-6 ${isDark ? 'bg-white' : 'bg-gray-900'} rounded flex items-center justify-center`}>
                    <span className={`${isDark ? 'text-gray-900' : 'text-white'} font-bold text-xs`}>B</span>
                  </div>
                  <span className={`${isDark ? 'text-white' : 'text-gray-900'} font-medium text-sm`}>ByeWind</span>
                </div>
                <motion.button
                  onClick={onCloseMobile}
                  className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={16} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                </motion.button>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto py-4">
              {menuItems.map((section) => (
                <div key={section.section} className="mb-6">
                  <div className="px-4 mb-3">
                    <h3 className={`${isDark ? 'text-gray-500' : 'text-gray-400'} text-xs font-medium uppercase tracking-wide`}>
                      {section.label}
                    </h3>
                  </div>
                  <div className="space-y-1">
                    {section.items.map((item) => (
                      <div key={item.id}>
                        <motion.button
                          onClick={() => {
                            onSectionChange(item.id);
                            onCloseMobile();
                          }}
                          className={`w-full flex items-center space-x-3 px-4 py-2 text-left transition-all duration-200 relative ${
                            activeSection === item.id
                              ? isDark 
                                ? 'bg-gray-700 text-white'
                                : 'bg-blue-50 text-blue-600'
                              : isDark
                                ? 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                                : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
                          }`}
                          whileHover={{ x: 2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {activeSection === item.id && (
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>
                          )}
                          {item.icon && <item.icon size={16} />}
                          <span className="text-sm font-medium">{item.label}</span>
                        </motion.button>
                        
                        {item.nested && activeSection === item.id && (
                          <div className="ml-8 mt-1 space-y-1">
                            {item.nested.map((nestedItem) => (
                              <button
                                key={nestedItem.id}
                                onClick={() => {
                                  onSectionChange(nestedItem.id);
                                  onCloseMobile();
                                }}
                                className={`w-full text-left px-4 py-1 text-sm ${isDark ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'} transition-colors`}
                              >
                                {nestedItem.label}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* User Profile Section */}
            <div className={`p-4 border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className={`flex items-center space-x-3 p-2 rounded-lg ${isDark ? 'bg-gray-700/30' : 'bg-gray-50'}`}>
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">U</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className={`${isDark ? 'text-white' : 'text-gray-900'} text-sm font-medium truncate`}>User</p>
                  <p className={`${isDark ? 'text-gray-400' : 'text-gray-500'} text-xs truncate`}>user@byewind.com</p>
                </div>
                <Settings size={16} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
              </div>
            </div>
          </motion.div>
        </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;