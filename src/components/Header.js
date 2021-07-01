import { AppBar, IconButton, makeStyles, Toolbar } from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useState, useEffect } from "react";
import Collapse from "@material-ui/core/Collapse";
import AppsIcon from "@material-ui/icons/Apps";
import logo from "../assets/img/logo.png";
import { Link as Scroll } from "react-scroll";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  appbar: {
    background: "none",
  },
  container: {
    width: "80%",
    margin: "auto",
  },
  containerTitle: {
    textAlign: "center",
    width: "40%",
    margin: "auto",
    marginTop: "5rem",
  },
  subTitle: {
    color: "white",
    fontSize: "1.3rem",
    // background: "teal",
    margin: 0,
  },

  title: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
  },
  titleLogo: {
    flexGrow: 1,
  },
  titleHeader: {
    color: "white",
    fontSize: "3rem",
    // background: "teal",
    margin: 0,
  },
  iconButton: {
    color: "white",
  },
  icon: {
    fontSize: "2.3rem",
  },
  logo: {
    height: "35px",
    marginRight: "1rem",
  },
  iconDown: {
    color: "white",
    fontSize: "3.5rem",
  },
}));

function Header() {
  const classes = useStyles();
  const [animate, setanimate] = useState(false);

  useEffect(() => {
    setanimate(true);
  }, [animate]);

  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.container}>
          <div className={classes.title}>
            <img className={classes.logo} src={logo} alt="logo-gkkdcs" />
            <h1 className={classes.titleLogo}> GKKD-CS</h1>
          </div>
          <IconButton className={classes.iconButton}>
            <AppsIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={animate}
        {...(animate ? { timeout: 1000 } : { collapseHeight: 50 })}
      >
        <div className={classes.containerTitle}>
          <h1 className={classes.titleHeader}>Welcome Home!</h1>
          <p className={classes.subTitle}>
            Gereja yang bertumbuh menuju kedewasaan penuh dalam Kristus Yesus
            serta memenuhi panggilan Apostolik
          </p>
          <Scroll to="community" smooth={true}>
            <IconButton>
              <ExpandMoreIcon className={classes.iconDown} />
            </IconButton>
          </Scroll>
        </div>
      </Collapse>
    </div>
  );
}

export default Header;
