import React from "react";
import { Link } from 'react-router-dom';
import './videoapp.css';

export default function Cnn() {
  return (
    <div>
          <p><br /></p>
      <iframe
        src="http://170.82.200.38:8080/cnn_brasil/index.m3u8"
        frameborder="0"
        width="100%" height="320px"
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



