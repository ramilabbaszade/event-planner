import React, { createContext, useState } from "react";

export const DialogContext = createContext();

const DialogContextProvider = (props) => {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <DialogContext.Provider value={{open,handleClickOpen,handleClose}}>
      {props.children}
    </DialogContext.Provider>
  );
};

export default DialogContextProvider;
