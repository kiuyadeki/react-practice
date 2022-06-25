import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage.jsx";


const App = () => {
  console.log('render');
  const [num, setNum] = useState(0); //[stateの変数名, stateを更新する関数名] numの初期値0
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  }

  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setFaceShowFlag(true);
      } else {
        faceShowFlag && setFaceShowFlag(false);
      }
    }
  }, [num]);

  return (
      <>
      <h1 style={{ color: 'red' }}>Hello</h1>
      <ColorfulMessage color="green">How ya doin?</ColorfulMessage>
      <ColorfulMessage color="orange">gooood</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( ^ω^ )</p>}
      </>
    );
};

export default App;
