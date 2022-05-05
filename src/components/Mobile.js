import React from 'react'
import {  Card,  CardContent, CardMedia, makeStyles} from "@material-ui/core";
import { useTranslation} from "react-i18next";

import mobile from "../images/mobile.jpg"

 
const Mobile = ({title, dark, id}) => {
  const Classes = useStyles();
  const [t, i18n] = useTranslation('global');
  return (
   
    <div className={`${Classes.section} ${dark && Classes.sectiondark}`}>
       <div className={ Classes.sectioncontext} id={id}>
         <h5>{title}</h5>
         <Card className={Classes.card}>
            <CardMedia  image={mobile} className={Classes.media} title="picture"/>
            <CardContent className={Classes.CardContent}content>
            <h5>{t("About.celu")}</h5>
        
             

         <h7>{t("About.cel")}</h7>





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