import { VerticalTimelineElement } from "react-vertical-timeline-component"

// import "react-vertical-timeline-component/style.min.css"

export function ExperienceCard({ experience }) {
   return (
      <VerticalTimelineElement
         contentStyle={{ background: "#1d1836", color: "#fff" }}
         contentArrowStyle={{ borderRight: "7px solid  #232631" }}
         date={experience.date}
         dateClassName="text-[14px] font-semibold tracking-tight"
         iconStyle={{ background: experience.iconBg }}
         icon={
            <div className="flex items-center justify-center w-full h-full">
               <img
                  src={experience.icon}
                  alt={experience.company_name}
                  className="w-[60%] h-[60%] object-contain"
               />
            </div>
         }>
         <div>
            <h3 className="text-white text-[24px] font-bold tracking-tight">{experience.title}</h3>
            <p className="text-secondary text-[16px] font-semibold tracking-tight m-0">
               {experience.company_name}
            </p>
         </div>

         <ul className="mt-5 ml-5 space-y-2 list-disc">
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
