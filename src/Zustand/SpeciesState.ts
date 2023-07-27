import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import SpeciesType from "../types/SpeciesType";
import DataSanitise from "../DataSanitise";

interface SpeciesState {
    species: SpeciesType[]
}

const useSpeciesStore = create<SpeciesState>()(
    devtools(
        persist(
            (set) => ({
                species: DataSanitise,
            }),
            {
                name: 'species-storage',
            }
        )
    )
)

export default useSpeciesStore;
