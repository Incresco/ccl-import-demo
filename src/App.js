import "./App.css";
import react from "react";
import { BarChart } from "@ccl/chart-bar/lib/index";
import { LineChart } from "@ccl/chart-line/lib/index";

const TooltipComponent = ({ data }) => {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div
            style={{
              fontSize: "0.75rem",
              color: "#7171A6",
              textAlign: "center",
              lineHeight: 1.3,
              whiteSpace: "nowrap",
              fontWeight: 500,
              minWidth: 150,
            }}
          >
            {item.xValue}
            <span
              style={{
                color: "#6078FF",
                fontSize: "1.125rem",
                display: "block",
                marginLeft: 0,
                marginTop: "3px",
                fontWeight: 600,
              }}
            >
              ${item.yValue} Cr
            </span>
            <div
              style={{
                width: "calc(100% + 36px)",
                marginLeft: "-18px",
                marginTop: "6px",
              }}
            >
              <span
                style={{
                  color: "#E84C85",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                }}
              >
                3.5%
              </span>{" "}
              from 30 days
            </div>
          </div>
        );
      })}
    </>
  );
};
const barChartData = {
  type: "bar",
  data: {
    dataset: [
      {
        data: [
          { yAxes: 30, xAxes: "04/2019", fillColor: "#9B59B6" },
          { yAxes: 21, xAxes: "05/2019", fillColor: "#A9CCE3" },
          { yAxes: 45, xAxes: "06/2019", fillColor: "#73C6B6" },
          { yAxes: 37, xAxes: "07/2019", fillColor: "#82E0AA" },
          { yAxes: 48, xAxes: "08/2019", fillColor: "#F1C40F" },
          { yAxes: 76, xAxes: "09/2019", fillColor: "#F8C471" },
          { yAxes: 41, xAxes: "10/2019", fillColor: "#F8B271" },
          { yAxes: 56, xAxes: "11/2019", fillColor: "#98C471" },
          { yAxes: 32, xAxes: "12/2019", fillColor: "#78D371" },
        ],
        barPadding: ["0.1", "0.1", "0.1"], //Acceptable values: any numeric or decimal
        heightTopPadding: [10, 10, 10], //Acceptable values: any numeric or decimal
        heightBottomPadding: [10, 10, 10], //Acceptable values: any numeric or decimal
      },
    ],
  },
  options: {
    chartDimensions: {
      // Responsive: index corresponds to screen devices - small, medium, large
      marginTop: [20, 20, 20], // Acceptable types: any numeric or decimal
      marginBottom: [35, 35, 35], // Acceptable types: any numeric or decimal
      marginLeft: [50, 50, 50], // Acceptable types: any numeric or decimal
      marginRight: [20, 20, 20], // Acceptable types: any numeric or decimal
      showGridLines: [false, false, false], // Acceptable values: true, false
      gridLineHorizontalStrokeWidth: [1, 1, 3], // Acceptable types: any numeric or decimal
      gridLineVerticalStrokeWidth: [1, 1, 1], // Acceptable types: any numeric or decimal
      gridLineHorizontalStrokeColor: ["blue", "blue", "#F7F7FC"], // Acceptable types: HEX or RGB or plain color string
      gridLineVerticalStrokeColor: ["blue", "blue", "white"], // Acceptable types: HEX or RGB or plain color string
    },
    chartContainer: {
      borderStyle: ["groove", "groove", "groove"],
      borderColor: ["red", "green", "blue"],
      width: [1, 1, 2 / 3],
      height: [250, 250, 250],
    },
    scales: {
      yAxis: {
        // Responsive: index corresponds to screen devices - small, medium, large.
        displayAxis: [true, true, true], // Acceptable values: true, false
        strokeColor: ["blue", "blue", "white"], // Acceptable types: HEX or RGB or plain color string
        strokeWidth: [1, 1, 0], // Acceptable types: numeric or decimals
        ticksCount: [3, 3, 3], // Acceptable types: numeric
        ticksPosition: [-22, -22, -22], // Acceptable types: numeric or decimals
        ticksFontSize: [10, 10, 15], // Acceptable types: numeric, pixels, percentage, css fontSize: medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit
        ticksFontStyle: ["italic", "italic", "italic"], //Acceptable values: normal, italic, oblique, initial, inherit
        ticksFontWeight: [900, 900, 900], //Acceptable values: numeric: 100, 200 ... 900, strings: normal|bold|bolder|lighter|number|initial|inherit;
        label: ["yLabel", "yLabel", "yLabel"], // Acceptable types: string
        labelPosition: [-30, -30, -30], // Acceptable types: numeric or decimals
        labelFontSize: [10, 10, 15], // Acceptable types: numeric, pixels, percentage, css fontSize: medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit
        labelFontStyle: ["italic", "italic", "italic"], //Acceptable values: normal, italic, oblique, initial, inherit
        labelFontWeight: [900, 900, 900], //Acceptable values: numeric: 100, 200 ... 900, strings: normal|bold|bolder|lighter|number|initial|inherit;
      },
      xAxis: {
        // Responsive: index corresponds to screen devices - small, medium, large.
        displayAxis: [true, true, true], // Acceptable values: true, false
        strokeColor: ["blue", "blue", "blue"], // Acceptable types: HEX or RGB or plain color string
        strokeWidth: [1, 1, 0], // Acceptable types: numeric or decimals
        ticksCount: [3, 3, 9], // Acceptable types: numeric
        ticksPosition: [15, 15, 15], // Acceptable types: numeric or decimals
        ticksFontSize: [10, 10, 15], // Acceptable types: numeric, pixels, percentage, css fontSize: medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit
        ticksFontStyle: ["italic", "italic", "italic"], //Acceptable values: normal, italic, oblique, initial, inherit
        ticksFontWeight: [900, 900, 900], //Acceptable values: numeric: 100, 200 ... 900, strings: normal|bold|bolder|lighter|number|initial|inherit;
        label: ["xLabel", "xLabel", "xLabel"], // Acceptable types: string
        labelPosition: [30, 30, 30], // Acceptable types: numeric or decimals
        labelFontSize: [10, 10, 15], // Acceptable types: numeric, pixels, percentage, css fontSize: medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit
        labelFontStyle: ["italic", "italic", "italic"], //Acceptable values: normal, italic, oblique, initial, inherit
        labelFontWeight: [900, 900, 900], //Acceptable values: numeric: 100, 200 ... 900, strings: normal|bold|bolder|lighter|number|initial|inherit;
      },
    },
    tooltip: {
      showTooltip: [true, true, true], // Acceptable values: true or false
    },
  },
};

const lineData = {
  type: "line",
  data: {
    dataset: [
      {
        data: [
          { yAxes: 30, xAxes: "04/2019" },
          { yAxes: 21, xAxes: "05/2019" },
          { yAxes: 45, xAxes: "06/2019" },
          { yAxes: 37, xAxes: "07/2019" },
          { yAxes: 48, xAxes: "08/2019" },
          { yAxes: 76, xAxes: "09/2019" },
          { yAxes: 41, xAxes: "10/2019" },
          { yAxes: 56, xAxes: "11/2019" },
          { yAxes: 32, xAxes: "12/2019" },
        ],
        strokeWidth: 5, // Acceptable types: any numeric or decimal
        strokeLinecap: "round", // Acceptable values: round, butt, square
        strokeGradientColor: ["#6078FF"], // array of gradient colors
        strokeGradientTrend: "To-Right", // Acceptable values: To-Top, To-Bottom, To-Right, To-Left, To-TopRight, To-BottomRight, To-BottomLeft, To-TopLeft
        fillGradientColor: ["#6078FF"], // Acceptable types: array of gradient colors in HEX, RGB or plain color string
        fillGradientTrend: "To-Bottom", // Acceptable values: To-Top, To-Bottom, To-Right, To-Left, To-TopRight, To-BottomRight, To-BottomLeft, To-TopLeft
        fillOpacity: "0.2",
      },
    ],
  },
  options: {
    chartDimensions: {
      // Responsive: index corresponds to screen devices - small, medium, large
      marginTop: [20, 20, 20], // Acceptable types: any numeric or decimal
      marginBottom: [35, 35, 35], // Acceptable types: any numeric or decimal
      marginLeft: [50, 50, 50], // Acceptable types: any numeric or decimal
      marginRight: [20, 20, 20], // Acceptable types: any numeric or decimal
      showGridLines: [false, false, false], // Acceptable values: true, false
      gridLineHorizontalStrokeWidth: [1, 1, 3], // Acceptable types: any numeric or decimal
      gridLineVerticalStrokeWidth: [1, 1, 1], // Acceptable types: any numeric or decimal
      gridLineHorizontalStrokeColor: ["blue", "blue", "#F7F7FC"], // Acceptable types: HEX or RGB or plain color string
      gridLineVerticalStrokeColor: ["blue", "blue", "white"], // Acceptable types: HEX or RGB or plain color string
    },
    chartContainer: {
      borderStyle: ["groove", "groove", "groove"],
      borderColor: ["red", "green", "blue"],
      width: [1, 1, 2 / 3],
      height: [250, 250, 250],
    },
    scales: {
      yAxis: {
        // Responsive: index corresponds to screen devices - small, medium, large.
        displayAxis: [true, true, true], // Acceptable values: true, false
        strokeColor: ["blue", "blue", "white"], // Acceptable types: HEX or RGB or plain color string
        strokeWidth: [1, 1, 0], // Acceptable types: numeric or decimals
        ticksCount: [3, 3, 3], // Acceptable types: numeric
        ticksPosition: [-22, -22, -22], // Acceptable types: numeric or decimals
        ticksFontSize: [10, 10, 15], // Acceptable types: numeric, pixels, percentage, css fontSize: medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit
        ticksFontStyle: ["italic", "italic", "italic"], //Acceptable values: normal, italic, oblique, initial, inherit
        ticksFontWeight: [900, 900, 900], //Acceptable values: numeric: 100, 200 ... 900, strings: normal|bold|bolder|lighter|number|initial|inherit;
        label: ["yLabel", "yLabel", "yLabel"], // Acceptable types: string
        labelPosition: [-30, -30, -30], // Acceptable types: numeric or decimals
        labelFontSize: [10, 10, 15], // Acceptable types: numeric, pixels, percentage, css fontSize: medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit
        labelFontStyle: ["italic", "italic", "italic"], //Acceptable values: normal, italic, oblique, initial, inherit
        labelFontWeight: [900, 900, 900], //Acceptable values: numeric: 100, 200 ... 900, strings: normal|bold|bolder|lighter|number|initial|inherit;
      },
      xAxis: {
        // Responsive: index corresponds to screen devices - small, medium, large.
        displayAxis: [true, false, true], // Acceptable values: true, false
        strokeColor: ["blue", "blue", "blue"], // Acceptable types: HEX or RGB or plain color string
        strokeWidth: [1, 1, 0], // Acceptable types: numeric or decimals
        ticksCount: [3, 3, 3], // Acceptable types: numeric
        ticksPosition: [15, 15, 15], // Acceptable types: numeric or decimals
        ticksFontSize: [10, 10, 15], // Acceptable types: numeric, pixels, percentage, css fontSize: medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit
        ticksFontStyle: ["italic", "italic", "italic"], //Acceptable values: normal, italic, oblique, initial, inherit
        ticksFontWeight: [900, 900, 900], //Acceptable values: numeric: 100, 200 ... 900, strings: normal|bold|bolder|lighter|number|initial|inherit;
        label: ["xLabel", "xLabel", "xLabel"], // Acceptable types: string
        labelPosition: [30, 30, 30], // Acceptable types: numeric or decimals
        labelFontSize: [10, 10, 15], // Acceptable types: numeric, pixels, percentage, css fontSize: medium|xx-small|x-small|small|large|x-large|xx-large|smaller|larger|length|initial|inherit
        labelFontStyle: ["italic", "italic", "italic"], //Acceptable values: normal, italic, oblique, initial, inherit
        labelFontWeight: [900, 900, 900], //Acceptable values: numeric: 100, 200 ... 900, strings: normal|bold|bolder|lighter|number|initial|inherit;
      },
    },
    tooltip: {
      showTooltip: [true, true, true], // Acceptable values: true or false
    },
  },
};

function App(props) {
  return (
    <div className="App">
      <BarChart chartData={barChartData} />
      <LineChart
        chartData={lineData}
        renderTooltip={(data) => {
          return <TooltipComponent data={data} />;
        }}
      />
    </div>
  );
}

export default App;
