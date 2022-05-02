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
                text= "Hola, Soy Sergio"
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
              Soy egresado del bootcamp de Henry y estudiante de ingeniera en la computación, soy una persona apasionada por lo que hago. Tengo experiencia con stack MERN Y PERN,cuento con
              experiencia como freelance de mas de dos años y medio tambien desarrollando  proyectos en equipo, como tambien de forma individual tratando directamente con el cliente. Fui TA de un grupo de 21 profesionales,
              en donde logre la integracion de los mismos, la resolucion de problemas y la creacion de proyectos. Me considero una persona responsable, con una gran capacidad de trabajo y una gran capacidad de adaptacion. 
              Soy una persona que siempre esta dispuesta a aprender y me gusta mucho la tecnologia, me gusta mucho el desarrollo del software y la creacion de proyectos.
 
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