import {useEffect, useState} from "react";
import {fetchAllPeopleData} from "./API/getPeople";
import useStarwarsStore from "./Zustand/StarwarsStore";
import Accordion from "./components/Accordion";
import PersonalData from "./components/PersonalData";
import PeopleType from "./types/PeopleType";
import './People.css';

const People = () => {
    const peopleData = useStarwarsStore(state => state.people);
    
    // const [people, setPeople] = useState([]);
    //
    // useEffect(() => {
    //     fetchAllPeopleData().then((people) => setPeople(people));
    // }, []);
    
    return (
        <div className={'people-page'}>
            <h1>Star Wars - People</h1>
            {peopleData.map((person: PeopleType) => (
                <Accordion header={person.name} content={<PersonalData person={person}/>}/>
            ))}
        </div>
    );
}

export default People;
