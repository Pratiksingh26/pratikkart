import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
} from "@material-ui/core";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
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
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(15),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" className={classes.logo}>
          Ecommerce
        </Typography>
        <div className={classes.navlinks}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to={"/electronics"} className={classes.link}>
            Electronics
          </Link>
          <Link to="/men" className={classes.link}>
            Men
          </Link>
          <Link to="/women" className={classes.link}>
            Women
          </Link>
          <Link to="/jewelery" className={classes.link}>
            Jeweleries
          </Link>
          <Link to="/cart" className={classes.link}>
            <IconButton style={{ color: "white" }}>
              <ShoppingCartIcon />
            </IconButton>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
