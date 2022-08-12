import React from 'react'
import './social_media.css'
import instagramIcon from './../../assets/instagram-logo.png'
import facebookIcon from './../../assets/facebook-logo.png'
import whatsappIcon from './../../assets/whatsapp-logo.png'

const SocialMedia = () => {
  return (
    <div className='dacris__social-media'>
      <ul className='dacris__social-media-list'>
        <li className="dacris__social-media-list-item"><a href=""><img src={instagramIcon} alt="instagram-icon" /></a></li>
        <li className="dacris__social-media-list-item"><a href=""><img src={facebookIcon} alt="facebook-icon" /></a></li>
        <li className="dacris__social-media-list-item"><a href=""><img src={whatsappIcon} alt="whatsapp-icon" /></a></li>
      </ul>
    </div>
  )
}

export default SocialMedia