import React, { useEffect, useState } from 'react';

const App = (): JSX.Element => {
  const [randomArray, setRandomArray] = useState<string[]>([]);
  const [arrayCounter, setArrayCounter] = useState(0);
  const [arrayIndex, setArrayIndex] = useState<string>('-');

  // 1 から index の数までの配列を作成
  const makeArray = (index: number): string[] => {
    const array: string[] = [];
    for (let i = 1; i < index + 1; i++) {
      array.push(i.toString());
    }
    return array;
  };

  // 配列をシャッフルする関数
  const shuffle = ([...array]: string[]): string[] => {
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
    setRandomArray(shuffle(makeArray(52)));
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
