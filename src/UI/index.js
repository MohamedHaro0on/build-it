import React from 'react'
import ClassNames from "./index.module.scss";
const BlockQuote = (props)=>{
    return(
        <blockquote className = {`${ClassNames.BlockQoute} ${props.className}`}>
            <span>{props.children}</span>
        </blockquote>
    )
}

const SubTitle = (props)=>{
    return <h3 className = {`${ClassNames.SubTitle} ${props.className}`}>{props.children}</h3>
}


const List = (props)=>{
        return (
            <ul className = {`${ClassNames.ListContainer} ${props.className}`}>
                {props.children}
            </ul>
        )
}


export {BlockQuote , SubTitle , List}  ;