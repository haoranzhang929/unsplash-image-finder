import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

const styles = {
  grow: {
    flexGrow: 1
  }
};

const Navbar = props => {
  const { classes } = props;
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          Unsplash Images Finder
        </Typography>
        <IconButton
          color="inherit"
          onClick={() =>
            window.open(
              "https://github.com/haoranzhang929/unsplash-image-finder",
              "_blank"
            )
          }
        >
          <i className="material-icons">code</i>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Navbar);
