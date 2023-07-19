import React, { Component } from "react";
import { Chart } from "react-chartjs-2";

const ChartApp = () => {
  const data = {
    labels: ["Human", "Wookiee", "Trandoshan", "Mon Calamari"],
    datasets: [
      {
        label: "Height (cm)",
        data: [172, 222, 190, 200],
        backgroundColor: ["#000"]
      }
    ]
  };

  return (
    <Chart
      width={400}
      height={400}
      data={data}
      type="bar"
      options={{
        title: {
          display: true,
          text: "Species Height"
        }
      }}
    />
  );
};

export default ChartApp;
