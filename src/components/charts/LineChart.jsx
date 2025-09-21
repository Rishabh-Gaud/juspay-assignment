import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ isDark }) => {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: isDark ? '#374151' : '#ffffff',
        titleColor: isDark ? '#ffffff' : '#1f2937',
        bodyColor: isDark ? '#ffffff' : '#1f2937',
      },
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: isDark ? '#9ca3af' : '#6b7280' },
      },
      y: {
        grid: { color: isDark ? '#374151' : '#f3f4f6' },
        ticks: { color: isDark ? '#9ca3af' : '#6b7280' },
      },
    },
    interaction: { intersect: false },
    elements: { point: { radius: 4, hoverRadius: 6 } },
  };

  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Current Week',
        data: [12000, 19000, 15000, 25000, 22000, 30000, 28000],
        borderColor: '#3b82f6',
        backgroundColor: '#3b82f6',
        tension: 0.4,
        fill: false,
      },
      {
        label: 'Previous Week',
        data: [8000, 15000, 12000, 18000, 16000, 20000, 18000],
        borderColor: '#9ca3af',
        backgroundColor: '#9ca3af',
        tension: 0.4,
        fill: false,
        borderDash: [5, 5],
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineChart;