import React, { useState, forwardRef, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogBox = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // window.addEventListener("load", () => {
    //   setOpen(true);
    // });
    setTimeout(() => {
        setOpen(true)
    }, 2000);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <h1 className="text-3xl font-bold p-3 flex justify-center">
          Important Message
        </h1>
        <DialogTitle className="flex justify-center">
          {"Welcome to the Assignment Management System Demo"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Please note that this website is a demonstration only and not the
            original system currently in use by Baba Institute of Technology and
            Science. Due to privacy and security concerns, we cannot provide
            access to the live system, which contains real user data. Instead,
            this site showcases screenshots and descriptions to illustrate the
            functionalities and workflow of the project. Thank you for
            understanding.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="success" onClick={handleClose}>
            I Understand
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DialogBox;
