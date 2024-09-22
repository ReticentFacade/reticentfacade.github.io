import { useState } from "react";
import useDropdown from "../helper/useDropdown";
import { projectData } from "../utils/about";
import { CaretRight } from "@phosphor-icons/react";

const ProjectSection = () => {
  const [isRotated, setIsRotated] = useState(false);
  const projectDropdown = useDropdown();

  const handleHidden = () => {
    console.log("!projectDropdown.dropdown =", !projectDropdown.dropdown);

    setIsRotated(!projectDropdown.dropdown);
    projectDropdown.toggleDropdown();
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
        <p className="text-[--ac-primary]">Projects</p>
        <p className="">
          {`{`}
          {projectDropdown.dropdown === false ? (
            <span className="animate-fadeIn_l4">...{`}`}</span>
          ) : null}
        </p>
      </p>

      {projectDropdown.dropdown === true ? (
        <div
          //   className={`${
          //     projectDropdown.dropdown ? "scale-y-100 h-auto" : "scale-y-0 h-0"
          //   }`}
          className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
            projectDropdown.dropdown
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex items-center gap-x-2 text-[--bg-primary] animate-fadeIn-l3">
            <div className="leading-relaxed">
              {/* SecretKeyper */}
              <p className="ml-12 animate-fadeIn_l4">
                <span className="font-medium text-[--ac-secondary] underline cursor-pointer">
                  <a
                    href={`${projectData[0].link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projectData[0].name}
                  </a>
                </span>
                :{" "}
                <span className="text-[--blue]">
                  {projectData[0].shortDescription}
                </span>
                <span className="text-[--bg-primary]">;</span>
              </p>

              {/* Covershop */}
              <p className="ml-12 animate-fadeIn_l3">
                <span className="font-medium text-[--blue] underline cursor-pointer">
                  <a
                    href={`${projectData[1].link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projectData[1].name}
                  </a>
                </span>
                :{" "}
                <span className="text-[--blue]">
                  {projectData[1].shortDescription}
                </span>
                <span className="text-[--bg-primary]">;</span>
              </p>

              {/* Seed-to-sip */}
              <p className="ml-12 animate-fadeIn_l3">
                <span className="font-medium text-[--blue] underline cursor-pointer">
                  <a
                    href={`${projectData[2].link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {projectData[2].name}
                  </a>
                </span>
                :{" "}
                <span className="text-[--ac-secondary]">
                  {projectData[2].shortDescription}
                </span>
                <span className="text-[--bg-primary]">;</span>
              </p>
              <p className="ml-4 animate-fadeIn_l2">{`}`}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectSection;
