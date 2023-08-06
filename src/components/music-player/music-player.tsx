import React, { useEffect, useRef, useState } from "react";
import { usePlayer } from "../../contexts/player/use-player";
import { SongDetails } from "../song-details";
import styles from "./music-player.module.scss";
import { PlayerControls } from "../player-controls";
import { ProgressBar } from "../progress-bar";

function MusicPlayer() {
  const {
    currentSong,
    isPlaying,
    isAutoNextActive,
    playNextSong,
    togglePlayPause,
    pauseSong,
  } = usePlayer();
  const audioRef = useRef<HTMLAudioElement>(null);
  const [audioInfo, setAudioInfo] = useState({ progress: 0, duration: 0 });

  useEffect(() => {
    const handleKeyDown = (e: any) => {
      if (e.keyCode === 32) {
        e.preventDefault();
        togglePlayPause();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, currentSong]);

  const handleTimeUpdate = (e: any) => {
    const progress = e.target.currentTime;
    setAudioInfo({ ...audioInfo, progress });
  };

  const handleProgressBarChange = (e: any) => {
    if (audioRef.current) {
      const progress = parseFloat(e.target.value);
      audioRef.current.currentTime = progress;
      setAudioInfo({ ...audioInfo, progress });
    }
  };

  const handleLoadedMetadata = (e: any) => {
    setAudioInfo({ progress: 0, duration: e.target.duration });
  };

  const handleOnEndSong = () => {
    if (isAutoNextActive) {
      playNextSong();
    } else {
      pauseSong();
    }
  };

  return (
    <div className={styles.container}>
      <SongDetails song={currentSong} />
      <ProgressBar
        progress={audioInfo.progress}
        duration={audioInfo.duration}
        onChange={handleProgressBarChange}
      />
      <PlayerControls />
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleOnEndSong}
      />
    </div>
  );
}

export default MusicPlayer;
