import React from "react";
import styles from "./song-details.module.scss";
import { Song } from "../../types/interfaces";

interface Props {
  song: Song;
}

function SongDetails({ song }: Props) {
  return (
    <section className={styles.container}>
      <img className={styles.albumCover} src={song.cover} alt="Album cover" />
      <div className={styles.description}>
        <div className={styles.songName}>{song.name}</div>
        <div className={styles.songArtist}>{song.artist}</div>
      </div>
    </section>
  );
}

export default SongDetails;
