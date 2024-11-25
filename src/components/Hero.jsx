import React from "react";
import Photo from "../assets/hero.jpg";

const Hero = () => {
  const social_media = [
    { id: 1, link: 'https://www.linkedin.com/in/prashant-nepal-719509243/', icon: "logo-linkedin" },
    { id: 2, link: 'https://twitter.com/_bowser_7', icon: "logo-twitter" },
    { id: 3, link: 'https://github.com/prashant074', icon: "logo-github" },
  ];
  return (
    <section
      id="home"
      className="min-h-screen flex py-10 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={Photo} alt="" className="md:w-10/12 h-full object-cover" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-cyan-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Prashant Nepal</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600">
          IT Recruiter || Full stack Developer || Project Manager
          </h4>
          <button className="btn-primary mt-8">Connect with Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map(({ id, icon, link }) => (
              <a
                target="_blank"
                href={link}
                key={id}
                className="text-green-600 hover:text-white cursor-pointer "
              >
                <ion-icon name={icon}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
