"use client"
import { useEffect, useState,} from 'react';
import  '../../css/utils.css';
function Tarjeta(){
    const [sizeCard,setSizeCard]=useState({
        container:{height:'h-36', width:'w-60'},
        img:{height:'h-full'},
        infoCard:'hidden'
    });
    const [infoCard,setInfoCard]=useState({
        like:'hidden',
        check:'hidden',
        arrow:'hidden'
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
    //este bloque anima los iconos dentro de la tarjeta
    function visibleInfo(id:string){
        useEffect(()=>{
            const element=document.getElementById(id);
            element?.addEventListener('mouseenter',()=>{   
                setInfoCard({...infoCard,[id]:'visible'});
            })
            element?.addEventListener('mouseleave',()=>{
                setInfoCard({...infoCard,[id]:'hidden'});
            })
        },[]);
    }
    visibleInfo('check');
    visibleInfo('arrow');
    return(
        <div id='containerCard' className={`${sizeCard.container.height} ${sizeCard.container.width}  translate-y-2/3 absolute left-10 bottom-96 bg-negro-netflix-ligero rounded-md `}>
            <img alt='serieContent' src='./tanjiro.png' className={`${sizeCard.img.height} rounded-md object-cover object-center`}></img>
            <div className={`${sizeCard.infoCard}`}>
                <div className='relative top-5 '>
                    <div className='absolute left-8 rounded-full border-4 border-white h-10 w-10 bg-white '>
                        <img  src='./logo/play.svg' alt="play" className="h-7 ml-1 mt-1 "/>
                    </div>
                    <div id='check' className='absolute left-20 rounded-full border-4 border-gray-400 h-10 w-10 flex items-center justify-center bg-neutral-900 hover:border-white'>
                        <img  src='./logo/check.svg' alt="check" className="h-5  "/>
                        <div className={`${infoCard.check} absolute bottom-12 flex bg-white text-black w-40 rounded-md px-3 tooltipbottom`}>Quitar de mi lista</div>
                    </div>
                    <div id='like' className='absolute left-32 rounded-full border-4 border-gray-400 h-10 w-10 flex items-center justify-center bg-neutral-900 hover:border-white '>
                        <img src='./logo/like.svg' alt="like" className="h-6 z-10 absolute" />
                        <div className='w-36 h-12 bg-black absolute z-0 rounded-3xl'>

                        </div>
                    </div>
                    <div id='arrow' className='absolute right-8 rounded-full border-4 border-gray-400 h-10 w-10 flex items-center justify-center bg-neutral-900 hover:border-white'>
                        <img   src='./logo/arrow.svg' alt="arrow" className="h-5"/>
                        <div className={`${infoCard.arrow} absolute bottom-12 flex bg-white text-black w-36 rounded-md px-3 tooltipbottom`}>Episodios e info</div>
                    </div>
                </div>
              
            </div>
        </div>
    )
}

export default Tarjeta;