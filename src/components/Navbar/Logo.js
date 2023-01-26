import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { Link } from "react-scroll";
import Mehdibha from "../../assets/images/Mehdibha";

const Logo = ({ setHomeIsActive, ...rest }) => {
  const classes = useStyles();
  return (
    <Link
      spy
      smooth
      duration={500}
      offset={-70}
      to="home"
      onSetActive={() => setHomeIsActive(true)}
      onSetInactive={() => setHomeIsActive(false)}
      className={classes.root}
    >
      <Typography variant="body6" color="initial" component="h1">
        Azhar Naseem
      </Typography>
      {/* <Mehdibha {...rest} /> */}
    </Link>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: "pointer",
  },
}));

export default Logo;
