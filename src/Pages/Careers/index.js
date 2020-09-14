import React from 'react'
import ClassNames from "./Careers.module.scss";
import CareersDiscription from './CareersDiscription';
import OpenApplications from './OpenApplications';
import HiringProcess from './HiringProcess';
import { Title } from '../../UI';
function Careers() {


    return (
        <section className={ClassNames.Container}>
            <Title>Careers</Title>
            <CareersDiscription/>
            <OpenApplications/>
            <HiringProcess/>
        </section>
    )
}

export default Careers;