import React from 'react';

import { Drawer, List, ListItem } from '@material-ui/core'

const SideDrawer = (props) => {
   
    const links = [
        //By clicking the links it goes to the top
        {where:'featured', value:'To top'},
        {where:'venuenfo', value:'Venue NFO'},
        {where:'highlights', value:'Highlights'},
        {where:'location', value:'Location'}
    ]
     //create a loop and show the lists of array.
     //The function will keep the information about the item, which is going to be the where and the value 
    const renderItem = (item) => (
        //instead using return using (), because want to return the component directly.
       
            <ListItem button onClick={()=> alert(item.where)} key={item.where}>
            {item.value}
            </ListItem>
        
    )
return(
    <Drawer
        anchor={"right"}
        //The open property is inside the props open.Parent component its deciding if this should be closed or open.
        open={props.open}
        onClose={()=> props.onClose(false)}
        >
     
        {/* using map to loop the links list, for each iteration is going to return whatever the component is returning  */}
        <List component="nav">
    
            {links.map((item)=> renderItem(item) )}

        </List>
    </Drawer>
)

}

export default SideDrawer;