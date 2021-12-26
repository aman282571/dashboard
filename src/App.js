import { Bar, Line } from "react-chartjs-2";
import react, { useState } from "react";
import "./App.css";
import { allData, com, options, comOptions } from "./Data";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function App() {
  const [chartType, changeType] = useState("Bar");
  const [typeOfData, changeTypeOfData] = useState("weekly");
  function getAllWeeks() {
    let Data = allData();
    let allWeeksData = [];
    const weeks = [
      "Week 1 Data",
      "Week 2 Data",
      "Week 3 Data",
      "Week 4 Data",
      "Week 5 Data",
      "Week 6 Data",
      "Week 7 Data",
      "Week 8 Data",
      "Week 9 Data",
      "Week 10 Data",
      "Week 11 Data",
      "Week 12 Data",
    ];
    let i = 0;
    Data.forEach((weekData, index) => {
      allWeeksData.push(
        <div className="indi-chart" key={index}>
          {chartType == "Bar" ? (
            <Bar
              data={weekData}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  title: {
                    display: true,
                    text: weeks[i],
                    font: {
                      size: "16px",
                    },
                  },
                  legend: {
                    display: true,
                    labels: {
                      font: {
                        size: "10px",
                      },
                    },
                  },
                },
              }}
            />
          ) : (
            <Line
              data={weekData}
              options={{
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                  title: {
                    display: true,
                    text: weeks[i],
                    font: {
                      size: "16px",
                    },
                  },
                  legend: {
                    display: true,
                    labels: {
                      font: {
                        size: "10px",
                      },
                    },
                  },
                },
              }}
            />
          )}
        </div>
      );
      i++;
    });
    return allWeeksData;
  }
  function changeChartType(e) {
    changeType((pre) => e.target.value);
  }
  function changeData(e) {
    changeTypeOfData((pre) => e.target.value);
  }
  function comData() {
    return (
      <div className="indi-chart">
        {chartType == "Bar" ? (
          <Bar data={com()} options={comOptions} />
        ) : (
          <Line data={com()} options={comOptions} />
        )}
      </div>
    );
  }

  return (
    <div className="app">
      <h1> Dashboard</h1>
      <div className="options">
        <select onChange={changeChartType}>
          <option value="Bar"> Bar Chart</option>
          <option value="Line">Line Chart</option>
        </select>
        <select onChange={changeData}>
          <option value="weekly">Weekly </option>
          <option value="com"> Commulative </option>
        </select>
      </div>
      <div className="charts">
        {typeOfData == "weekly" ? getAllWeeks() : comData()}
      </div>
    </div>
  );
}

export default App;
