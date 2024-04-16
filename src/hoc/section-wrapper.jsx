import { motion } from "framer-motion"

import { staggerContainer } from "../utilities/motion"

export function SectionWrapper(Component, idName) {
   return function HOC() {
      return (
         <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className={`padding max-w-7xl mx-auto relative z-0`}>
            <span className="hash-span" id={idName}>
               &nbsp;
            </span>

            <Component />
         </motion.section>
      )
   }
}
