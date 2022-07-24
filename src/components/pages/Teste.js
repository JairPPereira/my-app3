import React from "react";
import { Link } from 'react-router-dom';
import './videoapp.css';

export default function Teste() {
  return (
    <div>
          <p><br /></p>
      <iframe className="video-js"
        src="http://tv.factoryiptv.com/movie/de2019/de2019/48423.mkv"
        frameborder="0"
        width="100%" height="320px" fullscreen="true"
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