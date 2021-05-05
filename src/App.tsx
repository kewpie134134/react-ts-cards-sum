import React, { useEffect, useState } from 'react';

const App = (): JSX.Element => {
  const [randomArray, setRandomArray] = useState<number[]>([]);
  const [arrayCounter, setArrayCounter] = useState(0);
  const [arrayNumber, setArrayNumber] = useState<number>();

  // 1 から index の数までの配列を作成
  const makeArray = (index: number): number[] => {
    const array: number[] = [];
    for (let i = 1; i < index + 1; i++) {
      array.push(i);
    }
    return array;
  };

  // 配列をシャッフルする関数
  const shuffle = ([...array]: number[]): number[] => {
    for (let i = array.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    setRandomArray(shuffle(makeArray(52)));
  }, []);

  // ボタンを押された時の処理を実装
  const showArrayNumber = () => {
    if (arrayCounter < 52) {
      setArrayNumber(randomArray[arrayCounter]);
      setArrayCounter(arrayCounter + 1);
    } else {
      alert('終わりだよ！');
    }
  };

  // リセットボタンが押された時の処理を実装
  const resetArrayCounter = () => {
    setArrayCounter(0);
    setRandomArray(shuffle(makeArray(52)));
  };

  return (
    <div>
      <button onClick={showArrayNumber}>押して！</button>
      <button onClick={resetArrayCounter}>リセット</button>
      <p>arrayNumber: {arrayNumber}</p>
      <p>arrayCounter: {arrayCounter}</p>
    </div>
  );
};

export default App;
