import React from 'react'
import {Avatar, Button} from "@material-ui/core"
import "./TweetBox.css"

function TweetBox() {
  return (
    <div className='tweetBox'>
        <form>
            <div className='tweetBox__input'>
            <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
            <input placeholder='Whats happening..??'></input>
           
            </div>
            <input className='tweetBox__inputImage' placeholder='Optional Enter image URL'></input>

            <Button className='tweetBox__tweetButton'>Tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox