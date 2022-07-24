import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
class Teste extends Component {
    player = {}
    state = {
        video: {
            src: "https://861138007.tapecontent.net/radosgw/0ZKkoyyLOQTbzvX/gEucGzBLEk1ulrYIf5mU9BGsDyf1jar4rP6rugJ7Yc-NUWQCRjegpCDtSTagU2VhDGvrYYceQ3mgzfhcGZpwgVPrCoNqfLXaWPFRGpfvEQon9Mfvo_1p9qvXVZSB-2qFaYH9JvvtbCuRR4Yw8ic5eU-vGCwydbx-NZjhqEVHIHWz2zw6AKEVuYEqaYD5LiDE8Z3Wx9FxqtgkUEVQZPMQX18ozYjBlT-Cx0bwuhA23jZf9VjrS05C8BIEWjqIodtcgkAFwG3IEbYrJBCRzkvh-vf9-i9dhadGVKwkCA/a1GYoaamiHbZS8ZE?stream=1",

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