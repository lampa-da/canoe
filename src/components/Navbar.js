import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
  },
  link: {
    textDecoration: "none",
    color: "#9c28b0",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      borderBottom: "1px solid #9c28b0",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent">
      <CssBaseline />
      <Toolbar>
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/choices" className={classes.link}>
              All choises
            </Link>
          </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
