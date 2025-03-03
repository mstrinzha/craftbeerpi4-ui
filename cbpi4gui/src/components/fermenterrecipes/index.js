import { Breadcrumbs, Container, Divider, Paper,InputBase, IconButton, Link, List, ListItemButton, ListItemSecondaryAction, ListItemText, ListItemIcon } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { fermenterrecipeapi } from "../data/fermenterrecipeapi";
import { NewRecipeDialog } from "./NewRecipeDialog";
import SearchIcon from "@mui/icons-material/Search";
import { CBPiBeerIcon } from "../util/icons/CBPiSensorIcon";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
}));



const FermenterRecipes = () => {
  const [totalList, setTotalList] = useState([]);
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false)
  const [filter, setFilter] = useState("");
  const classes = useStyles();

  useEffect(() => {
    fermenterrecipeapi.get((data) => {
      setTotalList(data)
      setList(data);
    });
  }, []);

  useEffect(() => {
    console.log(filter)
    if(filter) {
      setList(totalList.filter(item=> item?.name.includes(filter) ))
    }
    else {
      setList(totalList)
    }
  }, [filter]);

  

  const openRecipe = (file) => {
    navigate("/fermenterrecipe/" + file);
  };

  const createRecipe = () => {
    setOpen(true)

  }

 


  return (
    <>
    <Container maxWidth="lg">
      <Grid container direction="row" justifyContent="space-between" alignItems="center" style={{ marginTop: 10 }}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Fermenter Recipes
          </Typography>
        </Grid>
        <Grid item>
          <Paper component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              value={filter}
              onChange={(e) => {
                setFilter(e.target.value);
              }}
              placeholder="Filter"
              inputProps={{ "aria-label": "filter settings" }}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
        <Grid item>
          <IconButton variant="contained" onClick={createRecipe}>
            <AddIcon />
          </IconButton>
          <NewRecipeDialog open={open} setOpen={setOpen}/>
        </Grid>
      </Grid>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          color="inherit"
          onClick={() => {
            navigate("/fermenterprofile");
          }}
        >
          Active Recipe
        </Link>
        <Typography color="textPrimary">Recipes</Typography>
      </Breadcrumbs>
      <Divider style={{ marginBottom: 10, marginTop: 10 }} />
      <List>
        {list.map((item) => (
          <ListItemButton onClick={() => openRecipe(item.file)}>
            <ListItemIcon>
              <CBPiBeerIcon/>
            </ListItemIcon>
            <ListItemText primary={item.name || "No Name"} secondary={item.desc} />
            <ListItemSecondaryAction>x</ListItemSecondaryAction>
          </ListItemButton>
        ))}
      </List>
      </Container>
    </>
  );
};

export default FermenterRecipes;
