import React from "react";
import { usePlayer } from "../../contexts/player/use-player";
import { SongItem } from "../song-item";
import styles from "./side-panel.module.scss";

function SidePanel() {
  const { songs, currentSong, playSong } = usePlayer();

  return (
    <nav className={styles.container}>
      <div className={styles.header}>Library</div>
      <div className={styles.songList}>
        {songs.map((song) => (
          <SongItem
            key={song.id}
            song={song}
            isActive={currentSong?.id === song.id}
            onSelect={playSong}
          />
        ))}
      </div>
    </nav>
  );
}

export default SidePanel;
