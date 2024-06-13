// import { useTransition } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
// import { bouncy } from "ldrs";

const Home = () => {
  // bouncy.register();
  // const [isPending, startTransition] = useTransition();

  // const handleAboutClick = () => {
  //   startTransition(() => {
  //     setTimeout(() => {
  //       window.location.href = "/about";
  //     }, 1000);
  //   });
  // };

  return (
    <div className="flex flex-1 flex-col items-center mt-20 lg:mt-52 h-full">
      <div className="flex flex-col items-center w-full">
        <h1 className="ml-10 text-lg lg:text-xl xl:text-2xl text-[--fg-light] font-bold">
          Hello, I'm{" "}
          <span className="text-8xl lg:text-8xl">
            R
            <span className="text-5xl lg:text-6xl">
              eticentFacade<span className="text-8xl">!</span>
            </span>
          </span>
        </h1>

        <div className="mt-2 text-[--fg-light] font-semibold font-mono tracking-wider">
          <h2 className="flex text-lg">
            reticentfacade@online:~$
            <span className="">
              <Typewriter
                options={{
                  strings: [
                    "Welcome to my personal website.",
                    "Click ABOUT to know more",
                  ],
                  autoStart: true,
                  delay: 100,
                  cursor: "_",
                  loop: true,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </h2>
        </div>
      </div>

      <div className="mt-12 text-[--fg-light] font-semibold font-mono tracking-wider">
        <Link to="/about">
          <button
            className={`flex text-lg px-4 py-2 text-[--bg-primary] bg-[--fg-light] rounded-md`}
            // onClick={handleAboutClick}
          >
            About
          </button>
        </Link>
      </div>

      {/* {isPending && <l-bouncy size="45" speed="1.75" color="white"></l-bouncy>} */}
    </div>
  );
};

export default Home;
