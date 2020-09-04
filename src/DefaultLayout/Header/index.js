import React, { useState } from 'react'
import { Link } from "react-router-dom"
import ClassNames from "./index.module.scss";
import { UnorderedListOutlined } from "@ant-design/icons"

const Header = () => {
    const [HeaderClosed, ToggleHeader] = useState(true);
    const Routes = [
        { title: "About us", url: "/about-us" },
        { title: "Carrers", url: "/carrers" },
        { title: "Locations", url: "/locations" },
        { title: "Blog", url: "/blog" },
    ]

    const ToggleHeaderHandler = () => {
        ToggleHeader(!HeaderClosed);
    }

    return (
        <header className={`${ClassNames.HeaderContainer} ${HeaderClosed ? ClassNames.HeaderClosed : ClassNames.HeaderOpened}`}>
            <h1 className={ClassNames.PageTitle}>
                <Link to="/"> <span>buildit</span> <b>Wipro</b> digital </Link>
                <button className={ClassNames.ToggleHeaderButton} onClick={ToggleHeaderHandler}><UnorderedListOutlined /></button>
            </h1>
            <ul className={ClassNames.RoutesList}>
                {Routes.map((Route) => {
                    return <li key={Route.title}><Link to={Route.url} >{Route.title}</Link></li>
                })}
            </ul>
        </header>
    )
}

export default Header ;