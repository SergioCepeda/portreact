import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import Sergio from "../images/Sergio.jpg";
import spain from "../images/spain.png";
import eeuu from "../images/eeuu.png";

import pdf from "../images/CV.pdf.pdf";
import { useTranslation} from "react-i18next";

 
const About = ({title, dark, id}) => {
  const [t, i18n] = useTranslation('global');
  const Classes = useStyles();
  return (
    <>
    <div className={`${Classes.section} ${dark && Classes.sectiondark}`}>
        
            <div class="row">
            <div class="col-4">
            <button  type="button" class="btn btn-warning float-left"  onClick={()=> i18n.changeLanguage("es")}><img src={spain} alt="no fount"/></button>
               <button type="button"  class="btn btn-primary float-left" onClick={()=> i18n.changeLanguage("en")}><img src={eeuu} alt="no fount"/></button>
               </div>
               </div>
           
      
       <div className={ Classes.sectioncontext} id={id}>
         <Typography variant='h5'>{title}</Typography>
         <Card className={Classes.card}>
            <CardMedia  image={Sergio} className={Classes.media} title="picture"/>
            <CardContent className={Classes.CardContent}content>
              <h1
              
               
                >{t('About.Text')}
                </h1>
               <h2>{t('About.title')}</h2>
            

            <Typography variant="h7" color= "textSecondary"  textStyle={{fontSize:"0.1rem"}}>
              {t('About.p')}
 
            </Typography>
       





            </CardContent> 

            <CardActions>
             <Button variant="contained"  className={Classes.pdfbutton}>
             <a href={pdf} download>
            {t('About.cv')} 
             </a>
             </Button>
            </CardActions>

         </Card>
       </div>
    </div>
    </>
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
    width: "500px",
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

export default About