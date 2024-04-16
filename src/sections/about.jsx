import { motion } from "framer-motion"

import { services } from "../constant"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc/section-wrapper"

import { ServiceCard } from "../components/ui/service-card"

const About = () => {
   return (
      <>
         <motion.div variants={textVariant()}>
            <p className="sectionSubText">Introduction</p>
            <h2 className="sectionHeadText">Overview</h2>
         </motion.div>

         <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-loose">
            I'm a skilled software developer with experience in TypeScript and JavaScript, and
            expertise in frameworks like React, Node.js, and Three.js. I'm a quick learner and
            collaborate closely with clients to create efficient, scalable, and user-friendly
            solutions that solve real-world problems. Let's work together to bring your ideas to
            life!
         </motion.p>

         <div className="flex flex-wrap gap-12 mt-20">
            {services.map((service, index) => (
               <ServiceCard key={service.title} index={index} {...service} />
            ))}
         </div>
      </>
   )
}

export default SectionWrapper(About, "about")
