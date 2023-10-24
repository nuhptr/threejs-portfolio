import { motion } from "framer-motion"

import SectionWrapper from "../hoc/SectionWrapper"
import { fadeIn, textVariant } from "../utilities/motion"

import { testimonials } from "../constant"

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => (
   <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
         <p className="text-white text-[18px] tracking-tight leading-relaxed">{testimonial}</p>
         <div className="flex items-center justify-between gap-1 mt-7">
            <div className="flex flex-col flex-1">
               <p className="text-white font-medium text-[16px]">
                  <span className="tracking-tight blue-text-gradient">@</span> {name}
               </p>
               <p className="mt-1 text-secondary text-[12px] tracking-tight">
                  {designation} of {company}
               </p>
            </div>
            <img src={image} alt={`feedback_by-${name}`} className="object-cover w-10 h-10 rounded-full" />
         </div>
      </div>
   </motion.div>
)

const Feedbacks = () => {
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

export default SectionWrapper(Feedbacks, "")
