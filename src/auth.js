
import queryString from 'query-string';

const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = '995d31210f41470fa4586affb1c36a83';
const redirectUri = 'http://localhost:3000/callback';
const scopes = [
  'user-read-currently-playing',
  'user-read-playback-state',
  'user-top-read',
  'user-read-recently-played',
  'playlist-read-private',
];

export const getTokenFromUrl = () => {
  return queryString.parse(window.location.hash);
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
