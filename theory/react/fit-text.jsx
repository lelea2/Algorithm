import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const HEIGHT = 80;
  const WIDTH = 500;

  const useFitText = () => {
    const MIN_FONT_SIZE = HEIGHT/2;
    const MAX_FONT_SIZE = WIDTH;
    const RESOLUTION = 5;
  
    const ref = useRef(null);
  
    const [state, setState] = useState({
      fontSize: MAX_FONT_SIZE,
      fontSizePrev: MIN_FONT_SIZE,
      fontSizeMax: MAX_FONT_SIZE,
      fontSizeMin: MIN_FONT_SIZE,
    });
    const { fontSize, fontSizeMax, fontSizeMin, fontSizePrev } = state;
  
    useEffect(() => {
      const isDone = Math.abs(fontSize - fontSizePrev) <= RESOLUTION;
      const isOverflow =
        !!ref.current &&
        (ref.current.scrollHeight > ref.current.offsetHeight ||
          ref.current.scrollWidth > ref.current.offsetWidth);
      const isAsc = fontSize > fontSizePrev;
  
      // return if the font size has been adjusted "enough" (change within RESOLUTION)
      // reduce font size by one increment if it's overflowing
      if (isDone) {
        if (isOverflow) {
          const fontSizeNew =
            fontSizePrev < fontSize
              ? fontSizePrev
              : fontSize - (fontSizePrev - fontSize);
          setState({
            fontSize: fontSizeNew,
            fontSizeMax,
            fontSizeMin,
            fontSizePrev,
          });
        }
        return;
      }
  
      // binary search to adjust font size
      let delta;
      let newMax = fontSizeMax;
      let newMin = fontSizeMin;
      if (isOverflow) {
        delta = isAsc ? fontSizePrev - fontSize : fontSizeMin - fontSize;
        newMax = Math.min(fontSizeMax, fontSize);
      } else {
        delta = isAsc ? fontSizeMax - fontSize : fontSizePrev - fontSize;
        newMin = Math.max(fontSizeMin, fontSize);
      }
      setState({
        fontSize: fontSize + delta / 2,
        fontSizeMax: newMax,
        fontSizeMin: newMin,
        fontSizePrev: fontSize,
      });
    }, [fontSize, fontSizeMax, fontSizeMin, fontSizePrev, ref]);
  
    return { fontSize: `${fontSize}%`, ref };
  };
  
  const { fontSize, ref } = useFitText();

  return (
    <div ref={ref} style={{ fontSize, height: HEIGHT, width: WIDTH, border: "1px solid red" }}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
  );
};

export default App;
