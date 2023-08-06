# Simple Music App

## Overview

Simple Music App is a basic music player built using React. It allows users to play and pause songs, track the progress of the current song, navigate within a song using a seek bar, and switch between different songs in the playlist.

## Features

- List all songs in the side panel
- Play and pause the selected song
- Display the artwork and information about the songs
- Track the progress of the currently playing song
- Navigate within a song with the seek bar
- Go to the next or previous song
- Toggle shuffle mode to play random songs
- Play/pause the song with space key
- Enable/disable auto next mode for automatic playback of the next song

## Technologies Used

- React
- TypeScript
- Sass
- Create React App

## How to Run the App

1. Clone this repository to your local machine.
2. Navigate to the project folder in the terminal.
3. Run `npm install` to install the project dependencies.
4. Run `npm start` to start the development server.
5. Open your browser and go to `http://localhost:3000` to view the app.

## Adding Your Own Songs

You can add your own songs by modifying the `songs.js` file located in the `src/data` folder. The songs should follow the following format:

```jsx
{
  name: "Song Name",
  cover: "path/to/song-cover.jpg",
  artist: "Artist Name",
  audio: "path/to/song.mp3",
  color: ["primary-color", "secondary-color"],
  id: "unique-id",
  active: true/false,
}

```

## Credits

The songs and artwork used in this app are from Chillhop Music (https://chillhop.com/). The app is intended for educational purposes only and not for commercial use.

## License

This project is licensed under the [MIT License](notion://www.notion.so/LICENSE).

## Contact

If you have any questions or suggestions, please feel free to contact me at [es.saady.hamza@gmail.com](mailto:es.saady.hamza@gmail.com).
