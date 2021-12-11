import React from 'react';
import './SingleCard.css';

function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  console.log('single card rendered');
  return (
    <div>
      <div className="card">
        <div className={flipped ? 'flipped' : ''}>
          <img className="front" src={card.src} alt="card front" />
          <img className="back" src="/img/cover.png" onClick={handleClick} alt="card back" />
        </div>
      </div>
    </div>
  );
}

export default React.memo(SingleCard);
