import { useState } from "react";
import {
  aboutData,
  personalData,
  skillData,
  projectData,
} from "../utils/about";
import { CaretRight } from "@phosphor-icons/react";
import "../About.css";

const About = () => {
  const [isHidden, setIsHidden] = useState(true);
  const [isRotated, setIsRotated] = useState(false);

  const handleHidden = () => {
    setIsHidden(!isHidden);
    setIsRotated(!isRotated);
  };

  return (
    <div className="about grid md:grid-cols-1 lg:grid-cols-2 text-[--fg-secondary] tracking-tight text-left bg-[--bg-secondary]">
      <div className="cols-span-1 flex flex-col pl-10 lg:pl-12 py-4 lg:py-10">
        <h1 className="text-4xl font-semibold">About ME</h1>
        <span className="px-4 py-10 text-md text-justify tracking-wide leading-8 whitespace-pre-line">
          {aboutData[0].description}
        </span>
      </div>

      {/* -------- */}
      <div className="cols-span-1 flex flex-col pl-10 lg:pl-12 py-4 lg:py-10">
        {/* Personal Card: */}
        <div className="flex-grow border border-white">
          <div className="flex flex-grow items-start gap-x-2 border border-[--ac-secondary]">
            <div className="">
              {/* Top */}
              <div
                className="flex items-center gap-x-2 text-[--bg-primary] transition-transform duration-700 ease-in"
                // style={{
                //   animation: "fadeOut 5s ease-in-out",
                // }}
              >
                <CaretRight
                  className={`transition-transform duration-300 cursor-pointer hover:text-cyan-400 ${
                    isRotated ? "" : "rotate-90"
                  }`}
                  weight="fill"
                  size={14}
                  onClick={handleHidden}
                />
                <p className="flex gap-x-3">
                  <p className="text-[--ac-secondary]">*</p>
                  <p className="">{`{`}</p>
                </p>
                {isHidden ? <></> : <p className="">...{`}`}</p>}
              </div>

              {/* Bottom */}
              {isHidden ? (
                <div className="">
                  <p className="ml-12">
                    <span className="text-[--blue]">Name</span>:{" "}
                    <span className="text-[--blue]">
                      {personalData[0].name}
                    </span>
                    ;
                  </p>
                  <p className="ml-12">
                    <span className="text-[--ac-secondary]">Email</span>
                    <span className="text-[--bg-primary]">:</span>{" "}
                    <span className="text-[--blue]">
                      {personalData[0].email}
                    </span>
                    ;
                  </p>
                  <p className="ml-4">{`}`}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>

          {/* Skills div: */}
          <div className="flex flex-grow items-start gap-x-2 border border-[--ac-primary]">
            <div className="">
              {/* Top */}
              <div
                className="flex items-center gap-x-2 text-[--bg-primary] transition-transform duration-700 ease-in"
                // style={{
                //   animation: "fadeOut 5s ease-in-out",
                // }}
              >
                <CaretRight
                  className={`transition-transform duration-300 cursor-pointer hover:text-cyan-400 ${
                    isRotated ? "" : "rotate-90"
                  }`}
                  weight="fill"
                  size={14}
                  onClick={handleHidden}
                />
                <p className="flex gap-x-3">
                  <p className="text-[--ac-primary]">Skill</p>
                  <p className="">{`{`}</p>
                </p>
                {isHidden ? <></> : <p className="">...{`}`}</p>}
              </div>

              {/* Bottom */}
              {isHidden ? (
                <div className="">
                  <p className="ml-12">
                    <span className="text-[--blue]">Frontend</span>:{" "}
                    <span className="text-[--blue]">
                      <span className="text-[--ac-secondary]">
                        {skillData[0].frontend[0]}
                      </span>
                      <span className="text-[--bg-primary]">,</span>
                      {skillData[0].frontend.slice(1, 3).map((skill, idx) => (
                        <span key={idx} className="px-1">
                          {skill}
                          <span className="text-[--bg-primary]">,</span>
                        </span>
                      ))}
                      <span className="text-[--bg-primary]">
                        and
                        <span className="px-1">{skillData[0].frontend[3]}</span>
                      </span>
                    </span>
                    ;
                  </p>
                  <p className="ml-12">
                    <span className="text-[--blue]">Backend</span>:{" "}
                    <span className="text-[--blue]">
                      {skillData[0].backend.map((skill, idx) => (
                        <span key={idx} className="px-1">
                          {skill}
                        </span>
                      ))}
                    </span>
                    ;
                  </p>
                  <p className="ml-4">{`}`}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
