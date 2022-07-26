import React from 'react';
import '../../App.css';
import {Link } from "react-router-dom";

export default function Aventura() {

  return (
    <>
      <h1 className='aventura'>

        <nav>
      <p><br /></p>
      <Link to="./Aeradogelo2">A era do gelo 2</Link>
      <p><br /></p>
      <Link to="./Anovaondadoimperador">A nova onda do imperador</Link>
      <p><br /></p>
      <Link to="./Finch">Finch</Link>
      <p><br /></p>
      <Link to="./Gossebump2">Gossebump 2 - Halooween assombrado</Link>
      <p><br /></p>
      <Link to="./Homemaranha">Homem Aranha</Link>
      <p><br /></p>
      <Link to="./Homemaranha2">Homem Aranha 2</Link>
      <p><br /></p>


     
      </nav></h1>

    </>
        
        
         
  );
}

