import React from 'react'
import { Paper } from '@material-ui/core';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import EatingTimes from './components/EatingTimes.js'
import AddShowFoodItem from './components/AddShowFoodItem'
import SearchItems from './components/SearchItems'
import AddTheFoodItemtoMain from './components/AddTheFoodItemtoMain'
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    layout: {
        width: "auto",
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
          width: 700,
          marginLeft: "auto",
          marginRight: "auto"
        }
      },
    paper1: {
      marginTop: theme.spacing(3),
      borderRadius:"40px",
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      backgroundColor: "#E2ECF5",
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        width: 400,
        height: 600,
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(3)
      }
    },
    paper2: {
      marginTop: theme.spacing(3),
      borderRadius:"40px",
      marginBottom: theme.spacing(3),
      padding: theme.spacing(2),
      backgroundColor: "#ffffff",
      [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
        width: 400,
        height: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        padding: theme.spacing(3)
      }
    }
  }));

const Foody = () => {
    const classes = useStyles();

    return (
        <div >
            <div className={classes.layout}>
                {/* <Paper className={classes.paper1}>
                    <EatingTimes />
                </Paper> */}
                {/* <Paper className={classes.paper2}>
                    <AddShowFoodItem />
                </Paper> */}
                {/* <Paper className={classes.paper2}>
                    <SearchItems />
                </Paper> */}
              <BrowserRouter>
                  <div className="App"
                          style={{backgroundColor:'78E4FF'}}>
                    <Switch>
                          <Paper className={classes.paper1}>
                              <Route exact path='/' component={EatingTimes} />     
                          </Paper>
                          <Paper className={classes.paper2}>
                              <Route to="/AddShowFoodItem" component={AddShowFoodItem} />     
                          </Paper>
                          <Paper className={classes.paper2}>
                              <Route to="/SearchItems" component={SearchItems} />     
                          </Paper>
                          <Paper className={classes.paper1}>
                              <Route path='/AddTheFoodItemtoMain' component={AddTheFoodItemtoMain} />     
                          </Paper>
                    </Switch>
                  </div>
              </BrowserRouter>
            </div>
        </div>
    )
}

export default Foody
