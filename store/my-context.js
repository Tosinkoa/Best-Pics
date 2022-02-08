import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const MyContext = React.createContext({
  searchHandler: () => {},
  menuHandler: () => {},
  search: "",
  showMenu: true,
  searchSubmit: () => {},
  showSignin: true,
  showSignup: true,
  showLogout: false,
  logoutHandler: () => {},
  signHandler: () => {},
});

export const MyContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [showMenu, setShowMenu] = useState(true);
  const [showSignin, setShowSignin] = useState(true);
  const [showSignup, setShowSignup] = useState(true);
  const [showLogout, setShowLogout] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const localStorageLoad = localStorage.getItem("load");
    if (localStorageLoad !== "1") {
      router.push("/login");
      setShowSignin(true);
      setShowSignup(true);
      setShowLogout(false);
    } else {
      setShowSignin(false);
      setShowSignup(false);
      setShowLogout(true);
    }
  }, []);

  const searchHandler = (e) => setSearch(e.target.value);

  const searchSubmit = (e) => e.preventDefault();

  const menuHandler = () => setShowMenu(!showMenu);

  const logoutHandler = () => {
    localStorage.removeItem("load");
    router.push("/login");
    setShowSignin(true);
    setShowSignup(true);
    setShowLogout(false);
  };

  const signHandler = () => {
    localStorage.setItem("load", "1");
    setShowLogout(true);
    setShowSignin(false);
    setShowSignup(false);
  };

  return (
    <MyContext.Provider
      value={{
        searchHandler,
        menuHandler,
        search,
        showMenu,
        searchSubmit,
        showSignin,
        showSignup,
        showLogout,
        logoutHandler,
        signHandler,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
