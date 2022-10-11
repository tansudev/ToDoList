import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoListAction, removeFromToDoList } from "../redux/action";

//Mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Card, CardContent, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import dayjs from "dayjs";

//componenet
import UpdateToDo from "./todo-component/UpdateToDo";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const TodoForm = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.todoListReducer);

  useEffect(() => {
    getallData();
  }, [data]);

  //call all data
  const getallData = () => {
    dispatch(todoListAction());
  };

  const deleteItem = (id) => {
    dispatch(removeFromToDoList(id));
    getallData();
  };

  return (
    <>
      <Box
        sx={{
          marginRight: 10,
          marginLeft: 10,
          //margin: 10,

          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          To Do List
        </Typography>
        <Box sx={{ m: "1rem" }}></Box>
        <Card>
          <CardContent>
            <Grid container>
              <Grid item xs={1}>
                <Grid container alignItems="left" spacing={2}>
                  <Grid item xs zeroMinWidth>
                    <h3>Mark</h3>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={3}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs zeroMinWidth>
                    <h3>Task</h3>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs zeroMinWidth>
                    <h3>Finish Date</h3>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs zeroMinWidth>
                    <h3>Priority</h3>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Grid container alignItems="center" spacing={2}>
                  <Grid item xs zeroMinWidth>
                    <h3>Status</h3>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={2}>
                <Grid container alignItems="right" spacing={2}>
                  <Grid item xs zeroMinWidth>
                    <h3>Update/Delete</h3>
                  </Grid>
                </Grid>
              </Grid>
              {data.map((item) => (
                <Grid item xs={12} key={item._id}>
                  <Grid container>
                    <Grid item xs={12}>
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="space-between"
                        // style={{ background: "#2E3B55" }}
                      >
                        {" "}
                        <Grid item xs={1}>
                          <Checkbox
                            {...label}
                            icon={<BookmarkBorderIcon />}
                            checkedIcon={<BookmarkIcon />}
                            variant="rectangular"
                            checked={item.status === "Completed" ? true : false}
                          />
                        </Grid>
                        <Grid item xs={3} alignItems="center">
                          {item.toDo}
                        </Grid>
                        <Grid item xs={2} alignItems="center">
                          {dayjs(item.finishDate).format("MMM D, YYYY h:mm A")}
                        </Grid>
                        <Grid item xs={2}>
                          {item.priority}
                        </Grid>
                        <Grid item xs={2}>
                          {item.status}
                        </Grid>
                        <Grid item xs={1}>
                          <UpdateToDo id={item._id} item={item}></UpdateToDo>
                        </Grid>
                        <Grid item xs={1}>
                          <IconButton
                            aria-label="update"
                            size="medium"
                            onClick={() => deleteItem(item._id)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default TodoForm;
