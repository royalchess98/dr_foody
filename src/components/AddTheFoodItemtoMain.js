// Add the Itesm form
// Add the
// Item Name
// Calories
// Proteins
// Carbs
// Fats

import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

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
    },
}));

const AddTheFoodItemtoMain = () => {
    const classes = useStyles();

    return (
        <div >
        <div className={classes.layout}>
         <Paper className={classes.paper2}>
            Hello
         </Paper>
        </div>
      </div>
    )
}

export default AddTheFoodItemtoMain
