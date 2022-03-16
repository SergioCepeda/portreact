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
              Soy egresado del bootcamp de  soyHenry, soy una persona apasionada por lo que hago. Tengo experiencia academica por el momento, participe
              de un proyecto grupal con 8 desarrollaores con metodologia scrum. Tambien eh realizado proyectos individuales que expongo en este portfolio.
              Me destaco por ser una persona empatica, sociable y respetuosa. Participe de un taller del gobierno de Buenos Aires sobre habilidades blandas, Tambien fui (TA)teaching Assintent
              maneje un grupo de 21 estudiantes de programacion para integrarlos, guiarlos con el codigo y fomentar el pair programing.
              Me encuentro todo el tiempo en constante aprendizaje, buscando ahora mi primera experiencia en el mundo IT.
 
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