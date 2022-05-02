import React from 'react';
import html from "../images/html.png";
import css from "../images/css.webp";
import js from "../images/JS.png";
import react from "../images/react.png";
import redux from "../images/redux.png"
import reactRedux from "../images/react-redux.png";
import node from "../images/node.png";
import express from "../images/express.png";
import postgre from "../images/postgre.jpg"
import { Timeline, TimelineConnector, TimelineContent } from '@material-ui/lab'
import { TimelineItem, TimelineOppositeContent } from '@material-ui/lab';
import { TimelineSeparator } from '@material-ui/lab';
import { makeStyles, Paper, Typography } from '@material-ui/core';
import StarRating from './StarRating';
import mongo from "../images/logoMongo.jpg";
import Tailwind from '../images/Tailwind.jpg';
import Vue from "../images/vue.png";





const Technologies = () => {
    const classes = useStyles();
  
    const skills =     [
        {
      year: "2021",      
      src: html,
      title: "html",
      stars: 5,
    },
    {
        year: "2021",
        src: css,
        title: "css",
        stars: 4,
      },
      {
        year: "2021",
        src: js,
        title: "JavaScripts",
        stars: 5,
      },
      {
        year: "2021",  
        src: react,
        title: "React.js",
        stars: 5,
      },
      {
        year: "2021",
        src: Tailwind,
        title: "Tailwind CSS",
        stars: 4,

      },
      {
          year:"2022",
          src: redux,
          title: "Redux",
          stars: 4
      },
      {
          year:"2022",
          src: reactRedux,
          title: "react-redux",
          stars:4,
      },
      {
          year:"2022",
          src: Vue,
          title: "Vue.js",
          stars:3,
      },
      {
        year: "2022",  
        src: node,
        title: "Node.js",
        stars:4,
      },
      {
      year: "2022",    
      src:express,
      title: "Express.js",
      stars:4 
      },
      {
          year: "2022",
          src: postgre,
          title: "PostgreSQL",
          stars:4,
      },

      {
        year: "2022",
        src: mongo,
        title: "MongoDB",
        stars:4,

      }
   


];


  return (
  <Timeline align="left">
      {
        skills.map(({year, src, title, stars},index)=>(
           <TimelineItem key={index}>
              <TimelineOppositeContent>
                  <Typography variant="h6" color="textSecondary">
                    {year}
                  </Typography>
              </TimelineOppositeContent>
              <TimelineSeparator>
                
                  <img src={src} alt={title} className={classes.customlogo}/>
                 
              <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                  <Paper elevation={8} className={classes.paper}>
                  <Typography variant="h6" component="h1" >
                      {title}
                  </Typography>
                  <StarRating stars={stars} />
                  </Paper>
              </TimelineContent>
           </TimelineItem>
        ))
      }
  </Timeline>
  )
}
const useStyles = makeStyles((theme) => ({
    customlogo: {
     width: "50px",
     objectFit:"contain"

    },
    paper:{
        padding:"6px-16px",
        maxWidth:"200px",
    }
  }))

export default Technologies