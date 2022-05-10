import React from 'react'
import "./Post.css"
import {Avatar,} from "@material-ui/core"
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from '@material-ui/icons'

function Post({displayName, username, verified, text, image, avatar}) {
  return (
    <div className='Post'>
        <div className='post__avatar'>
        <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
        </div>
        <div className='post__body'>
            <div className='post__header'>
                <div className='post__headerText'>
                    <h3>
                        Rafen Qazi {""}
                        <span className='post__headerSpecial'>
                        
                            <VerifiedUser className='post__badge' />
                            @rafenqazi
                        
                        </span>
                    </h3>
                </div>
                <div className='post__headerDiscription'>
                <p>I challange you to build a react clone twitter clone</p>
                </div>
            </div>
            <img src="https://media.giphy.com/media/AENSKyXiDYEzpZSKIr/giphy-downsized-large.gif" alt=""></img>
            <div className='post__footer'>
                <ChatBubbleOutline fontSize='small'/>
                <Repeat fontSize='small' />
                <FavoriteBorder fontSize='small' />
                <Publish fontSize='small' />
            </div>
        </div>
    </div>
  )
}

export default Post