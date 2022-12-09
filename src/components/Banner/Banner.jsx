import React from 'react'
import BannerImage from "../../assets/header_banner_mobile.jpg"

const Banner = () => {
    return (
      <div className='banner__container'>
    <head>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7875012925810244"
        crossorigin="anonymous"
          ></script>
    <meta name="exoclick-site-verification" content="6cbbf0d64681894fb54e40d203db2370"/>
          
            </head>
            <div className="banner__img" style={{height: "10rem"}}>
                
            <img src={BannerImage} alt="banner" style={{
                width: "100%", height: "100%", objectFit: "cover", objectPosition: "bottom"
            }} />
            </div>
      </div>
  );
}

export default Banner