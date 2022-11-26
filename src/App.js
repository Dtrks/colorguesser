import './App.css';
import Header from './components/Header';
import ColorDisplay from './components/ColorDisplay';
import OptionsDisplay from './components/OptionsDisplay';
import Layout from './components/Layout';
import Score from './components/Score';
import {useState, useEffect} from 'react';
import Container from './components/Layout';
import Footer from './components/Footer';

function App() {

  const [currentColor, setCurrentColor] = useState([]);
  const [score, setScore] = useState(0);
  const [maxScore, setMaxScore] = useState(0);
  const [optionSelected, setOptionSelected] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [newMax, setNewMax] = useState(false);
  const [counter, setCounter] = useState(0);

  const MAX_RANDOM = 255;
  const OPTIONS = 4;

  useEffect(()=>{
    setCurrentColor(generateRandomRGBColor());
  }, []);

  const onOptionSelected = (isCorrect) => {
    
    if(isCorrect){
      setScore(score + 1);
      setCorrect(true);
    }else{
      if(score > maxScore){
        setMaxScore(score);
        setNewMax(true);
      }
      setScore(0);
      setCorrect(false);
    }
    
    setCounter((prev) => prev +1);
    setCurrentColor(generateRandomRGBColor());
  }

  const generateRandomRGBColor = () => {
    return [Math.round(Math.random()*255), 
        Math.round(Math.random()*255), 
        Math.round(Math.random()*255)];
  }

  const onColorLoaded = () => {
    return(
      <>
        <ColorDisplay color={currentColor}/>
        <OptionsDisplay color={currentColor} onOptionSelected={onOptionSelected} maxOptions={4} />
        <Score score={score} maxScore={maxScore} correct={correct} newMax={newMax} counter={counter}/>
      </>
      )
  }

  return (
    <Layout show={showPopup} onClose={setShowPopup}>
      <Header/>
      {currentColor.length>1 ? onColorLoaded() : ''}
      <Footer onShowPopup={setShowPopup}/>
    </Layout>
  );
}

export default App;
