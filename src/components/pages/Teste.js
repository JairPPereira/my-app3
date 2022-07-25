import React from 'react';
import { Link } from 'react-router-dom';
import './videoapp.css';

 
    export default function Teste() {
        return (
          <div>
                <p><br /></p>
            <iframe
              src="http://127.0.0.1:11470/2c1e9a29cd7462bed36f69629afd24c3b0a69b09/Ava.2020.720p.BluRay.x264.DUAL-COMANDO.TO.mkv"
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