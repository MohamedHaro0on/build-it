import React from 'react'
import ClassNames from "./Careers.module.scss";
import { Title, Discription } from '../../UI';
import {HiringSteps} from "../../Data";

const HiringProcess = ()=> {
    return (
        <div id="HiringProccess">
            <Title> The Hirign Process. </Title>
            <Discription>We aim to have a simple hiring process. We want to make sure that we are right for you as much as the other way around. The typical hiring process is as follows:</Discription>
            <ol className={ClassNames.HiringProcessList}>
                {HiringSteps.map(({ title, discription }, index) => {
                    return (
                        <li key={index}>
                            <h3>{title}</h3>
                            <Discription>{discription}</Discription>
                        </li>
                    )
                })}
            </ol>
            <div className={ClassNames.ContactUs}>
                <Discription>
                    Have any questions? Email us at:
                    <a href="mailto:mohamedharoon286@gmail.com" target="_blank" rel="noopener noreferrer">mohamedharoon286@gmail.com</a>.
                </Discription>
            </div>
        </div>
    )
}

export default HiringProcess
