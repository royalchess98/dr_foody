// BreakFast Card\
// Morning Snaks Card\
// Lunch Card\
// Evening Snacks Card\
// Dinner Card\
import React,{useState, useEffect} from 'react'
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

    //Breakfast data
    const [EatingTime0,setEatingTime0]= useState(FoodData[0].EatingTime)
    const [items0,setItems0]= useState(parseInt(FoodData[0].items))
    const [cals0,setCals0]= useState(parseInt(FoodData[0].cals))
   
    //Morning Snacks data
    const [EatingTime1,setEatingTime1]= useState(FoodData[1].EatingTime)
    const [items1,setItems1]= useState(FoodData[1].items)
    const [cals1,setCals1]= useState(FoodData[1].cals)

    //Lunch data
    const [EatingTime2,setEatingTime2]= useState(FoodData[2].EatingTime)
    const [items2,setItems2]= useState(FoodData[2].items)
    const [cals2,setCals2]= useState(FoodData[2].cals)
   
    //Evening Snacks data
    const [EatingTime3,setEatingTime3]= useState(FoodData[3].EatingTime)
    const [items3,setItems3]= useState(parseInt(FoodData[3].items))
    const [cals3,setCals3]= useState(parseInt(FoodData[3].cals))

    //Dinner data
    const [EatingTime4,setEatingTime4]= useState(FoodData[4].EatingTime)
    const [items4,setItems4]= useState(FoodData[4].items)
    const [cals4,setCals4]= useState(FoodData[4].cals)
   

    if (props.location.state === undefined)
    {
      console.log ("sahi he re");      
    }

    else 
    {      
      console.log ("hight high")
      console.log (props.location.state)
      const EatingsTime = props.location.state.details.EatingTime.EatingTime
      console.log(EatingsTime)
      const Quants = props.location.state.details.quant.quantity
      console.log(Quants)
      const Calors = props.location.state.details.calor.calories
      console.log(Calors)
      
      if(EatingTime0 === EatingsTime)
      {
        console.log(Quants)
        console.log(Calors)
        console.log("eat breaky")
              } 
      if(EatingTime1 === EatingsTime)
      {
        console.log(Quants)
        console.log(Calors)
        console.log("eat morning snacks")
              } 
      if(EatingTime2 === EatingsTime)
      {
        console.log(Quants)
        console.log(Calors)
        console.log("eat morning lunch")
              } 
      if(EatingTime3 === EatingsTime)
      {
        console.log(Quants)
        console.log(Calors)
        console.log("eat evening snacks")
              } 
      if(EatingTime4 === EatingsTime)
      {
        console.log(Quants)
        console.log(Calors)
        console.log("eat dinner")
              } 
    }


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
                     img={FoodData[0].img} 
                     EatingTime={EatingTime0}
                     items={items0}
                     cals={cals0}
                     />
                </Grid>
                <Grid item xs={12}>
                <Cards 
                      id={FoodData[1].id}
                      img={FoodData[1].img} 
                      EatingTime={EatingTime1} 
                      items={items1}
                      cals={cals1}
                    />
                </Grid>
                <Grid item xs={12}>
                <Cards 
                      id={FoodData[2].id}
                      img={FoodData[2].img} 
                      EatingTime={EatingTime2} 
                      items={items2}
                      cals={cals2}
                      />
                </Grid>
                <Grid item xs={12}>
                <Cards 
                      id={FoodData[3].id}
                      img={FoodData[3].img}  
                      EatingTime={EatingTime3}
                      items={items3}
                      cals={cals3}
                     />
                </Grid>
                <Grid item xs={12}>
                <Cards 
                     id={FoodData[4].id}
                     img={FoodData[4].img}
                     EatingTime={EatingTime4} 
                     items={items4} 
                     cals={cals4} 
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
