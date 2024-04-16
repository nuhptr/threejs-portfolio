import { motion } from "framer-motion"

import { fadeIn, textVariant } from "../utils/motion"
import { projects } from "../constant"
import { SectionWrapper } from "../hoc/section-wrapper"

import { ProjectCard } from "../components/ui/project-card"

const Works = () => {
   return (
      <>
         <motion.div variants={textVariant()}>
            <p className="sectionSubText">My Work</p>
            <h2 className="sectionHeadText">Projects.</h2>
         </motion.div>

         <div className="flex w-full">
            <motion.p
               variants={fadeIn("", "", 0.1, 1)}
               className="mt-3 text-secondary text-[17px] max-w-3xl leading-loose tracking-tight">
               Following projects showcases my skills and experience through real-world examples of
               my work. Each project is briefly described with links to code repositories and live
               demos in it. It reflects my ability to solve complex problems, work with different
               technologies, and manage projects effectively.
            </motion.p>
         </div>

         <div className="flex flex-wrap mt-20 gap-7">
            {projects.map((project, index) => (
               <ProjectCard key={`project-${index}`} index={index} {...project} />
            ))}
         </div>
      </>
   )
}

export default SectionWrapper(Works, "")
