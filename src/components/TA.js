
import {  makeStyles} from "@material-ui/core";
import { useTranslation} from "react-i18next";
import Carrucel from "./Carrucel";


const TA = ({title, dark, id}) => {
    const Classes = useStyles();
    const [t, i18n] = useTranslation('global');
  return(
    <div className={`${Classes.section} ${dark && Classes.sectiondark}`}>
    <div className={ Classes.sectioncontext} id={id}>
      <h3>{t("About.ta")}</h3>

    <h6>{t('About.TAS')} </h6>

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
      maxWidth:"60vw",
      margin: "0 auto",
    },
    card:{
      height: "20vh",
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
      }
  
  
  }))

export default TA;