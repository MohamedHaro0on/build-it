import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import ClassNames from "./Header.module.scss";
import { UnorderedListOutlined } from "@ant-design/icons"
const Routes = [
    { title: "About us", url: "/about-us/" },
    { title: "Careers", url: "/careers/" },
    { title: "Locations", url: "/locations/" },
]



const Header = () => {
    const [isOpened, ToggleHeader] = useState(false);

    const ToggleHeaderHandler = () => {
        ToggleHeader(prevState => !prevState);
    }

    return (
        <header className={`${ClassNames.HeaderContainer} ${isOpened ? ClassNames.HeaderOpened: ClassNames.HeaderClosed }`}>
            <h1 className={ClassNames.PageTitle}>
                <NavLink to="/" aria-label="to the home page"> <span>buildit</span> <b>Wipro</b> digital </NavLink>
                <button className={ClassNames.ToggleHeaderButton} onClick={ToggleHeaderHandler} aria-label="toggle the Header"><UnorderedListOutlined /></button>
            </h1>
            <ul className={ClassNames.RoutesList}>
                {Routes.map(({ title, url }) => {
                    return <li key={title}><NavLink to={url} activeClassName={ClassNames.Active} aria-label={` to ${title} page`} >{title}</NavLink ></li>
                })}
                <li>
                    <a href="https://medium.com/buildit" target="_blank" rel="noopener noreferrer" aria-label="visit our blog"> Blog</a>
                </li>
            </ul>
        </header>
    )
}

export default Header;