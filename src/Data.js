import SpaceMan from "./Images/spaceman.svg";
import Bull from "./Images/bull.svg";
import Cube from "./Images/cube.svg";
import r2d2 from "./Images/r2d2.svg";
import { Discription, BlockQuote } from "./UI/index";
import Location1 from "./Images/staticmap (1).jpg"
import Location2 from "./Images/staticmap (2).jpg"
import Location3 from "./Images/staticmap (3).jpg"
import Location4 from "./Images/staticmap (4).jpg"
import Location5 from "./Images/staticmap (5).jpg"
import Location6 from "./Images/staticmap (6).jpg"
import Location7 from "./Images/staticmap.jpg"

const AboutUsDiscriptions = [
    "We are pragmatic partners who seek out the challenging work in all engagements, whether at enterprise scale or startup speed.",
    "We are problem solvers who hone our craft through experimentation, continuous improvement and systems thinking.",
    "We approach each project and client as unique and we never start with a preconceived outcome or solution."
]

const OurPeople = [
    "At buildit we have an open structure, which means that employees work within wide boundaries.",
    `The environment and culture, which is shaped by buildit’s people, is driven by several key factors including transparency, curiosity, inclusivity,
     pragmatism and responsibility. Employees at buildit work in an environment where everyone is encouraged to continually develop through a cohesive unit of learning, 
     and perhaps more importantly, given the autonomy to do so.`,
    "We approach each project and client as unique and we never start with a preconceived outcome or solution."
];
const WhoWerAreCards = [
    {
        title: "Innovative",
        dicsription: "Self-confessed geeks, always curious to explore technology and better ways of working that deliver maximum business impact.",
        Image: SpaceMan
    },
    {
        title: "Problem solvers",
        dicsription: "We enjoy finding ways to make complicated tasks easy. We tackle root-causes, not symptoms. We are user-centric but keep an eye on the big picture.",
        Image: Cube
    },
    {
        title: `No "bull"`,
        dicsription: "From open-minded to open source, as natural collaborators, we are not afraid to 'do the right thing' for our clients and their customers.",
        Image: Bull
    },
    {
        title: "Battle tested",
        dicsription: "Resilience is our most valuable quality, with teams that own, commit and have the ability to adapt to unique organisational aspirations and challenges.",
        Image: r2d2
    }
]
const  CarrersDescription = [

    {
        Component: Discription,
        elementContent: `Doing things differently requires strength of character, empathy for those around you, good judgement, as well as being able to explain why to do something differently in the customer's language and at the right time.`
    },
    {
        Component: BlockQuote,
        elementContent: `This requires not just being able to do what good looks like but to stand in the middle of  something not good and influence the outcome incrementally day to day to make it better.`
    },
    {
        Component: Discription,
        elementContent: `Our people are at the core of this process. Trust in our people underpins   everything we do. Talented, passionate, hard-working, and some of the sharpest people you will 
         ever meet. The best thing about working here is the people you get to work with while solving hard problems.`
    },
    {
        Component: Discription,
        elementContent: "If that sounds interesting to you, why don't you look at one of the job descriptions below and join our team?"
    }
]
const HiringSteps = [
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
const JobApplicaions = [
    {
        city: "Bengaluru",
        appilcations: [
            {
                position: "Front End Engineer (with React)",
                href: "https://jobs.smartrecruiters.com/ni/WiproDigital/74814abb-034b-4efa-b41b-bf0c5dd84207?trid=2f4a2735-7172-45dd-aca7-63618dca8aff",
            }
        ]
    },
    {
        city: "Edinburgh",
        appilcations: [
            {
                position: "Java Full-Stack Engineer",
                href: "https://jobs.smartrecruiters.com/ni/WiproDigital/74814abb-034b-4efa-b41b-bf0c5dd84207?trid=2f4a2735-7172-45dd-aca7-63618dca8aff",
            },
            {
                position: "Full-Stack Engineer",
                href: "https://jobs.smartrecruiters.com/ni/WiproDigital/74814abb-034b-4efa-b41b-bf0c5dd84207?trid=2f4a2735-7172-45dd-aca7-63618dca8aff",
            },
            {
                position: "Lead Platform Engineer",
                href: "https://jobs.smartrecruiters.com/ni/WiproDigital/74814abb-034b-4efa-b41b-bf0c5dd84207?trid=2f4a2735-7172-45dd-aca7-63618dca8aff",
            },
            {
                position: "Solution Architect",
                href: "https://jobs.smartrecruiters.com/ni/WiproDigital/74814abb-034b-4efa-b41b-bf0c5dd84207?trid=2f4a2735-7172-45dd-aca7-63618dca8aff",
            },
        ]
    },
    {
        city: "London",
        appilcations: [
            {
                position: "Lead Platform Engineer - Google Cloud",
                href: "https://jobs.smartrecruiters.com/ni/WiproDigital/74814abb-034b-4efa-b41b-bf0c5dd84207?trid=2f4a2735-7172-45dd-aca7-63618dca8aff",
            }
        ]
    },
    {
        city: "New York",
        appilcations: [
            {
                position: "Principal Software Engineer",
                href: "https://jobs.smartrecruiters.com/ni/WiproDigital/74814abb-034b-4efa-b41b-bf0c5dd84207?trid=2f4a2735-7172-45dd-aca7-63618dca8aff",
            }
        ]
    },

]
const ourIndustreis = [
    "Utilities", "Charities", "Finance", "Healthcare", "Banking", "Technology", "Communications", "Retail"
]
const ourPratices = ["Agile coaching","Lean UX" , "Engineering transformation" , "Experiential learning" ,"Design systems","Systems thinking"];
const cities = [
    { cityName: "Bangalore", image: Location1, address: "72 Electronic City Hosur Road Bengaluru 560100 India" },
    { cityName: "Edinburgh", image: Location2, address: "72 Electronic City Hosur Road Bengaluru 560100 India" },
    { cityName: "Gdańsk", image: Location3, address: "72 Electronic City Hosur Road Bengaluru 560100 India" },
    { cityName: "London", image: Location4, address: "72 Electronic City Hosur Road Bengaluru 560100 India" },
    { cityName: "New York", image: Location5, address: "72 Electronic City Hosur Road Bengaluru 560100 India" },
    { cityName: "Plano", image: Location6, address: "72 Electronic City Hosur Road Bengaluru 560100 India" },
    { cityName: "Warsaw", image: Location7, address: "72 Electronic City Hosur Road Bengaluru 560100 India" },
]
export {AboutUsDiscriptions , OurPeople , WhoWerAreCards , CarrersDescription , HiringSteps , JobApplicaions , ourIndustreis , ourPratices , cities}