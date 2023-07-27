// Create a functional class called Species

import {useEffect} from "react";
import {fetchAllSpeciesData} from "./API/getSpecies";
import {SpeciesBarChart} from "./SpeciesBarChart";
import './Species.css'
import SpeciesPieChart from "./SpeciesPieChart";
import GenericPieChart from "./GenericPieChart";
import useSpeciesStore from "./Zustand/SpeciesState";
const Species = () => {
    const speciesData = useSpeciesStore(state => state.species);
    useEffect(() => {
        async function fetchData() {
            const consolidatedData = await fetchAllSpeciesData();
            // setSpeciesData(consolidatedData);
        }
        // fetchData();
    }, []);

    return (
        <div className={"species-page"}>
            <h1>Species Page</h1>
            <div>
                <GenericPieChart dataSet={speciesData} path={['language']} selectionMethod={'dropdown'}/>
                <GenericPieChart dataSet={speciesData} path={['classification']} selectionMethod={'buttons'}/>
                <GenericPieChart dataSet={speciesData} path={['designation']} selectionMethod={'buttons'}/>
            </div>
            <div className={'species-page-chart'}>
                <SpeciesBarChart dataSet={speciesData}/>
            </div>
            <div className={'species-page-chart'}>
                <SpeciesPieChart speciesData={speciesData} />
            </div>

        </div>
    )
}

export default Species
