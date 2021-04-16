import React from 'react'
import {CarrersDescription} from "../../Data";
import { Discription } from '../../UI';


const CareersDiscription = () => {
    return (
        <div>
            {CarrersDescription.map(({ Component, Content }, index) => {
                return (
                    <Component key={index}>{Content}</Component>
                )
            })}
            <Discription>
                If you have any questions please reach out to us at:
                 <a href="mailto:talent-buildit@wipro.com">talent-buildit@wipro.com</a>
            </Discription>
        </div>
    )
}

export default CareersDiscription
