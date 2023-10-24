"use client"
import { useEffect, useState,} from 'react';
import Block from './block';
import  '../../css/utils.css';
import { list } from 'postcss';
interface CarouselProps{
    id:string,
    title: string,
    style?:string
}
function Carousel(props:CarouselProps){
    const [currentBlock,setCurrentBlock]=useState(0);

    const ListaMock={
        orden:[1,2]
    }
    //este bloque cambia los tamaños de los bloques para la animacion de carrusel
    const [blockStyle,setBlockStyle]=useState('');
    const [pressPrevious,setPressPrevious]=useState(false);
    const [overCarousel,setoverCarousel]=useState(false);
    
    useEffect(()=>{
        let blockPlus=document.getElementById(`${props.id}block${currentBlock-2}`);
        let blockMinus=document.getElementById(`${props.id}block${currentBlock-1}`);

        switch(currentBlock){
            case 0:
                if(pressPrevious){setBlockStyle('slideRight')}
                else{setBlockStyle('')}
                break;
            case 1:
                if(pressPrevious){ blockMinus? blockMinus.style.width='100%':console.log('el bloque no exsite');}
                else{setBlockStyle('slideLeft');}
                break;
            default:
                if(pressPrevious){ blockMinus? blockMinus.style.width='100%':console.log('el bloque no exsite');}
                else{blockPlus? blockPlus.style.width='0':console.log('el bloque no exsite');}
                break;
        }
    },[currentBlock]);
    //estas son las funciones usadas para los botones next y previous 
    const nextImage = () => {
        setCurrentBlock(currentBlock+1);
        setPressPrevious(false);
     };
    const previousImage = () => {
        setCurrentBlock(currentBlock-1);
        setPressPrevious(true);
    };
    //este bloque arregla el bug del z index de las tarjetas despues de hacer click en boton del carussel
    useEffect(()=>{
        const carousel=document.getElementById(props.id);
        carousel?.addEventListener("mouseenter",()=>{
            setoverCarousel(true);
        });
        carousel?.addEventListener("mouseleave",()=>{
            setoverCarousel(false);
        });
    });

    return(
        <div id={props.id} className={`flex justify-between items-center h-28 w-full ${props.style} relative my-24 -top-10  ${overCarousel? 'z-40':'z-0'} `}>
            <button id='previous' disabled={currentBlock>0? false:true} onClick={previousImage} className={`${currentBlock>0? 'bg-black/50':'bg-transparent'} w-16 h-full relative z-40`}>
                <img src='/logo/arrow.svg' className={`${currentBlock>0? 'visible':'hidden'} rotate-90 h-2/3`}></img> 
            </button>
            <div className='w-11/12 h-full flex relative '>
                <p className='absolute left-0 -top-10 text-2xl font-bold ml-4 -z-10'>{props.title}</p>
                {ListaMock.orden.map(id=> <Block key={id} id={`${props.id}block${id-1}`} style={`${blockStyle} transition-width duration-1000 ease-in-out w-full relative flex-shrink-0 `}/>)}
            </div>
            <button id='next' disabled={currentBlock<ListaMock.orden.length-1? false:true} onClick={nextImage} className={`${currentBlock<ListaMock.orden.length-1? 'bg-black/50':'bg-transparent'} bg-black/50 w-16 h-full relative z-40`}>
                <img src='/logo/arrow.svg' className={`${currentBlock<ListaMock.orden.length-1? 'visible':'hidden'} -rotate-90 h-2/3 `}></img> 
            </button>
        </div>
    )
}
export default Carousel;