import styled from "styled-components";

const Footer = () =>{

    return(
        <FooterContainer>
            <ul>
                <a href=''><li>How to play</li></a>
                <a href=''><li>Contact</li></a>
            </ul>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.div`
    margin-top: auto;
    margin-bottom: 0;

    ul{
        background: darkgray;
        display: flex;
        align-items: center;
        justify-content: space-around;
        list-style: none; 
    }

    a{
        text-decoration: none;
        color: black;
    }

`;