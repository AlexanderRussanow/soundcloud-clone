import React from "react";

type PropsType = {
  left: number;
  right: number;
  onChange: (e) => void;
};

const TrackProgress: React.FC<PropsType> = ({ left, right, onChange }) => {
  return (
    <div style={{ display: "flex" }}>
      <input
        type="range"
        min={0}
        max={right}
        value={left}
        onChange={onChange}
      />
      <div>
        {left} / {right}
      </div>
    </div>
  );
};

export default TrackProgress;
