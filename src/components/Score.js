import styled from "styled-components";

const Score = (props) => {


    return(
        <StyledScoreDiv>
            <label class='score'>Score: {props.score}</label>
            <label class='score'>Maximum Score: {props.maxScore}</label>
        </StyledScoreDiv>
    )
}

export default Score;

const StyledScoreDiv = styled.div`
    display: flex;
    text-align: center;
    justify-content: space-around;
    margin-top: 4rem;
    margin-bottom: auto;

    label{
        font-size: 1.7rem;
        border-bottom: 2px solid black;
    }
    

`;