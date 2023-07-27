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

interface GenericBarChartProps {
    dataSet: any;
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



export function SpeciesBarChart(props: GenericBarChartProps) {
    const {dataSet}= props;
    let delayed: boolean;
    const options = {
        responsive: true,
        animation: {
            onComplete: () => {
                delayed = true;
            },
            delay: (context: { type: string; mode: string; dataIndex: number; datasetIndex: number; }) => {
                let delay = 0;
                if (context.type === 'data' && context.mode === 'default' && !delayed) {
                    delay = context.dataIndex * 300 + context.datasetIndex * 100;
                }
                return delay;
            },
        },
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
                suggestedMax: dataSet.reduce((max: number, item: { average_height: string; }) => Math.max(max, parseFloat(item.average_height)), -Infinity) + 20,
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
    
    const labels = dataSet.map((item: { name: any; }) => item.name);
    const dataHeight = dataSet.map((item: { average_height: string; }) => parseInt(item.average_height));
    const dataLifespan = dataSet.map((item: { average_lifespan: string; }) => parseInt(item.average_lifespan));
    
    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Average Height',
                data: dataHeight,
                backgroundColor: 'rgba(255,99,132,0.5)',
                borderWidth: 2,
                borderRadius: 75,
                borderColor: 'rgb(255,99,132)',
            },
            {
                label: 'Average Lifespan',
                data: dataLifespan,
                backgroundColor: 'rgba(53,162,235,0.5)',
                borderWidth: 2,
                borderRadius: 50,
                borderColor: 'rgb(53,162,235)',
            },
        ],
    };
    return <Bar options={options} data={data} />;
}
