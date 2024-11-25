import React from "react";
import aboutImg from "../assets/about.jpg";
const About = () => {

  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 my-3 text-lg">My introduction</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-11/12 mx-auto">
             I am an accomplished IT professional with expertise as an IT Recruiter, Full Stack Developer, and Project Manager. My diverse skill set spans talent acquisition, software development, and project leadership, enabling me to deliver innovative solutions and drive successful outcomes. As an IT Recruiter, I specialize in sourcing and hiring top-tier tech talent to meet organizational goals. My proficiency as a Full Stack Developer allows me to create robust, scalable applications, while my project management experience ensures seamless execution of projects, from planning to delivery. Passionate about technology and collaboration, I excel at bridging the gap between technical and business needs to achieve strategic objectives.
              </p>
              <br />
              <br />
              <a href="https://github.com/prashant074/resume/blob/main/Prashant-CV.pdf">
                <button className="btn-primary">Download CV</button>
              </a>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
