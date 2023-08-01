import Accordion from '@mui/material/Accordion';
import {AccordionDetails, AccordionSummary} from "@mui/material";
import useStarwarsStore from "./Zustand/StarwarsStore";
import PersonalData from "./components/PersonalData";
import PeopleType from "./types/PeopleType";
import './People.css';

const People = () => {
    const peopleData = useStarwarsStore(state => state.people);
    
    return (
        <div className={'people-page'}>
            <h1>Star Wars - People</h1>
            {peopleData.map((person: PeopleType) => (
                <Accordion>
                    <AccordionSummary>
                        {person.name}
                    </AccordionSummary>
                    <AccordionDetails>
                        <PersonalData person={person}/>
                    </AccordionDetails>
                </Accordion>
            ))}
        </div>
    );
}

export default People;
