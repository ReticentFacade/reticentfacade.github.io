import { useState } from "react";
import {
  aboutData,
  personalData,
  skillData,
  projectData,
} from "../utils/about";
import { CaretRight, CaretDown } from "@phosphor-icons/react";
import "../About.css";

const About = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleHidden = () => {
    setIsHidden(!isHidden);
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
      {/* <div className="cols-span-1 flex flex-col pl-10 lg:pl-12 py-4 lg:py-10 border-l border-white"> */}
      <div className="cols-span-1 flex flex-col pl-10 lg:pl-12 py-4 lg:py-10">
        <div className="flex items-center gap-x-2">
          {/* {isHidden ? (
            <CaretRight
              weight="fill"
              className="cursor-pointer text-[--bg-primary] hover:text-cyan-400"
              onClick={handleHidden}
            />
          ) : (
            <CaretDown
              weight="fill"
              className="cursor-pointer text-[--bg-primary] hover:text-cyan-400"
              onClick={handleHidden}
            />
          )} */}
          <CaretRight
            weight="fill"
            className="cursor-pointer text-[--bg-primary] hover:text-cyan-400"
            onClick={handleHidden} // add transformation.
          />

          <span className="text-[--ac-secondary]">*</span>
          <div className="">{`{${
            isHidden ? (
              "..."
            ) : (
              <div className="">
                <div className="">Hii</div>
              </div>
            )
          }}`}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
