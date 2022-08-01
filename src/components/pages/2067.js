import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';


 
class A2067 extends Component {
    player = {}
    state = {
        video: {
            src: "https://video.wixstatic.com/video/e16db6_0d30dd7bf2424a7780b2c5f955db0914/720p/mp4/file.mp4",

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
                    aspectRatio= "4:3"  
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

</nav></div>
      <iframe
      src="https://www.themoviedb.org/movie/528085-2067?language=pt-BR"
      frameborder="0"
      width="100%" height="480px"

      title="video"
    />{" "}</div> 
            
        );
    }
}









export default A2067;
