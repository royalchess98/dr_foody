// Back button
// Item Heading
// Controller to Add quantity and reduce quantity
// Show Nutritions Detaiils
// Divider
// Proteins , Carbs, Fats
// Add item button
import React, {useState} from 'react'
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Divider from "@material-ui/core/Divider";
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import { useHistory } from 'react-router-dom'

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
}));

const AddShowFoodItem = (props) => {
    const classes = useStyles();
    const history = useHistory();

    let calorie = props.location.state.props.calories
    let protein = props.location.state.props.proteins
    let carb = props.location.state.props.carbs
    let fat = props.location.state.props.fats
    let EatingTime = props.location.state.props.EatingTime

    const [quantity, setQuantity] = useState(0.5);
    const [calories, setCalories] = useState(parseInt(calorie));
    const [proteins, setProteins] = useState(parseFloat(protein));
    const [carbs, setCarbs] = useState(parseFloat(carb));
    const [fats, setFats] = useState(parseFloat(fat));
    
    console.log(props)
    console.log(props.location.state.props.ids)
    console.log(props.location.state.props.itemName)
    console.log(props.location.state.props.calories)
    console.log(props.location.state.props.proteins)
    console.log(props.location.state.props.carbs)
    console.log(props.location.state.props.fats)
    console.log(props.location.state.props.EatingTime)

    const handleClick = () =>{
        history.goBack('');
    }

    const handleIncrease= () =>{
            setQuantity(prevState => prevState + 0.5);
            setCalories(prevState => prevState + parseInt(calorie));
            setProteins(prevState => prevState + (parseFloat(calorie)));
            setCarbs(prevState => prevState + (parseFloat(carb)));
            setFats(prevState => prevState + (parseFloat(fat)));
    }

    const handleDecrease= () =>{
    if(quantity === 0.5)
        {
            setQuantity(prevState => prevState - 0);
            setCalories(prevState => prevState - 0);
            setProteins(prevState => prevState - 0);
            setCarbs(prevState => prevState - 0);
            setFats(prevState => prevState - 0);
            // setCalories(prevState => prevState - 0);
            // setProteins(prevState => prevState - 0);
            // setCarbs(prevState => prevState - 0);
            // setFats(prevState => prevState - 0);
        }
    else{
            setQuantity(prevState => prevState - 0.5);
            setCalories(prevState => prevState - parseInt(calorie));
            setProteins(prevState => prevState - (parseFloat(calorie)));
            setCarbs(prevState => prevState - (parseFloat(carb)));
            setFats(prevState => prevState - (parseFloat(fat)));
            // setCalories(prevState => prevState - props.location.state.props.calories);
            // setProteins(prevState => prevState - props.location.state.props.proteins);
            // setCarbs(prevState => prevState - props.location.state.props.carbs);
            // setFats(prevState => prevState - props.location.state.props.fats);
        }
    }

    const [details, setDetails] = useState({quant: {quantity},
                                            calor: {calories},
                                            EatingTime: {EatingTime}
                                        })
    console.log(details);

    const onSubmit = () =>{
        console.log(quantity);
        console.log(calories);
        console.log(proteins);
        console.log(carbs);
        console.log(fats);

        history.push({
            pathname:'/',
            state: {details},
     });
    }
    
    return (
        <div >
        <div className={classes.layout}>
         <Paper className={classes.paper2}>
            <div className={classes.headPage}>
                <div className={classes.headTop}>
                    <div>
                        <IconButton onClick={handleClick}>
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
                        <Typography className={classes.textWhite} variant="h5">{props.location.state.props.itemName}</Typography>
                </div>
                <div className={classes.controllerMain}>
                    <Typography style={{display:"flex",
                                justifyContent:"center",
                                }} className={classes.textWhite} variant="h7">Qty</Typography>
                    <div className={classes.controller}>
                        <div>
                            <IconButton>
                                <RemoveCircleIcon onClick={handleDecrease} style={{transform: 'scale(1.5)'}} className={classes.icon} color="primary"/>
                            </IconButton>
                        </div>
                        <div>
                            <Typography className={classes.textWhite} variant="h4">{quantity}</Typography>
                        </div>
                        <div>
                            <IconButton>
                                <AddCircleIcon onClick={handleIncrease} style={{transform: 'scale(1.5)'}} className={classes.icon} color="primary"/>
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
                    <Typography style={{marginTop:"7px"}} variant="h6">{calories} Calories</Typography>
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
                        <Typography variant="h6">{proteins.toFixed(2)} g</Typography>
                    </div>
                </div>
                <div className={classes.BarDetails}>
                    <div>
                        <Divider className={classes.CarbsBar} orientation="vertical" flexItem />
                    </div>
                    <div>
                        <Typography variant="h6">Carbs</Typography>
                        <Typography variant="h6">{carbs.toFixed(2)} g</Typography>
                    </div>
                </div>
                <div className={classes.BarDetails}>
                    <div>
                        <Divider className={classes.FatsBar} orientation="vertical" flexItem />
                    </div>
                    <div>
                        <Typography variant="h6">Fats</Typography>
                        <Typography variant="h6">{fats.toFixed(2)} g</Typography>
                    </div>
                </div>
            </div>
            <div>
                <Button onClick={onSubmit} fullWidth className={classes.button}>Add to {props.location.state.props.EatingTime}</Button>
            </div>
            </Paper>
        </div>
      </div>

    )    
}

export default AddShowFoodItem
