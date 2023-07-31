import axios from 'axios';
import SpeciesType from '../types/SpeciesType';
export async function fetchAllFilmData(url: string = 'https://swapi.dev/api/films', accumulatedData: SpeciesType[] = []): Promise<any> {
    try {
        const response = await axios.get(url);
        const data = response.data;
        const newData = [...accumulatedData, ...data.results];

        if (data.next) {
            return fetchAllFilmData(data.next, newData);
        }

        return newData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
