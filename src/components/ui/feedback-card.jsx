import { motion } from "framer-motion"

import { fadeIn } from "../../utils/motion"

export function FeedbackCard({ index, testimonial, name, designation, company, image }) {
   return (
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
               <img
                  src={image}
                  alt={`feedback_by-${name}`}
                  className="object-cover w-10 h-10 rounded-full"
               />
            </div>
         </div>
      </motion.div>
   )
}
