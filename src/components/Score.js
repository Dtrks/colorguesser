import styled from "styled-components";
import { useState, useEffect } from "react";

const Score = (props) => {

    const [firstRender, setFirstRender] = useState(true);

    
    useEffect(()=>{
        if(props.counter>0){
            setFirstRender(false);
        }
    }, [props.counter])

    return(
        <StyledScoreDiv>
            <label key={props.counter} className= {`${(props.correct) ? 'positive' : firstRender ? '' : 'negative'}`}>Score: {props.score}</label>
            <label className= {`${(props.newMax)  ? 'positive' : ''}`}>Maximum Score: {props.maxScore}</label>
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

    .positive{
        animation: correct 0.4s ease-in-out 2 alternate;
    }

    .negative{
        animation: wrong 0.4s ease-in-out 2 alternate;
    }

    @keyframes correct {
        100%{
            color: white;
            background: green;
            transform: scale(1.5);
            border-bottom: 2px solid green;
            border-radius: 10px;
        } 
    }

    @keyframes wrong {
        100%{
            color: white;
            background: red;
            transform: scale(1.5);
            border-bottom: 2px solid red;
            border-radius: 10px;
        } 
    }
`;