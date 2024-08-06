import React from 'react';
import { Bar, Line } from 'react-chartjs-2';
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

// Register the required components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ActivityChart = () => {
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1), // Days 1 to 30
    datasets: [{
      label: 'Activity',
      data: [12, 19, 3, 5, 2, 3, 17, 6, 3, 7, 13, 11, 14, 10, 8, 7, 9, 5, 8, 13, 6, 5, 7, 10, 8, 9, 6, 3, 4,],
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      fill: true,
    }],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Activity Chart',
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Days'
        }
      },
      y: {
        type: 'linear',
        title: {
          display: true,
          text: 'Values'
        }
      }
    }
  };

  return <Line data={data} options={options} />;
};

export default ActivityChart;
