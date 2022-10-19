import React, { useState, FC } from "react";

export const NavContext = React.createContext({
  activeNavLinkId: "",
  setActiveNavLinkId: (value: string) => {},
});

interface navInterface {
  children: any;
}

const NavProvider: FC<navInterface> = ({ children }) => {
  const [activeNavLinkId, setActiveNavLinkId] = useState("");

  const providerValue = {
    activeNavLinkId,
    setActiveNavLinkId,
  };

  return (
    <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
  );
};

export default NavProvider;
