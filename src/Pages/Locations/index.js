import React from 'react'
import ClassNames from "./Locations.module.scss";
import { List, Title } from "../../UI/index";
import {cities} from "../../Data";

const Locations = () => {
    return (
        <section>
            <Title> Locations </Title>
            <List>
                {cities.map((city, index) => {
                    return (
                        <li key={index} className={ClassNames.ListItem}>
                            <h4>{city.cityName}</h4>
                            <img src={city.image} alt={city.cityName} />
                            <p>{city.address}</p>
                        </li>
                    )
                })}
            </List>
        </section>
    )
}

export default Locations
