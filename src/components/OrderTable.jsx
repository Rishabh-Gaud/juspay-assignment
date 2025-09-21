import { useState, useMemo, useEffect } from 'react';
import { Plus, Filter, SortDesc, SortAsc, Search, ChevronLeft, ChevronRight, MoreHorizontal, ExternalLink, Calendar, X } from 'lucide-react';

const OrderTable = ({ isDark }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('date');
  const [sortDirection, setSortDirection] = useState('desc');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedOrders, setSelectedOrders] = useState(new Set());
  const [showAddModal, setShowAddModal] = useState(false);
  const [newOrder, setNewOrder] = useState({
    user: { name: '', avatarColor: 'bg-blue-500' },
    project: '',
    address: '',
    status: 'Pending'
  });
  const itemsPerPage = 5;
  
  const [orders, setOrders] = useState([
    {
      id: '#CM9801',
      user: { name: 'Natali Craig', avatarColor: 'bg-blue-500' },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: 'In Progress',
      statusColor: 'blue'
    },
    {
      id: '#CM9802',
      user: { name: 'Kate Morrison', avatarColor: 'bg-orange-500' },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: 'Complete',
      statusColor: 'green'
    },
    {
      id: '#CM9803',
      user: { name: 'Drew Cano', avatarColor: 'bg-red-500' },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: 'Pending',
      statusColor: 'yellow'
    },
    {
      id: '#CM9804',
      user: { name: 'Orlando Diggs', avatarColor: 'bg-yellow-500' },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: 'Approved',
      statusColor: 'orange'
    },
    {
      id: '#CM9805',
      user: { name: 'Andi Lane', avatarColor: 'bg-green-500' },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: 'Rejected',
      statusColor: 'red'
    },
    {
      id: '#CM9801',
      user: { name: 'Natali Craig', avatarColor: 'bg-blue-500' },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: 'In Progress',
      statusColor: 'blue'
    },
    {
      id: '#CM9802',
      user: { name: 'Kate Morrison', avatarColor: 'bg-orange-500' },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: 'Complete',
      statusColor: 'green'
    },
    {
      id: '#CM9803',
      user: { name: 'Drew Cano', avatarColor: 'bg-red-500' },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: 'Pending',
      statusColor: 'yellow'
    },
    {
      id: '#CM9804',
      user: { name: 'Orlando Diggs', avatarColor: 'bg-yellow-500' },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: 'Approved',
      statusColor: 'orange'
    },
    {
      id: '#CM9805',
      user: { name: 'Andi Lane', avatarColor: 'bg-green-500' },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: 'Rejected',
      statusColor: 'red'
    }
  ]);

  const filteredAndSortedOrders = useMemo(() => {
    let filtered = orders.filter(order => {
      const matchesSearch = order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           order.address.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesStatus = filterStatus === 'all' || order.status.toLowerCase().includes(filterStatus.toLowerCase());
      return matchesSearch && matchesStatus;
    });

    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortField) {
        case 'id':
          aValue = a.id;
          bValue = b.id;
          break;
        case 'user':
          aValue = a.user.name;
          bValue = b.user.name;
          break;
        case 'project':
          aValue = a.project;
          bValue = b.project;
          break;
        case 'status':
          aValue = a.status;
          bValue = b.status;
          break;
        case 'date':
        default:
          const dateMap = {
            'Just now': Date.now(),
            'A minute ago': Date.now() - 60000,
            '1 hour ago': Date.now() - 3600000,
            'Yesterday': Date.now() - 86400000,
            'Feb 2, 2023': new Date('2023-02-02').getTime()
          };
          aValue = dateMap[a.date] || 0;
          bValue = dateMap[b.date] || 0;
          break;
      }
      
      if (sortDirection === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return filtered;
  }, [orders, searchTerm, filterStatus, sortField, sortDirection]);

  const totalPages = Math.max(1, Math.ceil(filteredAndSortedOrders.length / itemsPerPage));
  const paginatedOrders = filteredAndSortedOrders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const handleSelectOrder = (orderId, checked) => {
    const newSelected = new Set(selectedOrders);
    if (checked) {
      newSelected.add(orderId);
    } else {
      newSelected.delete(orderId);
    }
    setSelectedOrders(newSelected);
  };

  const handleAddOrder = () => {
    if (!newOrder.user.name || !newOrder.project || !newOrder.address) return;
    
    const newId = `#CM${String(Math.floor(Math.random() * 9000) + 1000)}`;
    const orderToAdd = {
      id: newId,
      user: { 
        name: newOrder.user.name, 
        avatarColor: newOrder.user.avatarColor 
      },
      project: newOrder.project,
      address: newOrder.address,
      date: 'Just now',
      status: newOrder.status,
      statusColor: newOrder.status.toLowerCase()
    };
    
    setOrders(prev => [orderToAdd, ...prev]);
    setNewOrder({
      user: { name: '', avatarColor: 'bg-blue-500' },
      project: '',
      address: '',
      status: 'Pending'
    });
    setShowAddModal(false);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'complete':
        return isDark ? 'text-green-400 bg-green-400/20' : 'text-green-600 bg-green-100';
      case 'in progress':
        return isDark ? 'text-blue-400 bg-blue-400/20' : 'text-blue-600 bg-blue-100';
      case 'pending':
        return isDark ? 'text-yellow-400 bg-yellow-400/20' : 'text-yellow-600 bg-yellow-100';
      case 'approved':
        return isDark ? 'text-orange-400 bg-orange-400/20' : 'text-orange-600 bg-orange-100';
      case 'rejected':
        return isDark ? 'text-red-400 bg-red-400/20' : 'text-red-600 bg-red-100';
      default:
        return isDark ? 'text-gray-400 bg-gray-400/20' : 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
            Order List
          </h2>
          
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setShowAddModal(true)}
              className={`flex items-center space-x-2 px-3 py-2 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} rounded-lg transition-colors`}
            >
              <Plus size={16} className={isDark ? 'text-gray-300' : 'text-gray-600'} />
            </button>
            <button 
              onClick={() => {
                const statuses = ['all', 'pending', 'complete', 'in progress'];
                const currentIndex = statuses.indexOf(filterStatus);
                const nextIndex = (currentIndex + 1) % statuses.length;
                setFilterStatus(statuses[nextIndex]);
              }}
              className={`flex items-center space-x-2 px-3 py-2 ${
                filterStatus !== 'all' 
                  ? 'bg-blue-600 text-white' 
                  : isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              } rounded-lg transition-colors`}
            >
              <Filter size={16} className={filterStatus !== 'all' ? 'text-white' : isDark ? 'text-gray-300' : 'text-gray-600'} />
              {filterStatus !== 'all' && (
                <span className="text-xs font-medium capitalize">{filterStatus}</span>
              )}
            </button>
            <button 
              onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}
              className={`flex items-center space-x-2 px-3 py-2 ${isDark ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} rounded-lg transition-colors`}
            >
              {sortDirection === 'asc' ? (
                <SortAsc size={16} className={isDark ? 'text-gray-300' : 'text-gray-600'} />
              ) : (
                <SortDesc size={16} className={isDark ? 'text-gray-300' : 'text-gray-600'} />
              )}
            </button>
          </div>
        </div>
        
        <div className="relative">
          <Search size={16} className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`pl-10 pr-4 py-2 w-64 rounded-lg border ${
              isDark 
                ? 'bg-gray-800 border-gray-700 text-white placeholder-gray-400' 
                : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500'
            } focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all`}
          />
        </div>
      </div>

      {/* Table */}
      <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg`}>
        <table className="w-full">
          <thead>
            <tr className={`${isDark ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <th className="text-left py-2 px-6">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                />
              </th>
              <th 
                onClick={() => {
                  if (sortField === 'id') {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  } else {
                    setSortField('id');
                    setSortDirection('asc');
                  }
                }}
                className={`text-left py-2 px-6 text-xs font-medium uppercase tracking-wide cursor-pointer hover:${isDark ? 'text-gray-200' : 'text-gray-700'} ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
              >
                Order ID {sortField === 'id' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th 
                onClick={() => {
                  if (sortField === 'user') {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  } else {
                    setSortField('user');
                    setSortDirection('asc');
                  }
                }}
                className={`text-left py-2 px-6 text-xs font-medium uppercase tracking-wide cursor-pointer hover:${isDark ? 'text-gray-200' : 'text-gray-700'} ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
              >
                User {sortField === 'user' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th 
                onClick={() => {
                  if (sortField === 'project') {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  } else {
                    setSortField('project');
                    setSortDirection('asc');
                  }
                }}
                className={`text-left py-2 px-6 text-xs font-medium uppercase tracking-wide cursor-pointer hover:${isDark ? 'text-gray-200' : 'text-gray-700'} ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
              >
                Project {sortField === 'project' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th className={`text-left py-2 px-6 text-xs font-medium uppercase tracking-wide ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                Address
              </th>
              <th 
                onClick={() => {
                  if (sortField === 'date') {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  } else {
                    setSortField('date');
                    setSortDirection('desc');
                  }
                }}
                className={`text-left py-2 px-6 text-xs font-medium uppercase tracking-wide cursor-pointer hover:${isDark ? 'text-gray-200' : 'text-gray-700'} ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
              >
                Date {sortField === 'date' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th 
                onClick={() => {
                  if (sortField === 'status') {
                    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                  } else {
                    setSortField('status');
                    setSortDirection('asc');
                  }
                }}
                className={`text-left py-2 px-6 text-xs font-medium uppercase tracking-wide cursor-pointer hover:${isDark ? 'text-gray-200' : 'text-gray-700'} ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
              >
                Status {sortField === 'status' && (sortDirection === 'asc' ? '↑' : '↓')}
              </th>
              <th className="py-3 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order, index) => (
              <tr
                key={`${order.id}-${index}`}
                className={`hover:${isDark ? 'bg-gray-700/30' : 'bg-gray-50'} transition-colors`}
              >
                <td className="py-2 px-6">
                  <input
                    type="checkbox"
                    checked={selectedOrders.has(order.id)}
                    onChange={(e) => handleSelectOrder(order.id, e.target.checked)}
                    className="rounded border-gray-300"
                  />
                </td>
                <td className="py-2 px-6">
                  <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                    {order.id}
                  </span>
                </td>
                <td className="py-2 px-6">
                  <div className="flex items-center space-x-2">
                    <div className={`w-7 h-7 rounded-full ${order.user.avatarColor} flex items-center justify-center text-white text-xs font-medium`}>
                      {order.user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {order.user.name}
                    </span>
                  </div>
                </td>
                <td className="py-2 px-6">
                  <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {order.project}
                  </span>
                </td>
                <td className="py-2 px-6">
                  <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                    {order.address}
                  </span>
                  <ExternalLink size={12} className={`inline ml-2 ${isDark ? 'text-gray-400' : 'text-gray-500'}`} />
                </td>
                <td className="py-2 px-6">
                  <div className="flex items-center space-x-2">
                    <Calendar size={12} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                    <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      {order.date}
                    </span>
                  </div>
                </td>
                <td className="py-2 px-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td className="py-2 px-6">
                  <button className={`p-1 rounded hover:${isDark ? 'bg-gray-800' : 'bg-gray-100'} transition-colors`}>
                    <MoreHorizontal size={16} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer - Pagination */}
      <div className="px-6 py-4 flex items-center justify-end">
        <div className="flex items-center space-x-1">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className={`p-2 rounded ${
              currentPage === 1 
                ? 'opacity-50 cursor-not-allowed' 
                : isDark 
                  ? 'hover:bg-gray-800' 
                  : 'hover:bg-gray-100'
            } transition-colors`}
          >
            <ChevronLeft size={16} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
          </button>
          
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded text-sm transition-colors ${
                currentPage === i + 1
                  ? isDark ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-900'
                  : isDark
                    ? 'text-gray-400 hover:bg-gray-800'
                    : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {i + 1}
            </button>
          ))}
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className={`p-2 rounded ${
              currentPage === totalPages 
                ? 'opacity-50 cursor-not-allowed' 
                : isDark 
                  ? 'hover:bg-gray-800' 
                  : 'hover:bg-gray-100'
            } transition-colors`}
          >
            <ChevronRight size={16} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
          </button>
        </div>
      </div>

      {/* Add Order Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg p-6 w-96 max-w-md mx-4`}>
            <div className="flex items-center justify-between mb-4">
              <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                Add New Order
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className={`p-1 rounded hover:${isDark ? 'bg-gray-700' : 'bg-gray-100'} transition-colors`}
              >
                <X size={16} className={isDark ? 'text-gray-400' : 'text-gray-500'} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  User Name
                </label>
                <input
                  type="text"
                  value={newOrder.user.name}
                  onChange={(e) => setNewOrder(prev => ({
                    ...prev,
                    user: { ...prev.user, name: e.target.value }
                  }))}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter user name"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Project
                </label>
                <input
                  type="text"
                  value={newOrder.project}
                  onChange={(e) => setNewOrder(prev => ({ ...prev, project: e.target.value }))}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter project name"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Address
                </label>
                <input
                  type="text"
                  value={newOrder.address}
                  onChange={(e) => setNewOrder(prev => ({ ...prev, address: e.target.value }))}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  placeholder="Enter address"
                />
              </div>

              <div>
                <label className={`block text-sm font-medium mb-2 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                  Status
                </label>
                <select
                  value={newOrder.status}
                  onChange={(e) => setNewOrder(prev => ({ ...prev, status: e.target.value }))}
                  className={`w-full px-3 py-2 rounded-lg border ${
                    isDark 
                      ? 'bg-gray-700 border-gray-600 text-white' 
                      : 'bg-white border-gray-300 text-gray-900'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option value="Pending">Pending</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Complete">Complete</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>
            </div>

            <div className="flex items-center justify-end space-x-3 mt-6">
              <button
                onClick={() => setShowAddModal(false)}
                className={`px-4 py-2 rounded-lg ${
                  isDark 
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-300' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                } transition-colors`}
              >
                Cancel
              </button>
              <button
                onClick={handleAddOrder}
                disabled={!newOrder.user.name || !newOrder.project || !newOrder.address}
                className={`px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                Add Order
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderTable;