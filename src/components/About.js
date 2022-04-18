import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import Sergio from "../images/Sergio.jpg";
import TypeWriterEffect from "react-typewriter-effect"
import pdf from "../images/CV.pdf.pdf"

 
const About = ({title, dark, id}) => {
  const Classes = useStyles();
  return (
   
    <div className={`${Classes.section} ${dark && Classes.sectiondark}`}>
       <div className={ Classes.sectioncontext} id={id}>
         <Typography variant='h5'>{title}</Typography>
         <Card className={Classes.card}>
            <CardMedia  image={Sergio} className={Classes.media} title="picture"/>
            <CardContent className={Classes.CardContent}content>
              <TypeWriterEffect
                text= "Hola, Soy Sergio Cepeda "
                textStyle={{fontSize:"1.5rem", fontWeight: "1000px", color: "#51d1f6"}}
                startDelay={100}
                cursorColor= "black"
                typeSpeed={100}

               />
               <TypeWriterEffect
                text= "Soy fullStack Developer"
                textStyle={{fontSize:"1.5rem", fontWeight: "900px"}}
                startDelay={3500}
                cursorColor= "#296cbc"
                typeSpeed={50}

               />

            <Typography variant="h7" color= "textSecondary"  textStyle={{fontSize:"0.1rem"}}>
              Soy egresado del bootcamp de  soyHenry y estudiante de ingeniera en la computación, soy una persona apasionada por lo que hago. Tengo experiencia con stack MERN Y PERN,cuento con
              experiencia como freelance y desarrollando dos proyectos. Uno desde el backend con stack PERN y el otro tambien desde el backend con stack MERN. Mi experiencia desde el frontend ah sido con
              react, redux, react-redux, material-ui. Soy una persona que se adapta para lograr conseguir los objetivos, cuento con experiencia en metologias agiles como scrum, manejo de jira y trello.
              
 
            </Typography>
       





            </CardContent> 

            <CardActions>
             <Button variant="contained"  className={Classes.pdfbutton}>
             <a href={pdf} download>
             Descarga mi CV
             </a>
             </Button>
            </CardActions>

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

export default About