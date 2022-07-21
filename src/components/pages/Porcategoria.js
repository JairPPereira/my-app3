import React from 'react';
import '../../App.css';
import {Link } from "react-router-dom";

export default function Porcategoria() {

  return (
    <>
      <h1 className='porcategoria'>
      
<nav>
      <p><br /></p>
      <Link to="./Aparelhagens">Aparelhagens</Link>
      <p><br /></p>
      <Link to="./Atualidade">Atualidade</Link>
      <p><br /></p>
      <Link to="./Diario">Diario FM</Link>

     
      </nav></h1>

    </>
        
        
         
  );
}