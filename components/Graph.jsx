import ScatterPlot from './charts/ScatterPlot';
import {Doughnut} from 'react-chartjs-2';
import BarGraph from './charts/BarGraph';
import PieChart from './charts/PieChart';
import {useEffect, useState, useRef, useCallback} from 'react';
import FillerDiv from './FillerDiv';
import {QuestionMarkCircleIcon} from '@heroicons/react/20/solid';

export default function Graph({displayData, headers, pid, selectedCheckbox}) {
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
  console.log(displayData);
  //check the graph type every time it's changed. display different choices for each type
  useEffect(() => {
    console.log('in useeffect', graphType);
    let graphMenu = document.getElementById('graphMenu');
    if (graphType === 'Bar Graph' || graphType === 'Scatter Plot') {
      const xDropdown = document.getElementById('xOptionsDiv');
      xDropdown.style.display = 'block';
    }
  }, [graphType]);

  const user = {
    name: 'Rebecca Nicholas',
    role: 'Product Designer',
    imageUrl:
      'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  };
  const stats = [
    {label: 'Vacation days left', value: 12},
    {label: 'Sick days left', value: 4},
    {label: 'Personal days left', value: 2},
  ];

  return (
    <>
      <div className=" w-fill rounded-lg bg-white px-2 py-6 shadow sm:px-6">
        {graphType ? graphDisplay[graphType] : <FillerDiv />}
      </div>
      <div className="overflow-hidden rounded-lg bg-white shadow my-3">
        <h2 className="sr-only" id={pid}>
          {pid}
        </h2>
        <div className="bg-white p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="sm:flex sm:space-x-5 ">
              <div className="flex-shrink-0">
                <img
                  className="mx-auto h-20 w-20 rounded-full"
                  src={`https://health.hawaii.gov/wp-content/themes/hic_state_template_parent/images/og-image.jpg`}
                  alt="hawaii state crest"
                />
              </div>

              <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left ">
                <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                  {pid}
                </p>

                <div>
                  <label
                    htmlFor="graphLabel"
                    className="block text-base font-medium text-gray-700 mt-2 "
                  >
                    Graph Name
                  </label>
                  <div className="relative mt-1 rounded-md shadow-sm flex">
                    <input
                      type="text"
                      name="graphLabel"
                      id="gLabel"
                      className="block w-full rounded-md border-gray-300 pr-10 py-2 px-2 border border-black focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      placeholder="My best graph"
                      onChange={() => {
                        setGraphLabel(document.getElementById('gLabel').value);
                      }}
                    />
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                      <QuestionMarkCircleIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 py-2 text-left gap-2">
                  <div className="">
                    <label
                      htmlFor="selectGraph"
                      className="block text-base font-medium text-gray-700 "
                    >
                      Graph Type
                    </label>

                    <select
                      id="graphType"
                      name="location"
                      className="mt-1 block w-full rounded-md border border-black border-gray-300 py-2 pl-1 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onChange={() =>
                        setGraphType(() => {
                          return document.getElementById('graphType').value;
                        })
                      }
                    >
                      {typeHTML}
                    </select>
                  </div>
                  {/* X AXIS DROP DOWN OPTIONS */}
                  <div id="xOptionsDiv" style={{display: 'none'}}>
                    <label
                      htmlFor="xAxis"
                      className="block text-base font-medium text-gray-700 pl-1 "
                    >
                      X-Axis
                    </label>

                    <select
                      id="xOption"
                      name="xOption"
                      className="mt-1 block w-full rounded-md border border-black border-gray-300 py-2 pl-1 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onChange={() => {
                        setXAxis(() => {
                          return document.getElementById('xOption').value;
                        });
                      }}
                    >
                      {xAxisOptions}
                    </select>
                    {/* X AXIS LABELS OPTION */}
                    <div>
                      <div className="flex justify-between">
                        <label
                          htmlFor="xAxisLabel"
                          className="block text-base font-medium text-gray-700"
                        >
                          Rename X-Axis
                        </label>
                        <span
                          className="text-sm text-gray-500"
                          id="email-optional"
                        >
                          Optional
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="xLabel"
                          onChange={() => {
                            setXAxisLabel(
                              document.getElementById('xLabel').value
                            );
                          }}
                          name="xLabel"
                          className="block w-full rounded-md border-gray-300 shadow-sm border border-black  px-1 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="X-Axis Label"
                          aria-describedby="email-optional"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Y AXIS DROP DOWN OPTIONS */}
                  <div id="yOptionsDiv" style={{display: 'none'}}>
                    <label
                      htmlFor="yAxis"
                      className="block text-base font-medium text-gray-700 px-1 "
                    >
                      Y-AXIS
                    </label>

                    <select
                      id="yOption"
                      name="yOption"
                      className="mt-1 block w-full rounded-md border border-black border-gray-300 py-2 pl-1 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      onChange={() => {
                        setYAxis(() => {
                          return document.getElementById('yOption').value;
                        });
                      }}
                    >
                      {yAxisOptions}
                    </select>
                    <div>
                      <div className="flex justify-between">
                        <label
                          htmlFor="yAxisLabel"
                          className="block text-base font-medium text-gray-700"
                        >
                          Rename Y-Axis
                        </label>
                        <span
                          className="text-sm text-gray-500"
                          id="email-optional"
                        >
                          Optional
                        </span>
                      </div>
                      <div className="mt-1">
                        <input
                          type="text"
                          id="yLabel"
                          onChange={() => {
                            setYAxisLabel(
                              document.getElementById('yLabel').value
                            );
                          }}
                          name="yLabel"
                          className="block w-full rounded-md border-gray-300 shadow-sm border border-black  px-1 py-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          placeholder="Y-Axis Label"
                          aria-describedby="email-optional"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="px-6 py-5 text-center text-sm font-medium"
            >
              <span className="text-gray-900">{stat.value}</span>{' '}
              <span className="text-gray-600">{stat.label}</span>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
}