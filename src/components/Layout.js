import styled from "styled-components";

const Layout = (props) => {
    return(
        <MainContainer>
            <div className='mainbox'>
                {props.children}
            </div>
        </MainContainer>        
    )
}

export default Layout;

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 100vh;

    .mainbox{
        height: 100%;
        padding: 1rem;
        background: #d3d3d380;
        backdrop-filter: blur(3rem);
        z-index: 1;
        border-radius: 20px;
        box-shadow: -10px 10px 10px 0px darkgray, 
                    10px 10px 10px 0px darkgray;
                    position: relative;
        border: 1px solid darkgray;
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

