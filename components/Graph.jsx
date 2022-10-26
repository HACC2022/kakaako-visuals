import PieChart from './charts/PieChart';
import ScatterPlot from './charts/ScatterPlot';
import React from 'react';
import {useEffect, useState, useRef, useCallback} from 'react';

export default function Graph({displayData, headers}) {
  //set state for the current graph type
  const [graphType, setGraphType] = useState('');

  //for graphs with x axis and y axis, and labels
  const [xAxisOptions, setXAxisOptions] = useState([]);
  const [xAxis, setXAxis] = useState('');
  const [xAxisLabel, setXAxisLabel] = useState('')

  const [yAxisOptions, setYAxisOptions] = useState([]);
  const [yAxis, setYAxis] = useState('');
  const [yAxisLabel, setYAxisLabel] = useState('')

  //State for graph label
  const [graphLabel, setGraphLabel] = useState('')


  //populate types of graph choices menu
  const types = ['Bar Graph', 'Pie Chart', 'Scatter Plot'];
  const typeHTML = [];
  typeHTML.push(<option value='select' key="100">Select Type of Graph</option>);
  for (let i = 0; i < types.length; i++) {
    typeHTML.push(
      <option value={types[i]} key={i}>
        {types[i]}
      </option>
    );
  }

  //create References 
 
  const graphDisplay = {
    'Scatter Plot': <ScatterPlot graphLabel={graphLabel} xAxis={xAxis} yAxis={yAxis} xAxisLabel={xAxisLabel} yAxisLabel={yAxisLabel} displayData={displayData}/>
  
  
  }
  //populating graph's label option
  useEffect(() => {
    //make the x and y axis option disappear first
    // const xDropdown = document.getElementById('xOptionsDiv'); 
    // const yDropdown = document.getElementById('yOptionsDiv');
    // xDropdown.style.display = 'none';
    // yDropdown.style.display = 'none';

    //populate x axis dropdown options; 
    const xAxisLabels = [];
    let key = 102;
    xAxisLabels.push(
      <option value='select' key={101}>
        Select X Axis
      </option>
    );
    for (const xLabel of headers) {
      xAxisLabels.push(
        <option value={xLabel} key={key}>
          {xLabel}
        </option>
      );
      key++;
    }
    setXAxisOptions(xAxisLabels);
  }, [displayData]);

  //populate Y Axis drop down options
  useEffect(()=>{
    const yAxisLabels = [];
    let key = 200;
    yAxisLabels.push(
      <option value={'select'} key={199}>
      Select Y Axis
    </option>
    )
    setXAxisLabel(xAxis)

    for (const yLabel of headers){
      if (yLabel !== xAxis){
        yAxisLabels.push(
          <option value={yLabel} key={key}>
          {yLabel}
        </option>
        )
        key++;
      }
    }
    setYAxisOptions(yAxisLabels)
    if (xAxis !==''){
      console.log('xAxis', xAxis)
    const yDropdown = document.getElementById('yOptionsDiv');
    yDropdown.style.display = 'block';
    }
  }, [xAxis])

  useEffect(()=>{
    setYAxisLabel(yAxis)
  },[yAxis])

  //check the graph type every time it's changed. display different choices for each type
  useEffect(() => {
    console.log('in useeffect', graphType);
    let graphMenu = document.getElementById('graphMenu');
    if (graphType === 'Bar Graph' || graphType ==='Scatter Plot') {
      const xDropdown = document.getElementById('xOptionsDiv'); 
      xDropdown.style.display = 'block';
    }
  }, [graphType]);

  return (
    <>
      <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
        <div className=" rounded-lg border-4 border-dashed border-gray-200">
        </div>
        <div>
          {graphDisplay[graphType]}
        </div>
      </div>

      <label for='graphLabel'>Name the Graph</label>
          <input type='text' id='gLabel'
          onChange={()=>{
            setGraphLabel(document.getElementById('gLabel').value)
          }}></input>

      {/* OPTIONS for the type of graph selection */}
      <div id="graphMenu">
        <label for="selectGraph">Type of Graph </label>
        <select
          id="graphType"
          onChange={() =>
            setGraphType(() => {
              return document.getElementById('graphType').value;
            })
          }
        >
          {typeHTML}
        </select>

        {/* X AXIS DROP DOWN OPTIONS */}
        <div id="xOptionsDiv" style={{display:'none'}}>
          <label for="xAxis">X-Axis</label>
          <select id="xOption"
            onChange={()=>{
              setXAxis(()=>{
                return document.getElementById('xOption').value
              })
            }}>
            {xAxisOptions}
          </select>
          {/* X AXIS LABELS OPTION */}
          <label for='xAxisLabel'>Rename X Axis</label>
          <input type='text' id='xLabel'
          onChange={()=>{
            setXAxisLabel(()=>{
              // const labelValue = document.getElementById('xLabel').value;
              // if (labelValue === ''){
              //   return xAxis;
              // }
              // else {
                return document.getElementById('xLabel').value
            //   }
            })
          }
        }></input>
        </div>
        {/* Y AXIS DROP DOWN OPTIONS */}
        <div id="yOptionsDiv" style={{display:'none'}}>
          <label for="yAxis">Y-Axis</label>
          <select id="yOption"
            onChange={()=>{
              setYAxis(()=>{
                return document.getElementById('yOption').value
              })
            }}>
            {yAxisOptions}
          </select>
          {/* Y AXIS LABELS OPTION */}
          <label for='yAxisLabel'>Rename Y Axis</label>
          <input type='text' id='yLabel'
          onChange={()=>{
            setYAxisLabel(document.getElementById('yLabel').value)
          }} ></input>
        </div>
      </div>
    </>
  );
}
