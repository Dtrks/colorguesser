import styled from "styled-components";
import Popup from "./Popup";

const Layout = (props) => {
    return(
        <MainContainer>
            <div className='mainbox'>
                {props.children}
            </div>
            <Popup show={props.show} onClose={props.onClose}/>
        </MainContainer>        
    )
}

export default Layout;

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;
    position: relative;

    .mainbox{
        height: 100%;
        padding: 1rem;
        background: #d3d3d380;
        backdrop-filter: blur(1rem);
        z-index: 1;
        border-radius: 20px;
        position: relative;
    }

    @media(min-width: 1000px){
        .mainbox{
            width: 900px;
        }
    }

    @media(max-width: 999px){
        .mainbox{
            width: 100vw;
        }
    }
`;

