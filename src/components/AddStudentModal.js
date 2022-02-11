import { useState, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import Container from "@mui/material/Container";
import DialogTitle from "@mui/material/DialogTitle";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import { addStudent } from "../api/student";
import { AppContext, DispatchContext } from "../contexts/AppContext";
const AddStudentModal = ({ handleClose, showAddStudentModal }) => {
  const { user } = useContext(AppContext);
  const dispatch = useContext(DispatchContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [grade, setGrade] = useState(0);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setGrade(0);
    handleClose();
    try {
      var studentToAdd = await addStudent(user.token, {
        firstName,
        lastName,
        grade,
      });
      dispatch({
        type: "ADD_STUDENT",
        payload: {
          id: studentToAdd.data.id,
          firstName,
          lastName,
          grade,
        },
      });
      setSuccess(true);
    } catch (error) {
      console.log("ERROR", error);
      setError(true);
    }
  };

  const handleCloseToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setError(false);
  };
  return (
    <>
      <Snackbar
        open={error}
        autoHideDuration={2000}
        onClose={() => setError(false)}
      >
        <Alert
          onClose={handleCloseToast}
          severity='error'
          sx={{ width: "100%" }}
        >
          Error adding student!
        </Alert>
      </Snackbar>

      <Snackbar
        open={success}
        autoHideDuration={2000}
        onClose={() => setSuccess(false)}
      >
        <Alert
          onClose={handleCloseToast}
          severity='success'
          sx={{ width: "100%" }}
        >
          Student was successfully added!
        </Alert>
      </Snackbar>

      <Dialog open={showAddStudentModal} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <Container>
            <DialogTitle>Add Student</DialogTitle>
            <TextField
              autoFocus
              margin='dense'
              id='firstName'
              label='First Name'
              type='text'
              fullWidth
              variant='standard'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              autoFocus
              margin='dense'
              id='lastName'
              label='LastName'
              type='text'
              fullWidth
              variant='standard'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              autoFocus
              margin='dense'
              id='grade'
              label='Grade'
              type='number'
              fullWidth
              variant='standard'
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
            <div
              style={{
                marginTop: "25px",
                marginBottom: "25px",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button onClick={handleClose}>Cancel</Button>
              <Button type='submit' variant='contained' color='primary'>
                Submit
              </Button>
            </div>
          </Container>
        </form>
      </Dialog>
    </>
  );
};

export default AddStudentModal;
