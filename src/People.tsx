import Accordion from '@mui/material/Accordion';
import {AccordionDetails, AccordionSummary, Container, Typography} from "@mui/material";
import useStarwarsStore from "./Zustand/StarwarsStore";
import PersonalData from "./components/PersonalData";
import PeopleType from "./types/PeopleType";
import './People.css';

const People = () => {
    const peopleData = useStarwarsStore(state => state.people);
    
    return (
        <Container sx={{backgroundColor: '#E5E5E5'}} maxWidth="xl">
            <Typography variant={"h3"}>
                Star Wars - People
            </Typography>
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
        </Container>
    );
}

export default People;
