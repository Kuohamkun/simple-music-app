import React, { createContext, useState, ReactElement, useMemo } from "react";
import chillHop from "../../data/songs";
import { PlayerContextData } from "./types";
import { Song } from "../../types/interfaces";

export const PlayerContext = createContext<PlayerContextData | null>(null);

const PlayerProvider = ({ children }: { children: ReactElement }) => {
  const songs = useMemo(chillHop, []); // To avoid loading songs on each render
  const [currentSong, setCurrentSong] = useState<Song>(songs[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isAutoNextActive, setIsAutoNextActive] = useState<boolean>(true);
  const [isShuffleActive, setIsShuffleActive] = useState<boolean>(false);

  const playSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
  };

  const pauseSong = () => {
    setIsPlaying(false);
  };

  const getRandomSongIndex = (currentIndex: number) => {
    // Get a random index that excludes the current song's index
    let randomIndex = Math.floor(Math.random() * songs.length);
    while (randomIndex === currentIndex) {
      randomIndex = Math.floor(Math.random() * songs.length);
    }

    return randomIndex;
  };

  const playNextSong = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong?.id);
    const nextIndex = isShuffleActive
      ? getRandomSongIndex(currentIndex)
      : (currentIndex + 1) % songs.length;

    setCurrentSong(songs[nextIndex]);
    setIsPlaying(true);
  };

  const playPreviousSong = () => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong?.id);
    const previousIndex = isShuffleActive
      ? getRandomSongIndex(currentIndex)
      : (currentIndex - 1 + songs.length) % songs.length;

    setCurrentSong(songs[previousIndex]);
    setIsPlaying(true);
  };

  const togglePlayPause = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  const toggleAutoNext = () => {
    setIsAutoNextActive((prevIsAutoNextActive) => !prevIsAutoNextActive);
  };

  const toggleShuffle = () => {
    setIsShuffleActive((prevIsShuffleActive) => !prevIsShuffleActive);
  };

  return (
    <PlayerContext.Provider
      value={{
        songs,
        currentSong,
        isPlaying,
        isAutoNextActive,
        isShuffleActive,
        playSong,
        pauseSong,
        playNextSong,
        playPreviousSong,
        togglePlayPause,
        toggleAutoNext,
        toggleShuffle,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerProvider;
