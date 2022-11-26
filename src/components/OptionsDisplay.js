import styled from "styled-components";
import { useState, useEffect } from "react";
import Score from './Score';

const OptionsDisplay = (props) => {

    const [options, setOptions] = useState([]);
    const [optionsLoaded, setOptionsLoaded] = useState(false);
    const [correctPosition, setCorrectPosition] = useState(0);

    useEffect(()=>{
        let position = Math.round(Math.random()*3);
        let options_array = [];

        for(let i = 0; i < props.maxOptions ; i++){
            if(i === position){
                options_array.push(props.color);
            }else{
                options_array.push(createRandomRGBColor());
            }    
        }

        setOptions(options_array);
        setCorrectPosition(position);
        setOptionsLoaded(true);
    }, [props.color])

    const createRandomRGBColor = () => {
        return [Math.round(Math.random()*255), 
            Math.round(Math.random()*255), 
            Math.round(Math.random()*255)];
    }


    const renderOptions = () => {
        return(
            options.map((option, index) => {
                let bk_color = `rgb(${option[0]},${option[1]},${option[2]})`;
                return(
                <ColorButton key={index} style={{background: bk_color}} onClick={() => props.onOptionSelected(index === correctPosition ? true : false)}></ColorButton>);
            })

        );
    }


    return(
            <Options>
                {optionsLoaded ? renderOptions() : ''}      
            </Options>
    )
}

export default OptionsDisplay;

const Options = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-top: 2rem;
    flex-wrap: wrap;
    flex-basis: 30rem;

`;


const ColorButton = styled.button`
    width: 8rem;
    height: 8rem;
    border: 0px;
    border-radius: 15px;
    box-shadow: 5px 5px 5px darkgray;
    cursor: pointer;
    transition: 250ms ease-in-out;

    &:hover{
        transform: scale(1.4);
    }


`;





