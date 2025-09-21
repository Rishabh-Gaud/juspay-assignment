import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ isDark }) => {
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
        callbacks: {
          label: function(context) {
            return context.label + ': $' + context.parsed;
          }
        }
      },
    },
    cutout: '60%',
  };

  const data = {
    labels: ['Direct', 'Affiliate', 'Sponsored', 'E-mail'],
    datasets: [
      {
        data: [300.56, 135.18, 154.02, 48.96],
        backgroundColor: [
          '#3b82f6', // blue
          '#10b981', // green
          '#f59e0b', // yellow
          '#8b5cf6', // purple
        ],
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  return <Doughnut options={options} data={data} />;
};

export default DonutChart;