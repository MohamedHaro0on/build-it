import React from 'react'
import ClassNames from "./Locations.module.scss";
import Location1 from "../../Images/staticmap (1).jpg"
import Location2 from "../../Images/staticmap (2).jpg"
import Location3 from "../../Images/staticmap (3).jpg"
import Location4 from "../../Images/staticmap (4).jpg"
import Location5 from "../../Images/staticmap (5).jpg"
import Location6 from "../../Images/staticmap (6).jpg"
import Location7 from "../../Images/staticmap.jpg"
import { List, Title } from "../../UI/index";

function Locations() {
    const Cities = [
        { cityName: "Bangalore", image: Location1, address: "72 Electronic City Hosur Road Bengaluru 560100 India" },
        { cityName: "Edinburgh", image: Location2, address: "72 Electronic City Hosur Road Bengaluru 560100 India" },
        { cityName: "Gdańsk", image: Location3, address: "72 Electronic City Hosur Road Bengaluru 560100 India" },
        { cityName: "London", image: Location4, address: "72 Electronic City Hosur Road Bengaluru 560100 India" },
        { cityName: "New York", image: Location5, address: "72 Electronic City Hosur Road Bengaluru 560100 India" },
        { cityName: "Plano", image: Location6, address: "72 Electronic City Hosur Road Bengaluru 560100 India" },
        { cityName: "Warsaw", image: Location7, address: "72 Electronic City Hosur Road Bengaluru 560100 India" },
    ]
    return (
        <section>
            <Title> Locations </Title>
            <List>
                {Cities.map((city, index) => {
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
