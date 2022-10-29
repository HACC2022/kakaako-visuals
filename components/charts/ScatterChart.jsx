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

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function ScatterChart({
  xAxis,
  yAxis,
  displayData,
  xAxisLabel,
  yAxisLabel,
  graphName,
  graphLabel,
  setDownload
}) {

  let ref = useRef(null);

  //run this function for ANY dependant changes on the graph
  useEffect(()=>{
    setDownload(ref)
  }, [xAxis, yAxis, displayData, yAxisLabel, xAxisLabel, graphLabel, graphName])


  // const downloadImage = useCallback(() => {
  //   const link = document.createElement('a');
  //   console.log('reffff current', ref)
  //   link.download = 'chart.png';
  //   link.href = ref.current.toBase64Image();
  //   console.log('LINKKKK', link);
  //   link.click();
  // }, []);

  // const getLink = useCallback(() => {
  //   const base64Link = ref.current.toBase64Image();
  //   console.log(base64Link);
  //   const response = fetch(
  //     `https://api.imgbb.com/1/upload?` +
  //       new URLSearchParams({
  //         key: '62d105ee52f40101519e60a2a50c47b6',
  //         // image: base64Link
  //         // image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'
  //       }),
  //     {
  //       method: 'POST',
  //     }
  //   )
  //     .then((res) => res.json())
  //     .then((linkResponse) => {
  //       console.log(linkResponse.data.url_viewer);
  //     });

  //   // const options = {
  //   //   apiKey: '62d105ee52f40101519e60a2a50c47b6',
  //   //   base64string: base64Link
  //   // }

  //   // imgbbUploader(options)
  //   // .then ((response => console.log(response)))
  // }, []);

  const [dataMap, setDataMap] = useState([]);

  useEffect(() => {
    const coordinates = [];
    for (let i = 0; i < displayData.length; i++) {
      coordinates.push({
        x: displayData[i][xAxis],
        y: displayData[i][yAxis],
      });
    }
    setDataMap(coordinates);
    console.log(coordinates);
  }, [yAxis, xAxis, displayData]);

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

  console.log(displayData);

  return (
    <div>
      <Scatter ref={ref} options={options} data={data} className="max-h-96" />
    </div>
  );
}
