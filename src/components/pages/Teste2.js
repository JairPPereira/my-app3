import React, { Component } from 'react';
import VideoPlayer from 'react-video-js-player';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
class Teste2 extends Component {
    player = {}
    state = {
        video: {
            src: "https://service-stitcher-ipv4.clusters.pluto.tv/v2/stitch/hls/channel/5f120e94a5714d00074576a1/master.m3u8?advertisingId=&appName=web&appVersion=6.4.1-e1db5348259c97a434c6082c13e731effe994d26&app_name=web&clientDeviceType=0&clientID=0c078702-672e-4761-869b-ca900ec112b9&clientModelNumber=1.0.0&country=BR&deviceDNT=false&deviceId=0c078702-672e-4761-869b-ca900ec112b9&deviceLat=-1.4537&deviceLon=-48.5078&deviceMake=chrome&deviceModel=web&deviceType=web&deviceVersion=104.0.0&marketingRegion=BR&serverSideAds=true&sessionID=c05601b7-248d-11ed-9912-0242ac110003&sid=c05601b7-248d-11ed-9912-0242ac110003&userId=&jwt=eyJhbGciOiJIUzI1NiIsImtpZCI6IjM0ZDY1NDZiLTkzOWQtNDkwOC1iMGMwLWJiNmZkZjhiMzY1NCIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSUQiOiJjMDU2MDFiNy0yNDhkLTExZWQtOTkxMi0wMjQyYWMxMTAwMDMiLCJjbGllbnRJUCI6IjIwNi44NC4zNC41MyIsImNpdHkiOiJCZWzDqW0iLCJwb3N0YWxDb2RlIjoiIiwiY291bnRyeSI6IkJSIiwiZG1hIjowLCJhY3RpdmVSZWdpb24iOiJCUiIsImRldmljZUxhdCI6LTEuNDUzNywiZGV2aWNlTG9uIjotNDguNTA3OCwicHJlZmVycmVkTGFuZ3VhZ2UiOiJwdCIsImRldmljZVR5cGUiOiJ3ZWIiLCJkZXZpY2VWZXJzaW9uIjoiMTA0LjAuMCIsImRldmljZU1ha2UiOiJjaHJvbWUiLCJkZXZpY2VNb2RlbCI6IndlYiIsImFwcE5hbWUiOiJ3ZWIiLCJhcHBWZXJzaW9uIjoiNi40LjEtZTFkYjUzNDgyNTljOTdhNDM0YzYwODJjMTNlNzMxZWZmZTk5NGQyNiIsImNsaWVudElEIjoiMGMwNzg3MDItNjcyZS00NzYxLTg2OWItY2E5MDBlYzExMmI5IiwiY21BdWRpZW5jZUlEIjoiIiwiaXNDbGllbnRETlQiOmZhbHNlLCJ1c2VySUQiOiIiLCJsb2dMZXZlbCI6IkRFRkFVTFQiLCJ0aW1lWm9uZSI6IkFtZXJpY2EvQmVsZW0iLCJzZXJ2ZXJTaWRlQWRzIjp0cnVlLCJlMmVCZWFjb25zIjpmYWxzZSwiZmVhdHVyZXMiOnt9LCJkcm0iOnsibmFtZSI6IndpZGV2aW5lIiwibGV2ZWwiOiJMMyJ9LCJhdWQiOiIqLnBsdXRvLnR2IiwiZXhwIjoxNjYxNDcxNDc1LCJqdGkiOiI1OTIwMTk2ZC1iZGVjLTQyMDctOTVkZC1mYzY3MjFjZDFmNjMiLCJpYXQiOjE2NjE0NDI2NzUsImlzcyI6ImJvb3QucGx1dG8udHYiLCJzdWIiOiJwcmk6djE6cGx1dG86ZGV2aWNlczpCUjpNR013TnpnM01ESXROamN5WlMwME56WXhMVGcyT1dJdFkyRTVNREJsWXpFeE1tSTUifQ.6nfxvMQP8nJVAEnVou6CrqcitxybF8bMs-CTsz2msgQ&masterJWTPassthrough=true&eventVOD=true",

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
export default Teste2;