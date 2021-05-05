import React from 'react';

type Props = {
  cardNumber: string;
};

const TrumpImage = (cardNumber: Props): JSX.Element => {
  const card = cardNumber.cardNumber;
  console.log(card);

  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/card_${card}.png`}
        alt="card"
      />
    </div>
  );
};

export default TrumpImage;
