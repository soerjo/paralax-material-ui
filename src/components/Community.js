import { makeStyles, Grid, Typography, Collapse } from "@material-ui/core";
import CardComponent from "./CardComponent";

import youth from "../assets/img/youth.jpg";
import excellent from "../assets/img/excellent.jpg";
import family from "../assets/img/family.jpg";
import arrow from "../assets/img/arrow.jpg";
import witness from "../assets/img/witness.jpg";
import retreat from "../assets/img/retreat.jpg";
import useWindowPosition from "../hook/useWindowPosition";
const blesscomn = [youth, excellent, family, arrow, witness, retreat];

const useStyles = makeStyles({
  root: {
    minHeight: "130vh",
  },
  rootGrid: {
    width: "80%",
    // background: "teal",
    margin: "auto",
  },
  title: {
    textAlign: "center",
    color: "white",
    textTransform: "uppercase",
    fontSize: "2rem",
  },
});

function Community() {
  const classes = useStyles();
  const images = blesscomn;
  const animate = useWindowPosition("header");

  return (
    <div className={classes.root} id="community">
      <Collapse in={animate} timeout="auto">
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.title}
        >
          Our Community
        </Typography>
      </Collapse>

      <Grid container className={classes.rootGrid} spacing={5}>
        {images.map((img) => (
          <Grid item md={4}>
            <CardComponent img={img} animate={animate} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Community;
