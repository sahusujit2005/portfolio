
import React from "react";

import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Education from './component/Education/Education'
import Experience from './component/Experience/Experience'
import Footer from './component/Footer/Footer'
import Navbar from './component/Navbar/Navbar'
import Work from './component/Work/Work'
import BlurBlob from "./BlurBlob";
import Skills from "./component/Skills/Skills";
function App() {
  

  return (
    <div className="bg-[#09091a]">
      <BlurBlob
        position={{ top: "35%", left: "20%" }}
        size={{ width: "30%", height: "40%" }}
      ></BlurBlob>
      <div className="absolute insert-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px, transparent_1px)] bg-[size:10px_14px],bg-[mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      <div className="relative pt-20">
        <About />

        <Skills />
        <Work />

        <Experience />
        <Education />

        <Contact />
        <Navbar />
        <Footer />
      </div>
    </div>
  );
}

export default App
