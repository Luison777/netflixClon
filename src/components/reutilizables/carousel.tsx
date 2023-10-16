"use client"
import { useEffect, useState,} from 'react';
import Block from './block';
import  '../../css/utils.css';
interface CarouselProps{
    id:string,
    title: string,
    style?:string
}
function Carousel(props:CarouselProps){
    const [currentBlock,setCurrentBlock]=useState(0);
    const blocks = ['a', 'b', 'c'];
    //este bloque cambia los tamaños de los bloques para la animacion de carrusel
    const [blockStyle,setBlockStyle]=useState('');
    const [pressPrevious,setPressPrevious]=useState(false);

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

    return(
        <div className={`flex justify-between items-center h-28 w-full ${props.style}  relative -z-20`}>
            <button id='previous' disabled={currentBlock>0? false:true} onClick={previousImage} className={`bg-black/50 w-16 h-full relative z-50`}>
                <img src='/logo/arrow.svg' className={`${currentBlock>0? 'visible':'hidden'} rotate-90 h-2/3`}></img> 
            </button>
            <div className='w-11/12 h-full flex relative -z-20'>
                <p className='absolute left-0 -top-10 text-2xl font-bold ml-4 -z-10'>{props.title}</p>
                <div id={`${props.id}block0`} className={`${blockStyle} transition-width duration-1000 ease-in-out w-full relative flex-shrink-0 -z-20`} >
                    <Block id={`${props.id}bloque0`}></Block>
                </div>
                <div id={`${props.id}block1`} className={`${blockStyle} transition-width duration-1000 ease-in-out w-full relative flex-shrink-0 `} >
                    <Block id={`${props.id}bloque1`}></Block>
                </div>
                <div id={`${props.id}block2`} className={`${blockStyle} transition-width duration-1000 ease-in-out w-full relative flex-shrink-0 `} >
                    <Block id={`${props.id}bloque2`}></Block>
                </div>
                
            </div>
            <button id='next' disabled={currentBlock<blocks.length-1? false:true} onClick={nextImage} className={`bg-black/50 w-16 h-full relative z-50`}>
                <img src='/logo/arrow.svg' className={`${currentBlock<blocks.length-1? 'visible':'hidden'} -rotate-90 h-2/3 `}></img> 
            </button>
        </div>
    )
}
export default Carousel;