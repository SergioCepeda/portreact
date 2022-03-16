import React from 'react'
import { CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import mockData from "../mockData";
import Grid from "@material-ui/core/Grid";
import Card from '@material-ui/core/Card';
import Link from '@material-ui/core/Link';

const MyWork = ({title, dark, id}) => {
  const Classes = useStyles();
  return (
    <div className={`${Classes.section} ${dark && Classes.sectiondark}`}>
          <div className={ Classes.sectioncontext} id={id}>
         <Typography variant='h5'>{title}</Typography>
         <Grid container className={Classes.grid}>
           {
             mockData.map(({title, image, link},index)=>(
              <Grid item key={index} xs={12} sm={6} md={4}>
                 <Card className={Classes.card}>
                   <CardMedia image={image} className={Classes.caratula} titulo="caratula"/>  
                   <CardContent>
                      <Link href={link} color="primary" target="_blank" rel="noopener noreferrer">
                        {title}
                      </Link>
                   </CardContent>

                 </Card>
              </Grid>
             ))
           }
         </Grid>
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
    maxWidth: "90vw",
    margin: "0 auto",
    padding: theme.spacing(10),
      
  },

  grid:{
 marginTop: theme.spacing(10),

  },
  card:{
    maxWidth:345,
    minHeight: 275,
    margin : theme.spacing(3),
  },
  caratula:{
    height: 0,
    paddingTop: "56.25%", //16:9
  },
 
}))


export default MyWork