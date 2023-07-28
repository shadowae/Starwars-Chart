import React from "react";
import './PersonalData.css'
import PeopleType from "../types/PeopleType";
import defaultImg from './img/defaultImage.png'
import maleIcon from './img/male.png'
import femaleIcon from './img/female.png'
import agenderIcon from './img/agender.png'
import capitalise from "../utils/capitalise";
import SWmovie1 from './img/SWEP1.jpg';
import SWmovie2 from './img/SWEP2.jpg';
import SWmovie3 from './img/SWEP3.jpg';
import SWmovie4 from './img/SWEP4.jpg';
import SWmovie5 from './img/SWEP5.jpg';
import SWmovie6 from './img/SWEP6.jpg';
import SWmovie7 from './img/SWEP7.jpg';
import SWmovie8 from './img/SWEP8.jpg';
import SWmovie9 from './img/SWEP9.jpg';

// Use the defined type for the data prop
interface PropsType {
    person: PeopleType;
}

const PersonalData: React.FC<PropsType> = ({ person }) => {
    console.log(person)
    const {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender,
    } = person;
    
    const getGenderIcon = (gender: string) => {
        if (gender === 'male') {
            return (
                <img
                    src={maleIcon}
                    alt="Male"
                    width={20}
                />
            )
        } else if (gender === 'female') {
            return (
                <img
                    src={femaleIcon}
                    alt="Female"
                    width={20}
                />
            )
        } else {
            return (
                <img
                    src={agenderIcon}
                    alt="Unknown"
                    width={20}
                />
            )
        }
    }
    
    
    
    return (
        <div className="identity-card">
            <div className="body">
                <div className="left-side">
                    <div className="avatar">
                        <img
                            src={defaultImg}
                            alt="Person"
                            className="person-image"
                            width={100}
                        />
                        <div className="name">
                            <p>{name} {getGenderIcon(gender)}</p>
                            
                            Image by <a href="https://www.freepik.com/free-photo/colorful-equal-rights-symbol-concept_6654425.htm#query=gender%20symbol&position=13&from_view=search&track=ais">Freepik</a>                        </div>
                    </div>
                    
                    <p className={'details'}>Details</p>
                    
                    <div className="info">
                        <div className="label">Height:</div>
                        <div className="value">{height} cm</div>
                    </div>
                    <div className="info">
                        <div className="label">Weight:</div>
                        <div className="value">{mass} kg</div>
                    </div>
                    <div className="info">
                        <div className="label">Hair Color:</div>
                        <div className="value">{capitalise(hair_color)}</div>
                    </div>
                    <div className="info">
                        <div className="label">Skin Color:</div>
                            <div className="value">{capitalise(skin_color)}</div>
                    </div>
                    <div className="info">
                        <div className="label">Birth Year:</div>
                        <div className="value">{birth_year}</div>
                    </div>
                    <div className="info">
                        <div className="label">Eye Color:</div>
                        <div className="value">{capitalise(eye_color)}</div>
                    </div>
                </div>
                
                {/* Vertical line in the middle */}
                <div className="vertical-line"></div>
                
                <div className="right-side">
                </div>
            </div>
        </div>
    );
};

export default PersonalData;
