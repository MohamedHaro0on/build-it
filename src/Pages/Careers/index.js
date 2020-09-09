import React from 'react'
import ClassNames from "./Careers.module.scss";
import CareersDiscription from './CareersDiscription';
import HiringProcess from './HiringProcess';
function Careers() {


    return (
        <section className={ClassNames.Container}>
            <CareersDiscription/>
            <HiringProcess/>
        </section>
    )
}

export default Careers;