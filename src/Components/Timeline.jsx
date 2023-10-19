import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "../style/style.css"
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../style/timeline";
import { timeline } from "../Data/Timeline";
// import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ timeline }) => {
  return (
    <VerticalTimelineElement 
      contentStyle={{
        background: "linear-gradient(30deg,rgb(241, 186, 255),rgb(253,246,249))",
        color: "white",
        // border:"1px solid rgb(223, 138, 244)"
      }}
      date={timeline.date}
      dateClassName={ "text-[rgb(110,43,127)]" }
      contentArrowStyle={{ borderRight: "7px solid rgb(5,12,189)" }}
      iconStyle={{ background: timeline.icon, backgroundColor:"rgba(5,12,89)" }}
      icon={
        <div id="timeline" className='experience-01 flex justify-center items-center w-full h-full'>
          <img
            src={timeline.icon}
            alt={timeline.company_name}
            className='experience-02 w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className=' experience-03 text-black opacity-80 text-[20px] font-bold'>
        {timeline.title}
        </h3>
        <p
          className='text-[#353535] text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {timeline.company_name}
        </p>
      </div>
      <ul className='nolgtb mt-1 list-disc ml-5 space-y-2'>
        {timeline.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-[#555555] text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionSubText} experiencep-01 text-[rgba(5,12,89,0.8)] text-center`} id="timeline">
          WIE Opportunities
        </h2>
        <h3 className={`${styles.sectionHeadText} experiencep-02 text-center`}>
          Timeline
        </h3>
      </motion.div>

      <div className='mt-2 flex flex-col'>
    
        <VerticalTimeline lineColor={"rgba(5,12,89)"} >
          {timeline.map((timeline, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              timeline={timeline}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;