import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// const ProjectCard = ({
//   index,
//   name,
//   description,
//   tags,
//   image,
//   source_code_link,
//   live_link,
// }) => {
//   const onClick = () => {
//     window.open(live_link, "_blank");
//   };
//   return (
//     <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
//       {/* test */}
//       <Tilt
//         options={{ max: 45, scale: 1, speed: 450 }}
//         className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
//         // onClick={onClick}
//       >
//         <div className="relative w-full h-[230px]" onClick={onClick}>
//           <img
//             src={image}
//             alt={name}
//             className="w-full h-full object-cover rounded-2xl"
//           />
//           <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
//             >
//               <img
//                 src={github}
//                 alt="github"
//                 className="w-1/2 h-1/2 object-contain"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="mt-5">
//           <h3 className="text-white font-bold text-[24px]">{name}</h3>
//           <p className="text-secondary text-[14px] mt-2">{description}</p>
//         </div>

//         <div className="mt-4 flex flex-wrap gap-2 ">
//           {tags.map((tag) => (
//             <p key={tag.name} className={`text-[14px] ${tag.color}`}>
//               #{tag.name}
//             </p>
//           ))}
//         </div>
//       </Tilt>
//     </motion.div>
//   );
// };

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  live_link,
}) => {
  const onClick = () => {
    window.open(live_link, "_blank");
  };
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* test */}
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        // onClick={onClick}
      >
        <div className="relative w-full h-[230px]" onClick={onClick}>
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="text-secondary text-[14px] mt-2">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2 ">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    // <div>Works</div>
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className="w-full flex opacity-100">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          As someone who is passionate about creating visually stunning and
          functional websites, I've worked on a diverse range of projects over
          the years. In this section, I'm excited to share some of my favorite
          projects that highlight my skills in full-stack web development,
          UI/UX, and graphic design.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
