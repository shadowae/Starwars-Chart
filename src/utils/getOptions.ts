// Extract unique language options from the speciesData array
import SpeciesType from "../types/SpeciesType";

const getLanguageOptions = (rawData: SpeciesType[]) => {
    const allLanguages = rawData.flatMap((species) => species.language === 'n/a' ? [] : species.language);
    return Array.from(new Set(allLanguages));
}

// Extract unique classification options from the speciesData array
const getClassificationOptions = (rawData: SpeciesType[]) => {
    const allClassifications = rawData.flatMap((species: SpeciesType) => species.classification);
    return Array.from(new Set(allClassifications));
}

// Extract unique designation options from the speciesData array
const getDesignationOptions = (rawData: SpeciesType[]) => {
    const allDesignations = rawData.flatMap((species: SpeciesType) => species.designation);
    return Array.from(new Set(allDesignations));
}

export { getLanguageOptions, getClassificationOptions, getDesignationOptions };
