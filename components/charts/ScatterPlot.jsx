import React from 'react';
import {useEffect, useState, useRef, useCallback} from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  CategoryScale,
  Tooltip,
  Legend,
} from 'chart.js';
import {Scatter} from 'react-chartjs-2';


ChartJS.register(LinearScale, CategoryScale, PointElement, LineElement, Tooltip, Legend);

export default function ScatterPlot({xAxis, yAxis, displayData, xAxisLabel, yAxisLabel, graphName, graphLabel}) {
  console.log('running scatter plot function');

  let ref = useRef(null);

  const downloadImage = useCallback(()=>{
    const link = document.createElement('a');
    link.download = 'chart.png';
    link.href = ref.current.toBase64Image()
    link.click();
  },[])

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
      <Scatter ref={ref} options={options} data={data} />
      <button type='button' onClick={downloadImage}>Download</button>
    </div>
  );
}
