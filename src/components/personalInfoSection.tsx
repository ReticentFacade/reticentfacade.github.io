import { useState } from "react";
import useDropdown from "../helper/useDropdown";
import { personalData, projectData } from "../utils/about";
import { CaretRight } from "@phosphor-icons/react";

const PersonalInfoSection = () => {
  const [isRotated, setIsRotated] = useState(false);
  const personalInfoDropdown = useDropdown();

  const handleHidden = () => {
    // setIsRotated(!personalInfoDropdown.dropdown);
    console.log(
      "!personalInfoDropdown.dropdown",
      !personalInfoDropdown.dropdown
    );

    personalInfoDropdown.toggleDropdown();
    setIsRotated(!personalInfoDropdown.dropdown);
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
        <p className="text-[--ac-secondary]">*</p>
        <p className="">
          {`{`}
          {personalInfoDropdown.dropdown === false ? (
            <span className="animate-fadeIn_l2">...{`}`}</span>
          ) : null}
        </p>
      </p>

      {personalInfoDropdown.dropdown === true ? (
        <div
          // className={`transition-all duration-500 origin-top overflow-hidden transform ${
          // className={` ${
          //   personalInfoDropdown.dropdown
          //     ? "scale-y-100 h-auto"
          //     : "scale-y-0 h-0"
          // }`}
          className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${
            personalInfoDropdown.dropdown
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex items-center gap-x-2 text-[--bg-primary] animate_fadeIn_l3">
            <div className="">
              <p className="ml-12 animate-fadeIn_l5">
                <span className="text-[--blue]">Name</span>:{" "}
                <span className="text-[--blue]">{personalData[0].name}</span>;
              </p>
              <p className="ml-12 animate-fadeIn_l4">
                <span className="text-[--ac-secondary]">Email</span>
                <span className="text-[--bg-primary]">:</span>{" "}
                <span className="text-[--blue]">{personalData[0].email}</span>;
              </p>
              <p className="ml-4 animate-fadeIn_l3">{`}`}</p>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default PersonalInfoSection;
