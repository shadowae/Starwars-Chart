// Create a functional class called Species
import {Container, Paper, Typography} from "@mui/material";
import {useEffect} from "react";
import {fetchAllSpeciesData} from "./API/getSpecies";
import {SpeciesBarChart} from "./SpeciesBarChart";
import './Species.css'
import GenericPieChart from "./components/GenericPieChart";
import useStarwarsStore from "./Zustand/StarwarsStore";
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
            <Typography variant={"h4"}>
                Star Wars - Species
            </Typography>
                <GenericPieChart label={'Species Language Breakdown'} dataSet={speciesData} path={['language']} selectionMethod={'dropdown'}/>
                <GenericPieChart label={'Species Classification Breakdown'} dataSet={speciesData} path={['classification']} selectionMethod={'buttons'}/>
                <GenericPieChart label={'Species Designation Breakdown'} dataSet={speciesData} path={['designation']} selectionMethod={'buttons'}/>
            <Container>
                <Paper sx={{width: '90%', border: '5px dashed aquamarine'}}>
                    <SpeciesBarChart dataSet={speciesData}/>
                </Paper>
            </Container>
        </Container>
    )
}

export default Species
