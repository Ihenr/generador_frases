import React from 'react';
import comilla1 from '../../assets/imgs/1.png';
import comilla2 from '../../assets/imgs/2.png';

const Card = ({ frase }) => {
  return (
    <div>
      <div className="flex flex-col bg-stone-200 max-w-md p-10 rounded-lg shadow-xl">
        <p className="text-2xl text-justify ">
          <img src={comilla1} className="w-7 inline-block pr-2 "></img>
          {frase.quote}
          <img src={comilla2} className="w-7 inline-block pl-2 "></img>
        </p>
        <span className="text-end text-base">-- {frase.author}</span>
      </div>
    </div>
  );
};

export default Card;
