import React from 'react';
import "./Widgets.css";
import Search from '@material-ui/icons/Search'
import {TwitterTweetEmbed, TwitterTimelineEmbed} from "react-twitter-embed"

function Widgets() {
  return (
    <div className='widgets'>
        <div className="widgets__input">
          <Search className="widgets__searchIcon"/>
          <input placeholder="Search Twitter" type="text" />
        </div>
        <div className="widgets__widgetContainer">
          <h2>Whats happening</h2>
          <TwitterTweetEmbed tweetId={"1516773573976739846"} />
          <TwitterTimelineEmbed sourceType="profile" 
          screenName="raini_coin"
          options={{height: 400}}
          />
          
        </div>
    </div>
  )
}

export default Widgets