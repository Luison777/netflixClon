"use client"

import { createContext} from 'react';

interface ListaData {
    [clave: string]: {
      img: string;
      afinidad: string;
      calsificacion: string;
      temporadas: string;
      temas: string;
    };
  }
  export const Contexto = createContext<ListaData | null>(null);  

export default function Memoria(props: {children:React.ReactNode}){

    const ListaMock={
        carusel1block0card1:{img:'demonSlayer.jpg',afinidad:'89% para ti',calsificacion:'TV-14',temporadas:'3 temporadas',temas:'Sombrio • Emocionante •Anime de fantasia'},
        carusel1block0card2:{img:'theWalkingDead.jpg',afinidad:'87% para ti',calsificacion:'TV-MA',temporadas:'11 temporadas',temas:'Distopico • Gore • Terror'},
        carusel1block0card3:{img:'hunterX.jpg',afinidad:'85% para ti',calsificacion:'TV-14',temporadas:'6 temporadas',temas:'Amocionante • Apasionante • Anime de fantasía '},
        carusel1block0card4:{img:'onePiece.png',afinidad:'86% para ti',calsificacion:'TV-14',temporadas:'15 temporadas',temas:'Disparatado • Emocionante • Anime de accion'},
        carusel1block0card5:{img:'breakingBad.jpg',afinidad:'38% para ti',calsificacion:'TV-MA',temporadas:'5 temporadas',temas:'Violento • Crudo • De intriga'},
        carusel1block0card6:{img:'merlina.png',afinidad:'97% para ti',calsificacion:'TV-14',temporadas:'1 temporada',temas:'Sacarcastico • Humor negro • Poderes psiquicos'},
        carusel1block1card1:{img:'strangerThings.jpg',afinidad:'45% para ti',calsificacion:'TV-14',temporadas:'4 temporadas',temas:'Inquietante • Nostalgico • Banda sonora destacada'},
        carusel1block1card2:{img:'casaDePapel.jpg',afinidad:'93% para ti',calsificacion:'TV-14',temporadas:'5 partes',temas:'Suspenso • Emocionante • De intriga'},
        carusel1block1card3:{img:'bakiHanma.jpg',afinidad:'99% para ti',calsificacion:'TV-17',temporadas:'2 temporadas',temas:'Violento • Emocionante • Anime de accion'},
        carusel1block1card4:{img:'sexEducation.jpg',afinidad:'100% para ti',calsificacion:'TV-17',temporadas:'4 temporadas',temas:'Picante • Irreverente • De adolescentes'},
        carusel1block1card5:{img:'gumball.jpg',afinidad:'38% para ti',calsificacion:'TV-14',temporadas:'2 temporadas',temas:'Excentrico • Infantil • Premio Annie'},
        carusel1block1card6:{img:'lucifer.jpg',afinidad:'45% para ti',calsificacion:'TV-17',temporadas:'6 temporadas',temas:'Logrado • Irreverente • Serie de fantasia'},
        carusel2block0card1:{img:'leyAudaces.jpg',afinidad:'63% para ti',calsificacion:'TV-17',temporadas:'9 temporadas',temas:'Logrado • Ingenioso • Tragicomedia'},
        carusel2block0card2:{img: 'lupin.jpg', afinidad: '99% para ti', calsificacion: 'TV-14', temporadas: '2 temporadas', temas: 'Ingenioso • Misterio' },
        carusel2block0card3:{img: 'dahmer.jpg', afinidad: '96% para ti', calsificacion: 'TV-MA', temporadas: '1 temporada', temas: 'Documental • Crimen' },
        carusel2block0card4:{img: 'theOffice.png', afinidad: '94% para ti', calsificacion: 'TV-14', temporadas: '9 temporadas', temas: 'Humor • Comedia de oficina' },
        carusel2block0card5:{img: 'bojackHorseman.jpg', afinidad: '35% para ti', calsificacion: 'TV-MA', temporadas: '6 temporadas', temas: 'Drama • Comedia' },
        carusel2block0card6:{img: 'theWitcher.jpg', afinidad: '83% para ti', calsificacion: 'TV-17', temporadas: '2 temporadas', temas: 'Fantasía • Acción' },
        carusel2block1card1:{img: 'sweetTooth.jpg', afinidad: '35% para ti', calsificacion: 'TV-14', temporadas: '1 temporada', temas: 'Fantasía • Aventura' },
        carusel2block1card2:{img: 'iCarly.jpeg', afinidad: '100% para ti', calsificacion: 'TV-14', temporadas: '7 temporadas', temas: 'Comedia • Sitcom' },
        carusel2block1card3:{img: 'victorious.jpg', afinidad: '99% para ti', calsificacion: 'TV-14', temporadas: '4 temporadas', temas: 'Comedia • Música' },
        carusel2block1card4:{img: 'you.jpg', afinidad: '98% para ti', calsificacion: 'TV-17', temporadas: '3 temporadas', temas: 'Suspenso • Thriller' },
        carusel2block1card5:{img: 'bobEsponja.jpg', afinidad: '75% para ti', calsificacion: 'TV-14', temporadas: '13 temporadas', temas: 'Infantil • Comedia' },
        carusel2block1card6:{img: 'avatar.jpg', afinidad: '69% para ti', calsificacion: 'TV-14', temporadas: '3 temporadas', temas: 'Aventura • Fantasía' },
        carusel3block0card1:{img: 'ben10.jpg', afinidad: '91% para ti', calsificacion: 'TV-14', temporadas: '4 temporadas', temas: 'Acción • Ciencia ficción' },
        carusel3block0card2:{img: 'peakyBlinders.jpg', afinidad: '99% para ti', calsificacion: 'TV-17', temporadas: '6 temporadas', temas: 'Drama • Crimen' },
        carusel3block0card3:{img: 'squidGame.jpg', afinidad: '50% para ti', calsificacion: 'TV-14', temporadas: '1 temporada', temas: 'Drama • Thriller' },
        carusel3block0card4:{img: 'flash.jpg', afinidad: '68% para ti', calsificacion: 'TV-14', temporadas: '8 temporadas', temas: 'Acción • Ciencia ficción' },
        carusel3block0card5:{img: 'bigMouth.jpg', afinidad: '76% para ti', calsificacion: 'TV-MA', temporadas: '5 temporadas', temas: 'Animación • Comedia' },
        carusel3block0card6:{img: 'cobraKai.jpg', afinidad: '92% para ti', calsificacion: 'TV-14', temporadas: '5 temporadas', temas: 'Acción • Drama' },
        carusel3block1card1:{img: 'onePunchMan.jpg', afinidad: '93% para ti', calsificacion: 'TV-14', temporadas: '2 temporadas', temas: 'Acción • Comedia' },
        carusel3block1card2:{img: 'theCrown.jpg', afinidad: '98% para ti', calsificacion: 'TV-14', temporadas: '4 temporadas', temas: 'Drama • Historia' },
        carusel3block1card3:{img: 'los100.jpg', afinidad: '94% para ti', calsificacion: 'TV-14', temporadas: '7 temporadas', temas: 'Ciencia ficción • Drama' },
        carusel3block1card4:{img: 'orangeIsTNB.jpg', afinidad: '95% para ti', calsificacion: 'TV-17', temporadas: '2 temporadas', temas: 'Drama • Romance' },
        carusel3block1card5:{img: 'betterCallSaul.jpg', afinidad: '80% para ti', calsificacion: 'TV-MA', temporadas: '6 temporadas', temas: 'Drama • Crimen' },
        carusel3block1card6:{img: 'vikingos.jpg', afinidad: '90% para ti', calsificacion: 'TV-14', temporadas: '6 temporadas', temas: 'Historia • Acción' }
        
    };

    return(
        <Contexto.Provider value ={ListaMock}>
            {props.children}
        </Contexto.Provider>
    );
}
