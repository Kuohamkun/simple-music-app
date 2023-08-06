import React from "react";
import { SidePanel } from "./components/side-panel";
import { MusicPlayer } from "./components/music-player";
import styles from "./App.module.scss";

function App() {
  return (
    <div className={styles.appContainer}>
      <SidePanel />
      <MusicPlayer />
    </div>
  );
}

export default App;
