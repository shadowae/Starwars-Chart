import React from "react";
import Stack from '@mui/material/Stack';
import './PersonalData.css'
import PeopleType from "../types/PeopleType";
import genderIcons from './img/gender';
import peopleImage from './img/people';
import fileImages from './img/films';
import capitalise from "../utils/capitalise";
import {Avatar, Box, Card, CardContent, CardHeader, Divider, Paper, Typography} from "@mui/material";

// Use the defined type for the data prop
interface PropsType {
    person: PeopleType;
}

const PersonalData: React.FC<PropsType> = ({ person }) => {
    const {defaultImage} = peopleImage;
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
        const {maleIcon, femaleIcon, agenderIcon} = genderIcons;
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
    
    const getMovies = (movies: string[]) => {
        const { SWmovie1, SWmovie2, SWmovie3, SWmovie4, SWmovie5, SWmovie6, SWmovie7, SWmovie8, SWmovie9 } = fileImages;
        const getMovieSrc = (movieUrl: string): string => {
            console.log(movieUrl.slice(-2,-1))
            switch (parseInt(movieUrl.slice(-2,-1))) {
                case 1:
                    return SWmovie1;
                case 2:
                    return SWmovie2;
                case 3:
                    return SWmovie3;
                case 4:
                    return SWmovie4;
                case 5:
                    return SWmovie5;
                case 6:
                    return SWmovie6;
                case 7:
                    return SWmovie7;
                case 8:
                    return SWmovie8;
                case 9:
                    return SWmovie9;
                default:
                    return '';
            }
        }
        
        return (
            <Stack direction="row" spacing={2} sx={{ minWidth: 0,overflowX: "scroll", borderColor: "black" }}>
                {movies.map((movie, index) => {
                    return (
                        <div className="movie" key={index}>
                            <img src={getMovieSrc(movie)} alt={'SW Movie 1'} className={'sw-movie-image'} width={50}/>
                            <div className="movie-name">
                                {movie}
                            </div>
                        </div>
                    )
                })}
            </Stack>
        )
    }
    
    return (
            <Paper elevation={24}>
                <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                >
                    <Box className={'left-side'}>
                        <Box sx={{ display: 'flex' }}>
                            <Avatar
                                src={defaultImage}
                                alt="Person"
                                sx={{
                                    width: 100, height: 100
                                }}
                            />
                            <Card
                                elevation={0}
                                sx={{
                                    paddingLeft: '15px',
                                    whiteSpace: 'nowrap'
                                }}
                            >
                                <h3 >{name} {getGenderIcon(gender)}</h3>
                                <Typography variant="caption" display="block" gutterBottom>
                                    <span>Image by <a href="https://www.freepik.com/free-photo/colorful-equal-rights-symbol-concept_6654425.htm#query=gender%20symbol&position=13&from_view=search&track=ais">Freepik</a></span>
                                </Typography>
                            </Card>
                        </Box>
                        <Box>
                            <p className={'section-header'}>Details</p>
                            <Stack>
                                <div className="info">
                                    <div className="label">Height:</div>
                                    <div className="value">{height} cm</div>
                                </div>
                                <div className="info">
                                    <div className="label">Weight:</div>
                                    <div className="value">{mass} kg</div>
                                </div>
                                <Box sx={{textTransform: 'capitalize'}} className="info">
                                    <div className="label">Hair Color:</div>
                                    <div className="value">{hair_color}</div>
                                </Box>
                                <Box sx={{textTransform: 'capitalize'}} className="info">
                                    <div className="label">Skin Color:</div>
                                    <div className="value">{skin_color}</div>
                                </Box>
                                <div className="info">
                                    <div className="label">Birth Year:</div>
                                    <div className="value">{birth_year}</div>
                                </div>
                                <Box sx={{textTransform: 'capitalize'}} className="info">
                                    <div className="label">Eye Color:</div>
                                    <div className="value">{eye_color}</div>
                                </Box>
                            </Stack>
                        </Box>
                    </Box>
                    <Box>
                        <p className={'section-header'}>Movies Featured In</p>
                        {getMovies(person.films)}
                    </Box>
                </Stack>
            </Paper>
    );
};

export default PersonalData;
