// import { SkillsInfo } from "../../constants";
// import Tilt from 'react-parallax-tilt'
// function Skills() {
//   return (
//     <section
//       id="skills"
//       className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient"
//     >
//       <div className="text-center mb-8">
//         <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
//         <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           A collection of my technical skills and expertise honed through
//           various project and experiences
//         </p>
//       </div>
//       <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
//         {SkillsInfo.map((category) => (
//           <div
//             key={category.title}
//             className="bg-gray-900 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] "
//           >
//             <h3 className="text-2xl sm:text-3xl font-semibold text-gray-400 mb-4 text-center">
//               {category.title}
//             </h3>
//             <Tilt
//               className="w-48 h-48 sm:w-99 sm:h-30  "
//               tiltMaxAngleX={20}
//               tiltMaxAngleY={20}
//               perspective={1000}
//               scale={1.05}
//               transitionSpeed={1000}
//               gyroscope={true}
//             >
//               <div className="grid grid-cols-2 sm:grid-cols-3 w-full">
//                 {category.skills.map((skill) => (
//                   <div className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2">
//                     <img
//                       src={skill.logo}
//                       alt={`${skill.name}logo`}
//                       className="w-6 h-6 sm:w-8 sm:h-8"
//                     ></img>
//                     <span className="text-xs sm:text-sm text-gray-300">
//                       {skill.name}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </Tilt>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// export default Skills;
// import { SkillsInfo } from "../../constants";
// import Tilt from "react-parallax-tilt";

// function Skills() {
//   return (
//     <section
//       id="skills"
//       className="py-24 px-[8vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient"
//     >
//       {/* Title */}
//       <div className="text-center mb-12">
//         <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
//         <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
//         <p className="text-gray-400 mt-4 text-lg font-semibold">
//           My technical skills and expertise gained through projects
//         </p>
//       </div>

//       {/* Skill Cards Container */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {SkillsInfo.map((category) => (
//           <Tilt
//             key={category.title}
//             tiltMaxAngleX={10}
//             tiltMaxAngleY={10}
//             scale={1.03}
//             transitionSpeed={1500}
//             gyroscope={true}
//             className="rounded-2xl"
//           >
//             <div className="bg-gray-900 rounded-2xl border border-gray-300 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] p-6 backdrop-blur-md h-full flex flex-col">
//               {/* Title */}
//               <h3 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-6 text-center">
//                 {category.title}
//               </h3>

//               {/* Skills Grid */}
//               <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-4 flex-1">
//                 {category.skills.map((skill, index) => (
//                   <div
//                     key={index}
//                     className="flex flex-col items-center justify-center bg-[#1b1b2e] border border-gray-700 rounded-xl p-3 hover:border-purple-500 transition"
//                   >
//                     <img
//                       src={skill.logo}
//                       alt={skill.name}
//                       className="w-8 h-8 sm:w-10 sm:h-10"
//                     />
//                     <span className="text-xs sm:text-sm text-gray-300 mt-2 text-center">
//                       {skill.name}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </Tilt>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Skills;
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-[8vw] md:px-[7vw] lg:px-[12vw] font-sans bg-skills-gradient"
    >
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my technical skills and expertise honed through
          various projects and experiences
        </p>
      </div>

      {/* Skill Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {SkillsInfo.map((category) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.02}
            transitionSpeed={1200}
            gyroscope={true}
            className="rounded-2xl"
          >
            {/* CARD */}
            <div
              className="
                bg-gray-900 rounded-2xl border border-gray-300 
                shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] 
                p-6 backdrop-blur-md
                h-[300px] sm:h-[300px] lg:h-[300px]   /* FIXED HEIGHT */
                flex flex-col justify-start items-center 
                overflow-hidden
              "
            >
              {/* Category Title */}
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-200 mb-4 text-center">
                {category.title}
              </h3>

              {/* Skills Grid */}
              <div
                className="
                  grid grid-cols-3 gap-3 
                  place-items-center
                  h-[200px] sm:h-[200px] lg:h-[200px]    /* FIXED GRID HEIGHT */
                  overflow-hidden
                "
              >
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="
                      flex flex-col items-center justify-center 
                      bg-[#1b1b2e] border border-gray-700 
                      rounded-xl px-3 py-2 hover:border-purple-500 
                      transition text-center
                      w-20 h-20 sm:w-20 sm:h-20 lg:w-20 lg:h-20   /* FIXED BOX SIZE */
                    "
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-8 h-8 sm:w-8 sm:h-8"
                    />
                    <span className="text-xs sm:text-sm mt-1 text-gray-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default Skills;




