import React from 'react'
 import { useForm } from '../hooks/useForm';
import Loader from './Loader'
import Messaje from './Messaje';
import Footer from './Footer';

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
   <>
    <div class="col-12 my-5">  
  
       <div class="mx-auto" style={{width: "220px", top:"50px"}} id={id} >
       <h1>{title}</h1>
    
     <h5>Enviame un mensaje</h5> 
     <form className='form'  onSubmit={handleSubmit}>
   
            <label  class="col-lg-1 control-label "></label>
              <div class="col-auto"></div>

    <input 
     type="text" 
     name="name" 
     placeholder='Escribe tu nombre' 
     onBlur={handleBlur} 
      onChange={handleChange} 
      value={form.name} 
      class="form-control"
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
 <div class="row g-3 align-items-center">
 <label  class="col-lg-1 control-label " ></label>
    <div class="col-auto">
 <button type="button"  ><input style={{borderRadius:"0.5px"}} class="btn btn-primary" type="submit"/></button>
 </div> 
 </div>   
 
         </form>
         {loading && <Loader/>}
         {response && <Messaje msg="Tu mensaje fue enviado con exito." bgColor="#fff" />}
         
                     
                    

        </div>
       
       </div>
        <Footer/>
       </>
     
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

  form:{
    background: "rgba(12, 143, 231)", 

    color: "rgb(255, 248, 248)",
    border: "1px solid #f1f1f1",
    borderRadius: "1rem",
    position: "absolute",  
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    Zindex: "2",
    width: "60%",
    padding: "20px"
   
},

  sectiondark:{
    background: "#333",
    color: "#fff",
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




