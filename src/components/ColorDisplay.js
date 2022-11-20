import styled from 'styled-components';

const ColorDisplay = (props) => {

    const convTo2PosHex = (color) => {
        let hexColor = color.toString(16);
        if(hexColor.length === 1){
            return ('0' + hexColor);
        }else{
            return(hexColor);
        };
   }

    return(
        <ColorDisplayDiv>
            <h2>RGB({props.color[0]}, {props.color[1]}, {props.color[2]})</h2>
            <h2>#{convTo2PosHex(props.color[0])}{convTo2PosHex(props.color[1])}{convTo2PosHex(props.color[2])}</h2> 
        </ColorDisplayDiv>
    );  
}

export default ColorDisplay;

const ColorDisplayDiv = styled.div`
    display: flex;
    justify-content: space-around;
    margin-top: 2rem;

    h2{
        text-transform: uppercase;
    }
`;
