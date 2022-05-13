import React, { useState, useEffect } from "react";
import Head from "../components/Heads";
import Button from "@material-ui/core/Button";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MediaCard from "../components/MediaCard"
import Cookies from "js-cookie";
import SignUp from "../components/SignUp";
import Layout from "../components/Layout";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "flex-wrap": "wrap",
    "justify-content": "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },

}));

export default function mediaPack() {

  const [media, setmedia] = useState([]);

  useEffect(() => {
    
    let api_url = `${process.env.NEXT_PUBLIC_API_KEY}/getMedia`;

    const getContributors = (api_url) => {
      fetch(api_url)
        .then((response) => response.json())
        .then((json) => setmedia(json))
        .catch((err) => {
          console.log("Error Reading data " + err);
        });
    };
    getContributors(api_url);
  }, []);


  const classes = useStyles();
  
  return (
    <div>
      <Head title={"Media Pack"} />
      <Layout>
        <div className="desktop" className={classes.root}>

        <MediaCard
                  mediaTitle={"Dancing"}
                  mediaLink={"https://www.youtube.com/watch?v=CcNo07Xp8aQ"}
                  mediaDesc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                  
                />

        <MediaCard
                  mediaTitle={"Dancing"}
                  mediaLink={"https://www.youtube.com/watch?v=CcNo07Xp8aQ"}
                  mediaDesc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                  
                />
                  <MediaCard
                  mediaTitle={"Dancing"}
                  mediaLink={"https://www.youtube.com/watch?v=CcNo07Xp8aQ"}
                  mediaDesc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                  
                />

        <MediaCard
                  mediaTitle={"Dancing"}
                  mediaLink={"https://www.youtube.com/watch?v=CcNo07Xp8aQ"}
                  mediaDesc={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                  
                />

          {/*media.map(
            (item) =>
              (
                <MediaCard
                  mediaTitle={item.title}
                  mediaDate={item.date}
                  mediaDesc={item.description}
                  location={item.location}
                />
              )
          )}
        </div>
        <div className="mobile">
          {media.map(
            (item) =>
              (
                <MediaCard
                mediaTitle={item.title}
                mediaDate={item.date}
                mediaDesc={item.description}
                location={item.location}
                />
              )
              )*/}
                 
        </div>
        <SignUp />
        
      </Layout>
    </div>
  );
}
