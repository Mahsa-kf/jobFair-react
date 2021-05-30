import React,{ useState, useEffect} from 'react';

import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import SideDrawer from './SideDrawer';

const Header = ()=> {
    //Using props and drawOpen property decides if its open or not, to toggle or handle the state of the of the sidewalk and when application starts this one is going to false.
    const [drawerOpen,setDrawerOpen] = useState(false)

    const toggleDrawer= (value) => {
        setDrawerOpen(value)
    }

    return(
        <AppBar 
        position="fixed"
        style={{
            backgroundColor: '#2f2f2f',
            boxShadow:'none',
            padding:'10px 0px'
        }}
        >
          <Toolbar>
            <div className="header_logo">
                <div className="font_righteous header_logo_venue">The venue</div>
                <div className="header_logo_title">IT job Fair</div>
            </div>

            <IconButton
                aria-label= "Menu"
                color="inherit"
                onClick ={()=> toggleDrawer(true)}
            >
                <MenuIcon/>
            </IconButton>

            <SideDrawer
            open={drawerOpen}
            onClose={(value)=>toggleDrawer(value)}
            />

          </Toolbar> 
        </AppBar>
    )
}

export default Header;