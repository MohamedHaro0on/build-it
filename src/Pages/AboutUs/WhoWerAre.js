import React from 'react'
import SpaceMan from "../../Images/spaceman.svg";
import Bull from "../../Images/bull.svg";
import Cube from "../../Images/cube.svg";
import r2d2 from "../../Images/r2d2.svg";
import {List , SubTitle} from "../../UI/index";


const WhoWerAre = () => {

    const cards = [
        {
            title: "Innovative",
            dicsription: "Self-confessed geeks, always curious to explore technology and better ways of working that deliver maximum business impact.",
            Image: SpaceMan
        },
        {
            title: "Problem solvers",
            dicsription: "We enjoy finding ways to make complicated tasks easy. We tackle root-causes, not symptoms. We are user-centric but keep an eye on the big picture.",
            Image: Cube
        },
        {
            title: `No "bull"`,
            dicsription: "From open-minded to open source, as natural collaborators, we are not afraid to 'do the right thing' for our clients and their customers.",
            Image: Bull
        },
        {
            title: "Battle tested",
            dicsription: "Resilience is our most valuable quality, with teams that own, commit and have the ability to adapt to unique organisational aspirations and challenges.",
            Image: r2d2
        }
    ]
    
    return (
        <>
            <SubTitle>Who we are </SubTitle>
            <List>
                {cards.map((card, index) => {
                    return (
                        <li key = {index}>
                            <img src = {card.Image} alt = {card.title} />
                            <h4>{card.title}</h4>
                            <p>{card.dicsription}</p>
                        </li>
                    )
                })}
            </List>
        </>
    )
}

export default WhoWerAre