import {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

interface ClassContextType {
  selectedClass: any;
  setSelectedClass: Dispatch<SetStateAction<any>>;
}

interface ClassProviderProps {
  children: ReactNode;
}

const ClassContext = createContext<ClassContextType | undefined>(undefined);

export const ClassProvider = ({ children }: ClassProviderProps) => {
  const [selectedClass, setSelectedClass] = useState(null);

  // const setClassDetails = (classDetails: any) => {
  //   setSelectedClass(classDetails);
  // };

  return (
    <ClassContext.Provider value={{ selectedClass, setSelectedClass }}>
      {children}
    </ClassContext.Provider>
  );
};

export const useClassContext = () => {
  const context = useContext(ClassContext);
  if (!context) {
    throw new Error(`useClassContext must be used within a ClassProvider`);
  }

  return context;
};
