import { motion, AnimatePresence } from 'framer-motion';
import { X, Clock, CheckCircle, AlertCircle, User, GitBranch, Trash2, FileText } from 'lucide-react';

const NotificationPanel = ({ isOpen, onClose, isDark }) => {
  const notifications = [
    {
      id: 1,
      type: 'bug',
      title: 'You have a bug that needs attention',
      time: 'Just now',
      icon: AlertCircle,
      color: 'red'
    },
    {
      id: 2,
      type: 'user',
      title: 'New user registered',
      time: '59 minutes ago',
      icon: User,
      color: 'blue'
    },
    {
      id: 3,
      type: 'bug',
      title: 'You have a bug that needs attention',
      time: '12 hours ago',
      icon: AlertCircle,
      color: 'red'
    },
    {
      id: 4,
      type: 'subscription',
      title: 'Andi Lane subscribed to you',
      time: 'Today, 11:59 AM',
      icon: User,
      color: 'green'
    }
  ];

  const activities = [
    {
      id: 1,
      type: 'bug',
      title: 'You have a bug that needs attention',
      time: 'Just now',
      user: { name: 'You', avatar: '🔧' },
      icon: AlertCircle,
      color: 'red'
    },
    {
      id: 2,
      type: 'release',
      title: 'Released a new version',
      time: '59 minutes ago',
      user: { name: 'Someone', avatar: '🚀' },
      icon: GitBranch,
      color: 'green'
    },
    {
      id: 3,
      type: 'bug',
      title: 'Submitted a bug',
      time: '12 hours ago',
      user: { name: 'You', avatar: '🐛' },
      icon: AlertCircle,
      color: 'blue'
    },
    {
      id: 4,
      type: 'edit',
      title: 'Modified A data in Page X',
      time: 'Today, 11:59 AM',
      user: { name: 'Someone', avatar: '✏️' },
      icon: FileText,
      color: 'orange'
    },
    {
      id: 5,
      type: 'delete',
      title: 'Deleted a page in Project X',
      time: 'Feb 2, 2023',
      user: { name: 'Someone', avatar: '🗑️' },
      icon: Trash2,
      color: 'red'
    }
  ];

  const contacts = [
    { id: 1, name: 'Natali Craig', avatar: '👩‍💼', status: 'online' },
    { id: 2, name: 'Drew Cano', avatar: '👨‍🦲', status: 'busy' },
    { id: 3, name: 'Orlando Diggs', avatar: '👨‍💼', status: 'online' },
    { id: 4, name: 'Andi Lane', avatar: '👩‍💻', status: 'away' },
    { id: 5, name: 'Kate Morrison', avatar: '👩‍🦰', status: 'online' },
    { id: 6, name: 'Koray Okumus', avatar: '👨‍💻', status: 'offline' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-green-500';
      case 'busy': return 'bg-red-500';
      case 'away': return 'bg-yellow-500';
      default: return 'bg-gray-400';
    }
  };

  const getIconColor = (color) => {
    const colors = {
      red: 'text-red-500',
      blue: 'text-blue-500',
      green: 'text-green-500',
      orange: 'text-orange-500'
    };
    return colors[color] || 'text-gray-500';
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          
          {/* Panel */}
          <motion.div
            className={`fixed right-0 top-0 h-full w-96 ${
              isDark ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
            } border-l shadow-2xl z-50 overflow-y-auto`}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className={`sticky top-0 ${isDark ? 'bg-gray-900' : 'bg-white'} border-b ${isDark ? 'border-gray-700' : 'border-gray-200'} p-6`}>
              <div className="flex items-center justify-between">
                <h2 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Notifications
                </h2>
                <motion.button
                  onClick={onClose}
                  className={`p-2 rounded-lg ${isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={20} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                </motion.button>
              </div>
            </div>

            {/* Notifications Section */}
            <div className="p-6">
              <div className="space-y-4">
                {notifications.map((notification, index) => (
                  <motion.div
                    key={notification.id}
                    className={`flex items-start space-x-3 p-4 rounded-lg ${
                      isDark ? 'bg-gray-800 hover:bg-gray-750' : 'bg-gray-50 hover:bg-gray-100'
                    } transition-colors cursor-pointer`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className={`p-2 rounded-lg ${
                      notification.color === 'red' ? 'bg-red-500/20' : 
                      notification.color === 'blue' ? 'bg-blue-500/20' : 'bg-green-500/20'
                    }`}>
                      <notification.icon size={16} className={getIconColor(notification.color)} />
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {notification.title}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock size={12} className={isDark ? 'text-gray-500' : 'text-gray-400'} />
                        <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {notification.time}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Activities Section */}
            <div className="px-6 pb-6">
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
                Activities
              </h3>
              <div className="space-y-4">
                {activities.map((activity, index) => (
                  <motion.div
                    key={activity.id}
                    className="flex items-start space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white text-sm flex-shrink-0">
                      {activity.user.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        <span className="font-medium">{activity.user.name}</span> {activity.title}
                      </p>
                      <div className="flex items-center space-x-2 mt-1">
                        <Clock size={12} className={isDark ? 'text-gray-500' : 'text-gray-400'} />
                        <span className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                          {activity.time}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Contacts Section */}
            <div className="px-6 pb-6">
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
                Contacts
              </h3>
              <div className="space-y-3">
                {contacts.map((contact, index) => (
                  <motion.div
                    key={contact.id}
                    className={`flex items-center space-x-3 p-3 rounded-lg ${
                      isDark ? 'hover:bg-gray-800' : 'hover:bg-gray-50'
                    } transition-colors cursor-pointer`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ x: 4 }}
                  >
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white">
                        {contact.avatar}
                      </div>
                      <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${getStatusColor(contact.status)} rounded-full border-2 ${isDark ? 'border-gray-900' : 'border-white'}`}></div>
                    </div>
                    <div className="flex-1">
                      <p className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        {contact.name}
                      </p>
                      <p className={`text-xs capitalize ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        {contact.status}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default NotificationPanel;