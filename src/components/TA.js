
import {  makeStyles, Typography } from "@material-ui/core";

import Carrucel from "./Carrucel";


const TA = ({title, dark, id}) => {
    const Classes = useStyles();
  return(
    <div className={`${Classes.section} ${dark && Classes.sectiondark}`}>
    <div className={ Classes.sectioncontext} id={id}>
      <Typography variant='h5'>{title}</Typography>

         <Typography variant="h7" color= "textSecondary"  textStyle={{fontSize:"0.1rem"}}>
            Fui teacher assistant a nivel de todo latinoamerica de un grupo de 21 engineer software
            en donde logramos la integracion de los profesionales y la resolucion de problemas 
            de algoritmos y programacion. Promoviendo el pair programming y el trabajo en equipo.
             Logrando que cada uno de los integrantes consiga su maximo potencial y esten preparados
            para trabajar en cualquier equipo destacandose tanto en lo tecnico como en lo humano.
         </Typography>

         <Carrucel/>
    
 
      
      
          




    

   
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
      height: "80vh",
      display:"flex",
      marginTop: theme.spacing(2),
      position: "relative",
    },
    media : {
      width: "1000px",
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
      }
  
  
  }))

export default TA;