/*import { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";

export function useSpotifyLogin(accessToken, expiresIn) { 

  if (accessToken !== null && accessToken.length > 0) {
    return { accessToken, expiresIn};
  }
  
  const params = new URLSearchParams(window.location.hash.replace('#', '?'));

  if (params.has('access_token') && params.has('expires_in')) {
    const paramAccessToken = params.get('access_token');
    const paramExpiresIn = Number(params.get('expires_in'));

    

    return {paramAccessToken, paramExpiresIn};
  }

  const accessUrl = `https://accounts.spotify.com/authorize?client_id=${SpotifyConfig.clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${SpotifyConfig.redirectUri}`;
  window.location = accessUrl;
}

export function useSearch() {

}*/