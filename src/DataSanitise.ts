import DemoData from "./DemoData";
import {isNullOrUndef} from "chart.js/helpers";
import SpeciesType from "./types/SpeciesType";

const DataSanitise = DemoData.map((item) => {
    const updatedData = {...item};
    // swap out average_height parameter in item to 0 if NaN
    if (isNaN(parseInt(item.average_height))) {
        updatedData.average_height = '0';
    }
    // cleanup on language parameter when its Galactic Basic in various form
    if (item.language === 'Galatic Basic' || item.language === 'galactic basic' || item.language === 'Galactic basic') {
        updatedData.language = 'Galactic Basic';
    }
    
    if(isNullOrUndef(item.homeworld)) {
        updatedData.homeworld = '';
    }

    // cleanup classification when its mammals to mammal
    if(item.classification === 'mammals') {
        updatedData.classification = 'mammal';
    }
    

    return updatedData;
})

export default DataSanitise;
