import { PlaylistM } from "../../molecules"

function PlaylistsO({ playlists }) {
  return (
    playlists.map(
      (item, indes) => {
        return (
          <PlaylistM />
        );
      }
    )
  );
}

export default PlaylistsO;