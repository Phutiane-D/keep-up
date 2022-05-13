import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import EventIcon from "@material-ui/icons/Event";
import VideoIcon from "@material-ui/icons/Videocam";
import WorkIcon from "@material-ui/icons/Work";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Link from "next/link";

export const mainListItems = (
  <div>
    <Link href="/dashboard/">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link href="/dashboard/projects">
      <ListItem button>
        <ListItemIcon>
          <WorkIcon />
        </ListItemIcon>
        <ListItemText primary="Projects" />
      </ListItem>
    </Link>
    <Link href="/dashboard/contributors">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Contributors" />
      </ListItem>
    </Link>
    <Link href="/dashboard/events">
      <ListItem button>
        <ListItemIcon>
          <EventIcon />
        </ListItemIcon>
        <ListItemText primary="Events" />
      </ListItem>
    </Link>
    <Link href="/dashboard/media-pack">
      <ListItem button>
        <ListItemIcon>
          <VideoIcon />
        </ListItemIcon>
        <ListItemText primary="Media-Pack" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ExitToAppIcon />
      </ListItemIcon>
      <ListItemText primary="Sign out" />
    </ListItem>
  </div>
);
