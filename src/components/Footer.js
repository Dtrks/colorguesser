import styled from "styled-components";
import Popup from "./Popup";
import { useState } from "react";

const Footer = (props) =>{

    return(
        <FooterContainer>
            <button onClick={()=>props.onShowPopup(true)}>How to play</button>
            <a href='mailto: albecen@gmail.com'><li>Contact</li></a>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.ul`
    height: 5rem;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none; 
    background: darkgray;
    position: absolute;
    left: 0;
    right: 0;
    padding: 0;
    margin: auto 15px 10px;
    border-radius: 20px;
    background: #124559;
    box-shadow: 5px 5px 10px black;

    a{
        text-decoration: none;
        color: black;
    }

    li{
        display: inline-block;
        margin: 3rem;
        color: white;
        font-size: 1.2rem;
    }

    button{
        background: transparent;
        border: 0;
        color: white;
        font-size: 1.2rem;
    }

`;