// Heading
// Search bar
// Show Search Items
// Opaque Add the item to main array to input
import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import ItemData from './ItemData'
import ItemLine from './ItemLine'
import { Paper } from '@material-ui/core';
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
        backgroundColor:"#2E86C1",
        height:"190px",
        marginBottom:"10px"
    },
    headTop:{
        marginBottom:"14px"
    },
    button:{
        backgroundColor:"#7E41F0",
        color:"#ffffff",
        borderRadius:"20px"
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
        backgroundColor:"#2874A6",
        marginTop:"55px",
        height: "160px",
        width: "160px",
    },
    input:{
        color:"#ffffff",
        fontWeight:"bold"
    },
    searchBar:{
        border:"1.5px solid #ffffff",
        height:"40px",
        width:"340px",
        borderRadius:"23px",
        display:"flex",
        justifyContent:"space-evenly",
        margin:"0px auto"
    },
    page:{
        width:"100%",
        height:"100%"
    }
}));


const SearchItems = (props) => {
    console.log(props)
    console.log(props.location.state.props.id)
    console.log(props.location.state.props.EatingTime)
    console.log(props.location.state.props.items)
    console.log(props.location.state.props.cals)
    const classes = useStyles();
    const history = useHistory();

    const handleCLick = () =>{
        history.goBack('/');
    }
    const allItems = []
    const [value, setValue] = useState("")

    const maxArray = ItemData.length;
    let minArray = 0;

    const handleChange = event =>{
        setValue(event.target.value);
    }

    for(minArray=0;minArray<maxArray;minArray++)
     {
      if(((ItemData[minArray].itemName).toString().toLowerCase().includes(value))  
            ||
         ((ItemData[minArray].itemName).toString().toUpperCase().includes(value))
            ||
         ((ItemData[minArray].itemName).toString().includes(value)))  
        {
        allItems.push(
        <div>
            <ItemLine 
            ids={ItemData[minArray].ids}
            itemName={ItemData[minArray].itemName}
            calories={ItemData[minArray].calories}
            proteins={ItemData[minArray].proteins}
            carbs={ItemData[minArray].carbs}
            fats={ItemData[minArray].fats}
            EatingTime={props.location.state.props.EatingTime}
            />
        </div>)
        }
      }
      

    return (
        <div >
        <div className={classes.layout}>
         <Paper className={classes.paper2}>
        <div className={classes.page}>
            <div className={classes.headPage}>
                <div className={classes.headTop}>
                    <div>
                        <IconButton onClick={handleCLick}>
                            <ArrowBackIosIcon className={classes.icon} color="primary"/>
                        </IconButton>
                    </div>
                    <div style={{display:"flex",
                                justifyContent:"center"}}>
                        <Typography className={classes.textWhite} 
                        style={{marginTop:"-36px",fontSize:"18px" }} 
                        variant="h6">ADD FOOD ITEM</Typography>
                    </div>
                </div>
                <div className={classes.searchBar}>
                    <InputBase
                        className={classes.input}
                        placeholder="Enter Food Item"
                        onChange={handleChange}
                        value={value}
                    />
                    <IconButton type="submit" className={classes.iconButton} aria-label="search">
                        <SearchIcon style={{color:"#ffffff"}} />
                    </IconButton>                    
                </div>
            </div>
            <div>
                {allItems}
            </div>
            <div disabled="true">
                <div style={{display:"flex",
                                justifyContent:"center"}}>
                    <img width="160px" 
                        height="160px" 
                        src="https://cdn3.vectorstock.com/i/thumb-large/63/57/dietitian-doctor-fresh-market-smartphone-offering-vector-31786357.jpg" 
                        alt="Anu"
                    />
                </div>
                <div style={{display:"flex",
                                justifyContent:"center"}}>
                    <Typography style={{color:"#B7B8B9",
                                        variant:"h7"}}>
                        This item was not found in our system
                    </Typography>
                </div>
                <div style={{display:"flex",
                                justifyContent:"center",
                                marginTop:"10px"}}>
                    <Button className={classes.button} variant="contained" color="primary">Suggest Food Item</Button>
                </div>
                <div style={{display:"flex",
                                justifyContent:"center",
                                marginTop:"10px"
                                }}>
                    <Typography style={{color:"#505050",
                                   fontSize:"15px"     }}>
                       By Adding this as a
                    </Typography>
                </div>
                <div style={{display:"flex",
                                justifyContent:"center"
                                }}>
                    <Typography style={{color:"#505050",
                                   fontSize:"15px"     }}>
                       suggestion you are helping
                    </Typography>
                </div>
                <div style={{display:"flex",
                                justifyContent:"center",
                                marginBottom:"80px"
                                }}>
                    <Typography style={{color:"#505050",
                                   fontSize:"15px"     }}>
                       us improve our platform
                    </Typography>
                </div>
            </div> 
        </div>
        </Paper>
        </div>
      </div>
    )    
}

export default SearchItems
