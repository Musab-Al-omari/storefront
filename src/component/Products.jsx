import React from "react";
import Button from "@material-ui/core/Button";
// import CameraIcon from '@material-ui/icons/PhotoCamera';
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "./Album.css";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {connect} from 'react-redux';
import { increment }from '../store/Actions'
import {useDispatch} from 'react-redux'


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

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Album(props) {
  const dispatch= useDispatch()

  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
     
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Electrons
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              WELCOME in Musab store i hope you will like it here if you have any question 
              you can contact us in one of our websites
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary" onClick={()=> {window.location.href ="https://web.facebook.com/mosab.omari.13"}}>
                    FaceBook
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary" onClick={()=> {window.location.href ="https://www.instagram.com/mosabalomari11/"}} >
                    Instagram
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>

            {props.Cata.listOfProducts.map((prodect,idx) => (
              <Grid item key={idx} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image={prodect.imgUrl}
                    title={"Image title"}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                    {prodect.name}
                    </Typography>
                    <Typography>
                    {prodect.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary" onClick={() => dispatch(increment(prodect))}>
                      Add To Chart
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    
    </React.Fragment>
  );
}


//1.map it 
const mapStateToProps = state => ({
  Cata: state.Cata
});
//2.connect it 
export default connect(mapStateToProps)(Album);