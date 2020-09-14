import React from 'react'
import ClassNames from "./Careers.module.scss";
import { Title, Discription } from '../../UI';
function HiringProcess() {
    const hiringSteps = [
        {
            title: "Let's chat",
            discription: `One of the buildit talent team will call you for a quick chat to find out a little bit about you. 
            For some roles we would ask you to complete an exercise after but we will let you know at this stage for sure!`
        },
        {
            title: "Initial interview",
            discription: `A chat on the phone or a video call with one of the buildit studio team, where we talk a bit about us 
            and how your experiences can help us. For some roles we would invite you to the Studio to meet face to face, we would also welcome you at the studio if this would be your preference.  `
        },
        {
            title: "Exercise - this stage is for Technical Roles",
            discription: `Here we would like to see a little bit of your tech and coding skills. We will send you the details for
             the exercise, so that you can show us some awesome code. Your solution will be used in the next stage to build upon during a pairing session with a couple of our engineers. `
        },
        {
            title: "Meet the team",
            discription: `This involves a visit to one of our studios, where you get to meet a few of the team if haven't done so
             in the process. We'll get to talk in more detail about what we do, your experiences and ambitions. If you are an Engineer we will 
             also spend a bit of time talking about your tech submission and we will pair program building a few more features. `
        },
        {
            title: "Welcome to buildit!",
            discription: `That's pretty much it. There will be one more phone call to confirm transfer details with you, and possible start dates. `
        }
    ]
    return (
        <div id = "HiringProccess">
            <Title> The Hirign Process. </Title>
            <Discription>We aim to have a simple hiring process. We want to make sure that we are right for you as much as the other way around. The typical hiring process is as follows:</Discription>
            <ol className={ClassNames.HiringProcessList}>
                {hiringSteps.map((step, index) => {
                    return (
                        <li key={index}>
                            <h3>{step.title}</h3>
                            <Discription>{step.discription}</Discription>
                        </li>
                    )
                })}
            </ol>
            <div className={ClassNames.ContactUs}>
                <Discription>
                    Have any questions? Email us at:
                    <a href="mailto:talent-buildit@wipro.com" target="_blank" rel="noopener noreferrer">talent-buildit@wipro.com</a>.
                </Discription>
            </div>
        </div>
    )
}

export default HiringProcess
