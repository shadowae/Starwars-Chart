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

// Generic function to extract unique options from the speciesData array given path variable
const getGenericOptions = (rawData: SpeciesType[], path: string) => {
    const allOptions = rawData.flatMap((species: any) => species[path]);
    return Array.from(new Set(allOptions));
}

const getOptions = (rawData: SpeciesType[], path: string) => {
    switch (path) {
        case 'language':
            return getLanguageOptions(rawData);
        default:
            return getGenericOptions(rawData, path);
    }
}

export { getOptions };
