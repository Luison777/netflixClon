"use client"
import { useEffect, useState,} from 'react';
import  '../../css/utils.css';
import Icon from './icon';
interface CardProps {
    id: string,
    style?:string
  }
function Tarjeta(props:CardProps){
    const[styles,setStyles]=useState({
        sizeCard:'h-full w-full ',
        sizeImg:'h-full',
        menuCard:'hidden'
    });
    const [barralike,setBarraLike]=useState({
        like:'hidden',
        circle:'border-4 border-gray-400'
    });
    //este bloque anima la tarjeta para aumentar de tamaño 
    const increaseSizeCard=()=>{
        setStyles({...styles,sizeCard:' h-72 w-80 z-50 shadow-xl shadow-black', sizeImg:'h-1/2 w-full',menuCard:'visible'})
    }
    const decreaseSizeCard=()=>{
        setStyles({...styles,sizeCard:'h-full w-full', sizeImg:'h-full',menuCard:'hidden'})
    }
    useEffect(()=>{
        const card=document.getElementById(props.id);
        card?.addEventListener("mouseenter",increaseSizeCard);
        card?.addEventListener("mouseleave",decreaseSizeCard);
    });
    //este bloque anima el boton like de la tarjeta
    useEffect(()=>{
        const like=document.getElementById(`like${props.id}`);
        const barralike=document.getElementById(`barralike${props.id}`);
        like?.addEventListener('mouseenter',()=>{   
            setBarraLike({...barralike,
                like:'visible',
                circle:'border-none'
            });
            barralike?.addEventListener('mouseenter',()=>{   
                setBarraLike({...barralike,
                    like:'visible',
                    circle:'border-none'
                });
            });
            barralike?.addEventListener('mouseleave',()=>{   
                setBarraLike({...barralike,
                    like:'hidden',
                    circle:'border-4 border-gray-400'
                });
            });
        })
    },[]);

    return(
        <div className={'relative h-full w-1/6 mr-2 rounded-md '}>
            <div id={props.id} className={`${styles.sizeCard} ${props.style} absolute translate-y-2/3 bottom-2/3 rounded`}>
                <img alt='serieContent' src='./tanjiro.png' className={`${styles.sizeImg} object-cover rounded`}></img>
                <div className={`${styles.menuCard} h-1/2 w-full bg-negro-netflix-ligero relative`}>
                    <div className='absolute top-4 w-full flex'>
                        <Icon id={`play${props.id}`} src='./logo/play.svg' text='Play'  style='bg-white hover:bg-neutral-300 ml-5' iconHeight='h-8 ml-1'></Icon>
                        <Icon id={`check${props.id}`} src='./logo/check.svg' text='Quitar de mi lista'  style='mx-2 border-4 border-gray-400 hover:border-white hover:bg-neutral-800' iconHeight='h-6'></Icon>
                        <Icon id={`like${props.id}`} src='./logo/like.svg' text='Me gusta'  style={`${barralike.circle} hover:bg-neutral-800`} iconHeight='h-6 absolute z-10'></Icon>
                        <div id={`barralike${props.id}`} className={`${barralike.like} w-36 h-14 bg-black absolute left-16 -top-2 left-16 z-0 rounded-3xl bg-neutral-900 shadow-xl shadow-black`}>
                            <Icon id={`dislike${props.id}`} src='./logo/dislike.svg' text='No me gusta' position='absolute top-2 left-2' iconHeight='h-6 z-10' style='hover:bg-neutral-800'></Icon>
                            <Icon id={`encanta${props.id}`} src='./logo/encanta.svg' text='Me encanta' position='absolute top-2 right-2' iconHeight='h-6 z-10' style='hover:bg-neutral-800'></Icon>
                        </div>
                        <Icon id={`arrow${props.id}`} src='./logo/arrow.svg' text='Episodios e info' position='absolute right-5' style='border-4 border-gray-400 hover:border-white hover:bg-neutral-800' iconHeight='h-7'></Icon>
                    </div>
                    <div className='absolute top-20 h-14 px-5 z-50 w-full'>
                        <div className='flex'>
                            <p className='text-sm text-green-500 mr-2'>98% para ti </p>
                            <div className='text-sm text-neutral-500 mr-2 border-2 rounded px-1'>TV-MA</div>
                            <p className='text-sm text-neutral-500 mr-2'>3 temporadas</p>
                            <div className='text-xs right-12 border-2 rounded px-1'>HD</div>
                        </div>
                        <div className='mt-2 w-ful text-sm'>
                            <p >•Sombrío •Emocionante •Anime de fantasía</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Tarjeta;