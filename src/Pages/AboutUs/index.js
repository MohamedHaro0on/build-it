import React from 'react'
import WhoWerAre from './WhoWerAre'
import ClassNames from "./index.module.scss";
import WhatWeDo from './WhatWeDo';
import HowWeDoIt from "./HowWeDoIt";
const AboutUsPage = () => {
    return (
        <div className={ClassNames.AboutUsContainer}>
            <h2>AboutUs</h2>
            <WhoWerAre />
            <WhatWeDo />
            <HowWeDoIt />
        </div>
    )
}

export default AboutUsPage