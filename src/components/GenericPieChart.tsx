// Create a function class called GenericPieChart that takes in a dataSet, selectionOptions and renders the pie chart
import React, { Key, useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {getOptions} from "../utils/getOptions";
import './GenericPieChart.css'
import {Button, ButtonGroup, Card, CardContent, CardHeader, Container} from "@mui/material";

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
        <ButtonGroup size="small" variant="text" aria-label="outlined primary button group" sx={{display: 'flex', flexFlow: 'wrap', justifyContent: 'center'}}>
            {selectionOptions.map((option: Key | null | undefined) => (
                <Button
                    key={option}
                    onClick={() => setSelectedOption(option)}
                    sx={{
                        ":hover": {
                            bgcolor: "rgba(53,162,235,0.29)",
                        },
                        ...(selectedOption === option && {
                            bgcolor: "aquamarine",
                            ":hover": {
                                bgcolor: "aquamarine",
                            }
                        })
                    }}
                >
                    {option}
                </Button>
            ))}
        </ButtonGroup>
    );
    
    return (
        <Container maxWidth={"xs"}>
            <Card>
                <CardHeader
                    title={label}
                    subheader={selectionMethod === 'dropdown' ? renderDropdown() : renderButtons()}
                    titleTypographyProps={{noWrap: true, gutterBottom: true}}
                />
                <CardContent sx={{border:  '1px solid #ededed', borderRadius: '10px', margin: '0.5rem'}}>
                    <Pie
                        data={pieChartData}
                        options={pieOptions}
                        width={300}
                        height={300}
                    />
                </CardContent>
            </Card>
        </Container>
    );
}

export default GenericPieChart;
