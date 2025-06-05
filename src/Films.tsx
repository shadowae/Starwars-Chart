import React from "react";
import useStarwarsStore from "./Zustand/StarwarsStore";
import {
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from "@mui/material";
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

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const Films = () => {
    const films = useStarwarsStore(state => state.films);

    const labels = films.map(f => f.title);
    const data = {
        labels,
        datasets: [
            {
                label: 'Characters',
                data: films.map(f => f.characters.length),
                backgroundColor: 'rgba(75,192,192,0.5)',
                borderColor: 'rgb(75,192,192)',
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
            title: {
                display: true,
                text: 'Characters per Film',
            },
        },
    };

    return (
        <Container sx={{backgroundColor: '#E5E5E5'}} maxWidth="xl">
            <Typography variant="h4" gutterBottom>
                Star Wars - Films
            </Typography>
            <Bar data={data} options={options} />
            <TableContainer component={Paper} sx={{ marginTop: 2 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Episode</TableCell>
                            <TableCell>Release Date</TableCell>
                            <TableCell>Director</TableCell>
                            <TableCell align="right">Characters</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {films.map((film) => (
                            <TableRow key={film.episode_id}>
                                <TableCell>{film.title}</TableCell>
                                <TableCell>{film.episode_id}</TableCell>
                                <TableCell>{film.release_date}</TableCell>
                                <TableCell>{film.director}</TableCell>
                                <TableCell align="right">{film.characters.length}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default Films;
