"use client"
import { useEffect, useState,} from 'react';
import Block from './block';
import  '../../css/utils.css';

import Image from 'next/image'
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
    },[currentBlock,pressPrevious,props.id]);
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
                <Image src='/logo/arrow.svg' alt='previous' className={`${currentBlock>0? 'visible':'hidden'} rotate-90 `} height={100} width={100}/>
            </button>
            <div className='absolute h-1 right-20 -top-5 flex'>
                {ListaMock.orden.map(id=> <div key={id} className={`${currentBlock==id-1? 'bg-neutral-300/90':''} bg-neutral-500/50 h-full w-3 mx-1`}/>)}
            </div>
            <div className='w-11/12 h-full flex relative '>
                <p className='absolute left-0 -top-8 text-base sm:text-2xl font-bold -z-10'>{props.title}</p>
                {ListaMock.orden.map(id=> <Block key={id} id={`${props.id}block${id-1}`} style={`${blockStyle} transition-width duration-1000 ease-in-out w-full relative flex-shrink-0 `}/>)}
            </div>
            <button id='next' disabled={currentBlock<ListaMock.orden.length-1? false:true} onClick={nextImage} className={`${currentBlock<ListaMock.orden.length-1? 'bg-black/50':'bg-transparent'} bg-black/50 w-16 h-full relative z-40`}>
                <Image src='/logo/arrow.svg' alt='next' className={`${currentBlock<ListaMock.orden.length-1? 'visible':'hidden'} -rotate-90 `} height={100} width={100}/>
            </button>
        </div>
    )
}
export default Carousel;