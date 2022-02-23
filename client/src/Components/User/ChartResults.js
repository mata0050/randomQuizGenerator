import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function ChartResults() {
  return (
    <div>
      <h2>ChartResults</h2>{' '}
      <Line
        datasetIdKey='id'
        data={{
          labels: ['Jun', 'Jul', 'Aug'],
          datasets: [
            {
              id: 1,
              label: '',
              data: [2,4,50],
            },
            {
              id: 2,
              label: '',
              data: [3, 2, 1],
            },
          ],
        }}
      />
    </div>
  );
}

export default ChartResults;
