const SpotifyConfig = {
    baseUrl: 'https://api.spotify.com',
    redirectUri: process.env.REACT_APP_SPOTIFY_REDIRECT_URI,
    clientId: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    clientSecret: process.env.REACT_APP_SPOTIFY_CLIENT_ID,
    accessToken: '',

    getReqInit(method, accessToken) {
        return {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json'
            }
        };
    }
}

const SpotifyApi = {

    setAccessToken() {
        if (SpotifyConfig.accessToken) {
            return;
        }

        const params = new URLSearchParams(window.location.hash.replace('#', '?'));

        if (params.has('access_token') && params.has('expires_in')) {
            const accessToken = params.get('access_token');
            const expiresIn = Number(params.get('expires_in'));

            window.setTimeout(() => SpotifyConfig.accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.

            SpotifyConfig.accessToken = accessToken;

            return;
        }
          
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${SpotifyConfig.clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${SpotifyConfig.redirectUri}`;
        window.location = accessUrl;
    },

    getAccess(accessToken, expiresIn, isAuthenticated) {

        if (accessToken) {
            return { accessToken, expiresIn, isAuthenticated };
        }

        const params = new URLSearchParams(window.location.hash.replace('#', '?'));

        if (params.has('access_token') && params.has('expires_in')) {
            const _accessToken = params.get('access_token');
            const _expiresIn = Number(params.get('expires_in'));
            const _isAuthenticated = true;

            return { 
              token: _accessToken, 
              expiresIn: _expiresIn, 
              isAuthenticated: _isAuthenticated
            };
        }
          
        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${SpotifyConfig.clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${SpotifyConfig.redirectUri}`;
        window.location = accessUrl;

        return { accessToken, expiresIn, isAuthenticated };
    },

    async search(q, { token }) {

        if (q.length > 0) {
            const url = `https://api.spotify.com/v1/search?q=${q}&type=track`;
            try {
                const response = await fetch(url, SpotifyConfig.getReqInit('GET', token));
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }
                const json = await response.json();
                const data = json.tracks.items;
                return data;
            } catch(error) {
                console.error(error);
            }
        }

        return [];
    },

    savePlaylist() {

    }

}

export default SpotifyApi;