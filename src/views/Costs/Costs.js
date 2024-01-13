import React from "react";
import { Container } from "react-bootstrap";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  defaults,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { LOCATIONS } from "AppConstants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const Costs = () => {
  defaults.font.family = "Helvetica Neue";

  const sortedLocations = LOCATIONS.filter(location => typeof location === 'object' && !location.shortTrip && location.housing !== null && location.spending !== null);
  sortedLocations.sort((a, b) => a.housing + a.spending - b.housing - b.spending);

  const labels = [];
  const housingData = [];
  const spendingData = [];
  const citiesSet = new Set();
  for (const { city, housing, spending } of sortedLocations) {
    if (!citiesSet.has(city)) {
      citiesSet.add(city);
      labels.push(city);
      housingData.push(housing);
      spendingData.push(spending);
    }
  }

  const data = {
    labels,
    datasets: [
      {
        label: "housing",
        data: housingData,
        backgroundColor: "#222222",
      },
      {
        label: "spending",
        data: spendingData,
        backgroundColor: "#444444",
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "index"
    },
    plugins: {
      legend: {
        position: 'bottom'
      }
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false
        }
      },
      y: {
        stacked: true,
      },
    },
  };

  return (
    <Container className="pageContainer">
      <h1>Costs</h1>
      <p>(monthly)</p>
      <Bar options={options} data={data} />
    </Container>
  )
};