import React from 'react'
import OurSpecialization from './OurSpecialization'
import ClassNames from "./HomePage.module.scss";
import OurPractices from './OurPractices';
import OurIndustries from './OurIndustries';


function HomePage (props){
    return (
        <section className={ClassNames.HomePageContainer}>
            <OurSpecialization />
            <OurPractices />
            <OurIndustries />
        </section>

    )
}
export default HomePage;