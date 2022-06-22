import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const GlobalStorage = ({ children }) => {
  const [luz1, setLuz1] = useState(false);
  const [luz2, setLuz2] = useState(false);
  const [luz3, setLuz3] = useState(false);
  const [luz4, setLuz4] = useState(false);
  const [luz5, setLuz5] = useState(false);
  const [luz6, setLuz6] = useState(false);
  const [luz7, setLuz7] = useState(false);
  const [luz8, setLuz8] = useState(false);
  const [luz9, setLuz9] = useState(false);
  const [textoPainel, setTextoPainel] = useState(false);
  return (
    <UserContext.Provider
      value={{
        luz1,
        luz2,
        luz3,
        luz4,
        luz5,
        luz6,
        luz7,
        luz8,
        luz9,
        textoPainel,

        setTextoPainel,
        setLuz1,
        setLuz2,
        setLuz3,
        setLuz4,
        setLuz5,
        setLuz6,
        setLuz7,
        setLuz8,
        setLuz9,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
