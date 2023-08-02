import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import capitalise from "../utils/capitalise";
import {Card, CardContent, CardHeader, Container} from "@mui/material";
import GenericPieChart from "./GenericPieChart";

ChartJS.register(ArcElement, Tooltip, Legend);
interface SimplePieChartProps {
    dataSet: any;
    path: any;
    label?: string;
}

const getProcessedData = (dataSet: any, path: any): Map<string, number> => {
    const counter = new Map()
    for(let item of dataSet) {
        if(counter.has(item[path])) {
            counter.set(item[path], counter.get(item[path]) + 1)
        } else {
            counter.set(item[path], 1)
        }
    }
    console.log(counter)
    return counter;
}

const colourPalette = ["#ea5545", "#f46a9b", "#ef9b20", "#edbf33", "#ede15b", "#bdcf32", "#87bc45", "#27aeef", "#b33dc6"];
function SimplePieChart(props: SimplePieChartProps) {
    const {dataSet, path, label} = props;
    const processedData: Map<string, number> = getProcessedData(dataSet, path)
    // Handle a large variety of data values
    if (Array.from (processedData.values()).length > 9) {
        return (
            <GenericPieChart dataSet={dataSet} path={path} label={label} selectionMethod={"dropdown"}
            />
        )
    }
    const pieChartData = {
        labels: Array.from (processedData.keys()).map((item: string) => capitalise(item)),
        datasets: [
            {
                data: Array.from (processedData.values()),
                backgroundColor: colourPalette.slice(0,Array.from (processedData.values()).length+1),
                borderColor: ['rgb(0,0,0)'],
                borderWidth: 1,
            },
        ],
    };
    
    const pieOptions = {
        animation: {
            animateRotate: true,
        },
    };
    
    return (
        <Container maxWidth={"xs"}>
            <Card>
                <CardHeader
                    title={label}
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

export default SimplePieChart;
