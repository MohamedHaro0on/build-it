import React, { useState } from 'react'
import { NavLink } from "react-router-dom"
import ClassNames from "./Header.module.scss";
import { UnorderedListOutlined } from "@ant-design/icons"

function Header() {
    const [HeaderClosed, ToggleHeader] = useState(true);
    const Routes = [
        { title: "About us", url: "/about-us" },
        { title: "Careers", url: "/careers" },
        { title: "Locations", url: "/locations" },
    ]

    const ToggleHeaderHandler = () => {
        ToggleHeader(!HeaderClosed);
    }

    return (
        <header className={`${ClassNames.HeaderContainer} ${HeaderClosed ? ClassNames.HeaderClosed : ClassNames.HeaderOpened}`}>
            <h1 className={ClassNames.PageTitle}>
                <NavLink to="/"> <span>buildit</span> <b>Wipro</b> digital </NavLink>
                <button className={ClassNames.ToggleHeaderButton} onClick={ToggleHeaderHandler}><UnorderedListOutlined /></button>
            </h1>
            <ul className={ClassNames.RoutesList}>
                {Routes.map((Route) => {
                    return <li key={Route.title}><NavLink to={Route.url} activeClassName={ClassNames.Active} >{Route.title}</NavLink ></li>
                })}
                <li>
                    <a href="https://medium.com/buildit" target="_blank" rel="noopener noreferrer"> Blog</a>
                </li>
            </ul>
        </header>
    )
}

export default Header;