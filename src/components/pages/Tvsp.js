import React from 'react';
import '../../App.css';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


import 'bootstrap/dist/css/bootstrap.min.css';

export default function TVsp() {

  return (
    <>

        <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://megacanais.com/wp-content/uploads/2020/12/bandsports.png" />
      <Card.Body>
        <Card.Title>Band Sport</Card.Title>
        <Card.Text><p2>BandSports é um canal de televisão brasileiro de esportes via televisão por assinatura do Grupo Bandeirantes de Comunicação. Foi lançado em 13 de maio de 2002.</p2>
        </Card.Text>
        <Link to="./Bandsp"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

        <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://d1sgwhnao7452x.cloudfront.net/dazn-og.jpg" />
      <Card.Body>
        <Card.Title>Dazn</Card.Title>
        <Card.Text><p2>DAZN é o primeiro serviço de streaming de esportes ao vivo e sob demanda do mundo e apresenta competições esportivas nacionais e internacionais.</p2>
        </Card.Text>
        <Link to="./Dazn"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn.conmebol.com/wp-content/uploads/2022/01/Nuevo-proyecto-85.jpg" />
      <Card.Body>
        <Card.Title>Commebol 1</Card.Title>
        <Card.Text><p2>Conmebol TV é um canal de televisão por assinatura brasileiro em pay-per-view, lançado no dia 15 de setembro de 2020 que transmite a Copa Libertadores da América, a Copa Sul-Americana e a Recopa Sul-Americana.</p2>
        </Card.Text>
        <Link to="./Commebol1"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.lance.com.br/files/article_main/uploads/2021/11/14/619146924380d.png" />
      <Card.Body>
        <Card.Title>ESPN</Card.Title>
        <Card.Text><p2>ESPN, sigla para Entertainment and Sports Programming Network, é uma família de canais de TV por assinatura dos Estados Unidos dedicada à transmissão e produção de programas esportivos 24 horas por dia.</p2>
        </Card.Text>
        <Link to="./Espn"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://static.cdn.pleno.news/2020/05/size_960_16_9_premiere.jpeg" />
      <Card.Body>
        <Card.Title>Premiere</Card.Title>
        <Card.Text><p2>O Premiere é um canal de televisão por assinatura brasileiro que utiliza o formato Pay-Per-View para exibir os jogos do Campeonato Brasileiro Séries A e B, Copa do Brasil e alguns Campeonatos Estaduais dos quais o Grupo Globo ainda possui os direitos de transmissão.</p2>
        </Card.Text>
        <Link to="./Premier"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>
    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://static.cdn.pleno.news/2020/05/size_960_16_9_premiere.jpeg" />
      <Card.Body>
        <Card.Title>Premiere 2</Card.Title>
        <Card.Text><p2>O Premiere é um canal de televisão por assinatura brasileiro que utiliza o formato Pay-Per-View para exibir os jogos do Campeonato Brasileiro Séries A e B, Copa do Brasil e alguns Campeonatos Estaduais dos quais o Grupo Globo ainda possui os direitos de transmissão.</p2>
        </Card.Text>
        <Link to="./Premiere2"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

    <center>
          <p></p>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://imagem.natelinha.uol.com.br/original/sportv-logo-visual-antigo_9271.jpeg" />
      <Card.Body>
        <Card.Title>Sport TV</Card.Title>
        <Card.Text><p2>SporTV é um canal de televisão por assinatura brasileiro. Foi lançado em 10 de novembro de 1991 sob o nome de Top Sport, alterado para o atual em 1994. Tem dois canais irmãos, o SporTV 2 e SporTV 3.</p2>
        </Card.Text>
        <Link to="./Sporttv"><Button variant="primary" size="lg" width="100%">
      Assistir
        </Button></Link>
      </Card.Body>
    </Card></center>

  



    <p></p>

    </>



  );
}

