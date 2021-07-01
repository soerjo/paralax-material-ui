import React from "react";
import { makeStyles, Collapse } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(rgba(0, 0, 0,0.7), rgba(0, 0, 0, 0.5))",
    color: "white",
  },
});

function CardComponent({ img, animate }) {
  const classes = useStyles();

  return (
    <Collapse
      in={animate}
      {...(animate ? { timeout: 1000 } : { collapseHeight: 50 })}
    >
      <Card className={classes.root}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Community
          </Typography>
          <Typography variant="body2" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
          </Typography>
        </CardContent>
      </Card>
    </Collapse>
  );
}

export default CardComponent;
