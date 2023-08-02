// Create a functional class called Species
import {Container, Paper, Typography} from "@mui/material";
import Stack from '@mui/material/Stack';
import {useEffect} from "react";
import {fetchAllSpeciesData} from "./API/getSpecies";
import {SpeciesBarChart} from "./SpeciesBarChart";
import './Species.css'
import GenericPieChart from "./components/GenericPieChart";
import useStarwarsStore from "./Zustand/StarwarsStore";
import SimplePieChart from "./components/SimplePieChart";
const Species = () => {
    const speciesData = useStarwarsStore(state => state.species);
    useEffect(() => {
        async function fetchData() {
            const consolidatedData = await fetchAllSpeciesData();
            // setSpeciesData(consolidatedData);
        }
        // fetchData();
    }, []);

    return (
        <Container sx={{backgroundColor: '#E5E5E5'}} maxWidth="xl">
            <Stack spacing={3}>
                <Typography variant={"h4"}>
                    Star Wars - Species
                </Typography>
                <Stack useFlexGap spacing={1} direction={"row"}>
                    <GenericPieChart label={'Species Language Breakdown'} dataSet={speciesData} path={['language']} selectionMethod={'dropdown'}/>
                    <GenericPieChart label={'Species Classification Breakdown'} dataSet={speciesData} path={['classification']} selectionMethod={'buttons'}/>
                    <GenericPieChart label={'Species Designation Breakdown'} dataSet={speciesData} path={['designation']} selectionMethod={'buttons'}/>
                </Stack>
                <Stack useFlexGap spacing={1} direction={"row"}>
                    <SimplePieChart label={'Species Language Breakdown'} dataSet={speciesData} path={['language']} />
                    <SimplePieChart label={'Species Classification Breakdown'} dataSet={speciesData} path={['classification']} />
                    <SimplePieChart label={'Species Designation Breakdown'} dataSet={speciesData} path={['designation']} />
                </Stack>
                <Container>
                    <Paper sx={{width: '90%', border: '5px dashed aquamarine', marginX: "auto"}}>
                        <SpeciesBarChart dataSet={speciesData}/>
                    </Paper>
                </Container>
            </Stack>
        </Container>
    )
}

export default Species
