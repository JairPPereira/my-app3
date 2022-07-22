import React from 'react';
import '../../App.css';
import {Link } from "react-router-dom";

export default function Comedia() {

  return (
    <>
      <h1 className='comedia'>

        <nav>
      <p><br /></p>
      <Link to="./Ajusticeira">A justiceira</Link>
      <p><br /></p>
      <Link to="./Chef">Chef</Link>
      <p><br /></p>
      <Link to="./Minhamaeeumaviagem">Minha mãe é uma viagem</Link>
      <p><br /></p>
      <Link to="./Ummotoristaemapuros">Um motorista em apuros</Link>
      <p><br /></p>
      <Link to="./Umpobretaoncsb">Um pobretão na Casa Branca</Link>


     
      </nav></h1>

    </>
        
        
         
  );
}

