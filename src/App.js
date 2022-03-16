import { createTheme, makeStyles, MuiThemeProvider} from "@material-ui/core";
import Navbar from './components/Navbar'
import About from "./components/About";
import Skills from "./components/Skills";
import MyWork from "./components/MyWork";
import Contact from "./components/Contact";



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
