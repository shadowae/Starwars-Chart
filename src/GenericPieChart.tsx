// Create a function class called GenericPieChart that takes in a dataSet, selectionOptions and renders the pie chart
import React, { Key, useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {getOptions} from "./utils/getOptions";
import './GenericPieChart.css'

ChartJS.register(ArcElement, Tooltip, Legend);

interface GenericPieChartProps {
    dataSet: any;
    path: any;
    selectionMethod: 'dropdown' | 'buttons';
    label?: string;
}

function GenericPieChart(props: GenericPieChartProps) {
    const {dataSet, path, selectionMethod, label} = props;
    const selectionOptions = getOptions(dataSet, path);
    const [selectedOption, setSelectedOption] = useState(selectionOptions[0]);
    const [selectedData, setSelectedData] = useState(dataSet);

    useEffect(() => {
        setSelectedData(dataSet[0]);
    }, [dataSet]);

    useEffect(() => {
        setSelectedData(dataSet.filter(
            (species: any) => species[path] === selectedOption
        ));
    }, [selectedOption]);

    // Generate data for the pie chart
    const pieChartData = {
        labels: [selectedOption, `Not ${selectedOption}`],
        datasets: [
            {
                data: [selectedData.length, dataSet.length - selectedData.length],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
                borderWidth: 1,
            },
        ],
    };

    const pieOptions = {
        animation: {
            animateRotate: true,
        },
    };
    
    const renderDropdown = () => (
        <div className="pie-chart-selection-options">
            <label htmlFor="option-select">Select an Option:</label>
            <select
                id="option-select"
                value={selectedOption}
                onChange={(e) => setSelectedOption(e.target.value)}
            >
                {selectionOptions.map((option: string | undefined) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )

    const renderButtons = () => (
        <div className="pie-chart-selection-options">
            {selectionOptions.map((option: Key | null | undefined) => (
                <button
                    key={option}
                    onClick={() => setSelectedOption(option)}
                    className={selectedOption === option ? "selected" : ""}
                >
                    {option}
                </button>
            ))}
        </div>
    );
    
    return (
        <div className="pie-chart-container">
            <div className="pie-chart-header">
                <h3>{label}</h3>
                {selectionMethod === 'dropdown' ? renderDropdown() : renderButtons()}
            </div>
            <div className="pie-chart-content">
                <Pie
                    data={pieChartData}
                    options={pieOptions}
                    width={300}
                    height={300}
                />
            </div>
        </div>
    );
}

export default GenericPieChart;
