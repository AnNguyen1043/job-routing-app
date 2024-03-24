import React, { createContext, useState } from "react"
import { useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export const AppContext = createContext({
  isModalOpen: false,
  isLoggedin: false,
  openLoginModal: () => { },
  closeModal: () => { }
})


const AppProvider = ({ children }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedin, setIsLoggedin] = useState(false);
  const redirectTo = useSearchParams().get("redirectTo");

  console.log(redirectTo);


  const handleOpenLogIn = () => {
    setIsModalOpen(true);
  };

  const handleCloseLogIn = () => {
    setIsModalOpen(false);
    setIsLoggedin(false);

  };

  const handleSignInBtn = () => {
    setIsLoggedin(true);
    setIsModalOpen(false);

    if (redirectTo) navigate(redirectTo);
  }



  return (
    <AppContext.Provider value={{ isLoggedin, isModalOpen, handleOpenLogIn, handleCloseLogIn, handleSignInBtn }}>
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider