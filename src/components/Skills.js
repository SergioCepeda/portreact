import React from 'react'
import { makeStyles, Typography } from "@material-ui/core";
import Technologies from "./Technologies"

const Skills = ({title, dark, id}) => {
  const Classes = useStyles();
  return (
    <div className={`${Classes.section} ${dark && Classes.sectiondark}`}>
      <div className={ Classes.sectioncontext} id={id}>
         <Typography variant='h5'>{title}</Typography>
         <Technologies />
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
  }
}))

export default Skills