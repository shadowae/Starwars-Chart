import {useEffect, useState} from "react";
import {fetchAllPeopleData} from "./API/getPeople";
import useStarwarsStore from "./Zustand/StarwarsStore";
import Accordion from "./components/Accordion";

const People = () => {
    const peopleData = useStarwarsStore(state => state.people);
    
    const [people, setPeople] = useState([]);
    
    useEffect(() => {
        fetchAllPeopleData().then((people) => setPeople(people));
    }, []);
    
    return (
        <div>
            <h1>Star Wars - People</h1>
            <ul>
                {peopleData.map((person: any) => (
                    <Accordion header={person.name} content={<div>Height: {person.height}</div>}/>
                ))}
            </ul>
        </div>
    );
}

export default People;
