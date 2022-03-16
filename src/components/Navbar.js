import { AppBar, Toolbar , makeStyles, List, IconButton, Drawer, Divider, ListItem, ListItemIcon} from '@material-ui/core';
import React, { useState } from 'react';
import logo from "../images/myAvatar.png";
import {Link, animateScroll as scroll } from "react-scroll";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import BuildIcon from '@material-ui/icons/Build';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import MenuIcon from '@material-ui/icons/Menu';
import CancelIcon from '@material-ui/icons/Cancel';




const Navbar = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const link = [
    {
      id: "about",
      text:"Sobre mi",
      icon: <PermIdentityIcon fontSize="large"  className={classes.yo}/>
    },
    {
      id:"skill",
      text: "Habilidades",
      icon: <EmojiObjectsIcon fontSize="large" className={classes.light}/>
    },
  
    {
      id:"mywork",
      text: "Mi trabajo",
      icon: <BuildIcon fontSize="large"  className={classes.work}/>
    },
    {
      id:"contact",
      text: "Contactame",
      icon: <ContactMailIcon  fontSize="large"  className={classes.contacto}/>
    }
  ]
  
  const scrollToTop =  () => {
    scroll.scrollToTop()
  }

  return (
    <>
    <AppBar  position= "sticky" className=  {classes.root}>
    <Toolbar className ={classes.Toolbar}>
        <img  
        src={logo} 
        className={classes.logo} 
        alt="Logo" 
        onClick={scrollToTop}
        />
       <List className ={classes.menu}>
       { 
        link.map(({ id, text }, index) => (
              <Link key={index} 
               to={id} 
               spy={true} 
               activeClass="active"
                smooth={ true }
                 duration={ 500 }
                  offset={-70} >
                  {text}
                  </Link>
            ))
          }
       </List>
       <IconButton   edge="end" 
        className={classes.menubutton}
        onClick={()=>setOpen(!open)}
        >

       <MenuIcon  fontSize="large" />
       </IconButton>
       
    </Toolbar>
    </AppBar>

    <Drawer anchor='right' open={open} onClose={()=>setOpen(false)} >
      <IconButton   onClick={()=>setOpen(false)} className={classes.cancelicon}>
        <CancelIcon  fontSize="large" />
      </IconButton>
     <Divider />
     { 
        link.map(({ id, text, icon }, index) => (
              <Link key={index} 
              className={classes.sidebar}
               to={id} 
               spy={true} 
               activeClass="active"
                smooth={ true }
                 duration={ 500 }
                  offset={-70} >
                  <ListItem component="h5">
                    <span>
                    <ListItemIcon>
                     {icon}
                    </ListItemIcon>
                    </span>{text}
                  </ListItem>
                  </Link>
            ))
          }
    </Drawer>
    </> 
  )
}
const useStyles = makeStyles((theme) => ({
  root:{
    background: "#fafafa",
    top:0,
    left:0,
    right:0,
    zIndex:999,
  },
  toolbar:{
    display:"flex",
    justifyContent:"flex-start",
    alignItems:"center"
  },
logo: {
height: "3.5rem",
objectFit:"contain",
"&:hover":{
  cursor:"pointer"
}
},
contacto:{
  color:"#00ffff"
},
yo:{
  color:"#00ff00"
},

work:{
  color:"#ffA500"
},
light:{
  color:"#ffcc00",
},
menu:{
  [theme.breakpoints.down("sm")]:{
    display:"none",
   

  },
  "& a": {
    color: "#333",
    fontSize: "1.4rem",
    fontWeight: "bold",
    marginLeft: theme.spacing(3)
 

  },
  "& a:hover":{
    cursor:"pointer",
    color: "#296cbc",
    borderBottom: "3px solid #296cbc",
  },
},

menubutton :{
  display: "none",
  [theme.breakpoints.down("sm")] : {
    display:"block",
    color: "tomato",
    position: "absolute",
    top:0,
    right: 10,
  }
},
cancelicon:{
  color:"red",
  position:"absolute",
  top:0,
  right:10,

},
sidebar:{
  width:"40vw",
  [theme.breakpoints.down("sm")]:{
    width:"60vw",
  },
  "& h5":{
    margin: theme.spacing(10,0,0,4),
    fontSize: "1.4rem",
    color: "#333",
    fontWeight:"bold",
  },
  "& h5:hover":{
    color: "tomato",
    cursor:"pointer"
  }
}

}))



export default Navbar