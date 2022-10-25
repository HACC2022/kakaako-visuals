import React from 'react';
import {useEffect, useState} from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import {Scatter} from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function ScatterPlot({xAxis, yAxis, displayData, xAxisLabel, yAxisLabel, graphName, graphLabel}) {
  console.log('running scatter plot function');

  const [dataMap, setDataMap] = useState([])

  useEffect(()=>{
    const coordinates = []
    for (let i=0; i<displayData.length; i++){
        coordinates.push(
          {
            x: displayData[i][xAxis],
            y: displayData[i][yAxis]
          }
        )
    }
    setDataMap(coordinates)
    console.log(coordinates)

  }, [yAxis, xAxis, displayData])

  const options = {
    scales: {
      x: {
        title: {
          text: xAxisLabel,
          display: true,
        },
      },
      y: {
        title: {
          text: yAxisLabel,
          display: true,
        },
        // beginAtZero: true,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: graphLabel,
        data: dataMap,
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  return (
    <div>
      <Scatter options={options} data={data} />
    </div>
  );
}
