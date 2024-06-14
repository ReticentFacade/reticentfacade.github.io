import { useLocation, Link } from "react-router-dom";
import { House, User, GithubLogo } from "@phosphor-icons/react";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const appliedClass = isHomePage
    ? "border-[--bg-secondary]"
    : "border-[--bg-primary]";

  return (
    <div
      className={`sticky z-50 py-4 inset-x-0 top-0 w-[85%] text-left border-b-2 ${appliedClass} rounded-sm`}
    >
      <div className="flex items-center justify-end">
        <Link to={`/`}>
          <div className="p-1 mx-2 bg-[--fg-primary] rounded-full">
            <House size={26} weight="bold" color="var(--bg-primary)" />
          </div>
        </Link>
        <Link to={`/about`}>
          <div className="p-1 mx-2 bg-[--fg-primary] rounded-full">
            <User size={26} weight="bold" color="var(--bg-primary)" />
          </div>
        </Link>

        {/* <div className="h-8 mx-1 bg-[--fg-primary] px-px rounded-lg" /> */}
        <div
          className={`h-8 mx-1 px-px rounded-lg ${
            isHomePage ? "bg-[--bg-secondary]" : "bg-[--bg-primary]"
          }`}
        />

        <Link to="https://github.com/ReticentFacade">
          <div className="p-1 mx-2 bg-[--fg-primary] rounded-full">
            <GithubLogo size={26} weight="bold" color="var(--bg-primary)" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
