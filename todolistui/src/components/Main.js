import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

//import component
import TodoForm from "./TodoForm";
import AddToDo from "./todo-component/AddToDo";

const Main = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="ml">
        <Box sx={{ bgcolor: "#ECEFF1", height: "100vh" }}>
          <AddToDo></AddToDo>
          <TodoForm></TodoForm>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default Main;
