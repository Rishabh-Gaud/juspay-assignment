import { motion } from 'framer-motion';
import { Users, ShoppingCart, DollarSign, TrendingUp } from 'lucide-react';
import DashboardCard from '../components/DashboardCard';
import Charts from '../components/Charts';
import OrderTable from '../components/OrderTable';

const Dashboard = ({ isDark, activeSection }) => {
  const dashboardData = {
    customers: { value: '3,781', change: '+11.01%', changeType: 'positive' },
    orders: { value: '1,219', change: '-0.03%', changeType: 'negative' },
    revenue: { value: '$695', change: '+15.03%', changeType: 'positive' },
    growth: { value: '30.1%', change: '+6.08%', changeType: 'positive' }
  };

  if (activeSection === 'ecommerce') {
    return (
      <motion.div
        className={`flex-1 ${isDark ? 'bg-gray-950' : 'bg-gray-50'} overflow-y-auto`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-6">
          {/* Page Title */}
          <motion.div
            className="mb-8"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-2`}>
              eCommerce
            </h1>
          </motion.div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <DashboardCard
              title="Customers"
              value={dashboardData.customers.value}
              change={dashboardData.customers.change}
              changeType={dashboardData.customers.changeType}
              isDark={isDark}
              icon={Users}
              delay={0}
            />
            <DashboardCard
              title="Orders"
              value={dashboardData.orders.value}
              change={dashboardData.orders.change}
              changeType={dashboardData.orders.changeType}
              isDark={isDark}
              icon={ShoppingCart}
              delay={0.1}
            />
            <DashboardCard
              title="Revenue"
              value={dashboardData.revenue.value}
              change={dashboardData.revenue.change}
              changeType={dashboardData.revenue.changeType}
              isDark={isDark}
              icon={DollarSign}
              delay={0.2}
            />
            <DashboardCard
              title="Growth"
              value={dashboardData.growth.value}
              change={dashboardData.growth.change}
              changeType={dashboardData.growth.changeType}
              isDark={isDark}
              icon={TrendingUp}
              delay={0.3}
            />
          </div>

          {/* Charts Section */}
          <Charts isDark={isDark} />
        </div>
      </motion.div>
    );
  }

  // Default Dashboard (Order List)
  return (
    <div className={`flex-1 ${isDark ? 'bg-gray-950' : 'bg-gray-100'} overflow-y-auto`}>
      <div className="p-6">
        {/* Order Table */}
        <OrderTable isDark={isDark} />
      </div>
    </div>
  );
};

export default Dashboard;