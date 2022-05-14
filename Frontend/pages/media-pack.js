import React, { useState, useEffect } from "react";
import Head from "../components/Heads";
import Button from "@material-ui/core/Button";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import MediaCard from "../components/MediaCard"
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Link from "../src/Link";
import SignUp from "../components/SignUp";
import Layout from "../components/Layout";



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "flex-wrap": "wrap",
    "justify-content": "center",
    "& > *": {
      margin: theme.spacing(10),
    },
  },

}));

export default function mediaPack() {

  const [media, setmedia] = useState([]);

  useEffect(() => {
    
    let api_url = `${process.env.NEXT_PUBLIC_API_KEY}/getMedia`;

    const getMedia = (api_url) => {
      fetch(api_url)
        .then((response) => response.json())
        .then((json) => setmedia(json.Items))
        .catch((err) => {
          console.log("Error Reading data " + err);
        });
    };
    getMedia(api_url);
  }, []);


  const classes = useStyles();
  console.log(media);
  
  return (
    <div>
      <Head title={"Media Pack"} />
      <Layout> 
      <div className="desktop" className={classes.root}>
      <Card style={{minWidth: "400px",
                    alignContent: "center",   
                        }}>
      <CardContent>
      <Link href="donateWindow">
      <Button
            variant="contained"
            style={{
              background: "black",
              color: "white",
              fontSize: "24px",
              width: "200px",
              height: "65px",
              fontFamily: "Roboto",
              fontWeight: "700",
              lineHeight: "32px",
            }}>
        DONATE NOW
      </Button>
      </Link>

      <Typography paragraph style={{ fontSize: "20px", marginTop: "10px"}}>Banking details</Typography>
      <Typography paragraph style={{ fontSize: "20px"}}>                 
        Nedbank
        <br />
        The Trails
        <br />
        Account Number xxxxxxxx
        <br />
        Branch Number
        <br />
        <br />
        Reference: Name, Surname
      </Typography>

      </CardContent>
      </Card>
      
        
          {media.map(
            (item) =>
              (
                <MediaCard
                  mediaTitle={item.title}
                  mediaLink={item.link}
                  mediaDesc={item.description}
                
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
                mediaLink={item.link}
                mediaDesc={item.description}
                />
              )
              )}
                 
        </div>
        <SignUp />
        
      </Layout>
    </div>
  );
}
