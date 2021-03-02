// BreakFast Card\
// Morning Snaks Card\
// Lunch Card\
// Evening Snacks Card\
// Dinner Card\
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import FoodData from './FoodData'
import Cards from './Cards'

  const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
    },
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
  
  }));
  
const EatingTimes = (props) => {
    console.log(props)
    const classes = useStyles();

    return (
      <div >
       <div className={classes.layout}>
        <Paper className={classes.paper1}>
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                <Cards 
                     id={FoodData[0].id}
                     EatingTime={FoodData[0].EatingTime}
                     img={FoodData[0].img} 
                     items={FoodData[0].items}
                     cals={FoodData[0].cals}
                     />
                </Grid>
                <Grid item xs={12}>
                <Cards 
                      id={FoodData[1].id}
                      EatingTime={FoodData[1].EatingTime} 
                      img={FoodData[1].img} 
                      items={FoodData[1].items}
                      cals={FoodData[1].cals}
                    />
                </Grid>
                <Grid item xs={12}>
                <Cards 
                      id={FoodData[2].id}
                      EatingTime={FoodData[2].EatingTime} 
                      img={FoodData[2].img} 
                      items={FoodData[2].items}
                      cals={FoodData[2].cals}
                      />
                </Grid>
                <Grid item xs={12}>
                <Cards 
                      id={FoodData[3].id}
                      EatingTime={FoodData[3].EatingTime}
                      img={FoodData[3].img}  
                      items={FoodData[3].items}
                      cals={FoodData[3].cals}
                     />
                </Grid>
                <Grid item xs={12}>
                <Cards 
                     id={FoodData[4].id}
                     EatingTime={FoodData[4].EatingTime} 
                     img={FoodData[4].img}
                     items={FoodData[4].items} 
                     cals={FoodData[4].cals} 
                     />
                </Grid>
            </Grid>
        </div>
        </Paper>
        </div>
      </div>
    )
}

export default EatingTimes
