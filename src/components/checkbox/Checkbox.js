import "./checkbox.css";
import { useState } from "react";
import {
  animated,
  useSpring,
  config,
  useSpringRef,
  useChain,
} from "react-spring";

const Checkbox = ({ id, title, checked, onChangeHandle }) => {
  const checkboxAnimationRef = useSpringRef();
  const checkboxAnimationStyle = useSpring({
    backgroundColor: checked ? "#111827" : "#fff",
    borderColor: checked ? "#111827" : "#ddd",
    config: config.gentle,
    ref: checkboxAnimationRef,
  });

  const [checkmarkLength, setCheckmarkLength] = useState(null);

  const checkmarkAnimationRef = useSpringRef();
  const checkmarkAnimationStyle = useSpring({
    x: checked ? 0 : checkmarkLength,
    config: config.gentle,
    ref: checkmarkAnimationRef,
  });

  useChain(
    checked
      ? [checkboxAnimationRef, checkmarkAnimationRef]
      : [checkmarkAnimationRef, checkboxAnimationRef],
    [0, 0.1]
  );

  return (
    <div className="checkbox-item">
      <label>
        <input type="checkbox" onChange={onChangeHandle} />
        <animated.svg
          style={checkboxAnimationStyle}
          className={`checkbox ${checked ? "checkbox--active" : ""}`}
          aria-hidden="true"
          viewBox="0 0 15 11"
          fill="none"
        >
          <animated.path
            d="M1 4.5L5 9L14 1"
            strokeWidth="2"
            stroke="#fff"
            ref={(ref) => {
              if (ref) {
                setCheckmarkLength(ref.getTotalLength());
              }
            }}
            strokeDasharray={checkmarkLength}
            strokeDashoffset={checkmarkAnimationStyle.x}
          />
        </animated.svg>
        <label className="checkbox-title">{title}</label>
      </label>
    </div>
  );
};

export default Checkbox;
