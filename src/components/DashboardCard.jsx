import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';

const DashboardCard = ({ title, value, change, changeType, isDark, icon: Icon, delay = 0 }) => {
  const isPositive = changeType === 'positive';
  
  return (
    <motion.div
      className={`relative overflow-hidden ${
        isDark 
          ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50' 
          : 'bg-gradient-to-br from-white to-gray-50/50 border-gray-200/50'
      } border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 group cursor-pointer`}
      initial={{ y: 20, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -4, 
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Gradient overlay on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={false}
      />
      
      {/* Animated border glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `linear-gradient(45deg, transparent, ${isPositive ? '#10B981' : '#3B82F6'}/20, transparent)`,
          filter: 'blur(1px)',
        }}
        initial={false}
      />
      
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <motion.h3 
            className={`text-sm font-medium ${isDark ? 'text-gray-400' : 'text-gray-600'} uppercase tracking-wider`}
            whileHover={{ color: isDark ? '#D1D5DB' : '#374151' }}
          >
            {title}
          </motion.h3>
          {Icon && (
            <motion.div
              className={`p-2 rounded-xl ${
                isDark ? 'bg-gray-700/50' : 'bg-gray-100/50'
              } group-hover:scale-110 transition-all duration-300`}
              whileHover={{ rotate: 5 }}
            >
              <Icon 
                size={20} 
                className={`${isDark ? 'text-gray-400' : 'text-gray-500'} group-hover:text-blue-500 transition-colors duration-300`} 
              />
            </motion.div>
          )}
        </div>
        
        <div className="flex items-end justify-between">
          <div className="flex-1">
            <motion.p 
              className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2 leading-none`}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.4, 
                delay: delay + 0.2,
                type: "spring",
                stiffness: 150
              }}
              whileHover={{ scale: 1.05 }}
            >
              {value}
            </motion.p>
            
            {change && (
              <motion.div 
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: delay + 0.4 }}
                whileHover={{ x: 2 }}
              >
                <motion.div
                  className={`p-1 rounded-full ${
                    isPositive ? 'bg-green-100 dark:bg-green-900/30' : 'bg-red-100 dark:bg-red-900/30'
                  }`}
                  whileHover={{ scale: 1.1 }}
                >
                  {isPositive ? (
                    <TrendingUp size={12} className="text-green-600 dark:text-green-400" />
                  ) : (
                    <TrendingDown size={12} className="text-red-600 dark:text-red-400" />
                  )}
                </motion.div>
                <span className={`text-sm font-semibold ${
                  isPositive 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {change}
                </span>
                <span className={`text-xs ${isDark ? 'text-gray-500' : 'text-gray-400'}`}>
                  vs last month
                </span>
              </motion.div>
            )}
          </div>
          
          {/* Animated progress indicator */}
          <motion.div
            className="flex flex-col items-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.6 }}
          >
            <div className={`w-16 h-1 ${isDark ? 'bg-gray-700' : 'bg-gray-200'} rounded-full overflow-hidden mb-2`}>
              <motion.div
                className={`h-full ${
                  isPositive ? 'bg-green-500' : 'bg-red-500'
                } rounded-full`}
                initial={{ width: 0 }}
                animate={{ width: `${Math.abs(parseFloat(change?.replace('%', '') || 0)) * 2}%` }}
                transition={{ duration: 1, delay: delay + 0.8 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating particles effect on hover */}
      <motion.div
        className="absolute top-4 right-4 w-2 h-2 bg-blue-500/30 rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: delay,
        }}
      />
      <motion.div
        className="absolute top-8 right-8 w-1 h-1 bg-purple-500/40 rounded-full opacity-0 group-hover:opacity-100"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: delay + 0.5,
        }}
      />
    </motion.div>
  );
};

export default DashboardCard;