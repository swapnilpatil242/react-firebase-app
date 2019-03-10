import React from 'react';
import './Footer.css'
import LinkedInLogo from '../../assets/images/linkedin-logo.png'
import SkypeLogo from '../../assets/images/skype-logo.svg'
import TwitterLogo from '../../assets/images/twitter-logo.svg'

const Footer = () => {
  return (
    <div className="Footer">
      <div className="SocialIcons">
        <img src={LinkedInLogo} className="FooterSocialLogo" alt="linked-in-logo" />
        <img src={SkypeLogo} className="FooterSocialLogo" alt="sky-logo" />
        <img src={TwitterLogo} className="FooterSocialLogo" alt="sky-logo" />
      </div>
      <h2 className="FooterCopyRightLab">©2019 SAP. All rights reserved.</h2>
    </div>
  );
}

export default Footer;