import React from 'react'
import Divider from "@material-ui/core/Divider";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 360,
    },
    divider:{
        backgroundColor:"#7C7C7C",
    }
  });

const ItemLine = (props) => {
    const classes = useStyles();
    const history = useHistory();

    
    const handleClick = () =>{

        console.log(props.ids);
        console.log(props.itemName);
        console.log(props.calories);
        console.log(props.proteins);
        console.log(props.carbs);
        console.log(props.fats);
        
        // console.log(props);

        history.push({
            pathname:'/AddShowFoodItem',
            state:{props}
     });
    }
    return (
        <div className={classes.root} 
        style={{marginLeft:"12px" }}>
            <List component="nav" >
                <ListItem button onClick={handleClick}>
                    <ListItemText primary={props.itemName}/>
                </ListItem>
                <Divider className={classes.divider} />
            </List>
        </div>
    )
}

export default ItemLine;
