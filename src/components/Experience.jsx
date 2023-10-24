import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"

import "react-vertical-timeline-component/style.min.css"

import { experiences } from "../constant"
import SectionWrapper from "../hoc/SectionWrapper"
import { textVariant } from "../utilities/motion"

const ExperienceCard = ({ experience }) => {
   return (
      <VerticalTimelineElement
         contentStyle={{ background: "#1d1836", color: "#fff" }}
         contentArrowStyle={{ borderRight: "7px solid  #232631" }}
         date={experience.date}
         dateClassName="text-[14px] font-semibold tracking-tight"
         iconStyle={{ background: experience.iconBg }}
         icon={
            <div className="flex items-center justify-center w-full h-full">
               <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
            </div>
         }>
         <div>
            <h3 className="text-white text-[24px] font-bold tracking-tight">{experience.title}</h3>
            <p className="text-secondary text-[16px] font-semibold tracking-tight m-0">{experience.company_name}</p>
         </div>

         <ul className="mt-5 ml-5 list-disc space-y-2">
            {experience.points.map((point, index) => (
               <li
                  key={`experience-point-${index}`}
                  className="text-white-100 text-[14px] pl-1 !leading-loose tracking-tight">
                  {point}
               </li>
            ))}
         </ul>
      </VerticalTimelineElement>
   )
}

const Experience = () => {
   return (
      <>
         <motion.div variants={textVariant()}>
            <p className="sectionSubText">What I have done so far</p>
            <h2 className="sectionHeadText">Work Experience.</h2>
         </motion.div>

         <div className="flex flex-col mt-20">
            <VerticalTimeline>
               {experiences.map((experience, index) => (
                  <ExperienceCard key={`experience-${index}`} experience={experience} />
               ))}
            </VerticalTimeline>
         </div>
      </>
   )
}

export default SectionWrapper(Experience, "work")
