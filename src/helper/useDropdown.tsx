import { useState } from "react";

const useDropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return {
    dropdown,
    toggleDropdown,
  };
};

export default useDropdown;
