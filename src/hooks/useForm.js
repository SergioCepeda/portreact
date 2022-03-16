
import { useState } from 'react';
import {helpHttp} from "../helpers/helpHttp"

export const useForm = (initialForm,validationForm) => {
const [form, setForm] = useState(initialForm);
const [errors, setErrors] = useState({});
const [loading, setLoading ] =useState(false);
const [response, setResponse] = useState(null);

const handleChange=(e)=>{
    e.preventDefault()
    const {name, value} =e.target;
    setForm({
        ...form,
        [name]:value
    })
}

const handleBlur=(e)=>{
    e.preventDefault()
    handleChange(e);
    setErrors(validationForm(form));
}

const handleSubmit=(e)=>{    
e.preventDefault();
setErrors(validationForm(form));

if(Object.keys(errors).length === 0 ){
 alert("Enviando mensaje");
 setLoading(true);
 helpHttp()
 .post("https://formsubmit.co/ajax/798b593a5064d58a8a91cead09509c5f",{
     body:form,
     headers:{
         "Content-type": "application/json",
         Accept: "application/json"
     },

 })
 .then(res=>{
     setLoading(false);
     setResponse(true);
     setForm(initialForm);
     setTimeout(() => setResponse(false),2000);
 })
}else{
    return;
}

}

return {
    form,
    errors,
    loading,
    response,
    handleChange,
     handleBlur,
     handleSubmit,
}


}
