import React, { Component } from 'react';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import GallerStyles from "./gallery.module.css";





// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";


class Gallery extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
          };
        return (
            <div>
                



              
        <Slider {...settings}>
            <div className={GallerStyles.galleryMain}>

                <div className={GallerStyles.galleryItem}>
                    <div className={GallerStyles.img}>
                        <img src="/AddedIcon/email.png"/>
                        <div className={GallerStyles.overlay}>hello</div>         
                    </div>
                    
                </div>
            </div>

            <div className={GallerStyles.galleryMain}>

                <div className={GallerStyles.galleryItem}>
                    <div className={GallerStyles.img}>
                        <img src="/AddedIcon/facebook.png"/>         
                    </div>
                    
                </div>
            </div>

            <div className={GallerStyles.galleryMain}>

                <div className={GallerStyles.galleryItem}>
                    <div className={GallerStyles.img}>
                        <img src="/AddedIcon/telegram.png"/>         
                    </div>
                    
                </div>
            </div>

            <div className={GallerStyles.galleryMain}>

                <div className={GallerStyles.galleryItem}>
                    <div className={GallerStyles.img}>
                        <img src="/AddedIcon/vk.png"/>         
                    </div>
                    
                </div>
            </div>

            <div className={GallerStyles.galleryMain}>

                <div className={GallerStyles.galleryItem}>
                    <div className={GallerStyles.img}>
                        <img src="/AddedIcon/youtube.png"/>         
                    </div>
                    
                </div>
            </div>

            <div className={GallerStyles.galleryMain}>

                <div className={GallerStyles.galleryItem}>
                    <div className={GallerStyles.img}>
                        <img src="/AddedIcon/instagram.png"/>         
                    </div>
                    
                </div>
            </div>
          
        </Slider>





            </div>
        );
    }
}

export default Gallery;












