import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const Charts = ({ isDark }) => {
  // Sample data for charts
  const barData = [
    { name: 'Jan', value: 15 },
    { name: 'Feb', value: 25 },
    { name: 'Mar', value: 20 },
    { name: 'Apr', value: 30 },
    { name: 'May', value: 18 },
    { name: 'Jun', value: 28 }
  ];

  const lineData = [
    { name: 'Jan', current: 10, previous: 8 },
    { name: 'Feb', current: 15, previous: 12 },
    { name: 'Mar', current: 12, previous: 10 },
    { name: 'Apr', current: 18, previous: 15 },
    { name: 'May', current: 22, previous: 18 },
    { name: 'Jun', current: 25, previous: 20 }
  ];

  const pieData = [
    { name: 'Direct', value: 38.6, color: '#3B82F6' },
    { name: 'Affiliate', value: 25.2, color: '#10B981' },
    { name: 'Sponsored', value: 21.8, color: '#F59E0B' },
    { name: 'E-mail', value: 14.4, color: '#EF4444' }
  ];

  const worldMapData = [
    { country: 'New York', value: '72K' },
    { country: 'San Francisco', value: '39K' },
    { country: 'Sydney', value: '25K' },
    { country: 'Singapore', value: '61K' }
  ];

  const topProducts = [
    { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: 82, amount: '$6,518.18' },
    { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: 37, amount: '$4,754.50' },
    { name: 'Half Sleeve Shirt', price: '$39.99', quantity: 64, amount: '$2,559.36' },
    { name: 'Lightweight Jacket', price: '$20.00', quantity: 184, amount: '$3,680.00' },
    { name: 'Marco Shoes', price: '$79.49', quantity: 64, amount: '$1,965.81' }
  ];

  return (
    <div className="space-y-6">
      {/* Projections vs Actuals Chart */}
      <motion.div
        className={`relative overflow-hidden ${
          isDark 
            ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50' 
            : 'bg-gradient-to-br from-white to-gray-50/30 border-gray-200/50'
        } border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 group`}
        initial={{ y: 20, opacity: 0, scale: 0.98 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        whileHover={{ y: -2 }}
      >
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={false}
        />
        
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <motion.h3 
                className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}
                whileHover={{ x: 2 }}
              >
                Projections vs Actuals
              </motion.h3>
              <motion.div
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  isDark ? 'bg-blue-500/20 text-blue-300' : 'bg-blue-100 text-blue-600'
                }`}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                Live
              </motion.div>
            </div>
            <motion.div 
              className="text-right"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-1`}>
                $38.6K
              </div>
              <div className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'} flex items-center space-x-1`}>
                <span>+12.5%</span>
                <motion.div
                  className="w-2 h-2 bg-green-500 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            className="h-64"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} margin={{ top: 20, right: 20, left: 0, bottom: 20 }}>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.4} />
                  </linearGradient>
                </defs>
                <CartesianGrid 
                  strokeDasharray="3 3" 
                  stroke={isDark ? '#374151' : '#E5E7EB'} 
                  strokeOpacity={0.3}
                />
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: isDark ? '#9CA3AF' : '#6B7280', fontSize: 12 }}
                  dy={10}
                />
                <YAxis hide />
                <Bar 
                  dataKey="value" 
                  fill="url(#barGradient)"
                  radius={[6, 6, 0, 0]}
                  className="hover:opacity-80 transition-opacity duration-200"
                />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>
        
        {/* Subtle animated particles */}
        <motion.div
          className="absolute top-4 right-4 w-1 h-1 bg-blue-400/50 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <motion.div
          className={`relative overflow-hidden ${
            isDark 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50' 
              : 'bg-gradient-to-br from-white to-gray-50/30 border-gray-200/50'
          } border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/5 group`}
          initial={{ y: 20, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
          whileHover={{ y: -2 }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={false}
          />
          
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <motion.h3 
                className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}
                whileHover={{ x: 2 }}
              >
                Revenue
              </motion.h3>
              <motion.div 
                className="text-right"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="flex items-center space-x-4 text-sm mb-2">
                  <motion.div 
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div 
                      className="w-3 h-3 bg-blue-500 rounded-full"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Current</span>
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>$58,211</span>
                  </motion.div>
                </div>
                <div className="flex items-center space-x-4 text-sm">
                  <motion.div 
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-3 h-3 border-2 border-dashed border-gray-400 rounded-full"></div>
                    <span className={isDark ? 'text-gray-300' : 'text-gray-600'}>Previous</span>
                    <span className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>$68,768</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              className="h-48"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineData} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.3} />
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid 
                    strokeDasharray="3 3" 
                    stroke={isDark ? '#374151' : '#E5E7EB'} 
                    strokeOpacity={0.3}
                  />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: isDark ? '#9CA3AF' : '#6B7280', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: isDark ? '#9CA3AF' : '#6B7280', fontSize: 12 }}
                    width={40}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="current" 
                    stroke="#3B82F6" 
                    strokeWidth={3}
                    dot={{ fill: '#3B82F6', strokeWidth: 2, r: 5 }}
                    activeDot={{ r: 7, fill: '#3B82F6', strokeWidth: 2, stroke: '#fff' }}
                    className="drop-shadow-sm"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="previous" 
                    stroke="#9CA3AF" 
                    strokeWidth={2}
                    strokeDasharray="8 8"
                    dot={{ fill: '#9CA3AF', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: '#9CA3AF', strokeWidth: 2, stroke: '#fff' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>
          </div>
          
          {/* Animated indicators */}
          <motion.div
            className="absolute top-6 right-6 w-2 h-2 bg-green-400/50 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
          />
        </motion.div>

        {/* Revenue by Location */}
        <motion.div
          className={`relative overflow-hidden ${
            isDark 
              ? 'bg-gradient-to-br from-gray-800 to-gray-900 border-gray-700/50' 
              : 'bg-gradient-to-br from-white to-gray-50/30 border-gray-200/50'
          } border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 group`}
          initial={{ y: 20, opacity: 0, scale: 0.98 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
          whileHover={{ y: -2 }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={false}
          />
          
          <div className="relative z-10">
            <motion.h3 
              className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}
              whileHover={{ x: 2 }}
            >
              Revenue by Location
            </motion.h3>
            
            <motion.div 
              className="flex items-center justify-center mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className={`relative w-48 h-32 ${
                isDark ? 'bg-gradient-to-br from-gray-700 to-gray-800' : 'bg-gradient-to-br from-gray-100 to-gray-200'
              } rounded-xl flex items-center justify-center shadow-inner group-hover:shadow-lg transition-shadow duration-300`}>
                <svg viewBox="0 0 200 100" className="w-full h-full">
                  <defs>
                    <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={isDark ? '#6B7280' : '#9CA3AF'} stopOpacity="0.6" />
                      <stop offset="100%" stopColor={isDark ? '#4B5563' : '#6B7280'} stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                  <path 
                    d="M20,80 Q100,20 180,80" 
                    fill="none" 
                    stroke="url(#mapGradient)" 
                    strokeWidth="2"
                    className="drop-shadow-sm"
                  />
                  {[
                    { cx: 50, cy: 60, delay: 0 },
                    { cx: 120, cy: 40, delay: 0.2 },
                    { cx: 160, cy: 65, delay: 0.4 },
                    { cx: 80, cy: 55, delay: 0.6 }
                  ].map((point, index) => (
                    <motion.circle 
                      key={index}
                      cx={point.cx} 
                      cy={point.cy} 
                      r="4" 
                      fill="#3B82F6"
                      className="drop-shadow-sm"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [0, 1.2, 1],
                        opacity: [0, 1, 1]
                      }}
                      transition={{ 
                        duration: 0.6,
                        delay: 0.6 + point.delay,
                        type: "spring",
                        stiffness: 200
                      }}
                    />
                  ))}
                  {/* Pulsing effect for active locations */}
                  {[
                    { cx: 50, cy: 60 },
                    { cx: 120, cy: 40 },
                    { cx: 160, cy: 65 },
                    { cx: 80, cy: 55 }
                  ].map((point, index) => (
                    <motion.circle 
                      key={`pulse-${index}`}
                      cx={point.cx} 
                      cy={point.cy} 
                      r="4" 
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="2"
                      opacity="0.6"
                      animate={{ 
                        r: [4, 8, 4],
                        opacity: [0.6, 0.2, 0.6]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    />
                  ))}
                </svg>
              </div>
            </motion.div>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              {worldMapData.map((item, index) => (
                <motion.div 
                  key={item.country} 
                  className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors duration-200 group/item"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-center space-x-3">
                    <motion.div
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    />
                    <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'} group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400 transition-colors`}>
                      {item.country}
                    </span>
                  </div>
                  <motion.span 
                    className={`text-sm font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {item.value}
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          {/* Animated location indicator */}
          <motion.div
            className="absolute top-4 right-4 w-2 h-2 bg-purple-400/50 rounded-full"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 1 }}
          />
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Selling Products */}
        <motion.div
          className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
            Top Selling Products
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                  <th className={`text-left text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider pb-3`}>
                    Name
                  </th>
                  <th className={`text-right text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider pb-3`}>
                    Price
                  </th>
                  <th className={`text-right text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider pb-3`}>
                    Quantity
                  </th>
                  <th className={`text-right text-xs font-medium ${isDark ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wider pb-3`}>
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody className="space-y-3">
                {topProducts.map((product, index) => (
                  <tr key={index} className="border-b border-gray-100 dark:border-gray-700">
                    <td className={`py-3 text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {product.name}
                    </td>
                    <td className={`py-3 text-sm text-right ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {product.price}
                    </td>
                    <td className={`py-3 text-sm text-right ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {product.quantity}
                    </td>
                    <td className={`py-3 text-sm text-right font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {product.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Total Sales Chart */}
        <motion.div
          className={`${isDark ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border rounded-xl p-6`}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
            Total Sales
          </h3>
          
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <ResponsiveContainer width={200} height={200}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    38.6%
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-3">
            {pieData.map((item) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.name}
                  </span>
                </div>
                <span className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  ${item.name === 'Direct' ? '300.56' : item.name === 'Affiliate' ? '135.18' : item.name === 'Sponsored' ? '154.02' : '48.96'}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Charts;