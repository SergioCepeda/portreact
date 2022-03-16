import React from 'react'
 import { useForm } from '../hooks/useForm';
import Loader from './Loader'
import Messaje from './Messaje';

import { makeStyles ,Typography, Paper} from '@material-ui/core';

 const initialForm={
   name:"",  
   email:"",
   subject:"",
   comments:"",
 };
 const validationForm=(form)=>{
   let errors={};  
   let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
   let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
   let  regexComments = /^.{1,255}$/;



   if(!form.name.trim()){
    errors.name = "El campo nombre es requerido";  
   }else if(!regexName.test(form.name.trim())){
     errors.name = "El campo nombre solo acepta letras y espacios en blanco"  
   };

   if(!form.email.trim()){
     errors.email="El campo email es requerido"  
   }else if(!regexEmail.test(form.email.trim())){
     errors.email ="El campo email es incorrecto"  
   };

   if(!form.subject.trim()){
     errors.subject="El campo asunto a tratar es requerido"  
   }
   if(!form.comments.trim()){
     errors.comments="El campo comentarios es requerido"  
   }else if(!regexComments.test(form.comments.trim())){
     errors.comments = "El campo cometarios no debe exceer 255 caracteres"  
   }
  

   return errors; 
 }; 

let styles ={
  fontWeight:"bold",
  color:"#FFAC47"  
}
 

const Contact = ({title, dark, id}) => {

  const Classes = useStyles();



   const {  
    form,  
    errors,
    loading,
    response,
    handleChange,
     handleBlur,
     handleSubmit,
   } = useForm(initialForm, validationForm);



  return (
    <div className={`${Classes.section}${dark && Classes.sectiondark}`} >  
  
       <div className={Classes.sectioncontent} id={id} >
       <Typography variant="h5">{title}</Typography>
     <Paper className={Classes.root}>
     <div className={Classes.title}>
     <Typography  variant="h5">Enviame un mensaje</Typography> 
     <form className={Classes.form}  onSubmit={handleSubmit}>
    <input 
     type="text" 
     name="name" 
     placeholder='Escribe tu nombre' 
     onBlur={handleBlur} 
      onChange={handleChange} 
      value={form.name} 
      className={"form-control"}
      required

     />
     {errors.name && <p style={styles}>{errors.name}</p>}
     <input 
     type="email" 
     name="email" 
     placeholder='Escribe tu email' 
     onBlur={handleBlur} 
      onChange={handleChange} 
      value={form.email} 
      className={"form-control"}
      required

     />
 {errors.email && <p style={styles}>{errors.email}</p>}

 <input 
     type="text" 
     name="subject" 
     placeholder='Asunto a tratar' 
     onBlur={handleBlur} 
      onChange={handleChange} 
      value={form.subject} 
      className={"form-control"}
      required 
    

     />
     {errors.subject && <p style={styles}>{errors.subject}</p>}
     <textarea  className={Classes.text}   name="comments"  cols="50" rows="5" placeholder="Escribe tu mensaje"  onBlur={handleBlur}  onChange={handleChange} value={form.comments} required   >
 
     
</textarea>
 {errors.comments && <p style={styles}>{errors.comments}</p>}
 <div class="form-group row">
    <div class="col-sm-10"></div>
 <input className={Classes.buton}  color="secondary" variant="contained"   type="submit"  class="btn btn-primary"  value="Enviar"/>
 </div> 
         </form>
 </div>
                </Paper>        
         {loading && <Loader/>}
         {response && <Messaje msg="Tu mensaje fue enviado con exito." bgColor="#fff" />}
         
                     
                    
         <p className={Classes.enlace}>
                  <h3> Visita mi linkedin en : <a href="https://www.linkedin.com/in/sergio-cepeda-dev/" target="_BLANK" rel="noreferrer">LinkedIn</a> y mi github <a href="https://github.com/SergioCepeda" target="_BLANK" rel="noreferrer">GitHub</a>! Gracias por tu visita. </h3>
                </p>

        </div>
       
        </div>
     
  )
}

const useStyles = makeStyles((theme) => ({
  section: {
    minHeight: "100vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"cemter",
    alignItems:"center",




   
  },

 sectiondark:{
   background: "#333",
   color:"#fff",


   
 },
 root:{
   height:"600px",

   background:"#51D1F6",
   color:"#fff",
   fontSize:".0.8rem",
   maxWidth:"400px",
   display:"flex",
   flexDirection:"column",
   justifyContent:"center",
   alignItems:"center",
   marginTop: theme.spacing(1),
 
   
   
  },
  buton:{
   
    backgroundColor:"#fff",
    color:"#51D1F6",
    fontWeight:"900",
    fontSize: "0.7rem",
    borderColor: "#51D1F6",
   //  marginTop: theme.spacing(4),
    cursor:"pointer",
    padding: theme.spacing(-10),
    marginTop: theme.spacing(4),
   
  },



 sectioncontent:{
   maxWidth:"100vw",
   display:"flex",
   flexDirection:"column",
   
   
   


 },
 
 form:{
   display:"flex",
   flexDirection:"Column",
   marginTop: theme.spacing(3),
 
   "& input ":{
     marginBottom: theme.spacing(1),
     marginTop: theme.spacing(2),
     height:"20px",
     width:"250px",
     
   },
 },
 text:{
   marginTop: theme.spacing(6),
   height:"100px",
   width:"250px"
   
  },
  enlace:{
    marginTop: theme.spacing(5)
  },
  
  title:{
    "& h5":{
      marginTop: theme.spacing(3),
      height:"50px",
      padding: theme.spacing(0),
      [theme.breakpoints.down("sm")]:{
        display:"none",
       },
      
    },
  
    
  },

  
}))





export default Contact



// import React from 'react';
// import { useForm } from '../hooks/useForm';
// import Loader from './Loader';
// import Messaje from './Messaje';


// const initialForm={
//   name:"",
//   email:"",
//   subject:"",
//   comments:"",
// };
// const validationForm=(form)=>{
//   let errors={};
//   let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
//   let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
//   let  regexComments = /^.{1,255}$/;



//   if(!form.name.trim()){
//    errors.name = "El campo nombre es requerido";
//   }else if(!regexName.test(form.name.trim())){
//     errors.name = "El campo nombre solo acepta letras y espacios en blanco"
//   };

//   if(!form.email.trim()){
//     errors.email="El campo email es requerido"
//   }else if(!regexEmail.test(form.email.trim())){
//     errors.email ="El campo email es incorrecto"
//   };

//   if(!form.subject.trim()){
//     errors.subject="El campo asunto a tratar es requerido"
//   }
//   if(!form.comments.trim()){
//     errors.comments="El campo comentarios es requerido"
//   }else if(!regexComments.test(form.comments.trim())){
//     errors.comments = "El campo cometarios no debe exceer 255 caracteres"
//   }
  

//   return errors; 
// }; 

// function Contact({id, title}) {

     
//   const {  
//     form,
//     errors,
//     loading,
//     response,
//      handleChange,
//      handleBlur,
//      handleSubmit,
//   } = useForm(initialForm, validationForm);

//   return (
//     <div>
//     <div id={id}>
//     <h2>{title}</h2>
//     <form onSubmit={handleSubmit}>
//     <input 
//     type="text" 
//     name="name" 
//     placeholder='Escribe tu nombre' 
//     onBlur={handleBlur} 
//      onChange={handleChange} 
//      value={form.name} 
//      required

//     />
//     {errors.name && <p>{errors.name}</p>}

// <input 
//     type="email" 
//     name="email" 
//     placeholder='Escribe tu email' 
//     onBlur={handleBlur} 
//      onChange={handleChange} 
//      value={form.email} 
//      required

//     />
// {errors.email && <p>{errors.email}</p>}
//     <input 
//     type="text" 
//     name="subject" 
//     placeholder='Asunto a tratar' 
//     onBlur={handleBlur} 
//      onChange={handleChange} 
//      value={form.subject} 
//      required

//     />
//     {errors.subject && <p>{errors.subject}</p>}
//     <textarea
//      name="comments" 
//      cols="50"
//      rows ="5" 
//      placeholder="Escribe tu mensaje">
//      onBlur={handleBlur} 
//      onChange={handleChange} 
//      value={form.comments} 
//      required
//     </textarea>
//     {errors.comments && <p>{errors.comments}</p>}
//       <input type="submit" value="Enviar"/>
//     </form>
//     {loading && <Loader/>}
//     {response && <Messaje msg="los datos han sido enviados" bgColor="#198754"/>}
   
//     </div>
//     </div>
//   )
// }




// export default Contact




