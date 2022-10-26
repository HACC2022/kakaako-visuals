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
    console.log('LINKKKK', link)
    link.click();
  },[])

  const getLink = useCallback( ()=>{
    const base64Link = ref.current.toBase64Image()
    console.log(base64Link)
    const response = fetch( `https://api.imgbb.com/1/upload?` + new URLSearchParams({
      key:'62d105ee52f40101519e60a2a50c47b6',
      // image: base64Link
      // image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg'
    }), {
      method: 'POST',
    })
    .then ((res)=>res.json())
    .then (linkResponse =>{
      console.log(linkResponse.data.url_viewer)
    })   

    // uploadImage(img) {
    //   let body = new FormData()
    //   body.set('key', 'an_api_key')
    //   body.append('image', img)
  
    //   return axios({
    //     method: 'post',
    //     url: 'https://api.imgbb.com/1/upload',
    //     data: body
    //   })
    // }

    // const options = {
    //   apiKey: '62d105ee52f40101519e60a2a50c47b6', 
    //   base64string: base64Link
    // }

    // imgbbUploader(options)
    // .then ((response => console.log(response)))


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
      <button type='button' onClick={getLink}>GetLink</button>
    </div>
  );
}
