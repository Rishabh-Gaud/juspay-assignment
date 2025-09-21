# ByeWind Dashboard

A modern React dashboard application for eCommerce analytics and order management.

**🚀 Live Demo**: [https://juspay-assignment-sandy.vercel.app/](https://juspay-assignment-sandy.vercel.app/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 20.19+ or 22.12+)
- **npm** (comes with Node.js) or **yarn**
- **Git** for cloning the repository

## 🛠️ Local Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Rishabh-Gaud/juspay-assignment.git
cd byewind-dashboard
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:5173](http://localhost:5173)

### 4. Build for Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

## 📱 What's Inside

This dashboard includes two main views:

**Default View**: Order management with search, filtering, and pagination. You can add new orders and sort by different columns.

**eCommerce View**: Analytics dashboard with revenue metrics, charts showing projections vs actuals, geographic revenue distribution, and sales breakdowns.

## ⚡ Features

- **Theme Support**: Automatic dark/light mode detection with manual toggle
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Charts**: Real-time data visualization using Chart.js
- **Order Management**: Complete CRUD operations for order handling
- **Advanced Search**: Real-time filtering and search functionality
- **Smooth Animations**: Enhanced user experience with Framer Motion

## 🔧 Tech Stack

- **React 19** with modern hooks and functional components
- **Vite** for fast development and building
- **Tailwind CSS** for utility-first styling
- **Chart.js** with React integration for data visualization
- **Framer Motion** for smooth animations and transitions
- **Lucide React** for consistent iconography

## 📁 Project Structure

```
src/
├── components/
│   ├── charts/              # Chart components (Bar, Line, Donut)
│   │   ├── BarChart.jsx     # Projections vs Actuals chart
│   │   ├── LineChart.jsx    # Revenue trend chart
│   │   └── DonutChart.jsx   # Sales breakdown chart
│   ├── Header.jsx           # Top navigation with search and theme toggle
│   ├── Sidebar.jsx          # Collapsible side navigation
│   ├── OrderTable.jsx       # Order management with CRUD operations
│   ├── WorldMap.jsx         # Geographic revenue visualization
│   └── NotificationPanel.jsx # Notifications and contacts panel
├── pages/
│   └── Dashboard.jsx        # Main dashboard container and routing
├── hooks/
│   └── useTheme.js          # Custom hook for theme management
└── App.jsx                  # Root application component
```

## 📊 Component Documentation

### Dashboard Component
**Location**: `src/pages/Dashboard.jsx`

Main container component that handles dashboard routing and layout.

**Props**:
- `isDark` (boolean): Current theme state
- `activeSection` (string): Current active dashboard section

### OrderTable Component
**Location**: `src/components/OrderTable.jsx`

Comprehensive order management component with full CRUD functionality.

**Features**:
- Search and filtering
- Sortable columns
- Pagination
- Add new orders modal
- Status management

### Chart Components
**Location**: `src/components/charts/`

Interactive chart components built with Chart.js:

- **BarChart**: Displays projections vs actuals data
- **LineChart**: Shows revenue trends over time
- **DonutChart**: Visualizes sales breakdown by category

**Props**: 
- `isDark` (boolean): Adapts colors to current theme

### Theme System
**Location**: `src/hooks/useTheme.js`

Custom hook managing theme state and persistence.

**Returns**:
- `isDark` (boolean): Current theme state
- `toggleTheme` (function): Theme toggle function

## 🌍 Deployment

### Vercel Deployment

The application is deployed on Vercel and automatically deploys from the main branch.

**Live URL**: [https://juspay-assignment-sandy.vercel.app/](https://juspay-assignment-sandy.vercel.app/)

### Deploy Your Own

1. Fork this repository
2. Connect your fork to Vercel
3. Deploy with default settings

### Alternative Deployment Options

**Netlify**:
```bash
npm run build
# Upload dist/ folder to Netlify
```

**GitHub Pages**:
```bash
npm run build
# Configure GitHub Pages to serve from dist/ folder
```

## 🎨 Theme System

The application features a comprehensive theme system:

- **Auto-detection**: Respects system dark/light mode preference
- **Manual Toggle**: Header theme switch for user preference
- **Persistence**: Theme choice saved to localStorage
- **Smooth Transitions**: Animated theme switching across all components

## 📊 Charts and Data Visualization

Charts are built with Chart.js and include:

- **Bar Charts**: Projections vs actuals with customizable data
- **Line Charts**: Revenue trends with multiple data series
- **Donut Charts**: Sales breakdowns with interactive legends
- **World Map**: Geographic revenue distribution with SVG assets

## 🔍 Development Notes

### Code Organization
- Components follow functional programming patterns
- Custom hooks for reusable logic
- Prop drilling minimized through careful component design
- Responsive design using Tailwind's utility classes

### Performance Optimizations
- Chart.js configuration optimized for smooth rendering
- Framer Motion animations use hardware acceleration
- Images optimized for both light and dark themes

## 🌐 Browser Support

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 🐛 Troubleshooting

### Common Issues

**Charts not rendering**:
- Ensure Chart.js dependencies are properly installed
- Check console for JavaScript errors

**Theme not persisting**:
- Verify localStorage is enabled in browser
- Check useTheme hook implementation

**Responsive issues**:
- Clear browser cache and hard reload
- Ensure Tailwind CSS is properly configured

## 📄 License

This project is created for demonstration purposes. All rights reserved.
