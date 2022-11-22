import styled from 'styled-components';
import { useState } from 'react';

const Popup = (props) => {

    return (props.show ? (
        <PopupStyle>
            <div className="inner-popup">
                <img className='rgb-image-example' src='./rgb-image.png'></img>
                <p>
                    RGB stands for Red, Green and Blue. Millions of colors can be created mixing those three and varying
                    the level each one has, which can go from 0 to 255. It is commonly expressed as: 
                </p>
                <p className='example'>
                    RGB(red_level, green_level, blue_level)
                </p>

                <p>
                    For example, RGB(255, 255, 0) will result in yellow color, while RGB(255, 0, 255) will create a pink color. 
                    The value on the left with the '#' character indicates the same but with hexadecimal values. The first two
                    values are the result of converting the red level to hex, and the same with the rest. It can vary from 00 to FF. 
                </p>

                <p>
                    The game consists on given a random color value, you have to choose the correct option from the four you can see. Good luck!
                </p>
                <div className='inner-button'>
                    <button onClick={()=>{props.onClose(false)}}>Okay let's go!</button>
                </div>
            </div>
        </PopupStyle>
    ) : '');
}

export default Popup;


const PopupStyle = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;

    .inner-popup{
        width: 35%;
        background: darkgray;
        border: 1px solid blue;
        border-radius: 20px;
        box-shadow: 5px 5px 10px #124559;
        padding: 1rem;
    }

    .rgb-image-example{
        width: 9rem;
        height: 9rem;
        float: left;
        margin: 5px;
    }

    .example{
        text-align: center;
        font-weight: bold;
    }

    .inner-button{
        text-align: center;
    }

    .inner-button button{
        background: #124559;
        color: white;
        font-size: 1.5rem;
        border: 0px;
        border-radius: 5px;
        cursor: pointer;
    }
`;