import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import SpeciesType from "../types/SpeciesType";
import DataSanitise from "../utils/DataSanitise";
import PeopleDemoData from "../mock/PeopleDemoData";
import {fetchAllPeopleData} from "../API/getPeople";
import PeopleType from "../types/PeopleType";

interface StarwarsState {
    species: SpeciesType[],
    people: PeopleType[]
}

const useStarwarsStore = create<StarwarsState>()(
    devtools(
        persist(
            (set) => ({
                species: DataSanitise,
                people: PeopleDemoData,
                fetchPeople: async () => {
                    const response = await fetchAllPeopleData();
                    set({ people: await response })
                },
            }),
            {
                name: 'starwars-storage',
            }
        )
    )
)

export default useStarwarsStore;
