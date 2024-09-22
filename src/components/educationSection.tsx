import { useState } from "react";
import useDropdown from "../helper/useDropdown";
import { educationData } from "../utils/about";
import { CaretRight } from "@phosphor-icons/react";

const EducationSection = () => {
  const [isRotated, setIsRotated] = useState(false);
  const educationDropdown = useDropdown();

  const handleHidden = () => {
    console.log("!educationDropdown.dropdown =", !educationDropdown.dropdown);

    setIsRotated(!educationDropdown.dropdown);
    educationDropdown.toggleDropdown();
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
        <p className="text-[--ac-primary]">Education</p>
        <p className="">
          {`{`}
          {educationDropdown.dropdown === false ? (
            <span className="animate-fadeIn_l4">...{`}`}</span>
          ) : null}
        </p>
      </p>

      {educationDropdown.dropdown === true ? (
        <div
          className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
            educationDropdown.dropdown
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex items-center gap-x-2 text-[--bg-primary] animate-fadeIn-l3">
            <div className="leading-relaxed">
              <p className="ml-12 animate-fadeIn_l4">
                <span className="text-[--blue]">Major</span>
                {": "}
                <span className="text-[--blue]">{educationData[0].major}</span>{";"}
              </p>
              <p className="ml-12 animate-fadeIn_l3">
                <span className="text-[--blue]">GPA</span>
                {": "}
                <span className="text-[--ac-secondary]">
                  {educationData[0].gpa}
                </span>
                {";"}
              </p>
              <p className="ml-4 animate-fadeIn_l2">{`}`}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default EducationSection;
