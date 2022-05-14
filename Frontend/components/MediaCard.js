import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import ReactPlayer from "react-player";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 720,
    minWidth: 200,
    minHeight:500,
    marginTop: 30,
    marginBottom: 30,
    marginRight: 40,

  },
  media: {
    left: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand:{
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
    }),
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }
}));

export default function RecipeReviewCard({
  mediaTitle,
  mediaLink,
  mediaDesc,
  location,
  mediaDate,
}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <ReactPlayer width={"720px"} height={"480px"} url={mediaLink}/>
        <CardHeader
        title={mediaTitle}
        titleTypographyProps={{variant:'h2' }}
        style={{textAlign: 'center'}}
      />
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Typography paragraph>Read more</Typography>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{mediaDesc}</Typography>
          
        </CardContent>
      </Collapse>

    </Card>
  );
}
