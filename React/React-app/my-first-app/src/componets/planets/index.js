import React, { Fragment, useState, useEffect } from 'react';
import Planet from '../planets/planet';
import Form from './form';

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/Planets.json')
    let data = await response.json()
    return data;
}

const Planets = () => {
    const [planets, setPlanets] = useState([])

    useEffect(() => {
        getPlanets().then(data => {
            setPlanets(data['planets'])
        })
    }, [])

    const addPlanet = (new_planet) => {
        setPlanets([...planets, new_planet])
    }

    return (
        <Fragment>
            <h3>Planet List</h3>
            <hr />
            <Form addPlanet={addPlanet}/>
            {planets.map((planet, index) =>
                <Planet
                    id={planet.id}
                    name={planet.name}
                    description={planet.description}
                    img_url={planet.img_url}
                    link={planet.link}
                    key={planet.link}
                />
            )}
        </Fragment>
    )
}

export default Planets;