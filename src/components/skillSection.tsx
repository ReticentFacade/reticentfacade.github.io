import { useState } from "react";
import useDropdown from "../helper/useDropdown";
import { skillData } from "../utils/about";
import { CaretRight } from "@phosphor-icons/react";

const SkillSection = () => {
  const [isRotated, setIsRotated] = useState(false);
  const skillDropdown = useDropdown();

  const handleHidden = () => {
    console.log("!skillDropdown.dropdown =", !skillDropdown.dropdown);

    setIsRotated(!skillDropdown.dropdown);
    skillDropdown.toggleDropdown();
  };

  return (
    <div className="font-medium tracking-normal">
      <p className="flex items-center gap-x-3">
        <CaretRight
          className={`transition-transform duration-500 cursor-pointer hover:text-cyan-400 ${
            isRotated ? "rotate-90" : ""
          }`}
          weight="fill"
          size={14}
          onClick={handleHidden}
        />
        <p className="text-[--ac-primary]">Skill</p>
        <p className="">
          {`{`}
          {skillDropdown.dropdown === false ? (
            <span className="animate-fadeIn_l4">...{`}`}</span>
          ) : null}
        </p>
      </p>

      {skillDropdown.dropdown === true ? (
        <div
          // className={` ${
          //   skillDropdown.dropdown ? "scale-y-100 h-auto" : "scale-y-0 h-0"
          // }`}
          className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
            skillDropdown.dropdown
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex items-center gap-x-2 text-[--bg-primary] animate-fadeIn-l3">
            <div className="">
              {/* Frontend: */}
              <p className="ml-12 animate-fadeIn_l5">
                <span className="text-[--blue]">Frontend</span>:{" "}
                <span className="text-[--ac-secondary]">
                  {skillData[0].frontend[0]}
                </span>
                {", "}
                <span className="text-[--blue]">
                  {skillData[0].frontend[1]}
                </span>
                <span className="text-[--bg-primary]"> and </span>
                <span className="text-[--blue]">
                  {skillData[0].frontend[2]}
                </span>
                <span className="text-[--bg-primary]">;</span>
              </p>

              {/* Backend: */}
              <p className="ml-12 animate-fadeIn_l4">
                <span className="text-[--blue]">Backend</span>:{" "}
                <span className="text-[--blue]">{skillData[0].backend[0]}</span>
                <span className="text-[--bg-primary]"> and </span>
                <span className="text-[--blue]">{skillData[0].backend[1]}</span>
                <span className="text-[--bg-primary]">;</span>
              </p>

              {/* Languages: */}
              <p className="ml-12 animate-fadeIn_l3">
                <span className="text-[--blue]">Languages</span>:{" "}
                <span className="text-[--ac-secondary]">
                  {skillData[0].languages[0]}
                </span>
                {", "}
                <span className="text-[--blue]">
                  {skillData[0].languages[1]}
                </span>
                {", "}
                <span className="text-[--ac-secondary]">
                  {skillData[0].languages[2]}
                </span>
                <span className="text-[--bg-primary]"> and </span>
                <span className="text-[--ac-secondary]">
                  {skillData[0].languages[3]}
                </span>
                <span className="text-[--bg-primary]">;</span>
              </p>

              {/* Tools: */}
              <p className="ml-12 animate-fadeIn_l2">
                <span className="text-[--blue]">Tools</span>:{" "}
                <span className="text-[--blue]">{skillData[0].tools[0]}</span>
                {", "}
                <span className="text-[--blue]">{skillData[0].tools[1]}</span>
                <span className="text-[--bg-primary]"> and </span>
                <span className="text-[--blue]">{skillData[0].tools[2]}</span>
                <span className="text-[--bg-primary]">;</span>
              </p>

              {/* Operating Systems: */}
              <p className="ml-12 animate-fadeIn_l1">
                <span className="text-[--blue]">Operating Systems</span>:{" "}
                <span className="text-[--blue]">
                  {skillData[0].operating_system[0]}
                </span>
                <span className="text-[--bg-primary]"> and </span>
                <span className="text-[--blue]">
                  {skillData[0].operating_system[1]}
                </span>
                <span className="text-[--bg-primary]">;</span>
              </p>
              <p className="ml-4 animate-fadeIn_l1">{`}`}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default SkillSection;
