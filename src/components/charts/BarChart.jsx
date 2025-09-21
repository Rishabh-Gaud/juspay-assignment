import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ isDark }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: isDark ? '#374151' : '#ffffff',
        titleColor: isDark ? '#ffffff' : '#1f2937',
        bodyColor: isDark ? '#ffffff' : '#1f2937',
        borderColor: isDark ? '#4b5563' : '#e5e7eb',
        borderWidth: 1,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: isDark ? '#9ca3af' : '#6b7280',
          font: {
            size: 12,
          },
        },
      },
      y: {
        min: 0,
        max: 30,
        grid: {
          color: isDark ? '#374151' : '#f3f4f6',
        },
        ticks: {
          color: isDark ? '#9ca3af' : '#6b7280',
          font: {
            size: 12,
          },
          stepSize: 10,
          callback: function(value) {
            return value + 'M';
          }
        },
      },
    },
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Actuals',
        data: [15, 25, 20, 30, 18, 28],
        backgroundColor: '#94a3b8',
        borderRadius: 4,
        maxBarThickness: 16,
      },
      {
        label: 'Projections',
        data: [18, 22, 25, 28, 15, 25],
        backgroundColor: '#64748b',
        borderRadius: 4,
        maxBarThickness: 16,
      },
    ],
  };

  return <Bar options={options} data={data} />;
};

export default BarChart;