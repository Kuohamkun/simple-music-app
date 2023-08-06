import React from "react";
import { usePlayer } from "../../contexts/player/use-player";
import styles from "./player-controls.module.scss";
import classnames from "classnames";

function PlayerControls() {
  const {
    isPlaying,
    currentSong,
    isAutoNextActive,
    isShuffleActive,
    playNextSong,
    playPreviousSong,
    togglePlayPause,
    toggleAutoNext,
    toggleShuffle,
  } = usePlayer();

  const bgStyle = {
    background: `linear-gradient(0deg, ${currentSong?.color[0]} 0%, ${currentSong?.color[1]} 100%)`,
  };

  return (
    <div className={styles.container} style={bgStyle}>
      <div className={styles.controlsWrapper}>
        <button onClick={playPreviousSong} title="Previous">
          <i
            className={classnames(
              styles.icon,
              styles.secondary,
              "fa-solid fa-backward-step"
            )}
          />
        </button>
        <button onClick={toggleShuffle} title="Shuffle">
          <i
            className={classnames(
              styles.icon,
              styles.ternary,
              !isShuffleActive && styles.disabled,
              "fa-solid fa-shuffle"
            )}
          />
        </button>
        <button onClick={togglePlayPause} title="Play/Pause">
          {isPlaying ? (
            <i
              className={classnames(
                styles.icon,
                styles.primary,
                "fa-solid fa-circle-pause"
              )}
            />
          ) : (
            <i
              className={classnames(
                styles.icon,
                styles.primary,
                "fa-solid fa-circle-play"
              )}
            />
          )}
        </button>
        <button onClick={toggleAutoNext} title="Auto next">
          <i
            className={classnames(
              styles.icon,
              styles.ternary,
              !isAutoNextActive && styles.disabled,
              "fa-solid fa-rotate-right"
            )}
          />
        </button>
        <button onClick={playNextSong} title="Next">
          <i
            className={classnames(
              styles.icon,
              styles.secondary,
              "fa-solid fa-forward-step"
            )}
          />
        </button>
      </div>
    </div>
  );
}

export default PlayerControls;
