import OrderTable from '../components/OrderTable';
import BarChart from '../components/charts/BarChart';
import LineChart from '../components/charts/LineChart';
import DonutChart from '../components/charts/DonutChart';
import WorldMap from '../components/WorldMap';

const Dashboard = ({ isDark, activeSection }) => {

  if (activeSection === 'ecommerce') {
    return (
      <div className={`flex-1 ${isDark ? 'bg-gray-950' : 'bg-gray-50'} overflow-y-auto`}>
        <div className="p-6">
          {/* Page Title */}
          <h1 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-6`}>
            eCommerce
          </h1>

          {/* Top Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Customers Card */}
            <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} rounded-2xl p-6`}>
              <div className="mb-4">
                <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Customers</span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>3,781</span>
                <div className="flex items-center space-x-1">
                  <span className="text-green-500 text-sm font-medium">+11.01%</span>
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Orders Card */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-800'} rounded-2xl p-6`}>
              <div className="mb-4">
                <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-300'}`}>Orders</span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-white'}`}>1,219</span>
                <div className="flex items-center space-x-1">
                  <span className="text-red-500 text-sm font-medium">-0.03%</span>
                  <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 112 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Revenue Card */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-800'} rounded-2xl p-6`}>
              <div className="mb-4">
                <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-300'}`}>Revenue</span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-white'}`}>$695</span>
                <div className="flex items-center space-x-1">
                  <span className="text-green-500 text-sm font-medium">+15.03%</span>
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Growth Card */}
            <div className={`${isDark ? 'bg-gray-700' : 'bg-white'} rounded-2xl p-6`}>
              <div className="mb-4">
                <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>Growth</span>
              </div>
              <div className="flex items-center justify-between">
                <span className={`text-3xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>30.1%</span>
                <div className="flex items-center space-x-1">
                  <span className="text-green-500 text-sm font-medium">+6.08%</span>
                  <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Projections vs Actuals Chart */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6`}>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
                Projections vs Actuals
              </h3>
              <div className="h-64">
                <BarChart isDark={isDark} />
              </div>
            </div>

            {/* Revenue by Location */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6`}>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
                Revenue by Location
              </h3>
              <div className="h-64 flex items-center justify-center">
                <div className="w-full h-full">
                  <WorldMap isDark={isDark} />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>New York</span>
                  <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>72K</span>
                </div>
                <div className="flex justify-between">
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>San Francisco</span>
                  <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>39K</span>
                </div>
                <div className="flex justify-between">
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Sydney</span>
                  <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>25K</span>
                </div>
                <div className="flex justify-between">
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Singapore</span>
                  <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>61K</span>
                </div>
              </div>
            </div>
          </div>

          {/* Revenue Line Chart */}
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 mb-6`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Revenue
              </h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Current Week: $58,211
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                    Previous Week: $68,768
                  </span>
                </div>
              </div>
            </div>
            <div className="h-64">
              <LineChart isDark={isDark} />
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Top Selling Products */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6`}>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
                Top Selling Products
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                      <th className={`text-left py-2 text-xs font-medium uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        Name
                      </th>
                      <th className={`text-left py-2 text-xs font-medium uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        Price
                      </th>
                      <th className={`text-left py-2 text-xs font-medium uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        Quantity
                      </th>
                      <th className={`text-left py-2 text-xs font-medium uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        Amount
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'ASOS Ridley High Waist', price: '$79.49', quantity: '82', amount: '$6,518.18' },
                      { name: 'Marco Lightweight Shirt', price: '$128.50', quantity: '37', amount: '$4,754.50' },
                      { name: 'Half Sleeve Shirt', price: '$39.99', quantity: '64', amount: '$2,559.36' },
                      { name: 'Lightweight Jacket', price: '$20.00', quantity: '184', amount: '$3,680.00' },
                      { name: 'Marco Shoes', price: '$79.49', quantity: '64', amount: '$1,965.81' },
                    ].map((product, index) => (
                      <tr key={index} className={`border-b ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
                        <td className="py-3">
                          <span className={`text-sm ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {product.name}
                          </span>
                        </td>
                        <td className="py-3">
                          <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            {product.price}
                          </span>
                        </td>
                        <td className="py-3">
                          <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                            {product.quantity}
                          </span>
                        </td>
                        <td className="py-3">
                          <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                            {product.amount}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Total Sales */}
            <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6`}>
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>
                Total Sales
              </h3>
              <div className="flex items-center justify-center h-64">
                <div className="relative w-48 h-48">
                  <DonutChart isDark={isDark} />
                </div>
              </div>
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Direct</span>
                  </div>
                  <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>$300.56</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Affiliate</span>
                  </div>
                  <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>$135.18</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Sponsored</span>
                  </div>
                  <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>$154.02</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>E-mail</span>
                  </div>
                  <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>$48.96</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
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