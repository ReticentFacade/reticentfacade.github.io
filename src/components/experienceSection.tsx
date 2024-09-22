import { useState } from "react";
import useDropdown from "../helper/useDropdown";
import { experienceData } from "../utils/about";
import { CaretRight } from "@phosphor-icons/react";

const ExperienceSection = () => {
  const [isRotated, setIsRotated] = useState(false);
  const experienceDropdown = useDropdown();

  const handleHidden = () => {
    console.log("!experienceDropdown.dropdown =", !experienceDropdown.dropdown);

    setIsRotated(!experienceDropdown.dropdown);
    experienceDropdown.toggleDropdown();
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
        <p className="text-[--ac-primary]">Experience</p>
        <p className="">
          {`{`}
          {experienceDropdown.dropdown === false ? (
            <span className="animate-fadeIn_l4">...{`}`}</span>
          ) : null}
        </p>
      </p>

      {experienceDropdown.dropdown === true ? (
        <div
          className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
            experienceDropdown.dropdown
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex items-center gap-x-2 text-[--bg-primary] animate-fadeIn-l3">
            <div className="leading-relaxed">
              {/* Nuclx: */}
              <p className="ml-12 animate-fadeIn_l4">
                <span className="text-[--blue]">
                  {experienceData[0].company}
                </span>
                {": "}
                <span className="text-[--ac-secondary]">
                  {experienceData[0].designation}
                </span>
                {", "}
                <span className="text-[--bg-primary]">
                  {`(`}
                  <span className="text-[--brown]">
                    '{experienceData[0].timeSpan}'
                  </span>
                  {`)`}{";"}
                </span>
              </p>

              {/* Freelance: */}
              <p className="ml-12 animate-fadeIn_l3">
                <span className="text-[--blue]">
                  {experienceData[1].company}
                </span>
                {": "}
                <span className="text-[--ac-secondary]">
                  {experienceData[1].designation}
                </span>
                {", "}
                <span className="text-[--bg-primary]">
                  {`(`}
                  <span className="text-[--brown]">
                    '{experienceData[1].timeSpan}'
                  </span>
                  {`)`}
                </span>{";"}
              </p>
              <p className="ml-4 animate-fadeIn_l2">{`}`}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ExperienceSection;
