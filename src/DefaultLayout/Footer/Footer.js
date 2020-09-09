import React from 'react'
import ReactDom from "react-dom";
import ClassNames from "./Footer.module.scss";
import { HeartOutlined, TwitterOutlined, GithubOutlined, LinkedinOutlined } from "@ant-design/icons"

const FooterDomNode = document.getElementById("Footer");
function Footer  () {
    const socialMedia = [
        { icon: <TwitterOutlined />, url: "https://twitter.com/mohamed63935674" },
        { icon: <GithubOutlined />, url: "https://github.com/MohamedHaro0on" },
        { icon: <LinkedinOutlined />, url: "https://www.linkedin.com/in/mohamed-haroon-3b8956186/" },
    ]
    return ReactDom.createPortal((
        <footer className={ClassNames.FooterContainer}>
            <div>
                <p> Made With <HeartOutlined /></p>
                <a href="https://www.facebook.com/profile.php?id=100009603313166">Mohamed Ahmed Ali </a>
                <ul>
                    {
                        socialMedia.map((element, index) => (
                            <li key={index}>
                                <a href={element.url} target="_blank" rel="noopener noreferrer">{element.icon}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </footer>
    ), FooterDomNode)
}

export default Footer