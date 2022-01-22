import React, { useState } from "react";

const MyContext = React.createContext({
  searchHandler: () => {},
  menuHandler: () => {},
  search: "",
  showMenu: true,
  searchSubmit: () => {},
});

export const MyContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [showMenu, setShowMenu] = useState(true);

  const searchHandler = (e) => setSearch(e.target.value);

  const searchSubmit = (e) => e.preventDefault();

  const menuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <MyContext.Provider
      value={{
        searchHandler,
        menuHandler,
        search,
        showMenu,
        searchSubmit,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
