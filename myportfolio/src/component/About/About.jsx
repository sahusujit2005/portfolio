import React from "react"
//import ReactTypingEffect from "react-typing-effect";
import { Typewriter } from "react-simple-typewriter";
import profileImage from '../../assets/profile.jpg'
import Tilt from 'react-parallax-tilt'

function About() {
  return (
    <section
      id="about"
      className="py-4 px-[7vm] md:px-[7w] lg:px-[20vw] font-sans mat-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight">
            {" "}
            Hi i am{" "}
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white md-4 leading-tight">
            Sujeet sahu
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8224ec] leading-tight">
            <span className="text-white">I am a </span>
            {/*<ReactTypingEffect text={['Fullstack Developer',
          'App Developer',
          'UI/UX Designer',
          'Coder'
        ]} speed={100}
        eraseSpeed={50}
        typingDelay={500}
        eraseDelay={2000}
        cursorRenderer={(cursor)=>(<span className='text-[#8245ec]'>{cursor}</span>)}
        >

        </ReactTypingEffect>*/}
            <Typewriter
              words={["Fullstack Developer", "web Developer", "Coder"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h3>
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
            I’m a passionate Full Stack Web Developer skilled in React.js,
            Tailwind CSS, Spring Boot, and MySQL. I enjoy coding and
            building dynamic, responsive web applications. With strong
            problem-solving and programming skills, I focus on writing clean,
            efficient code. As a fresher, I’m eager to enhance my backend and
            frontend expertise through real-world projects and continuous
            learning.
          </p>
          <a
            href="https://drive.google.com/drive/home?dmr=1&ec=wgc-drive-globalnav-goto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: "linear-gradient(90deg,#8245ec,#a855f7)",
              boxShadow: "0 0 2px #8245ec,0 0 2px #8245ec, 0 0 40px #8245ec",
            }}
          >
            DOWNLOAD RESUME
          </a>
        </div>

        {/*<div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt className='w-48 h-48 sm:w-90 sm:h-90 `md:h-[10rem]` border-4 border-purple-600 rounded-full' tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={1000}scale={1} transitionSpeed={1000} gyroscope={true}>
            <img
              src={profileImage}
              alt="sujeet sahu"
              className="w-80 h-80 md:w-88 md:h-88 rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div> */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-50 h-50 sm:w-78 sm:h-78 md:w-76 md:h-76 border-4 border-purple-600 rounded-full overflow-hidden shadow-lg"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="sujeet sahu"
              className="w-full h-full object-cover rounded-full drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
}
export default About;



