import { useState } from "react";
import {
  aboutData,
  personalData,
  skillData,
  projectData,
} from "../utils/about";
import { CaretRight } from "@phosphor-icons/react";
import "../About.css";
import useDropdown from "../helper/useDropdown";
import PersonalInfoSection from "./personalInfoSection";
import SkillSection from "./skillSection";
import ExperienceSection from "./experienceSection";
import ProjectSection from "./projectSection";
import EducationSection from "./educationSection";

const About = () => {
  return (
    <div className="about grid md:grid-cols-1 lg:grid-cols-2 text-[--fg-secondary] tracking-tight text-left bg-[--bg-secondary]">
      <div className="cols-span-1 flex flex-col pl-10 lg:pl-12 py-4 lg:py-10">
        <h1 className="text-4xl font-semibold">About ME</h1>
        <span className="px-4 py-10 text-md text-justify tracking-wide leading-8 whitespace-pre-line">
          {aboutData[0].description}
        </span>
      </div>

      {/* -------- */}
      <div className="cols-span-1 flex flex-col gap-y-2 pl-10 lg:pl-12 py-4 lg:py-10">
        <PersonalInfoSection />
        <SkillSection />
        <ExperienceSection />
        <ProjectSection />
        <EducationSection />
      </div>
    </div>
  );
};

export default About;
