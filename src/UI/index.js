import React from 'react'
import ClassNames from "./UI.module.scss";
const BlockQuote = (props) => {
    return (
        <blockquote className={ClassNames.BlockQoute}>
            <span>{props.children}</span>
        </blockquote>
    )
}

const Title = (props) => {
    return <h2 className={ClassNames.Title}>{props.children}</h2>
}
const SubTitle = (props) => {
    return <h4 className={ClassNames.SubTitle}>{props.children}</h4>
}


const List = (props) => {
    return (
        <ul className={ClassNames.ListContainer}>
            {props.children}
        </ul>
    )
}

const Discription = (props) => {
    return (
        <p className={ClassNames.Discription}> {props.children} </p>
    )
}
const StyledAnchor = (props) => {
    return (
        <div className={ClassNames.StyledAnchor}>
            {props.children}
        </div>
    )
}

export { BlockQuote, SubTitle, List, Discription, StyledAnchor, Title };