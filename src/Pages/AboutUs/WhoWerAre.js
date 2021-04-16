import React from 'react'

import { List, SubTitle } from "../../UI/index";
import {WhoWerAreCards} from "../../Data";
const WhoWerAre = () => {
    return (
        <>
            <SubTitle>Who we are </SubTitle>
            <List>
                {WhoWerAreCards.map((card, index) => {
                    return (
                        <li key={index}>
                            <img src={card.Image} alt={card.title} />
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