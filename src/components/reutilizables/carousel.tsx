"use client"
import { useEffect, useState,} from 'react';
import Block from './block';
import  '../../css/utils.css';

function Carousel(){
    const [currentBlock,setCurrentBlock]=useState(0);
    const blocks = ['a', 'b', 'c'];
    //este bloque cambia los tamaños de los bloques para la animacion de carrusel
    const [blockStyle,setBlockStyle]=useState('');
    const [pressPrevious,setPressPrevious]=useState(false);

    useEffect(()=>{
        let blockPlus=document.getElementById(`block${currentBlock-2}`);
        let blockMinus=document.getElementById(`block${currentBlock-1}`);

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

    return(
        <div className='relative flex justify-center h-92 w-full bottom-24 overflow-hidden'>
            <p className='absolute left-12 bottom-80 translate-y-full text-2xl font-bold ml-4'>Los más buscados</p>
            <div className='w-11/12 h-24 flex absolute bottom-1/2'>
                <div id='block0' className={`${blockStyle} transition-width duration-1000 ease-in-out w-full relative flex-shrink-0 `} >
                    <Block id='bloque0'></Block>
                </div>
                <div id='block1' className={`${blockStyle} transition-width duration-1000 ease-in-out w-full relative flex-shrink-0 `} >
                    <Block id='bloque1'></Block>
                </div>
                <div id='block2' className={`${blockStyle} transition-width duration-1000 ease-in-out w-full relative flex-shrink-0 `} >
                    <Block id='bloque2'></Block>
                </div>
                <button id='previous' onClick={previousImage} className={`bg-black/50 absolute -left-16 w-16 h-24 ${currentBlock>0? 'visible':'hidden'}`}><img src='/logo/arrow.svg' className='rotate-90 h-12 ml-2 '></img> </button>
                <button id='next' onClick={nextImage} className={`bg-black/50 absolute -right-20 w-20 h-24  ${currentBlock<blocks.length-1? 'visible':'hidden'}`}><img src='/logo/arrow.svg' className='-rotate-90 h-12 bg-transparent'></img> </button>
            </div>
           
        </div>
    )
}
export default Carousel;