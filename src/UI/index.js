import React from 'react'
import ClassNames from "./UI.module.scss";
function BlockQuote(props) {
    return (
        <blockquote className={`${ClassNames.BlockQoute} ${props.className}`}>
            <span>{props.children}</span>
        </blockquote>
    )
}

function SubTitle(props) {
    return <h3 className={`${ClassNames.SubTitle} ${props.className}`}>{props.children}</h3>
}


function List(props) {
    return (
        <ul className={`${ClassNames.ListContainer} ${props.className}`}>
            {props.children}
        </ul>
    )
}

function Discription(props) {
    return (
        <p className={`${props.className} ${ClassNames.Discription}`}> {props.children} </p>
    )
}
function StyledAnchor(props) {
    return (
        <div className={ClassNames.StyledAnchor}>
            {props.children}
        </div>
    )
}

export { BlockQuote, SubTitle, List, Discription , StyledAnchor };