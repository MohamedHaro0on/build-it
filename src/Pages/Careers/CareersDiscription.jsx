import React from 'react'
import { Discription, BlockQuote } from "../../UI/index";


function CareersDiscription() {

    const pageContent = [
  
        {
            component: Discription,
            elementContent: `Doing things differently requires strength of character, empathy for those around you, good judgement, as well as being able to explain why to do something differently in the customer's language and at the right time.`
        },
        {
            component: BlockQuote,
            elementContent: `This requires not just being able to do what good looks like but to stand in the middle of  something not good and influence the outcome incrementally day to day to make it better.`
        },
        {
            component: Discription,
            elementContent: `Our people are at the core of this process. Trust in our people underpins   everything we do. Talented, passionate, hard-working, and some of the sharpest people you will 
             ever meet. The best thing about working here is the people you get to work with while solving hard problems.`
        },
        {
            component: Discription,
            elementContent: "If that sounds interesting to you, why don't you look at one of the job descriptions below and join our team?"
        }
    ]

    return (
        <div>
            {pageContent.map((element , index) => {
                return (
                    <element.component key = {index}>{element.elementContent}</element.component>
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
