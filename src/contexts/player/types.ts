import { Song } from "../../types/interfaces";

export interface PlayerContextData {
  songs: Song[];
  currentSong: Song;
  isPlaying: boolean;
  isAutoNextActive: boolean;
  isShuffleActive: boolean;
  playSong: (song: Song) => void;
  pauseSong: () => void;
  playNextSong: () => void;
  playPreviousSong: () => void;
  togglePlayPause: () => void;
  toggleAutoNext: () => void;
  toggleShuffle: () => void;
}
