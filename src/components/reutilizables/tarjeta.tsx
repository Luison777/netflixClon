"use client"
import { useEffect, useState,} from 'react';
import  '../../css/utils.css';
import Icon from './icon';
function Tarjeta(){
    const [sizeCard,setSizeCard]=useState({
        container:{height:'h-36', width:'w-60'},
        img:{height:'h-full'},
        infoCard:'hidden'
    });
    const [infoCard,setInfoCard]=useState({
        like:'visible',
    });
    //este bloque anima la tarjeta para cambiar de tamaño
    useEffect(()=>{
        const containerCard=document.getElementById('containerCard');
        containerCard?.addEventListener('mouseenter',()=>{
            const newSizeCard={...sizeCard};
            newSizeCard.container.width='w-80 shadow-xl shadow-black';
            newSizeCard.container.height='h-88';
            newSizeCard.img.height='h-50';
            newSizeCard.infoCard='';
            setSizeCard(newSizeCard);
        })
        containerCard?.addEventListener('mouseleave',()=>{
            const newSizeCard={...sizeCard};
            newSizeCard.container.width='w-60';
            newSizeCard.container.height='h-36';
            newSizeCard.img.height='h-full';
            newSizeCard.infoCard='hidden';
            setSizeCard(newSizeCard);
        })
    },[]);

    return(
        <div id='containerCard' className={`${sizeCard.container.height} ${sizeCard.container.width}  translate-y-2/3 absolute left-10 bottom-96 bg-negro-netflix-ligero rounded-md `}>
            <img alt='serieContent' src='./tanjiro.png' className={`${sizeCard.img.height} rounded-md object-cover object-center`}></img>
            <div className={sizeCard.infoCard}>
                <div className='relative top-5'>
                    <Icon id='play' src='./logo/play.svg' text='Play' position='absolute left-8' style='bg-white hover:bg-neutral-300' iconHeight='h-8 ml-1'></Icon>
                    <Icon id='check' src='./logo/check.svg' text='Quitar de mi lista' position='absolute left-20' style='border-4 border-gray-400 hover:border-white hover:bg-neutral-800' iconHeight='h-6'></Icon>
                    <Icon id='like' src='./logo/like.svg' text='Me gusta' position='absolute left-32 z-10' style='border-4 border-gray-400 hover:border-none hover:bg-neutral-800' iconHeight='h-6 absolute z-10'></Icon>
                    <div className={`${infoCard.like} w-36 h-14 bg-black absolute left-20 translate-y-full bottom-2 z-0 rounded-3xl bg-neutral-900 shadow-xl shadow-black`}>
                        <Icon id='dislike' src='./logo/dislike.svg' text='No me gusta' position='absolute top-2 left-2' iconHeight='h-6 z-10' style='hover:bg-neutral-800'></Icon>
                        <Icon id='encanta' src='./logo/encanta.svg' text='Me encanta' position='absolute top-2 right-2' iconHeight='h-6 z-10' style='hover:bg-neutral-800'></Icon>
                    </div>
                    
                    <Icon id='arrow' src='./logo/arrow.svg' text='Episodios e info' position='absolute right-8' style='border-4 border-gray-400 hover:border-white hover:bg-neutral-800' iconHeight='h-7'></Icon>
                </div>
            </div>
        </div>
    )
}

export default Tarjeta;