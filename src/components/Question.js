import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import '../styles/question.css';

const Question = ({ title, phrases, id }) => {

  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className='question'>
      <header>
        <h4>{`${id}- ${title}`}</h4>
        <button className='btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <ol>
      {showInfo && phrases.map(phrase => (<li dangerouslySetInnerHTML={ { __html: phrase } }></li>))}
      </ol>
    </article>
  );
};

export default Question;
