import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import DemoData from './DemoData';
import DataSanitise from "./DataSanitise";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
        title: {
            display: true,
            text: 'Starwars Species Chart',
        },
    },
};

const cleanData = DataSanitise;

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const labels2 = cleanData.map((item) => item.name);
// Convert item.average_height to a number and then map it out as data points for the bar chart.
const dataHeight = cleanData.map((item) => parseInt(item.average_height));
console.log(labels2)
console.log(dataHeight)
export const data = {
    labels: labels2,
    datasets: [
        {
            label: 'Average Height',
            data: dataHeight,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        // {
        //     label: 'Dataset 2',
        //     data: labels.map(() => 10),
        //     backgroundColor: 'rgba(53, 162, 235, 0.5)',
        // },
    ],
};

// import the DemoData object and to map out the names as labels for the bar chart and map out the average_height as data points for the bar chart.



export function ChartApp() {
    return <Bar options={options} data={data} />;
}
