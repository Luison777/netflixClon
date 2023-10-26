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
  interface ListaModal {
    [clave: string]: {
      name: string;
      id:number;
      description: string;
      genero:string;
      personajes:string;
    };
  }
  export const Contexto = createContext<ListaData  | null>(null);  
  export const contextoModal=createContext<ListaModal  | null>(null);

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
    const ListaModal={
        carusel1block0card1: {
            name: 'Demon slayer Kimetsu no Yaiba',
            id: 1,
            description: 'Tanjiro Kamado emprende un viaje arriesgado para buscar una cura para la maldición de su hermana y vengar a su familia asesinada por un demonio.',
            genero:'Acción, Aventuras, Demonios',
            personajes:'Tanjiro Kamado, Nezuko Kamado, Zenitsu Agatsuma'
        },
          carusel1block0card2: {
            name: 'the walking dead',
            id: 2,
            description: 'The Walking Dead es una serie de zombies que sigue a un grupo de sobrevivientes en un mundo posapocalíptico.',
            genero:'Terror, Drama, Apocalipsis zombi',
            personajes:'Rick Grimes, Daryl Dixon, Michone'
        },
          carusel1block0card3: {
            name: 'Hunter x Hunter',
            id: 3,
            description: 'Hunter x Hunter sigue las aventuras de Gon Freecss mientras busca a su padre y se convierte en un cazador de tesoros.',
            genero:' Aventuras, Acción, Fantasía',
            personajes:'Gon Freecss, Killua Zoldyck, Hisoka Morow'
        },
          carusel1block0card4: {
            name: 'One Piece',
            id: 4,
            description: 'One Piece cuenta la historia de Monkey D. Luffy y su tripulación en busca del tesoro más grande del mundo, el "One Piece".',
            genero:'Aventuras, Acción, Comedia',
            personajes:'Monkey D. Luffy, Roronoa Zoro, Nami'
        },
          carusel1block0card5: {
            name: 'Breaking Bad',
            id: 5,
            description: 'Breaking Bad sigue la transformación de Walter White de un maestro de química a un fabricante y traficante de metanfetamina.',
            genero:'Drama, Crimen, Thriller',
            personajes:'Walter White, Jesee Pinkman, Skyler White'
        },
          carusel1block0card6: {
            name: 'Merlina',
            id: 6,
            description: 'Merlina es una serie de fantasía que sigue las aventuras de una joven maga llamada Merlina en un mundo mágico.',
            genero:'Fantasía, Aventuras',
            personajes:'Merlina, Arthur Weasley, el Gato'
        },
          carusel1block1card1: {
            name: 'Stranger Things',
            id: 7,
            description: 'Stranger Things se desarrolla en la década de 1980 y sigue a un grupo de niños que se enfrentan a fenómenos sobrenaturales en su ciudad.',
            genero:'Ciencia ficción, Terror, Misterio',
            personajes:'eleven, Mike Wheeler, Dustin Henderson'
        },
          carusel1block1card2: {
            name: 'La casa de Papel',
            id: 8,
            description: 'La Casa de Papel es un thriller sobre un grupo de ladrones que asalta la Real Casa de la Moneda de España.',
            genero:'Ciencia ficción, Terror, Misterio',
            personajes:'El profesor, Tokio, Nairobi'
        },
          carusel1block1card3: {
            name: 'Baki Hanma',
            id: 9,
            description: 'Baki Hanma es un luchador que busca superar sus límites en una serie de batallas intensas y enfrentamientos.',
            genero:'Acción, Artes marciales, Lucha',
            personajes:'Baki Hanma, Yuriko Hanma, Dopo Huruchi'
        },
          carusel1block1card4: {
            name: 'sex Education',
            id: 10,
            description: 'Sex Education sigue las vidas de estudiantes de secundaria mientras exploran temas relacionados con la sexualidad y las relaciones.',
            genero:'Comedia, Drama, Adolescencia',
            personajes:'Otis Milburn, Meave Wiley, Eric Effiong'
        },
          carusel1block1card5: {
            name: 'Gumball',
            id: 11,
            description: 'El asombroso mundo de Gumball es una serie de comedia que sigue las locas aventuras de un gato azul y su familia.',
            genero:'Animación, Comedia, Aventuras',
            personajes:'Gumball Waterson, Darwin Waterson, Annais Waterson'
        },
          carusel1block1card6: {
            name: 'Lucifer',
            id: 12,
            description: 'Lucifer Morningstar, el diablo, abandona el infierno y se instala en Los Ángeles, donde trabaja con la policía y resuelve crímenes.',
            genero:'Crimen, Drama, Fantasía',
            personajes:'Lucifer Morningstar, Mazikeen, Chloe Decker'
        },
          carusel2block0card1: {
            name: 'Ley de los Audaces',
            id: 13,
            description: 'Ley y Orden: Los Ángeles es un drama policial que sigue a un grupo de detectives mientras resuelven crímenes en Los Ángeles.',
            genero:'Drama, Policíaco',
            personajes:'Det. Ricardo Morales, Det. T.J. Jaruszalski, DD.A. Jonah Dekker'
        },
          carusel2block0card2: {
            name: 'Lupin',
            id: 14,
            description: 'Lupin es una serie francesa de suspense que sigue las aventuras de un ladrón maestro inspirado en el personaje de Arsène Lupin.',
            genero:' Suspense, Acción, Crimen',
            personajes:'Assane Diop, Clair, Roman Laugier '
        },
          carusel2block0card3: {
            name: 'Dahmer',
            id: 15,
            description: 'Dahmer: Mind of a Monster es un documental que explora la vida y los crímenes de Jeffrey Dahmer, un asesino en serie.',
            genero:'Documental, Crimen',
            personajes:'Jeffrey Dahmer'
        },
          carusel2block0card4: {
            name: 'the Office',
            id: 16,
            description: 'The Office es una comedia que sigue la vida cotidiana de los empleados de una oficina en Scranton, Pensilvania.',
            genero:'Comedia, Mockumentary',
            personajes:'Michael Scott, Jim Halpert, Pam Beesley'
        },
          carusel2block0card5: {
            name: 'Bojack Horseman',
            id: 17,
            description: 'BoJack Horseman es una serie animada que sigue las desventuras de BoJack, una estrella de los 90 y actor de voz.',
            genero:'Animación, Comedia, Drama',
            personajes:'Bojack Horseman, Princes Carolyn, Todd Chavez'
        },
          carusel2block0card6: {
            name: 'the Witcher',
            id: 18,
            description: 'The Witcher sigue las aventuras de Geralt de Rivia, un cazador de monstruos en un mundo lleno de criaturas y magia.',
            genero:'Fantasía, Aventuras, Acción',
            personajes:'Gerald of Rivia, Yennefer of Vengerberg, Ciri'
        },
          carusel2block1card1: {
            name: 'sweet Tooth',
            id: 19,
            description: 'Sweet Tooth sigue a un niño mitad humano y mitad ciervo mientras viaja en un mundo postapocalíptico en busca de respuestas.',
            genero:'Aventuras, Drama, Fantasía',
            personajes:'Gus, Jepperd, Bear'
          },
          carusel2block1card2: {
            name: 'iCarly',
            id: 20,
            description: 'iCarly es una serie de comedia que sigue a Carly Shay y sus amigos mientras crean un webshow en línea.',
            genero:' Comedia',
            personajes:'Carley Shay, Sam Pocket, Freddie Benson'
          },
          carusel2block1card3: {
            name: 'Victorious',
            id: 21,
            description: 'Victorious es una serie de comedia musical que sigue a Tori Vega mientras navega por su vida en una escuela de artes escénicas.',
            genero:'Comedia, Musical',
            personajes:'Tori Vega, Jade West, Cat Valentine'
          },
          carusel2block1card4: {
            name: 'You',
            id: 22,
            description: 'You es un thriller psicológico que sigue a Joe Goldberg, un hombre obsesivo que se convierte en un acosador.',
            genero:'Thriller, Drama, Crimen',
            personajes:'Joe Goldberg, Guinevere Beck, Peach Salinger'
          },
          carusel2block1card5: {
            name: 'Bob Esponja',
            id: 23,
            description: 'Bob Esponja es una serie de animación que sigue las aventuras de Bob Esponja en el fondo del mar en Fondo de Bikini.',
            genero:' Animación, Comedia',
            personajes:'Bob Esponja, Patricio, Calamardo'
          },
          carusel2block1card6: {
            name: 'Avatar',
            id: 24,
            description: 'Avatar: The Last Airbender es una serie animada que sigue a Aang, el último Maestro del Aire, en su búsqueda para restaurar el equilibrio en el mundo.',
            genero:'Animación, Acción, Aventuras',
            personajes:'Aang, Katara, Sokka'
          },
          carusel3block0card1: {
            name: 'Ben 10',
            id: 25,
            description: 'Ben 10 sigue las aventuras de Ben Tennyson, un niño que puede transformarse en varios alienígenas para luchar contra el mal.',
            genero:'Animación, Acción, Aventuras',
            personajes:'Ben Tennyson, Wen Tennyson, Max Tennyson'
          },
          carusel3block0card2: {
            name: 'Peaky Blinders',
            id: 26,
            description: 'Peaky Blinders es un drama ambientado en la posguerra que sigue a la familia Shelby mientras dirigen una pandilla en Birmingham, Inglaterra.',
            genero:'Drama, Crimen, Historia',
            personajes:'Thomas Shelby, Arthur Shelby, Polly Gray'
          },
          carusel3block0card3: {
            name: 'Squid Games',
            id: 27,
            description: 'Squid Game es una serie surcoreana que sigue a participantes en juegos mortales mientras luchan por un premio en efectivo.',
            genero:'Drama, Thriller, Suspenso',
            personajes:'Gi-hun, Sang-woo, Seong Gi-hun'
          },
          carusel3block0card4: {
            name: 'Flash',
            id: 28,
            description: 'The Flash sigue las aventuras de Barry Allen, un científico que obtiene poderes de velocidad sobrehumana y se convierte en un superhéroe.',
            genero:'Acción, Ciencia Ficción, Superhéroes',
            personajes:'Barry Allen, Iris West, Cisco Ramon'
          },
          carusel3block0card5: {
            name: 'Big Mouth',
            id: 29,
            description: 'Big Mouth es una comedia animada que explora la adolescencia y la pubertad a través de las experiencias de un grupo de amigos.',
            genero:'Animación, Comedia, Adolescencia',
            personajes:'Nick Birch, Andrew Glouberman'
          },
          carusel3block0card6: {
            name: 'Cobra Kai',
            id: 30,
            description: 'Cobra Kai es una serie que continúa la historia de Karate Kid y sigue a Johnny Lawrence y Daniel LaRusso en su rivalidad continua.',
            genero:'Acción, Drama, Artes Marciales',
            personajes:'Johnny Lawrence, Daniiel Larusso'
          },
          carusel3block1card1: {
            name: 'one Punch Man',
            id: 31,
            description: 'One Punch Man es un anime que sigue a Saitama, un héroe que puede derrotar a cualquier enemigo con un solo golpe.',
            genero:'Acción, Comedia, Ciencia Ficción',
            personajes:'Saitama, Genos'
          },
          carusel3block1card2: {
            name: 'the Crown',
            id: 32,
            description: 'The Crown es un drama histórico que narra la vida de la Reina Isabel II y los eventos en la historia del Reino Unido.',
            genero:'Drama, Historia, Biografía',
            personajes:'Reina Isabel II, Principe Felipe, Winston Churchill'
          },
          carusel3block1card3: {
            name: 'Los 100',
            id: 33,
            description: 'Los 100 sigue a un grupo de jóvenes que regresan a la Tierra después de un apocalipsis nuclear y luchan por sobrevivir.',
            genero:'Ciencia Ficción, Drama, Aventuras',
            personajes:'Clarke Griffin, Bellamy Blake, Octavia Blake'
          },
          carusel3block1card4: {
            name: 'Orange is the new Black',
            id: 34,
            description: 'Orange Is the New Black es una serie que se desarrolla en una prisión de mujeres y explora las vidas de las reclusas.',
            genero:'Comedia, Drama, Crimen',
            personajes:'Piper Chapman, Alex Vause, Suzanne "Crazy Eyes" Warren'
          },
          carusel3block1card5: {
            name: 'Better Call Saul',
            id: 35,
            description: 'Better Call Saul es un spin-off de Breaking Bad que sigue la transformación de Jimmy McGill en el abogado Saul Goodman.',
            genero:'Drama, Crimen, Legal',
            personajes:'Jimmy McGill'
          },
          carusel3block1card6: {
            name: 'Vikingos',
            id: 36,
            description: 'Vikingos es una serie que narra las hazañas y conquistas de los vikingos liderados por Ragnar Lothbrok.',
            genero:'Drama, Historia, Aventuras',
            personajes:'Ragnark'
          },  
    };
    return(
        <contextoModal.Provider value={ListaModal}>
        <Contexto.Provider value ={ListaMock}>
            {props.children}
        </Contexto.Provider>
        </contextoModal.Provider>
    );
}
