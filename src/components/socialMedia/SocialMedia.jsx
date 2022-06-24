import React from 'react'
import './social_media.css'
import instagramIcon from './../../assets/instagram-logo.png'
import facebookIcon from './../../assets/facebook-logo.png'
import whatsappIcon from './../../assets/whatsapp-logo.png'

const SocialMedia = () => {
  return (
    <div className="dacris__social-media">
      <ul className="dacris__social-media-list">
        <li className="dacris__social-media-list-item"><a href=""><img src={instagramIcon} alt="instagram-icon.png" /></a></li>
        <li className="dacris__social-media-list-item"><a href=""><img src={facebookIcon} alt="facebook-icon.png" /></a></li>
        <li className="dacris__social-media-list-item"><a href=""><img src={whatsappIcon} alt="instagram-icon.png" /></a></li>
      </ul>
    </div>
  )
}

export default SocialMedia