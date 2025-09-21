# ByeWind Dashboard

A modern React dashboard application for eCommerce analytics and order management.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the app.

## What's Inside

This dashboard includes two main views:

**Default View**: Order management with search, filtering, and pagination. You can add new orders and sort by different columns.

**eCommerce View**: Analytics dashboard with revenue metrics, charts showing projections vs actuals, geographic revenue distribution, and sales breakdowns.

## Features

- Dark and light theme support
- Responsive design that works on mobile
- Interactive charts using Chart.js
- Order management with CRUD operations
- Real-time data filtering and search
- Animated UI components

## Built With

- React 19 with Vite
- Tailwind CSS for styling
- Chart.js for data visualization
- Framer Motion for animations
- Lucide React for icons

## Project Structure

```
src/
├── components/
│   ├── charts/         # Chart components
│   ├── Header.jsx      # Top navigation
│   ├── Sidebar.jsx     # Side navigation
│   └── OrderTable.jsx  # Order list and management
├── pages/
│   └── Dashboard.jsx   # Main dashboard container
└── App.jsx            # App entry point
```

## Theme System

The app automatically detects your system's dark/light preference and includes a manual toggle. Theme settings are saved locally.

## Charts

Charts are built with Chart.js and include:
- Bar charts for projections vs actuals
- Line charts for revenue trends  
- Donut charts for sales breakdowns
- Interactive world map for geographic data

## Development

Run `npm run build` to create a production build.

The codebase uses modern React patterns with hooks and follows component composition principles.

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).
