import React from "react";
import { Link } from 'react-router-dom';
import './videoapp.css';

export default function Teste() {
  return (
    <div>
          <p><br /></p>
      <iframe
        src="https://live-lib-pa-01.video.globo.com/d/s/hls-globo-bel/hls-globo-bel_1573/playlist.m3u8"
        frameborder="0"
        crossorigin="anonymous"
        width="100%" height="600px"
        allow="autoplay; encrypted-media; fullscreen; pincture in pincture"
        title="video"
      />{" "}
                  <div className="nave">
      <nav>
      <p><br /></p>
      <Link to="/">Home</Link>

<p><br /></p>

      </nav></div></div>

  );
}





