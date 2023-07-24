// Create a functional class called Species

import {useEffect, useState} from "react";
import SpeciesType from "./types/SpeciesType";
import {fetchAllSpeciesData} from "./API/getSpecies";
import {SpeciesBarChart} from "./SpeciesBarChart";
import './Species.css'

const Species = () => {
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

    // Return an object of div with sub divs for bar chart and 2 pie chart

    return (
        <div className={"species-page"}>
            <h1>Species Page</h1>
            <div className={'species-page-bar'}>
                <SpeciesBarChart />
            </div>
        </div>
    )
}

export default Species
