import { motion } from "framer-motion"

import { testimonials } from "../constant"
import { textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc/section-wrapper"

import { FeedbackCard } from "../components/ui/feedback-card"

const Feedback = () => {
   return (
      <div className="mt-12 bg-black-100 rounded-[20px]">
         <div className="padding bg-tertiary rounded-2xl min-h-[300px]">
            <motion.div variants={textVariant()}>
               <p className="sectionSubText">What other says</p>
               <h2 className="sectionHeadText">Testimonials.</h2>
            </motion.div>
         </div>

         <div className="flex flex-wrap -mt-20 gap-7 padding-x pb-14">
            {testimonials.map((testimonial, index) => (
               <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
            ))}
         </div>
      </div>
   )
}

export default SectionWrapper(Feedback, "")
