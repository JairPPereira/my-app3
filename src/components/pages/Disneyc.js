import React from "react";
import { Link } from 'react-router-dom';
import './videoapp.css';

export default function Disneyc() {
  return (
    <div>
          <p><br /></p>
      <iframe
        src="https://embedflix.net/tv/disney-channel"
        frameborder="0"
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





