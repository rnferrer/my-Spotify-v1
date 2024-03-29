import React, {useState, useEffect}from "react";
import Today from "./Date";
import SearchBar from "./SearchBar";
import SpotifyPlayer from 'react-spotify-web-playback';
import Cookies from "js-cookie";


const Home = () => {


  const [token, setToken] = useState('');
  const [song, setSong] = useState('');
  
  useEffect(()=>{
    setToken(Cookies.get('token'))
  })
  return(
    <div id="home-container">
      <div id="button-container">
        <button id="signout-button">Sign out</button>
      </div>
      <div id="center-display-container">
        <Today/>
        <SearchBar/>
        <div id="spotify-player-container">
          <SpotifyPlayer token={token} styles={{bgColor: '#051016', color: '#fff', trackArtistColor: '#fff', trackNameColor: '#fff'}}/>
        </div>
      </div>
    </div>
  )
}

export default Home;