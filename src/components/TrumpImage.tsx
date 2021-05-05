import React, { useEffect, useState } from 'react';
import Spade_01 from '../images/spade/card_spade_01.png';
import Spade_02 from '../images/spade/card_spade_02.png';
import { HYPHEN } from '../utils/Constant';

type Props = {
  cardNumber: string;
};

const TrumpImage = (cardNumber: Props): JSX.Element => {
  const card = cardNumber.cardNumber;

  return (
    <div>
      <img src={'Spade_01'} alt="card" />
      <p>card: {card}</p>
    </div>
  );
};

export default TrumpImage;
