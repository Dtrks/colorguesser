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


  const MAX_RANDOM = 255;
  const OPTIONS = 4;

  useEffect(()=>{
    setCurrentColor(generateRandomRGBColor());
  }, []);

  const onOptionSelected = (isCorrect) => {
    if(isCorrect){
      setScore(score + 1);
    }else{
      setMaxScore(score);
      setScore(0);
    }

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
        <OptionsDisplay color={currentColor} onOptionSelected={onOptionSelected} maxOptions={4}/>
      </>
      )
  }

  return (
    <Layout>
      <Header/>
      {currentColor.length>1 ? onColorLoaded() : ''}
      <Score score={score} maxScore={maxScore}/>
      <Footer/>
    </Layout>
  );
}

export default App;
