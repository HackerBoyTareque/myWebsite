import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import MainStyles from "./main.module.css";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

function Banner () {
    return(
        <div>
                <div className={MainStyles.body}>
                    <div className={MainStyles.banner}>
                        <div style={{height: window.innerHeight}}  className={MainStyles.bannerLeft}> 
                        </div>
                        <div className={MainStyles.bannerRight}>
                        </div>
                    </div>
                    <div style={{height: window.innerHeight}} className={MainStyles.bannerContent}>
                        <div className={MainStyles.bannerContentLeft}>
                            <div>
                            <h1>who is <br></br> tareque!!</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet natus quas necessitatibus. </p>
                            <Link>Download CV</Link>
                            </div>
                         </div>
                        <div className={MainStyles.bannerContentRight}>
                            <div className={MainStyles.img}>
                                <img className={MainStyles.img1} src="/myPhoto/img1.JPG" alt=""my photo/>
                            </div>
                        </div>  
                    </div>
                </div>
        </div>
    );
}


function Home() {
    return(
        <div>
            <div className={MainStyles.homeBody}>
                <div className={MainStyles.homeBodyItem}>
                    <div className={MainStyles.homeBodyItemLeft}>
                        <h1>nothing can change your life, until you are changing yourself</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                    </div>
                </div>
                <div className={MainStyles.homeBodyItem}>
                    <div className={MainStyles.homeBodyItemRight}>
                        <img className={MainStyles.homeBodyItemRightImg} src="/myPhoto/img1.JPG" alt="tae"/>
                    </div>
                    {/* <div className={MainStyles.homeBodyItemRightTopSection}>

                    </div> */}
                </div>
            </div>
        </div>
    );
}


function Common(props) {
    return(
        <div>
            <div className={MainStyles.workBody}>


                <div className={MainStyles.workTitle}>
                    <h1> {props.header} </h1>
                </div>
                <div className={MainStyles.workText}>
                    <p>{props.text}</p>
                    
                </div>


                


            </div>
            
        </div>
    );
}


const Gallery = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };



    return(
        <div>
            <Slider {...settings}>
                <div>

                    <div className={MainStyles.galleryItem}>
                        <div className={MainStyles.GalleryImg}>
                            <img src="/AddedIcon/email.png"/>
                            <div className={MainStyles.overlay}>
                                <p className={MainStyles.galleryItemWorkTitle}>Work title</p>
                                <p className={MainStyles.galleryItemWorkDetails}>Details inn.....</p>

                            </div>         
                        </div>
                        
                    </div>
                </div>

                <div className={MainStyles.galleryMain}>

                    <div className={MainStyles.galleryItem}>
                        <div className={MainStyles.GalleryImg}>
                            <img src="/AddedIcon/facebook.png"/>  
                            <div className={MainStyles.overlay}>
                            <p className={MainStyles.a}>Details inn.....</p>    
                            </div>        
                        </div>
                        
                    </div>
                </div>

                <div className={MainStyles.galleryMain}>

                    <div className={MainStyles.galleryItem}>
                        <div className={MainStyles.GalleryImg}>
                            <img src="/AddedIcon/telegram.png"/>  
                            <div className={MainStyles.overlay}>hellolkoliuoiui</div> 
                        </div>
                          
                    </div>
                </div>

         
            </Slider>
        </div>
    );

}


function Ga() {
    return(
        <div>
            <div className={MainStyles.container}> 

                <div className={MainStyles.image_sliderFade}> 
                    <img src="/myPhoto/h.jpg"  style={{width: "100%"}}/> 
                    <div class="text">Image caption 1</div> 
                </div> 
                <div className={MainStyles.image_sliderFade}> 
                    <img src="/myPhoto/h.jpg"  style={{width: "100%"}}/> 
                    <div class="text">Image caption 1</div> 
                </div> 
                <div className={MainStyles.image_sliderFade}> 
                    <img src="/myPhoto/h.jpg"  style={{width: "100%"}}/> 
                    <div class="text">Image caption 1</div> 
                </div> 
                <div className={MainStyles.image_sliderFade}> 
                    <img src="/myPhoto/h.jpg"  style={{width: "100%"}}/> 
                    <div class="text">Image caption 1</div> 
                </div> 
                
                {/* <div class="image-sliderfade fade"> 
                    <img src="img2.jpg" style="width:100%"> 
                    <div class="text">Image caption 2</div> 
                </div>  */}
                
                {/* <div class="image-sliderfade fade"> 
                    <img src="img3.jpg" style="width:100%"> 
                    <div class="text">Image caption 3</div> 
                </div>  */}
                
                {/* <div class="image-sliderfade fade"> 
                    <img src="img3.jpg" style="width:100%"> 
                    <div class="text">Image caption 4</div> 
                </div>  */}
  
            </div> 
        </div>
    );
}


const Expertise = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };

      const[intem, setItem] = useState([
          {
              name: "web development",
              details: "someting is equal nothing",
              logo: "",
              number: "1"
          },
          {
            name: "web development",
            details: "someting is equal nothing",
            logo: "",
            number: "1"
        },
        {
            name: "web development",
            details: "someting is equal nothing",
            logo: "",
            number: "1"
        },
        {
            name: "web development",
            details: "someting is equal nothing",
            logo: "",
            number: "1"
        },
      ])
  
    return(
        <div>

        <Slider {...settings}>




            {intem.map(i=>(
                <div>
                    <div className={MainStyles.expertMain}>
                            <div className={MainStyles.expertImgBody}>
                                <span> {i.number} </span>
                                <img src="/AddedIcon/youtube.png" />
                            </div>
                            <div className={MainStyles.expertHeader}>
                                <p>{i.name}</p>
                            </div>
                            <div className={MainStyles.expertText}>
                                <p> {i.details} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.</p>
                            </div>

                    </div>
             </div>
            ))}
         
        </Slider> 

        </div>
    );
}




function Contact() {
    return(
        <div>
            <div className={MainStyles.contactMain}>
               
                    <div className={MainStyles.contactForm}>
                        <p>mail to hire me</p>
                        <form>
                            <input type="text" placeholder="Your Full-Name:"></input>
                            <input type="text" placeholder="Subject:"></input>
                            <input type="text" placeholder="Your Mail Address:"></input>
                            <textarea placeholder="Your mail"></textarea>
                            <input className={MainStyles.contactBtn} type="submit" value="Send"></input>
                        </form>
                    </div>
              
            </div>

        </div>
    );
}



const Footer = () => {

 const [socialMedia,setName] = useState([
    {
        logo: "/shotIcon/facebook.png",
        destination: "http://wwww.facebook.com"
    },
    {
        logo: "/shotIcon/instagram.png",
        destination: "http://wwww.instagram.com"
    },
    {
        logo: "/shotIcon/github.png",
        destination: "http://wwww.github.com"
    },
    {
        logo: "/shotIcon/linkedin.png",
        destination: "http://wwww.linkedin.com"
    },
    {
        logo: "/shotIcon/snapchar.png",
        destination: "http://wwww.snapchat.com"
    },
    {
        logo: "/shotIcon/twitter.png",
        destination: "http://wwww.twitter.com"
    },
    {
        logo: "/shotIcon/vimeo.png",
        destination: "http://wwww.vimeo.com"
    },
    {
        logo: "/shotIcon/youtube.png",
        destination: "http://wwww.youtube.com"
    }
 ])
 const[profile, setProfie] = useState([
     {
         name: "bugcroud",
         destination:"#"
     },
     {
        name: "Geeksforgeeks",
        destination:"#"
    },
    {
        name: "coderforce",
        destination:"#"
    },
    {
        name: "hackerrank",
        destination:"#"
    },
    {
        name: "udemy",
        destination:"#"
    }
 ])


    return(
        <div>
            <div className={MainStyles.footerBody}>
                <div className={MainStyles.footerItem}>
                    <p className={MainStyles.footerTitle}>About Tareque</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro consectetur ut hic ipsum et veritatis corrupti. Itaque eius soluta optio dolorum temporibus in, atque, quos fugit sunt sit quaerat dicta.</p>
                </div>
                <div className={MainStyles.footerItem}>
                    <p className={MainStyles.footerTitle}> Know me more </p>
                    
                    {profile.map(profileItem =>(
                        <p><a href={profileItem.destination}> {profileItem.name} </a></p>
                    ))}

                </div>
                <div className={MainStyles.footerItem}>
                        <p className={MainStyles.footerTitle}>follow me</p>
                        <div className={MainStyles.footerContact}>
                            {socialMedia.map(item =>(
                               <div className={MainStyles.footerContactItem}> <a href={item.destination}> <img src={item.logo}/> </a> </div>
                            ))} 

                        </div>
                </div>

            </div>
        </div>
    );
}




class Main extends Component {
    // super()
    state={
        work:{
            header: "My Best Work",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi."
        },
        expert:{
            header: "My Expertise",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi."
        },
        projects:{
            header: "my project",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi."
        },
        expertise:[
            {
                name: "Business Analysis",
                logo: "",
                details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi."
            
            },
            {
                name: "Web Design",
                logo: "",
                details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi."
            
            },
            {
                name: "Web Development",
                logo: "",
                details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi."
            
            },
            {
                name: "Cyber Security",
                logo: "",
                details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi."
            
            },
            {
                name: "BlockChain",
                logo: "",
                details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem possimus distinctio ex. Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa dolore molestias blanditiis consequuntur sunt nisi."
            
            }
        ]
        
    }



    render() {
         const {expertise} = this.state; 
        return (
            <div className={MainStyles.mainBody}>
                <div className={MainStyles.mainItem}>
                    <Banner/>
                </div>
                <div className={MainStyles.mainItem}>
                    <Home/>
                </div>
                
                <div className={MainStyles.mainItem}>
                    <Common header={this.state.work.header} text={this.state.work.text} ></Common>
                    <Gallery/>
                </div>

                <div className={MainStyles.mainItem}>
                    <Common header={this.state.expert.header} text={this.state.expert.text}></Common>
                    <div className={MainStyles.mainItemSubBody}>
                        <Expertise/>
                    </div>
                    
                </div>

                <div className={MainStyles.mainItem}>
                    <Common header={this.state.projects.header} text={this.state.projects.text}></Common>
                    {/* {expertise.map} */}
                    <Expertise/>
                </div>
                
                <div className={MainStyles.mainItem}>
                    <Contact/>
                </div>
                <div >
                    <Ga/>
                </div>
                <div className={MainStyles.mainItem}>
                    <Footer/>
                </div>
                
                


            </div>
        );
    }
}

export default Main;