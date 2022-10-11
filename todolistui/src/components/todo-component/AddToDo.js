import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

//import component
import { useDispatch } from "react-redux";
import { addToDoList } from "../../redux/action";
import { textAlign } from "@mui/system";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddToDo = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [text, setText] = useState("");
  const [date, setDate] = React.useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Pending");

  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  const handleChangeDate = (value) => {
    setDate(value);
  };
  const handleChangePriority = (event) => {
    setPriority(event.target.value);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const todo = {
    toDo: text,
    finishDate: date,
    priority: priority,
    status: status,
    subDoTo: [],
    date: dayjs(),
  };

  const handleAdd = () => {
    dispatch(addToDoList(todo));
    setOpen(false);
  };

  return (
    <>
      <Box>
        <Grid container>
          <Grid item xs={6}></Grid>
          <Grid item xs={6}>
            <Button
              style={{ background: "#2E3B55" }}
              sx={{ m: "4rem" }}
              variant="contained"
              onClick={handleClickOpen}
            >
              Add New Task
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{" Add New Task ! "}</DialogTitle>
        <DialogContent>
          <DialogContentText id="adding-new-todo">
            What is your new duty?
          </DialogContentText>
          <Box sx={{ m: "1rem" }}>
            <TextField
              autoFocus
              margin="normal"
              id="task"
              label="New Task"
              type="text"
              fullWidth
              variant="outlined"
              onChange={(event) => setText(event.target.value)}
            />
          </Box>
          <Box sx={{ m: "1rem" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Stack spacing={3}>
                <DesktopDatePicker
                  label="Date desktop"
                  inputFormat="MM/DD/YYYY"
                  value={date}
                  onChange={handleChangeDate}
                  renderInput={(params) => <TextField {...params} />}
                />
                <TimePicker
                  label="Time"
                  value={date}
                  onChange={handleChangeDate}
                  renderInput={(params) => <TextField {...params} />}
                />
              </Stack>
            </LocalizationProvider>
          </Box>
          <Box sx={{ m: "1rem" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Priority</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={priority}
                label="Priority"
                onChange={handleChangePriority}
              >
                <MenuItem value={"Low"}>Low</MenuItem>
                <MenuItem value={"Medium"}>Medium</MenuItem>
                <MenuItem value={"High"}>High</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box sx={{ m: "1rem" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Status</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={status}
                label="Status"
                onChange={handleChangeStatus}
              >
                <MenuItem value={"Completed"}>Completed</MenuItem>
                <MenuItem value={"Pending"}>Pending</MenuItem>
                <MenuItem value={"InProgress"}>InProgress</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleAdd}>Add</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AddToDo;
