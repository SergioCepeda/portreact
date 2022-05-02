import React from 'react'
import {  Card,  CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";

import TypeWriterEffect from "react-typewriter-effect"
import mobile from "../images/mobile.jpg"

 
const Mobile = ({title, dark, id}) => {
  const Classes = useStyles();
  return (
   
    <div className={`${Classes.section} ${dark && Classes.sectiondark}`}>
       <div className={ Classes.sectioncontext} id={id}>
         <Typography variant='h5'>{title}</Typography>
         <Card className={Classes.card}>
            <CardMedia  image={mobile} className={Classes.media} title="picture"/>
            <CardContent className={Classes.CardContent}content>
              <TypeWriterEffect
                text= "Certificado desarrollador de aplicaciones mobiles"
                textStyle={{fontSize:"1.5rem", fontWeight: "1000px", color: "#51d1f6"}}
                startDelay={100}
                cursorColor= "black"
                typeSpeed={100}

               />
               <TypeWriterEffect
                text= "mobile developer"
                textStyle={{fontSize:"1.5rem", fontWeight: "900px"}}
                startDelay={3500}
                cursorColor= "#296cbc"
                typeSpeed={50}

               />

            <Typography variant="h7" color= "textSecondary"  textStyle={{fontSize:"0.1rem"}}>
               Estudie el desarrollo de aplicaciones mobile, tanto el proceso, el diseño y la arquitectura.
            </Typography>
       





            </CardContent> 

            

         </Card>
       </div>
    </div>
  )
}


const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
   
  },
  sectiondark:{
    background: "#333",
    color: "#fff",
  },
  sectioncontext:{
    maxWidth:"80vw",
    margin: "0 auto",
  },
  card:{
    height: "70vh",
    display:"flex",
    marginTop: theme.spacing(2),
    position: "relative",
  },
  media : {
    width: "1500px",
    height:"auto",
    objectFit:"cover",
    borderRadius:"10px",
    margin: theme.spacing(5)

  },
  CardContent:{
     marginTop: theme.spacing(2),
     "& h6":{
       marginTop: theme.spacing(6),
       [theme.breakpoints.down("sm")]:{
        display:"none",
       }
     }
  },
  pdfbutton: {
   position : "absolute",
   bottom: "3rem",
   right: "12rem",
   marginTop: theme.spacing(20),
   
   backgroundColor: "#008CBA",
   padding: theme.spacing(-1),
   "&: hover":{
     backgroundColor: "#fff",

   },
   "& a": {
     color: "#fff",
     textDecoration : "none",
     fontWeight: 400,
   },
   "& a:hover ":{
     fontWeight:400,
    
     color: "#fff", 


   } 
  },
}))

export default Mobile