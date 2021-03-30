import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

const TextScroller = ({ text }) => {
  const [key, setKey] = useState(1);

  const scrolling = useSpring({
    from: { transform: "translate(60%,0)" },
    to: { transform: "translate(-50%,0)" },
    config: { duration: 30000 },

    reset: true,
    //reverse: key % 2 == 0,
    onRest: () => {
      setKey(key + 1);
    }
  });

  return (
    <div key={key}>
        <div >
      <animated.div className="" style={scrolling}>{text}</animated.div>
      </div>
    </div>
  );
};

export default TextScroller;
