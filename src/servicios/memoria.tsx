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
        carusel1block0tarjeta1:{img:'',afinidad:'',calsificacion:'',temporadas:'',temas:''},
        carusel1block0tarjeta2:{img:'',afinidad:'',calsificacion:'',temporadas:'',temas:''},
        carusel1block0tarjeta3:{img:'',afinidad:'',calsificacion:'',temporadas:'',temas:''}
    };

    return(
        <Contexto.Provider value ={ListaMock}>
            {props.children}
        </Contexto.Provider>
    );
}
