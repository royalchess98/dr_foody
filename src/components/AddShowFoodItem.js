// Back button
// Item Heading
// Controller to Add quantity and reduce quantity
// Show Nutritions Detaiils
// Divider
// Proteins , Carbs, Fats
// Add item button
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Divider from "@material-ui/core/Divider";
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
    card:{
      backgroundColor:"#A9CCE3",
      height:100,
      borderRadius:"20px",
    },

    textWhite:{
        color:"#ffffff"
    },
    headPage:{
        borderTopLeftRadius:"0px",
        borderBottomLeftRadius:"50%",
        borderTopRightRadius:"0px",
        borderBottomRightRadius:"50%",
        backgroundColor:"#558EF2",
        height:"310px",
        marginBottom:"10px"
    },
    BarDetails:{
        marginTop:"20px",
        display:"flex",
    },
    BarsDetails:{
        display:"flex",
        justifyContent:"space-around"
    },
    ProteinsBar:{
        width:"5px",
        borderRadius:"100px",
        height:"65px",
        backgroundColor:"#85C1E9",
        marginRight:"7px"
    },
    CarbsBar:{
        width:"5.6px",
        borderRadius:"100px",
        height:"65px",
        backgroundColor:"#52BE80",
        marginRight:"7px"
    },
    FatsBar:{
        width:"5px",
        borderRadius:"100px",
        height:"65px",
        backgroundColor:"#F4D03F",
        marginRight:"7px"
    },
    button:{
        backgroundColor:"#7E41F0",
        color:"#ffffff",
        marginTop:"50px",
        marginBottom:"0px"
    },
    icon:{
        color:"#ffffff"
    },
    controller:{
        justifyContent:"space-between",
        marginRight:"auto",
        marginLeft:"auto", 
        display:"flex",
        marginTop:"35px",
        marginBottom:"35px",
        alignItems:"center"
    },
    controllerMain:{
        marginRight:"auto",
        marginLeft:"auto", 
        borderRadius:"90px",
        backgroundColor:"#1666F3",
        marginTop:"55px",
        height: "160px",
        width: "160px",
    },
});

const AddShowFoodItem = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.headPage}>
                <div className={classes.headTop}>
                    <div>
                        <IconButton>
                            <ArrowBackIosIcon className={classes.icon} color="primary"/>
                        </IconButton>
                    </div>
                    <div style={{display:"flex",
                                justifyContent:"center"}}>
                        <Typography className={classes.textWhite} style={{marginTop:"-38px"}} variant="h6">ADD FOOD ITEM</Typography>
                    </div>
                </div>
                <div style={{display:"flex",
                                justifyContent:"center"}}>
                        <Typography className={classes.textWhite} variant="h5">Jower Dosa</Typography>
                </div>
                <div className={classes.controllerMain}>
                    <Typography style={{display:"flex",
                                justifyContent:"center",
                                }} className={classes.textWhite} variant="h7">Qty</Typography>
                    <div className={classes.controller}>
                        <div>
                            <IconButton>
                                <RemoveCircleIcon style={{transform: 'scale(1.5)'}} className={classes.icon} color="primary"/>
                            </IconButton>
                        </div>
                        <div>
                            <Typography className={classes.textWhite} variant="h4">0.5</Typography>
                        </div>
                        <div>
                            <IconButton>
                                <AddCircleIcon style={{transform: 'scale(1.5)'}} className={classes.icon} color="primary"/>
                            </IconButton>
                        </div>
                    </div>
                    <Typography style={{display:"flex",
                                justifyContent:"center",
                                fontWeight:"bold"}} className={classes.textWhite} variant="h7">Piece</Typography>
                </div>
            </div>
            <div>
                <div>
                    <Typography variant="h6" style={{display:"flex",
                                justifyContent:"center"}}>Nutrition Information</Typography>
                </div>
                <div style={{display:"flex",justifyContent:"center"}}>
                    <IconButton>
                        <RestaurantIcon style={{transform: 'scale(1.5)'}} color="textSecondary"/>
                    </IconButton>
                    <Typography style={{marginTop:"7px"}} variant="h6">56 Calories</Typography>
                </div>
                <div></div>

            </div>
            <div>
                <Divider style={{marginBottom:"10px", marginTop:"10px"}} />
            </div>
            <div className={classes.BarsDetails}>
                <div className={classes.BarDetails}>
                    <div>
                        <Divider className={classes.ProteinsBar} orientation="vertical" flexItem />
                    </div>
                    <div>
                        <Typography variant="h6">Proteins</Typography>
                        <Typography variant="h6">1.75 g</Typography>
                    </div>
                </div>
                <div className={classes.BarDetails}>
                    <div>
                        <Divider className={classes.CarbsBar} orientation="vertical" flexItem />
                    </div>
                    <div>
                        <Typography variant="h6">Carbs</Typography>
                        <Typography variant="h6">8.4 g</Typography>
                    </div>
                </div>
                <div className={classes.BarDetails}>
                    <div>
                        <Divider className={classes.FatsBar} orientation="vertical" flexItem />
                    </div>
                    <div>
                        <Typography variant="h6">Fats</Typography>
                        <Typography variant="h6">1.55 g</Typography>
                    </div>
                </div>
            </div>
            <div>
                <Button fullWidth className={classes.button}>Add to BreakFast</Button>
            </div>
        </div>
    )    
}

export default AddShowFoodItem
