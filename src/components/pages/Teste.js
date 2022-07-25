import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
class Teste extends Component {
    player = {}
    state = {
        video: {
            src: "https://860700782.tapecontent.net/radosgw/XBAO8BbKGRC06L/_7WKXXrBKpFkrs_fzSDjKA5OOB063H07h5s04J1LGM-OIdDKmnskYD3XHJeUJStnKDRg8M0aeF7nFbW2oNr9sGVFu8Rg5fUDvpzcd4wVR8_3uBDLLSaBlJ1xvGt9unRiBIYo_iIpbKFQALbYOeWhHzB9Xr6-UsPhUS6wTfWAnOsPu-RhzMfLci57o871rY5VzTc9zGAqWJnM10rcZqrCs2HfaYN6JHLRhdrA_jP6vwQsXaH2RUxtiI4gezyrii_jR7UoxH1WwcFFcZ_tx-OaysRaBUxPYSINdoedkQ/m5yOrdy1biOb2xtR.mp4?stream=1",

            poster: ""
        }
    }
 
    onPlayerReady(player){
        console.log("Player is ready: ", player);
        this.player = player;
    }
 
    onVideoPlay(duration){
        console.log("Video played at: ", duration);
    }
 
    onVideoPause(duration){
        console.log("Video paused at: ", duration);
    }
 
    onVideoTimeUpdate(duration){
        console.log("Time updated: ", duration);
    }
 
    onVideoSeeking(duration){
        console.log("Video seeking: ", duration);
    }
 
    onVideoSeeked(from, to){
        console.log(`Video seeked from ${from} to ${to}`);
    }
 
    onVideoEnd(){
        console.log("Video ended");
    }
 
    render() {
        return (
            <div>
                      <p><br /></p>
                <VideoPlayer
                    controls={true}
                    src={this.state.video.src}
                    poster={this.state.video.poster}
                    width="720px" 
                    height="auto"
                    onReady={this.onPlayerReady.bind(this)}
                    onPlay={this.onVideoPlay.bind(this)}
                    onPause={this.onVideoPause.bind(this)}
                    onTimeUpdate={this.onVideoTimeUpdate.bind(this)}
                    onSeeking={this.onVideoSeeking.bind(this)}
                    onSeeked={this.onVideoSeeked.bind(this)}
                    onEnd={this.onVideoEnd.bind(this)}
                />
                    <p><br /></p> 
               <div className="nave">
      <nav>
      <p><br /></p>
      <Link to="/">Home</Link>

<p><br /></p>

      </nav></div></div>
            
        );
    }
}
export default Teste;