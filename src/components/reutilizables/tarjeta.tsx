"use client"
import { useEffect, useState,} from 'react';
import  '../../css/utils.css';
import Icon from './icon';
import Link from 'next/link'
import { useContext} from 'react';
import { Contexto } from '@/servicios/memoria';
import { useRouter } from 'next/navigation'
interface CardProps {
    id: string,
    style?:string
  }
function Tarjeta(props:CardProps){
    const[styles,setStyles]=useState({sizeCard:'h-full w-full ',sizeImg:'h-full',menuCard:'hidden'});
    const [barralike,setBarraLike]=useState({like:'hidden',circle:'border-4 border-gray-400'});
    const router=useRouter();
    let timeOutId: NodeJS.Timeout | undefined;
    //este bloque anima la tarjeta para aumentar de tamaño 
    const increaseSizeCard=()=>{
        
        const video=document.getElementById(`video${props.id}`);
        const mp4=document.getElementById(`mp4${props.id}`)as HTMLVideoElement;
        clearTimeout(timeOutId);
        timeOutId = setTimeout(()=>{
        setStyles(
            {...styles,
                sizeCard:' h-72 w-80 z-40 shadow-xl shadow-black', 
                sizeImg:'h-1/2 w-full',
                menuCard:'visible'})
        if (video){
            video.style.display = 'block';
            mp4.play();
        }}, 500);
    }
    const decreaseSizeCard=()=>{
        const video=document.getElementById(`video${props.id}`);
        const mp4=document.getElementById(`mp4${props.id}`)as HTMLVideoElement;
        clearTimeout(timeOutId);
        setStyles({...styles,sizeCard:'h-full w-full', sizeImg:'h-full',menuCard:'hidden'})
        if (video){
            video.style.display = 'none';
            mp4.pause();
        }
    }
    useEffect(()=>{
        
        const card=document.getElementById(props.id);
        card?.addEventListener("mouseenter",increaseSizeCard);
        card?.addEventListener("mouseleave",decreaseSizeCard);
    },[]);
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
    //este bloque obtiene el contexto de la memoria y los datos de cada tarjeta 
    const lista=useContext(Contexto);
    let card;
    if(lista){card=lista[props.id]};
    
    return(
        <div className={'relative h-full w-1/6 mr-2 rounded-md '}>
            <div id={props.id} className={`${styles.sizeCard} ${props.style} absolute translate-y-3/4 bottom-3/4 rounded bg-negro-netflix-ligero `}>
                <img alt={card?.img} src={`/series/${card?.img}`} className={`${styles.sizeImg} w-full object-cover rounded`}></img>
                <div id={`video${props.id}`} onClick={()=>router.push('/video') } className=' bg-black absolute top-0 rounded h-full flex items-center hidden'>
                    <video id={`mp4${props.id}`} src="/series/video.mp4" className='rounded w-full h-auto' muted ></video>
                    <p className='absolute top-1/4 left-1/2 -translate-x-1/2 z-50'>Video ilustrativo</p>
                </div>
            
                <button onClick={()=>router.push(`/modal/${props.id}`,{ scroll:false })} className={`${styles.menuCard} h-1/2 w-full bg-negro-netflix-ligero relative rounded-br rounded-bl`}>
                    <div className='absolute top-2 w-full flex'>
                        <Icon route='/video' id={`play${props.id}`} src='/logo/play.svg' text='Play'  style='bg-white hover:bg-neutral-300 ml-5' iconHeight='h-8 ml-1'></Icon>
                        <Icon id={`check${props.id}`} src='/logo/check.svg' mutable='/logo/plus.svg' mutableText='Agregar a mi lista' text='Quitar de mi lista'  style='mx-2 border-4 border-gray-400 hover:border-white hover:bg-neutral-800' iconHeight='h-6'></Icon>
                        <Icon id={`like${props.id}`} src='/logo/like.svg' text='Me gusta'  style={`${barralike.circle} hover:bg-neutral-800`} iconHeight='h-6 absolute z-10'></Icon>
                        <div id={`barralike${props.id}`} className={`${barralike.like} w-36 h-14 bg-black absolute left-16 -top-2 left-16 z-0 rounded-3xl bg-neutral-900 shadow-xl shadow-black`}>
                            <Icon id={`dislike${props.id}`} src='/logo/dislike.svg' text='No me gusta' position='absolute top-2 left-2' iconHeight='h-6 z-10' style='hover:bg-neutral-800'></Icon>
                            <Icon id={`encanta${props.id}`} src='/logo/encanta.svg' text='Me encanta' position='absolute top-2 right-2' iconHeight='h-6 z-10' style='hover:bg-neutral-800'></Icon>
                        </div>
                        <Icon route={`/modal/${props.id}`} id={`arrow${props.id}`} src='/logo/arrow.svg' text='Episodios e info' position='absolute right-5' style='border-4 border-gray-400 hover:border-white hover:bg-neutral-800' iconHeight='h-7'></Icon>
                    </div>
                    <div className='absolute top-16 h-14 px-5 z-40 w-full'>
                        <div className='flex'>
                            <p className='text-sm text-green-500 mr-2'>{card?.afinidad}</p>
                            <div className='text-sm text-neutral-500 mr-2 border-2 rounded px-1'>{card?.calsificacion}</div>
                            <p className='text-sm text-neutral-500 mr-2'>{card?.temporadas}</p>
                            <div className='text-xs right-12 border-2 rounded px-1'>HD</div>
                        </div>
                        <div className='mt-2 w-ful text-sm flex justify-start'>
                            <p >{card?.temas}</p>
                        </div>
                    </div>
                </button>
               
                
            </div>
        </div>
    )
}

export default Tarjeta;