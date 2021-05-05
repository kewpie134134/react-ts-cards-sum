import React, { useEffect, useState } from 'react';
import { makeArray, shuffleArray } from './components/MakeArray';

const App = (): JSX.Element => {
  const [randomArray, setRandomArray] = useState<string[]>([]);
  const [arrayCounter, setArrayCounter] = useState(0);
  const [arrayIndex, setArrayIndex] = useState<string>('-');

  // ランダムな配列を初回読み込み時に作成
  useEffect(() => {
    setRandomArray(shuffleArray(makeArray(52)));
  }, []);

  // ボタンを押された時の処理を実装
  const showArrayNumber = () => {
    if (arrayCounter < 52) {
      setArrayIndex(randomArray[arrayCounter]);
      setArrayCounter(arrayCounter + 1);
    } else {
      alert('終わりだよ！');
    }
  };

  // リセットボタンが押された時の処理を実装
  const resetArrayCounter = () => {
    setArrayCounter(0);
    setArrayIndex('-');
    setRandomArray(shuffleArray(makeArray(52)));
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
