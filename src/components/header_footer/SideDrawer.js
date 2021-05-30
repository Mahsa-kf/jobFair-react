import React from 'react';

import { Drawer, List, ListItem } from '@material-ui/core'

const SideDrawer = (props) => {
return(
    <Drawer
        anchor={"right"}
        //The open property is inside the props open.Parent component its deciding if this should be closed or open.
        open={props.open}
        onClose={()=> props.onClose(false)}
        >
        <List component="nav">
            <ListItem button onClick={()=> alert('click')}>
                Name of items
            </ListItem>

        </List>
    </Drawer>
)

}

export default SideDrawer;