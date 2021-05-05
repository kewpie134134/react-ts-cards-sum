import React, { useEffect, useState } from 'react';
import { makeArray, shuffleArray } from './components/MakeArray';
import { ZERO, ONE, NUMBER_OF_TRUMP, HYPHEN } from './utils/Constant';

const App = (): JSX.Element => {
  const [randomArray, setRandomArray] = useState<string[]>([]);
  const [arrayCounter, setArrayCounter] = useState(ZERO);
  const [arrayIndex, setArrayIndex] = useState<string>(HYPHEN);

  // ランダムな配列を初回読み込み時に作成
  useEffect(() => {
    setRandomArray(shuffleArray(makeArray(NUMBER_OF_TRUMP)));
  }, []);

  // ボタンを押された時の処理を実装
  const showArrayNumber = () => {
    if (arrayCounter < NUMBER_OF_TRUMP) {
      setArrayIndex(randomArray[arrayCounter]);
      setArrayCounter(arrayCounter + ONE);
    } else {
      alert('終わりだよ！');
    }
  };

  // リセットボタンが押された時の処理を実装
  const resetArrayCounter = () => {
    setArrayCounter(ZERO);
    setArrayIndex(HYPHEN);
    setRandomArray(shuffleArray(makeArray(NUMBER_OF_TRUMP)));
  };

  return (
    <div>
      <button onClick={showArrayNumber}>押して！</button>
      <button onClick={resetArrayCounter}>リセット</button>
      <p>arrayNumber: {arrayIndex}</p>
      <p>arrayCounter: {arrayCounter}</p>
    </div>
  );
};

export default App;
