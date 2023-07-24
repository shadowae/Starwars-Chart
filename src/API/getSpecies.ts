import axios from 'axios';
import SpeciesType from '../types/SpeciesType';

// Create a function to call an api repeatedly to get all data before returning them

const getSpecies = () => {
    // Fetch should be done each time the api returns a next page link
    // If the next page link is not present, the function should return the data

    return fetch("https://swapi.dev/api/species")
        .then((response) => response.json())
        .then((data) => data.results);
}


export async function fetchAllSpeciesData2() {
    try {
        const apiUrl = 'https://swapi.dev/api/species';
        let speciesData:SpeciesType[] = [];

        const fetchData = async (url: string) => {
            const response = await axios.get(url);
            const data = response.data;
            speciesData = [...speciesData, ...data.results];

            if (data.next) {
                await fetchData(data.next);
            }
        };

        await fetchData(apiUrl);
        return speciesData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}


export async function fetchAllSpeciesData(url: string = 'https://swapi.dev/api/species', accumulatedData: SpeciesType[] = []): Promise<any> {
    try {
        const response = await axios.get(url);
        const data = response.data;
        const newData = [...accumulatedData, ...data.results];

        if (data.next) {
            return fetchAllSpeciesData(data.next, newData);
        }

        return newData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
