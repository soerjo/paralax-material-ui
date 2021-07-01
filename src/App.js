import { makeStyles, CssBaseline } from "@material-ui/core";
import background from "./assets/img/background.jpg";
import Community from "./components/Community";
import Header from "./components/Header";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `linear-gradient(rgba(0, 0, 0,0.7), rgba(0, 0, 0, 0.5)), url(${background})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header />
      <Community />
    </div>
  );
}

export default App;
