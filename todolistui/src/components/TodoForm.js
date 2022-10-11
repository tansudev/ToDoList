import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToDoList,
  todoListAction,
  removeFromToDoList,
} from "../redux/action";
import { todoListReducer } from "../redux/reducer";
import Moment from "moment";

//Mui
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { Card, CardContent, Grid, Stack } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import CreateIcon from "@mui/icons-material/Create";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const TodoForm = () => {
  const dispatch = useDispatch();
  let data = useSelector((state) => state.todoListReducer);
  const [formatdate, setFormatDate] = useState("00-00-0000");

  useEffect(() => {
    getallData();
  }, []);

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
          // marginRight: 30,
          // marginLeft: 30,
          margin: 10,
          padding: 1,
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
              <Grid item xs={12}>
                <Grid container alignItems="center" spacing={6}>
                  <Grid item xs zeroMinWidth>
                    <h3>Başlıklar ekelenecek</h3>
                  </Grid>
                </Grid>
              </Grid>
              <Grid container>
                <Grid item xs={12}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  ></Grid>
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
                          />
                        </Grid>
                        <Grid item xs={9}>
                          {item.toDo} {item.finishDate} {item.priority}{" "}
                          {item.status}
                        </Grid>
                        <Grid item xs={1}>
                          <IconButton aria-label="delete" size="medium">
                            <CreateIcon />
                          </IconButton>
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
