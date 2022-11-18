import { createContext, useContext, useState } from "react";

const EtapeContext = createContext({ userData: "", setUserData: null });

export function UseContextProvider({ children }) {
  const [userData, setUserData] = useState("");

  return (
    <EtapeContext.Provider value={{ userData, setUserData }}>
      {children}
    </EtapeContext.Provider>
  );
}

export function useStepperContext() {
  const { userData, setUserData } = useContext(EtapeContext);

  return { userData, setUserData };
}
