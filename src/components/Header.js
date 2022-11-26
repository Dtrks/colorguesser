import styled from 'styled-components';


const Header = (props) => {

    return(
        <StyledHeader>
            <h1 className='header-title'>GUESS THE COLOR!</h1>
        </StyledHeader>
    );
}

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    background: #124559;
    color: white;
    border-radius: 10px;
    box-shadow: 5px 5px 10px black;
    text-align: center;

    .header-title{
        font-family: 'Roboto Condensed', sans-serif;
        font-size: 2.8rem;
        letter-spacing: 0.8rem;
        word-spacing: 0.6rem;
        color: white;
        font-weight: 700;
    }

    @media (max-width: 720px) {
        .header-title{
            font-size: 5vw;
        }


    }
`;

export default Header;