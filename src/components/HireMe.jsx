import React from "react";
import { Link } from "react-router-dom";
const HireMe = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-center">
        <div>
          <h2 className="text-2xl font-semibold">
            Work With Me
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
          Hello! I'm Prashant Nepal, a passionate MERN stack developer with a knack for creating dynamic and intuitive web applications.
           If you're looking to bring your digital ideas to life or need assistance with your next project, I'm here to help! Here's what I can offer:
          </p>
          <br/>
          <h2 className="text-2xl font-semibold">
          Let's Connect
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            I'm excited to learn more about your project and discuss how I can contribute. Feel free to reach out to me at prashantnepal709@gmail.com to start the conversation. You can also find me on [LinkedIn/GitHub/Other Platform] to explore my previous work and skills.
          <br/>
          Let's create something amazing together!</p>
          <a href="#contact" className="btn-primary mt-10 w-fit">Say Hello</a>
        </div>
      </div>
    </section>
  );
};

export default HireMe;
