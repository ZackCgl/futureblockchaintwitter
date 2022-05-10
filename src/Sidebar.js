import React from 'react';
import "./Sidebar.css";
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import { BookmarkBorder, ListAlt, MailOutline, MoreHoriz, PermIdentity } from '@material-ui/icons';
import {Button} from "@material-ui/core";


function Sidebar() {
  return (
    <div className="sidebar">
    
    <TwitterIcon className='sidebar__twitterIcon'/>


    <SidebarOption active Icon={HomeIcon} text="Home"/>
    <SidebarOption Icon={SearchIcon} text="Explore"/>
    <SidebarOption Icon={NotificationsIcon} text="Notification"/>
    <SidebarOption Icon={MailOutline} text="Messages"/>
    <SidebarOption Icon={BookmarkBorder} text="Bookmarks"/>
    <SidebarOption Icon={ListAlt} text="Lists"/>
    <SidebarOption Icon={PermIdentity} text="Profile"/>
    <SidebarOption Icon={MoreHoriz} text="More"/>
    

    {/*Tweets*/}
    <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar