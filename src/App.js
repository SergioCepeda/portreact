
import Navbar from './components/Navbar'
import About from "./components/About";
import Skills from "./components/Skills";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";
import TA from "./components/TA";
import Level from "./components/Level.js";
import FullStack from "./components/FullStack";
import Mobile from "./components/Mobile";
import  Habilidades from "./components/Habilidades";
import Experiencia  from "./components/Experiencia";
import { useTranslation} from "react-i18next";









function App() {
  
  
  const [t, i18n] = useTranslation('global');
  return (
  
    <div >
     <Navbar/>
      
     <About  title={t("About.name")} id= "about"   dark={true}/>
     <Skills  title={t("About.skill")}  id= "skill"  dark={false} />
     <MyWork  title={t("About.work")} id= "mywork"   dark={true}/>   
      <TA  title={t("About.ta")} id= "ta"   dark={false}/>
      <Level title={t("About.level")} id="nivel" dark={true}/>
      <FullStack title={t("About.stack")} id="fullstack" dark={false} />
      <Mobile title={t("About.mobile")} id="mobile" dark={true}/>
    <Habilidades  title={t("About.habilidades")} id="habilidades" dark={false}/>
    <Experiencia  title={t("About.experiencia")} id="experiencia" dark={true}/>
    <Contact  title={t("About.contactame")} id= "contact"   dark={false}/> 
      
    </div>
   
  );
}



export default App;
