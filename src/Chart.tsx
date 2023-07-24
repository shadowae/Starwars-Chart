import React, {useEffect, useState} from 'react';
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
import DataSanitise from "./DataSanitise";
import {fetchAllSpeciesData} from "./API/getSpecies";
import SpeciesType from "./types/SpeciesType";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const cleanData = DataSanitise;

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
    scale:{
        y: {
            suggestedMin: 0,
            suggestedMax: cleanData.reduce((max, item) => Math.max(max, parseFloat(item.average_height)), -Infinity) + 20,
            type: 'category',
            offset: true,
            grid: {
                offset: true
            },
            ticks: {
                stepSize: 10 // Set the interval of the x-axis to 10
            }
        }
    }
};


const labels = cleanData.map((item) => item.name);
// Convert item.average_height to a number and then map it out as data points for the bar chart.
const dataHeight = cleanData.map((item) => parseInt(item.average_height));
const dataLifespan = cleanData.map((item) => parseInt(item.average_lifespan));

export const data = {
    labels: labels,
    datasets: [
        {
            label: 'Average Height',
            data: dataHeight,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            label: 'Average Lifespan',
            data: dataLifespan,
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        },
    ],
};

// import the DemoData object and to map out the names as labels for the bar chart and map out the average_height as data points for the bar chart.



export function ChartApp() {
    const [speciesData, setSpeciesData] = useState<SpeciesType[]>([]);

    useEffect(() => {
        async function fetchData() {
            const consolidatedData = await fetchAllSpeciesData();
            setSpeciesData(consolidatedData);
        }

        // fetchData();
    }, []);

    // Once all data is fetched, you will have the accumulated speciesData array containing all results
    console.log(speciesData);
    return <Bar options={options} data={data} />;
}
