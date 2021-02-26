import React from 'react'
import Divider from "@material-ui/core/Divider";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';

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

    return (
        <div className={classes.root} 
        style={{marginLeft:"12px" }}>
            <List component="nav" >
                <ListItem button >
                    <ListItemText primary={props.itemName}/>
                </ListItem>
                <Divider className={classes.divider} />
            </List>
        </div>
    )
}

export default ItemLine;
