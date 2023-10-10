"use client"
import { useEffect, useState} from 'react';
function Tarjeta(){
    const [sizeCard,setSizeCard]=useState({
        container:{height:'h-28', width:'w-44'},
        img:{height:'h-full'}
    });
    useEffect(()=>{
        const containerCard=document.getElementById('containerCard');
        containerCard?.addEventListener('mouseenter',()=>{
            const newSizeCard={...sizeCard};
            newSizeCard.container.width='w-80 shadow-xl shadow-black';
            newSizeCard.container.height='h-88';
            newSizeCard.img.height='h-50';
            setSizeCard(newSizeCard);
        })
        containerCard?.addEventListener('mouseleave',()=>{
            const newSizeCard={...sizeCard};
            newSizeCard.container.width='w-44';
            newSizeCard.container.height='h-28';
            newSizeCard.img.height='h-full';
            setSizeCard(newSizeCard);
        })
    },[]);
    return(
        <div id='containerCard' className={`${sizeCard.container.height} ${sizeCard.container.width} translate-y-2/3 absolute left-10 bottom-96 bg-negro-netflix-ligero rounded-md `}>
            <img alt='serieContent' src='./tanjiro.png' className={`${sizeCard.img.height} rounded-md `}></img>
            <div className={`hidden`}></div>
        </div>
    )
}

export default Tarjeta;