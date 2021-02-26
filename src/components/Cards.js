import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles({
    card:{
      backgroundColor:"#A9CCE3",
      height:100,
      borderRadius:"20px",
    },
    img:{
        width:"80px",
        height:"80px"
    },
    avatar: {
        width: "64px",
        height:"64px",
        backgroundColor: "#64b5f6",
      },
    icon:{
        width:"44px",
        height:"44px"
    },
    para:{
        fontFamily:"sans-serif",
        marginTop:"5px"
    },
  });
  
  const Cards = (props) => {
    const classes = useStyles();
      
    const handleCLick = () =>{
            return <Redirect to="/SearchItems" />
    }

    return (
        <div>
             <Card className={classes.card} 
                    onClick={handleCLick}>
                        <CardContent style={{
                                display:"flex",
                                justifyContent:"space-between"
                                }}>
                            <div style={{
                                display:"flex"
                                }}>
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    <img className={classes.img} src={props.img} />
                                </Avatar>
                                <div style={{marginTop:"12px", marginLeft:"22px"}}>
                                    <Typography variant="h5" >
                                       {props.EatingTime}
                                    </Typography>
                                    <p className={classes.para}> {props.items} Items. {props.cals} cal</p>
                                </div>
                            </div>
                            <div>
                                <IconButton>
                                    <AddCircleOutlinedIcon className={classes.icon} color="primary"/>
                                </IconButton>
                            </div>
                        </CardContent>
                    </Card>
        </div>
    )
}

export default Cards
