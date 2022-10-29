import ScatterChart from './charts/ScatterChart';
import VerticalBarChart from './charts/VerticalBarChart';
import PieChart from './charts/PieChart';
import {useEffect, useState, useRef, useCallback, createRef} from 'react';
import FillerDiv from './FillerDiv';
import {QuestionMarkCircleIcon} from '@heroicons/react/20/solid';
import DoughnutChart from './charts/DoughnutChart';
import AreaChart from './charts/AreaChart';

export default function Graph({
  displayData,
  headers,
  pid,
  selectedCheckbox,
  xAxisLabel,
  yAxisLabel,
  setYAxisLabel,
  setXAxisLabel,
}) {
  // Sort Headers for dropdowns

  const sortedHeaders = [...headers].sort();

  // console.log(sortedHeaders);
  //set state for the current graph type
  const [graphType, setGraphType] = useState('');

  //for graphs with x axis and y axis, and labels
  const [xAxisOptions, setXAxisOptions] = useState([]);
  const [xAxis, setXAxis] = useState('');
  // const [xAxisLabel, setXAxisLabel] = useState('');

  const [yAxisOptions, setYAxisOptions] = useState([]);
  const [yAxis, setYAxis] = useState('');
  // const [yAxisLabel, setYAxisLabel] = useState('');

  //State for graph label
  const [graphLabel, setGraphLabel] = useState('');

  //Creating Reference to download chart image
  const [download, setDownload] = useState(null);

  const downloadImage = () => {
    const link = document.createElement('a');
    link.download = 'chart.png';
    link.href = download.current.toBase64Image();
    link.click();
  };

  //populate types of graph choices menu
  const types = [
    'Bar Chart',
    'Pie Chart',
    'Scatter Chart',
    'Doughnut Chart',
    'Area Chart',
  ];
  const typeHTML = [];
  typeHTML.push(
    <option value="select" key="100">
      Select Type of Chart
    </option>
  );
  for (let i = 0; i < types.length; i++) {
    typeHTML.push(
      <option value={types[i]} key={i}>
        {types[i]}
      </option>
    );
  }

  const chartType = {
    'Scatter Chart': {
      xAxis: 'X Axis (Number)',
      yAxis: 'Y Axis (Number)',
      display: (
        <ScatterChart
          graphLabel={graphLabel}
          xAxis={xAxis}
          yAxis={yAxis}
          xAxisLabel={xAxisLabel}
          yAxisLabel={yAxisLabel}
          displayData={displayData}
          selectedCheckbox={selectedCheckbox}
          download={download}
          setDownload={setDownload}
        />
      ),
    },

    'Bar Chart': {
      xAxis: 'X Axis (Number)',
      yAxis: 'Y Axis (Number)',
      display: (
        <VerticalBarChart
          graphLabel={graphLabel}
          xAxis={xAxis}
          yAxis={yAxis}
          xAxisLabel={xAxisLabel}
          yAxisLabel={yAxisLabel}
          displayData={displayData}
          selectedCheckbox={selectedCheckbox}
          download={download}
          setDownload={setDownload}
        />
      ),
    },
    'Pie Chart': {
      xAxis: 'Value (Number)',
      yAxis: 'Label',
      display: (
        <PieChart
          graphLabel={graphLabel}
          xAxis={xAxis}
          yAxis={yAxis}
          xAxisLabel={xAxisLabel}
          yAxisLabel={yAxisLabel}
          displayData={displayData}
          selectedCheckbox={selectedCheckbox}
          download={download}
          setDownload={setDownload}
        />
      ),
    },
    'Doughnut Chart': {
      xAxis: 'Value (Number)',
      yAxis: 'Label',
      display: (
        <DoughnutChart
          graphLabel={graphLabel}
          xAxis={xAxis}
          yAxis={yAxis}
          xAxisLabel={xAxisLabel}
          yAxisLabel={yAxisLabel}
          displayData={displayData}
          selectedCheckbox={selectedCheckbox}
          download={download}
          setDownload={setDownload}
        />
      ),
    },

    'Area Chart': {
      xAxis: 'Label',
      yAxis: 'Value (Number)',
      display: (
        <AreaChart
          graphLabel={graphLabel}
          xAxis={xAxis}
          yAxis={yAxis}
          xAxisLabel={xAxisLabel}
          yAxisLabel={yAxisLabel}
          displayData={displayData}
          selectedCheckbox={selectedCheckbox}
          download={download}
          setDownload={setDownload}
        />
      ),
    },
  };

  console.log(chartType);

  // populating graph's label option
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
    for (const xLabel of sortedHeaders) {
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

    for (const yLabel of sortedHeaders) {
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
    let graphMenu = document.getElementById('graphMenu');
    if (graphType === 'Bar Chart' || graphType === 'Scatter Chart') {
      const xDropdown = document.getElementById('xOptionsDiv');
      xDropdown.style.display = 'block';
    }
  }, [graphType]);

  const share = [{label: 'Download'}, {label: 'Share'}];

  return (
    <div>
      <div className="h-96 border border-black rounded-lg bg-white px-2 py-6 shadow sm:px-6">
        {graphType ? chartType[graphType].display : <FillerDiv />}
      </div>
      <div className="overflow-hidden rounded-lg bg-white shadow my-3">
        <h2 className="sr-only" id={pid}>
          {pid}
        </h2>
        <div className="bg-white p-6 ">
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
                  <div id="xOptionsDiv">
                    <label
                      htmlFor="xAxis"
                      className="block text-base font-medium text-gray-700 pl-1 "
                    >
                      {graphType === 'Bar Chart' ||
                      graphType === 'Scatter Chart'
                        ? 'X-Axis'
                        : 'Value'}
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
                  <div id="yOptionsDiv">
                    <label
                      htmlFor="yAxis"
                      className="block text-base font-medium text-gray-700 px-1 "
                    >
                      {graphType === 'Bar Chart' ||
                      graphType === 'Scatter Chart'
                        ? 'Y-Axis'
                        : 'Label'}
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
        <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-100 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
          <button
            key={share[0].label}
            onClick={downloadImage}
            className="px-6 py-5 text-center text-sm font-medium border border-black"
          >
            <span className="text-gray-600">{share[0].label}</span>
          </button>

          <button
            key={share[1].label}
            className="px-6 py-5 text-center text-sm font-medium border border-black"
          >
            <span className="text-gray-600">{share[1].label}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
