import Typography from "@material-ui/core/Typography";
// import Link from "@material-ui/core/Link";
import SimpleCart from './SimpleCart'
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import StoreMallDirectoryIcon from "@material-ui/icons/StoreMallDirectory";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  icons: {
    marginRight: theme.spacing(10),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album() {
  const classes = useStyles();
  const counter=useSelector(state=>state.Chart.counter)

  return (
    <AppBar position="relative">
      <Toolbar>
        <StoreMallDirectoryIcon className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Mus'ab-Store
        </Typography>
        <div id="headerDiv">
          <h2>chart({counter})</h2>
        </div>
        <SimpleCart />
      </Toolbar>
    </AppBar>
  );
}
