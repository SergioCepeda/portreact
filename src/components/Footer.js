import { useTranslation} from "react-i18next";
import {makeStyles} from "@material-ui/core";

const Footer = () => {
  const Classes = useStyles();
  const [t, i18n] = useTranslation('global');
   return(
       
       <div >
         <footer className="text-white py-4 bg-dark" >
         <div className="container">
         <nav className={Classes.section}>
         <p  className="col-12 col-md3 d-flex aling-items-center justify-content-center">
                  <h3> {t("About.visit")} : <a href="https://www.linkedin.com/in/sergio-cepeda-dev/" target="_BLANK" rel="noreferrer">LinkedIn</a> {t("About.and")} <a href="https://github.com/SergioCepeda" target="_BLANK" rel="noreferrer">GitHub</a>! {t("About.thank")} </h3>
                </p>

                </nav>
                </div>
         </footer>

       </div>

   )


}

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "30h",
   
  },
  
  sectioncontext:{
    maxWidth:"80vw",
    margin: "0 auto",
  },
  footer:{
    height: "70px",
  },

 
  }));




export default Footer;