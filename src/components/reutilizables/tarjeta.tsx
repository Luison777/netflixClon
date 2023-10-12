"use client"
import { useEffect, useState,} from 'react';
import  '../../css/utils.css';
import Icon from './icon';
interface CardProps {
    id: string,
    style?:string
  }
function Tarjeta(props:CardProps){
    const [sizeCard,setSizeCard]=useState({
        container:{height:'h-28', width:'w-48'},
        img:{height:'h-full'},
        infoCard:'hidden'
    });
    const [barralike,setBarraLike]=useState({
        like:'hidden',
        circle:'border-4 border-gray-400'
    });
    //este bloque anima la tarjeta para cambiar de tamaño
    useEffect(()=>{
        const containerCard=document.getElementById(props.id);
        containerCard?.addEventListener('mouseenter',()=>{
            const newSizeCard={...sizeCard};
            newSizeCard.container.width='w-80 shadow-xl shadow-black z-50';
            newSizeCard.container.height='h-88';
            newSizeCard.img.height='h-50';
            newSizeCard.infoCard='';
            setSizeCard(newSizeCard);
        })
        containerCard?.addEventListener('mouseleave',()=>{
            const newSizeCard={...sizeCard};
            newSizeCard.container.width='w-48';
            newSizeCard.container.height='h-28';
            newSizeCard.img.height='h-full';
            newSizeCard.infoCard='hidden';
            setSizeCard(newSizeCard);
        })
    },[]);
    //este bloque agrega la animacion al boton like
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
        <div className='relative bottom-0 h-28 w-48 mr-2'>
        <div id={props.id} className={`${sizeCard.container.height} ${sizeCard.container.width} ${props.style} absolute translate-y-2/3 bottom-2/3 bg-negro-netflix-ligero rounded-md `}>
            <img alt='serieContent' src='./tanjiro.png' className={`${sizeCard.img.height} rounded-md object-cover object-center`}></img>
            <div className={sizeCard.infoCard}>
                <div className='relative top-5'>
                    <Icon id={`play${props.id}`} src='./logo/play.svg' text='Play' position='absolute left-8' style='bg-white hover:bg-neutral-300' iconHeight='h-8 ml-1'></Icon>
                    <Icon id={`check${props.id}`} src='./logo/check.svg' text='Quitar de mi lista' position='absolute left-20' style='border-4 border-gray-400 hover:border-white hover:bg-neutral-800' iconHeight='h-6'></Icon>
                    <Icon id={`like${props.id}`} src='./logo/like.svg' text='Me gusta' position='absolute left-32 z-10' style={`${barralike.circle} hover:bg-neutral-800`} iconHeight='h-6 absolute z-10'></Icon>
                    <div id={`barralike${props.id}`} className={`${barralike.like} w-36 h-14 bg-black absolute left-20 translate-y-full bottom-2 z-0 rounded-3xl bg-neutral-900 shadow-xl shadow-black`}>
                        <Icon id={`dislike${props.id}`} src='./logo/dislike.svg' text='No me gusta' position='absolute top-2 left-2' iconHeight='h-6 z-10' style='hover:bg-neutral-800'></Icon>
                        <Icon id={`encanta${props.id}`} src='./logo/encanta.svg' text='Me encanta' position='absolute top-2 right-2' iconHeight='h-6 z-10' style='hover:bg-neutral-800'></Icon>
                    </div>
                    <Icon id={`arrow${props.id}`} src='./logo/arrow.svg' text='Episodios e info' position='absolute right-8' style='border-4 border-gray-400 hover:border-white hover:bg-neutral-800' iconHeight='h-7'></Icon>
                </div>
                <div className='absolute bottom-0 h-20 px-5'>
                    <div className='flex'>
                        <p className='text-sm text-green-500 mr-2'>98% para ti </p>
                        <div className='text-sm text-neutral-500 mr-2 border-2 rounded px-1'>TV-MA</div>
                        <p className='text-sm text-neutral-500 mr-2'>3 temporadas</p>
                        <div className='text-xs right-12 border-2 rounded px-1'>HD</div>
                    </div>
                    <div className='mt-2 w-ful'>
                        <p >•Sombrío •Emocionante •Anime de fantasía</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Tarjeta;