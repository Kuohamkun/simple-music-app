import React from "react";
import styles from "./song-item.module.scss";
import classNames from "classnames";
import { Song } from "../../types/interfaces";

interface Props {
  song: Song;
  isActive: boolean;
  onSelect: (song: Song) => void;
}

const SongItem = ({ song, isActive, onSelect }: Props) => {
  return (
    <div
      className={classNames(styles.container, isActive && styles.active)}
      onClick={() => onSelect(song)}
    >
      <img className={styles.albumCover} src={song.cover} alt="Album Cover" />
      <div className={styles.description}>
        <div className={styles.songName}>{song.name}</div>
        <div className={styles.artistName}>{song.artist}</div>
      </div>
    </div>
  );
};

export default SongItem;
