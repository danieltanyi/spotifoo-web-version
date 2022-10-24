import React from "react";
import "./App.css";

import MusicPlaylistPage from "./MusicPlaylistPage";

function App() {
  return (
    <div>
      {/* Organization -1 */}
      {/* If App.js only load MusicPlaylistPage then why App does exist at all */}
      {/* I have mentioned the same on the Java projects */}
      <MusicPlaylistPage />
    </div>
  );
}

export default App;
