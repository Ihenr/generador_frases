import react, { useState } from 'react';
import { getRandoNumber as randon } from './utils/getRandonNumbers';
import frases from './assets/JSON/frases.json';
import Card from './components/Card/Card';

import { Colors } from './utils/Colors';
import Button from './components/Button/Button';

function App() {
  const [fraseIndex, setFrases] = useState(randon(0, frases.length - 1));
  let frase = frases[fraseIndex];

  const changeFrase = () => {
    let newFraseIndex = randon(0, frases.length - 1);
    while (newFraseIndex === fraseIndex) {
      newFraseIndex = randon(0, frases.length - 1);
    }
    setFrases(newFraseIndex);
  };
  // Color
  const color = Colors[Math.floor(Math.random() * Colors.length)];
  document.body.style = `Background: ${color}; color:${color}`;
  console.log(color);

  return (
    <div className={`h-screen flex flex-col justify-center items-center p-10`}>
      <h1 className=" text-cyan-50 pb-20 uppercase text-4xl font-black text-center">
        phrase generator
      </h1>
      <Card frase={frase}></Card>
      <Button changeFrase={changeFrase}></Button>
    </div>
  );
}

export default App;
