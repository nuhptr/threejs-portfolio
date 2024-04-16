import { motion } from "framer-motion"
import { Tilt } from "react-tilt"

import { fadeIn } from "../../utils/motion"
import { imgGithub } from "../../assets"

export function ProjectCard({ index, name, description, tags, image, source_code_link }) {
   return (
      <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
         <Tilt
            options={{ max: 45, scale: 1, speed: 450 }}
            className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
            <div className="relative w-full h-[230px]">
               <img
                  src={image}
                  alt="project_image"
                  className="object-cover w-full h-full rounded-2xl"
               />
               <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                     onClick={() => window.open(source_code_link, "_blank")}
                     className="flex items-center justify-center w-10 h-10 rounded-full cursor-pointer black-gradient">
                     <img
                        src={imgGithub}
                        alt="source code"
                        className="object-contain w-1/2 h-1/2"
                     />
                  </div>
               </div>
            </div>

            <div className="mt-5">
               <h3 className="text-white font-bold text-[24px] tracking-tight">{name}</h3>
               <p className="mt-2 text-secondary text-[14px] leading-loose tracking-tight">
                  {description}
               </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
               {tags.map((tag) => (
                  <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
                     #{tag.name}
                  </p>
               ))}
            </div>
         </Tilt>
      </motion.div>
   )
}