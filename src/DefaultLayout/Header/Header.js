import React, { useState } from 'react'
import { Link } from "react-router-dom"
import ClassNames from "./Header.module.scss";
import { UnorderedListOutlined } from "@ant-design/icons"

function  Header  ()  {
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
                <Link to="/"> <span>buildit</span> <b>Wipro</b> digital </Link>
                <button className={ClassNames.ToggleHeaderButton} onClick={ToggleHeaderHandler}><UnorderedListOutlined /></button>
            </h1>
            <ul className={ClassNames.RoutesList}>
                {Routes.map((Route) => {
                    return <li key={Route.title}><Link to={Route.url} activeClassName={ClassNames.Active}>{Route.title}</Link></li>
                })}
                <li><a href = "https://medium.com/buildit" target = "_blank" rel="noopener noreferrer"> Blog</a></li>
            </ul>
        </header>
    )
}

export default Header ;