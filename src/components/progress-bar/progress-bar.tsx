import React from "react";
import { formatTime } from "../../utils/formatting";
import styles from "./progress-bar.module.scss";

interface Props {
  progress: number;
  duration: number;
  onChange: (e: any) => void;
}

function ProgressBar({ progress, duration, onChange }: Props) {
  return (
    <div className={styles.container}>
      <span className={styles.time}>{formatTime(progress)}</span>
      <input
        className={styles.rangeInput}
        type="range"
        min={0}
        max={duration}
        value={progress}
        onChange={onChange}
      />
      <span className={styles.time}>{formatTime(duration)}</span>
    </div>
  );
}

export default ProgressBar;
