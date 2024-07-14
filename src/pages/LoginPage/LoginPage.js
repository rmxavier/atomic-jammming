import { useEffect, useState } from 'react';
import { LoggedOutTemplate } from '../../templates';
import SpotifyApi from '../../utils/SpotifyApi';
import { Navigate, NavLink } from 'react-router-dom';

function LoginPage({auth, setAuth}) {

  useEffect(() => {
    const newAuth = SpotifyApi.getAccess(auth.token, auth.expiresIn, auth.isAuthenticated);
    setAuth((prev) => ({
      ...prev, 
      token: newAuth.token,
      expiresIn: newAuth.expiresIn,
      isAuthenticated: newAuth.isAuthenticated
    }));

    const timeoutId = window.setTimeout(() => {
      setAuth((prev) => ({
        token: '',
        expiresIn: '',
        isAuthenticated: false
      }));
    }, newAuth.expiresIn * 1000);
  }, []);

  return(
    <LoggedOutTemplate>
      { auth.isAuthenticated ? <Navigate to="/playlist-manager" /> : <></> }
    </LoggedOutTemplate>
  );
}

export default LoginPage;