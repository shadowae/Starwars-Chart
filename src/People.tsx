import {useEffect, useState} from "react";
import {fetchAllPeopleData} from "./API/getPeople";
import useStarwarsStore from "./Zustand/StarwarsStore";

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
                    <li key={person.id}>{person.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default People;
