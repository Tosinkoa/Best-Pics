import React, { useState } from 'react';

const MyContext = React.createContext({
  searchHandler: () => {},
  menuHandler: () => {},
  search: '',
  showMenu: false,
});

export const MyContextProvider = ({ children }) => {
  const [search, setSearch] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const menuHandler = () => {
    setShowMenu(true);
  };

  return (
    <MyContext.Provider
      value={{
        searchHandler,
        menuHandler,
        search,
        showMenu,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
