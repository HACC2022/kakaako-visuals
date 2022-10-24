import PieChart from './charts/PieChart';
import ScatterPlot from './charts/ScatterPlot';
import {useEffect, useState} from 'react';

export default function Graph({displayData}) {
  //set state for the current graph type
  const [graphType, setGraphType] = useState('');
  //for Pie graph categories
  const [barLabels, setBarLabels] = useState([]);
  //for scatter graph x axis and y axis
  const [xAxis, setXAxis] = useState([]);
  const [yAxis, setYAxis] = useState([]);

  //populate types of graph choices menu
  const types = ['Bar Graph', 'Pie Chart', 'Scatter Plot'];
  const typeHTML = [];
  typeHTML.push(<option key="100">Select Type of Graph</option>);
  for (let i = 0; i < types.length; i++) {
    typeHTML.push(
      <option value={types[i]} key={i}>
        {types[i]}
      </option>
    );
  }

  //populating Bar graph's label option
  useEffect(() => {
    const labels = [];
    let key = 100;
    for (const label in displayData[0]) {
      console.log(label);
      labels.push(
        <option value={label} key={key}>
          {label}
        </option>
      );
      key++;
    }
    setBarLabels(labels);

    const TESTTT = document.getElementById('barOptionsDiv');
    TESTTT.style.display = 'none';
  }, [displayData]);

  //check the graph type every time it's changed. display different choices for each type
  useEffect(() => {
    console.log('in useeffect', graphType);
    let graphMenu = document.getElementById('graphMenu');
    if (graphType === 'Bar Graph') {
      const barType = document.createElement('p');
      barType.setAttribute('id', 'test');
      barType.innerHTML = 'TESTTINgggg';
      graphMenu.appendChild(barType);
    } else if (graphType === 'Pie Chart') {
      console.log('inside pie');
    }
  }, [graphType]);

  return (
    <>
      <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
        <div className=" rounded-lg border-4 border-dashed border-gray-200">
          {/* <PieChart /> */}
        </div>
      </div>

      <div className="rounded-lg bg-white px-5 py-6 shadow sm:px-6">
        <div className=" rounded-lg border-4 border-dashed border-gray-200">
          {/* <Table /> */}
        </div>
        <div>
          <ScatterPlot />
        </div>
      </div>

      <div id="graphMenu">
        <label for="selectGraph">Type of Graph </label>
        <select
          id="graphType"
          onChange={(e) =>
            setGraphType((prevType) => {
              return document.getElementById('graphType').value;
            })
          }
        >
          {typeHTML}
        </select>

        {/* OPTIONS FOR BAR GRAPH */}
        <div id="barOptionsDiv">
          <select id="barOptions">{barLabels}</select>
        </div>

        {/* OPTIONS FOR GRAPHS require x and y axis */}
        <div id="xyOptionsDiv">
          <label for="xAxis">x-Axis</label>
          <select id="xOption"></select>
        </div>
      </div>
    </>
  );
}
