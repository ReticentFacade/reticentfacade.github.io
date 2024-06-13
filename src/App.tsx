import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ClassProvider } from "./helper/ClassProvider";
import MaxWidthWrapper from "./helper/MaxWidthWrapper";
import Navbar from "./components/Navbar.tsx";
import Home from "./components/Home.tsx";
import About from "./components/About.tsx";
// import "./App.css";

const AppContent = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const appliedClasses = isHomePage
    ? "text-[--fg-primary] bg-[--bg-primary] border-[--fg-primary]"
    : "text-[--fg-secondary] bg-[--bg-secondary] border-[--fg-secondary]";

  return (
    <div
      className={`flex grainy-light flex-col min-h-[calc(100vh)] h-full ${appliedClasses}`}
    >
      <div className="flex justify-center">
        <Navbar />
      </div>
      <MaxWidthWrapper className="">
        <div className="flex-1 flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <ClassProvider>
        <AppContent />
      </ClassProvider>
    </BrowserRouter>
  );
}

export default App;
