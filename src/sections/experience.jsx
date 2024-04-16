import { VerticalTimeline } from "react-vertical-timeline-component"
import { motion } from "framer-motion"

import "react-vertical-timeline-component/style.min.css"

import { experiences } from "../constant"
import { textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc/section-wrapper"

import { ExperienceCard } from "../components/ui/experience-card"

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
