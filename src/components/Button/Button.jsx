import React from 'react';
import img from '../../assets/imgs/actualizar.png';
import './Button.css';
const Button = ({ changeFrase }) => {
  return (
    <div>
      <button onClick={changeFrase} className="animacion">
        <img src={img} alt="Next" className="w-14 pt-4 hover:scale-105 "></img>
      </button>
    </div>
  );
};

export default Button;
