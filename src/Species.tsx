// Create a functional class called Species

import {useEffect, useState} from "react";
import SpeciesType from "./types/SpeciesType";
import {fetchAllSpeciesData} from "./API/getSpecies";
import {SpeciesBarChart} from "./SpeciesBarChart";
import './Species.css'
import SpeciesPieChart from "./SpeciesPieChart";
import DataSanitise from "./DataSanitise";
import GenericPieChart from "./GenericPieChart";
import {getClassificationOptions, getDesignationOptions} from "./utils/getOptions";

const Species = () => {
    const [speciesData, setSpeciesData] = useState<SpeciesType[]>([]);

    useEffect(() => {
        async function fetchData() {
            const consolidatedData = await fetchAllSpeciesData();
            setSpeciesData(consolidatedData);
        }
        // fetchData();
    }, []);

    return (
        <div className={"species-page"}>
            <h1>Species Page</h1>
            <div>
                <GenericPieChart dataSet={DataSanitise} selectionOptions={getDesignationOptions(DataSanitise)} path={['designation']}/>
            </div>
            <div className={'species-page-chart'}>
                <SpeciesBarChart />
            </div>
            <div className={'species-page-chart'}>
                <SpeciesPieChart speciesData={DataSanitise} />
            </div>

        </div>
    )
}

export default Species
