import { useContext } from "react";
import { PlayerContextData } from "./types";
import { PlayerContext } from "./player-provider";

export const usePlayer = (): PlayerContextData => {
  const context = useContext(PlayerContext);

  if (!context) {
    throw new Error("usePlayer must be used within an PlayerProvider");
  }

  return context;
};
