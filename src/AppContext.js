import React, { createContext, useEffect, useReducer, useRef, useState } from "react"
import { useNavigate } from "react-router-dom";

export const AppContext = createContext({
    isModalOpen:false,
    isLoggedin:false,
    openLoginModal: () => {},
    closeModal:()=>{}
})


const AppProvider = ({ children }) => {
  
    
    const navigate= useNavigate();
    const[isModalOpen, setIsModalOpen] = useState(false);
    const[isLoggedin, setIsLoggedin] = useState(false);
    const[jobId, setJobId] = useState(null);


    const handleOpenLogIn = (props) => {
      setIsModalOpen(true);
      // console.log(props);
      props?.jobId && setJobId(props.jobId)
    };
  
    const handleCloseLogIn = () => {
      setIsModalOpen(false);
      setIsLoggedin(false);
      setJobId(null)
    };

    const handleSignInBtn = ()=>{
      setIsLoggedin(true);
      setIsModalOpen(false);
      
      jobId && navigate(`/job/${jobId}`);
    }
  

   
    return (
      <AppContext.Provider value={{isLoggedin,isModalOpen,handleOpenLogIn, handleCloseLogIn,handleSignInBtn}}>
        {children}
      </AppContext.Provider>
    )
}

export default AppProvider