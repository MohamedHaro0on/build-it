import React from 'react'
import OurSpecialization from './OurSpecialization'
import ClassNames from "./index.module.scss";
import OurPractices from './OurPractices';
import OurIndustries from './OurIndustries';
const HomePage = (props) => {
    return (
        <section className={ClassNames.HomePageContainer}>
            <OurSpecialization />
            <OurPractices />
            <OurIndustries />
        </section>

    )
}
export default HomePage;