import { createTheme, makeStyles, MuiThemeProvider} from "@material-ui/core";
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



import { red } from "@material-ui/core/colors";

const theme = createTheme({
  palette:{
    primary: {main : red[500]},
    secondary:{main:"#333"}
  
  },
});


function App() {
  
  const Classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
    <div className={Classes.root}>
     <Navbar/>
     <About  title="Sobre mi" id= "about"   dark={true}/>
     <Skills  title="Mis habilidades"  id= "skill"  dark={false} />
     <MyWork  title="Mi trabajo" id= "mywork"   dark={true}/>   
      <TA  title="TA" id= "ta"   dark={false}/>
      <Level title="Level" id="nivel" dark={true}/>
      <FullStack title="FullStack" id="fullstack" dark={false} />
      <Mobile title="Mobile" id="mobile" dark={true}/>
    <Habilidades  title="Habilidades" id="habilidades" dark={false}/>
    <Experiencia  title="Experiencia" id="experiencia" dark={true}/>
    <Contact  title="Contactame" id= "contact"   dark={false}/> 
    </div>
     </MuiThemeProvider>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
   
  }
}))

export default App;
