"use client"

import { createContext} from 'react';

interface ListaData {
    [clave: string]: {
      img: string;
      afinidad: string;
      calsificacion: string;
      temporadas: string;
      temas: string;
      id:number;
    };
  }
  export const Contexto = createContext<ListaData | null>(null);  

export default function Memoria(props: {children:React.ReactNode}){

    const ListaMock={
        carusel1block0card1:{img:'demonSlayer.jpg',afinidad:'89% para ti',calsificacion:'TV-14',temporadas:'3 temporadas',temas:'Sombrio • Emocionante •Anime de fantasia', id:1},
        carusel1block0card2:{img:'theWalkingDead.jpg',afinidad:'87% para ti',calsificacion:'TV-MA',temporadas:'11 temporadas',temas:'Distopico • Gore • Terror', id:2},
        carusel1block0card3:{img:'hunterX.jpg',afinidad:'85% para ti',calsificacion:'TV-14',temporadas:'6 temporadas',temas:'Amocionante • Apasionante • Anime de fantasía ', id:3},
        carusel1block0card4:{img:'onePiece.png',afinidad:'86% para ti',calsificacion:'TV-14',temporadas:'15 temporadas',temas:'Disparatado • Emocionante • Anime de accion', id:4},
        carusel1block0card5:{img:'breakingBad.jpg',afinidad:'38% para ti',calsificacion:'TV-MA',temporadas:'5 temporadas',temas:'Violento • Crudo • De intriga', id:5},
        carusel1block0card6:{img:'merlina.png',afinidad:'97% para ti',calsificacion:'TV-14',temporadas:'1 temporada',temas:'Sacarcastico • Humor negro • Poderes psiquicos', id:6},
        carusel1block1card1:{img:'strangerThings.jpg',afinidad:'45% para ti',calsificacion:'TV-14',temporadas:'4 temporadas',temas:'Inquietante • Nostalgico • Banda sonora destacada', id:7},
        carusel1block1card2:{img:'casaDePapel.jpg',afinidad:'93% para ti',calsificacion:'TV-14',temporadas:'5 partes',temas:'Suspenso • Emocionante • De intriga', id:8},
        carusel1block1card3:{img:'bakiHanma.jpg',afinidad:'99% para ti',calsificacion:'TV-17',temporadas:'2 temporadas',temas:'Violento • Emocionante • Anime de accion', id:9},
        carusel1block1card4:{img:'sexEducation.jpg',afinidad:'100% para ti',calsificacion:'TV-17',temporadas:'4 temporadas',temas:'Picante • Irreverente • De adolescentes', id:10},
        carusel1block1card5:{img:'gumball.jpg',afinidad:'38% para ti',calsificacion:'TV-14',temporadas:'2 temporadas',temas:'Excentrico • Infantil • Premio Annie', id:11},
        carusel1block1card6:{img:'lucifer.jpg',afinidad:'45% para ti',calsificacion:'TV-17',temporadas:'6 temporadas',temas:'Logrado • Irreverente • Serie de fantasia', id:12},
        carusel2block0card1:{img:'leyAudaces.jpg',afinidad:'63% para ti',calsificacion:'TV-17',temporadas:'9 temporadas',temas:'Logrado • Ingenioso • Tragicomedia', id:13},
        carusel2block0card2:{img: 'lupin.jpg', afinidad: '99% para ti', calsificacion: 'TV-14', temporadas: '2 temporadas', temas: 'Ingenioso • Misterio' , id:14},
        carusel2block0card3:{img: 'dahmer.jpg', afinidad: '96% para ti', calsificacion: 'TV-MA', temporadas: '1 temporada', temas: 'Documental • Crimen' , id:15},
        carusel2block0card4:{img: 'theOffice.png', afinidad: '94% para ti', calsificacion: 'TV-14', temporadas: '9 temporadas', temas: 'Humor • Comedia de oficina' , id:16},
        carusel2block0card5:{img: 'bojackHorseman.jpg', afinidad: '35% para ti', calsificacion: 'TV-MA', temporadas: '6 temporadas', temas: 'Drama • Comedia' , id:17},
        carusel2block0card6:{img: 'theWitcher.jpg', afinidad: '83% para ti', calsificacion: 'TV-17', temporadas: '2 temporadas', temas: 'Fantasía • Acción' , id:18},
        carusel2block1card1:{img: 'sweetTooth.jpg', afinidad: '35% para ti', calsificacion: 'TV-14', temporadas: '1 temporada', temas: 'Fantasía • Aventura' , id:19},
        carusel2block1card2:{img: 'iCarly.jpeg', afinidad: '100% para ti', calsificacion: 'TV-14', temporadas: '7 temporadas', temas: 'Comedia • Sitcom' , id:20},
        carusel2block1card3:{img: 'victorious.jpg', afinidad: '99% para ti', calsificacion: 'TV-14', temporadas: '4 temporadas', temas: 'Comedia • Música' , id:21},
        carusel2block1card4:{img: 'you.jpg', afinidad: '98% para ti', calsificacion: 'TV-17', temporadas: '3 temporadas', temas: 'Suspenso • Thriller' , id:22},
        carusel2block1card5:{img: 'bobEsponja.jpg', afinidad: '75% para ti', calsificacion: 'TV-14', temporadas: '13 temporadas', temas: 'Infantil • Comedia' , id:23},
        carusel2block1card6:{img: 'avatar.jpg', afinidad: '69% para ti', calsificacion: 'TV-14', temporadas: '3 temporadas', temas: 'Aventura • Fantasía' , id:24},
        carusel3block0card1:{img: 'ben10.jpg', afinidad: '91% para ti', calsificacion: 'TV-14', temporadas: '4 temporadas', temas: 'Acción • Ciencia ficción' , id:25},
        carusel3block0card2:{img: 'peakyBlinders.jpg', afinidad: '99% para ti', calsificacion: 'TV-17', temporadas: '6 temporadas', temas: 'Drama • Crimen', id:26 },
        carusel3block0card3:{img: 'squidGame.jpg', afinidad: '50% para ti', calsificacion: 'TV-14', temporadas: '1 temporada', temas: 'Drama • Thriller' , id:27},
        carusel3block0card4:{img: 'flash.jpg', afinidad: '68% para ti', calsificacion: 'TV-14', temporadas: '8 temporadas', temas: 'Acción • Ciencia ficción' , id:28},
        carusel3block0card5:{img: 'bigMouth.jpg', afinidad: '76% para ti', calsificacion: 'TV-MA', temporadas: '5 temporadas', temas: 'Animación • Comedia' , id:29},
        carusel3block0card6:{img: 'cobraKai.jpg', afinidad: '92% para ti', calsificacion: 'TV-14', temporadas: '5 temporadas', temas: 'Acción • Drama' , id:30},
        carusel3block1card1:{img: 'onePunchMan.jpg', afinidad: '93% para ti', calsificacion: 'TV-14', temporadas: '2 temporadas', temas: 'Acción • Comedia' , id:31},
        carusel3block1card2:{img: 'theCrown.jpg', afinidad: '98% para ti', calsificacion: 'TV-14', temporadas: '4 temporadas', temas: 'Drama • Historia' , id:32},
        carusel3block1card3:{img: 'los100.jpg', afinidad: '94% para ti', calsificacion: 'TV-14', temporadas: '7 temporadas', temas: 'Ciencia ficción • Drama', id:33 },
        carusel3block1card4:{img: 'orangeIsTNB.jpg', afinidad: '95% para ti', calsificacion: 'TV-17', temporadas: '2 temporadas', temas: 'Drama • Romance' , id:34},
        carusel3block1card5:{img: 'betterCallSaul.jpg', afinidad: '80% para ti', calsificacion: 'TV-MA', temporadas: '6 temporadas', temas: 'Drama • Crimen' , id:35},
        carusel3block1card6:{img: 'vikingos.jpg', afinidad: '90% para ti', calsificacion: 'TV-14', temporadas: '6 temporadas', temas: 'Historia • Acción' , id:36}
        
    };

    return(
        <Contexto.Provider value ={ListaMock}>
            {props.children}
        </Contexto.Provider>
    );
}
