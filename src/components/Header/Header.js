import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderStyles from "./header.module.css";


function Navbar(props) {
    return(
        <div className={HeaderStyles.NavbarBody}>
                <ul>
                    <li> <NavLink style={{color:props.color}} to="/">home</NavLink></li>
                    <li> <NavLink style={{color:props.color}} to="/">work</NavLink></li>
                    <li> <NavLink style={{color:props.color}} to="/">process</NavLink></li>
                    <li> <NavLink style={{color:props.color}} to="/">services</NavLink></li>
                    <li> <NavLink style={{color:props.color}} to="/">blog</NavLink></li>
                    <li> <NavLink style={{color:props.color}} to="/">projects</NavLink></li>

                   
                </ul>
        </div>
    );
}

function ContactBtm() {
    return(
        <div className={HeaderStyles.contactBtn}>
                <button>Contact</button>
        </div>
    );
}






class Header extends Component {
    changingBackground = () => {
    
        var a =  window.scrollY;
        if(a <= 100){
             this.setState({scrolled:HeaderStyles.main});
             this.setState({color:'#fff'});
            
        }
        else{
            this.setState({scrolled:HeaderStyles.afterScrolled})
            this.setState({color:'#000'});
            // this.getElementsByClassName(".contactBtn button").style.color= "red";
        }
    }

    constructor(){

        super()
        this.state={
            scrolled: HeaderStyles.main,
            color: '#fff'
          
        }

      

    }

    render() {
        document.addEventListener("scroll", this.changingBackground)
        return (
            <div className={this.state.scrolled}>



                <div className={HeaderStyles.subMain}>

                    <div className={HeaderStyles.flexItemLeft}>
                    <Navbar color={this.state.color}/>
                    </div>

                    <div className={HeaderStyles.flexItemRight}>
                    <ContactBtm/>
                    </div>

                </div>
                

                

            </div>
        );
    }
}

export default Header;