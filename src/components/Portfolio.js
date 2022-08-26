import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
// import {info} from "../../info/Info";

let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

const info = {
  firstName: "Brian",
  lastName: "Lalli",
  initials: "bl", // the example uses first and last, but feel free to use three or more if you like.
  position: "a Program Manager",
  selfPortrait: "self", // don't change this unless you want to name your self-portrait in the "img" folder something else!
  gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
  baseColor: colors[0],
  portfolio: [
    // This is where your portfolio projects will be detailed
    {
      title: "Project 1",
      live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
      source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Project 2",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Project 3",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Project 4",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Project 5",
      live: "https://paytonpierce.dev",
      source: "https://github.com/paytonjewell",
      image: "https://via.placeholder.com/150",
    },
  ],
}

export default function Portfolio() {
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};

