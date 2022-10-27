import PieChart from './charts/PieChart';
import ScatterPlot from './charts/ScatterPlot';
import {Doughnut} from 'react-chartjs-2';
import React from 'react';
import {useEffect, useState, useRef, useCallback} from 'react';
import FillerDiv from './FillerDiv';
import BarGraph from './charts/BarGraph';

export default function OldGraph({
  displayData,
  headers,
  pid,
  selectedCheckbox,
}) {
  //set state for the current graph type
  const [graphType, setGraphType] = useState('');

  //for graphs with x axis and y axis, and labels
  const [xAxisOptions, setXAxisOptions] = useState([]);
  const [xAxis, setXAxis] = useState('');
  const [xAxisLabel, setXAxisLabel] = useState('');

  const [yAxisOptions, setYAxisOptions] = useState([]);
  const [yAxis, setYAxis] = useState('');
  const [yAxisLabel, setYAxisLabel] = useState('');

  //State for graph label
  const [graphLabel, setGraphLabel] = useState('');

  //populate types of graph choices menu
  const types = ['Bar Graph', 'Pie Chart', 'Scatter Plot', 'Doughnut'];
  const typeHTML = [];
  typeHTML.push(
    <option value="select" key="100">
      Select Type of Graph
    </option>
  );
  for (let i = 0; i < types.length; i++) {
    typeHTML.push(
      <option value={types[i]} key={i}>
        {types[i]}
      </option>
    );
  }

  //create References

  const graphDisplay = {
    'Scatter Plot': (
      <ScatterPlot
        graphLabel={graphLabel}
        xAxis={xAxis}
        yAxis={yAxis}
        xAxisLabel={xAxisLabel}
        yAxisLabel={yAxisLabel}
        displayData={displayData}
      />
    ),
    'Bar Graph': (
      <BarGraph
        graphLabel={graphLabel}
        xAxis={xAxis}
        yAxis={yAxis}
        xAxisLabel={xAxisLabel}
        yAxisLabel={yAxisLabel}
        displayData={displayData}
        selectedCheckbox={selectedCheckbox}
      />
    ),
    'Pie Chart': (
      <PieChart
        graphLabel={graphLabel}
        xAxis={xAxis}
        yAxis={yAxis}
        xAxisLabel={xAxisLabel}
        yAxisLabel={yAxisLabel}
        displayData={displayData}
      />
    ),
    Doughnut: (
      <Doughnut
        graphLabel={graphLabel}
        xAxis={xAxis}
        yAxis={yAxis}
        xAxisLabel={xAxisLabel}
        yAxisLabel={yAxisLabel}
        displayData={displayData}
      />
    ),
  };

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
      <option value="select" key={101}>
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
  useEffect(() => {
    const yAxisLabels = [];
    let key = 200;
    yAxisLabels.push(
      <option value={'select'} key={199}>
        Select Y Axis
      </option>
    );
    setXAxisLabel(xAxis);

    for (const yLabel of headers) {
      if (yLabel !== xAxis) {
        yAxisLabels.push(
          <option value={yLabel} key={key}>
            {yLabel}
          </option>
        );
        key++;
      }
    }
    setYAxisOptions(yAxisLabels);
    if (xAxis !== '') {
      console.log('xAxis', xAxis);
      const yDropdown = document.getElementById('yOptionsDiv');
      yDropdown.style.display = 'block';
    }
  }, [xAxis]);

  useEffect(() => {
    setYAxisLabel(yAxis);
  }, [yAxis]);

  //check the graph type every time it's changed. display different choices for each type
  useEffect(() => {
    console.log('in useeffect', graphType);
    let graphMenu = document.getElementById('graphMenu');
    if (graphType === 'Bar Graph' || graphType === 'Scatter Plot') {
      const xDropdown = document.getElementById('xOptionsDiv');
      xDropdown.style.display = 'block';
    }
  }, [graphType]);

  return <>hi</>;
}
