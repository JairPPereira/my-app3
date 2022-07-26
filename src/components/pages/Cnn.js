import React from "react";
import { Link } from 'react-router-dom';
import './videoapp.css';

export default function Cnn() {
  return (
    <div>
          <p><br /></p>
      <iframe
        src="https://video01.soultv.com.br/cnnbrasil/cnnbrasil/chunklist_w1048115623.m3u8"
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



