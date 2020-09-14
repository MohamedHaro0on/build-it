import React from 'react'
import ClassNames from "./UI.module.scss";
function BlockQuote(props) {
    return (
        <blockquote className={ClassNames.BlockQoute}>
            <span>{props.children}</span>
        </blockquote>
    )
}

function Title(props) {
    return <h2 className={ClassNames.Title}>{props.children}</h2>
}
function SubTitle(props) {
    return <h4 className={ClassNames.SubTitle}>{props.children}</h4>
}


function List(props) {
    return (
        <ul className={ClassNames.ListContainer}>
            {props.children}
        </ul>
    )
}

function Discription(props) {
    return (
        <p className={ClassNames.Discription}> {props.children} </p>
    )
}
function StyledAnchor(props) {
    return (
        <div className={ClassNames.StyledAnchor}>
            {props.children}
        </div>
    )
}

export { BlockQuote, SubTitle, List, Discription , StyledAnchor  , Title};