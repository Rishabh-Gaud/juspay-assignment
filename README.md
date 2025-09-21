# ByeWind Dashboard

A modern, responsive SaaS dashboard built with React and featuring pixel-perfect implementation of provided Figma designs. This project showcases a comprehensive dashboard with multiple views, data visualizations, and seamless dark/light theme switching.

![ByeWind Dashboard Preview](https://via.placeholder.com/800x400?text=ByeWind+Dashboard+Preview)

## ✨ Features

- **🎨 Pixel-perfect Design Implementation**: Faithfully recreated from Figma designs
- **🌓 Dark/Light Theme Toggle**: Smooth theme switching with system preference detection
- **📱 Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **🎭 Smooth Animations**: Meaningful microinteractions using Framer Motion
- **📊 Interactive Charts**: Built with Recharts for data visualization
- **🔔 Notification System**: Real-time notifications with activity tracking
- **⚡ Modern Tech Stack**: React 19, Vite, Tailwind CSS v4
- **🎯 Multiple Dashboard Views**: eCommerce analytics and order management
- **🔍 Advanced Search**: Global search functionality with keyboard shortcuts
- **👥 Contact Management**: Interactive contacts list with status indicators

## 🚀 Live Demo

**[View Live Demo](https://byewind-dashboard.vercel.app)** *(Will be deployed)*

## 🛠️ Tech Stack

- **Frontend**: React 19, JavaScript (ES6+)
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📦 Installation & Setup

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn

### Clone and Install

```bash
# Clone the repository
git clone https://github.com/yourusername/byewind-dashboard.git
cd byewind-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Build the project
npm run build

# Preview the production build
npm run preview
```

## 📱 Responsive Design

The dashboard is fully responsive and optimized for:

- **Desktop**: Full sidebar navigation and multi-column layouts
- **Tablet**: Responsive grid layouts with optimized spacing
- **Mobile**: Collapsible navigation and single-column layouts

## 🎨 Theme System

The application features a comprehensive theme system:

- **Auto-detection**: Respects system dark/light mode preference
- **Manual Toggle**: Header theme switch for user preference
- **Persistent**: Theme choice saved to localStorage
- **Smooth Transitions**: Animated theme switching across all components

## 📊 Dashboard Features

### eCommerce Dashboard
- **KPI Cards**: Customers, Orders, Revenue, Growth metrics
- **Interactive Charts**: 
  - Projections vs Actuals (Bar Chart)
  - Revenue Trends (Line Chart)
  - Geographic Revenue Distribution (World Map)
  - Sales Breakdown (Donut Chart)
- **Top Products Table**: Best-selling products with detailed metrics

### Order Management
- **Advanced Data Table**: 
  - Sortable columns
  - Search functionality
  - Status filtering
  - Pagination
- **Bulk Actions**: Select multiple orders for batch operations
- **Status Management**: Visual status indicators with color coding

### Notification System
- **Real-time Notifications**: Bug reports, user activities, system updates
- **Activity Timeline**: Chronological list of recent activities
- **Contact List**: Team members with online status indicators

## 🎯 Key Components

### Layout Components
- `Sidebar`: Collapsible navigation with section grouping
- `Header`: Search, theme toggle, and notification controls
- `NotificationPanel`: Slide-out panel with activities and contacts

### Data Components
- `DashboardCard`: Animated metric cards with trend indicators
- `OrderTable`: Feature-rich data table with sorting and filtering
- `Charts`: Comprehensive charting components using Recharts

### Utility Components
- `useTheme`: Custom hook for theme management
- Responsive design utilities and animations

## 🎨 Design Decisions

### Animation Strategy
- **Entrance Animations**: Staggered component reveals for visual hierarchy
- **Microinteractions**: Hover effects, button states, and transitions
- **Page Transitions**: Smooth switching between dashboard views
- **Performance**: Optimized animations using Framer Motion

### Accessibility
- **Keyboard Navigation**: Full keyboard support for all interactive elements
- **Color Contrast**: WCAG AA compliant color schemes in both themes
- **Screen Reader Support**: Semantic HTML and proper ARIA labels
- **Focus Management**: Clear focus indicators and logical tab order

### Performance Optimizations
- **Code Splitting**: Lazy loading for optimal bundle sizes
- **Efficient Rendering**: Optimized React patterns and memoization
- **Asset Optimization**: Compressed images and optimized fonts

## 🚧 Challenges & Solutions

### 1. Pixel-Perfect Implementation
**Challenge**: Matching exact spacing, colors, and proportions from Figma designs
**Solution**: Created a comprehensive design system with precise Tailwind classes and custom CSS variables

### 2. Responsive Data Tables
**Challenge**: Making complex data tables work well on mobile devices
**Solution**: Implemented horizontal scrolling, collapsible columns, and mobile-optimized pagination

### 3. Theme Consistency
**Challenge**: Ensuring all components support both dark and light themes
**Solution**: Built a centralized theme system with consistent color tokens and automatic theme detection

### 4. Animation Performance
**Challenge**: Smooth animations without impacting performance
**Solution**: Used Framer Motion's optimized animations and implemented performance-conscious animation patterns

## 🔧 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📈 Future Improvements

- [ ] Mobile sidebar overlay for better mobile navigation
- [ ] Advanced filtering options for data tables
- [ ] Real-time data updates with WebSocket integration
- [ ] Export functionality for charts and tables
- [ ] User preferences and dashboard customization
- [ ] Advanced search with filters and saved searches

## 👨‍💻 Development

### Project Structure
```
src/
├── components/          # Reusable UI components
├── pages/              # Page-level components
├── hooks/              # Custom React hooks
├── data/               # Mock data and constants
└── assets/             # Static assets
```

### Code Style
- ESLint configuration for code quality
- Consistent component patterns
- Comprehensive prop validation
- Modern JavaScript (ES6+) features

## 📄 License

This project is created as part of a technical assignment. All rights reserved.

## 🤝 Contributing

This is a showcase project, but feedback and suggestions are welcome! Feel free to open issues or reach out with comments.

---

**Built with ❤️ using React and modern web technologies**
