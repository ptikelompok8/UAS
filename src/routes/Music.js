import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getTokenFromUrl, loginUrl } from '../auth';
import './music.css';

function App() {
  const [token, setToken] = useState(null);
  const [query, setQuery] = useState('');
  const [playlists, setPlaylists] = useState([]);
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = '';
    const _token = hash.access_token;

    if (_token) {
      setToken(_token);
      console.log('Token set:', _token); // Debugging statement
    } else {
      console.log('Token not found'); // Debugging statement
    }
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query && token) {
      try {
        const response = await axios.get(`https://api.spotify.com/v1/search`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            q: `Bangka Belitung ${query}`, // Include "Bangka Belitung" in the search query
            type: 'playlist',
          },
        });
        setPlaylists(response.data.playlists.items);
      } catch (error) {
        console.error('Error fetching playlists:', error);
      }
    }
  };

  const handleEmbed = (playlist) => {
    setSelectedPlaylist(playlist);
  };

  return (
    <div className="App">
      {!token ? (
        <a href={loginUrl}>Login to Spotify</a>
      ) : (
        <div>
          <h1>Search for Spotify Playlists</h1>
          <form onSubmit={handleSearch}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for a playlist"
            />
            <button type="submit">Search</button>
          </form>
          <div>
            {playlists.map((playlist) => (
              <div key={playlist.id}>
                <p>{playlist.name}</p>
                <button onClick={() => handleEmbed(playlist)}>Embed</button>
              </div>
            ))}
          </div>
          {selectedPlaylist && (
            <div>
              <h2>Embedded Playlist</h2>
              <iframe
                src={`https://open.spotify.com/embed/playlist/${selectedPlaylist.id}`}
                width="300"
                height="380"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
                title="Spotify Playlist Embed"
              ></iframe>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
