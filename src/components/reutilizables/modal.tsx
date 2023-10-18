"use client"
import Icon from "./icon";
import { useEffect, useState,} from 'react';
function Modal(){
    const [barralike,setBarraLike]=useState({
        like:'hidden',
        circle:'border-4 border-gray-400'
    });

    useEffect(()=>{
        const like=document.getElementById(`like`);
        const barralike=document.getElementById(`barralike`);
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
        <div className="fixed h-full w-full bg-black/50 top-0 left-0 z-50 ">
            <div className="mt-10 h-full w-2/3 bg-negro-netflix-ligero rounded absolute left-1/2 -translate-x-1/2">
                <div className="w-full h-[600px] overflow-hidden relative">
                    <button className="absolute top-5 right-5 z-10">
                        <Icon id="close" src='./logo/plus.svg' style={`hover:bg-black mr-2 bg-black/50 `} iconHeight='h-6 absolute rotate-45'></Icon>
                    </button>
                    <img src="./demonSlayer.jpg" alt="demonslayer" className="h-full w-full object-cover rounded relative" />
                    <img src='./logoDemon.png' alt="serie imagen" className="h-2/5 absolute top-1/2 -translate-y-1/2 left-8"></img>
                    <div className="absolute w-full h-10 bottom-10 left-0 flex">
                        <button className="bg-white hover:bg-white/90 h-10 w-44 ml-10 mr-2 text-black font-semibold rounded flex items-center justify-center">
                            <img src='./logo/play.svg' alt="serie imagen" className="h-8 "></img>
                                Reproducir
                        </button>
                        <Icon id="plus" src='./logo/plus.svg' text='Agregar'  style={`${barralike.circle} hover:bg-neutral-800 mr-2 bg-black/50 `} iconHeight='h-6 absolute'></Icon>
                        <Icon id="like" src='./logo/like.svg' text='Me gusta'  style={`${barralike.circle} hover:bg-neutral-800 bg-black/50 relative`} iconHeight='h-6 absolute'></Icon>
                            <div id="barralike" className={`${barralike.like} w-36 h-14 bg-black absolute left-[365px] -translate-x-1/2 -top-2 z-0 rounded-3xl bg-neutral-900 shadow-xl shadow-black `}>
                                <Icon id={`dislike`} src='./logo/dislike.svg' text='No me gusta' position='absolute top-2 left-2' iconHeight='h-6 z-10' style='hover:bg-neutral-800'></Icon>
                                <Icon id={`encanta`} src='./logo/encanta.svg' text='Me encanta' position='absolute top-2 right-2' iconHeight='h-6 z-10' style='hover:bg-neutral-800'></Icon>
                                <Icon id="likedos" src='./logo/like.svg' text='Me gusta' position='absolute top-2 left-[65px]' style={` hover:bg-neutral-800 relative`} iconHeight='h-6 '></Icon>
                            </div>
                    </div>
                </div>
  
                <div className="h-92 w-full">
                    <div className="w-3/5 h-full p-10 inline-block">
                        <div className='flex'>
                            <p className='text-sm text-green-500 mr-2'>98% para ti </p>
                            <div className='text-sm text-neutral-500 mr-2 border-2 rounded px-1'>TV-MA</div>
                            <p className='text-sm text-neutral-500 mr-2'>2021 3 temporadas</p>
                            <div className='text-xs right-12 border-2 rounded px-1'>HD</div>
                            
                        </div>
                        <div className="mt-5">Tanjiro emprende un viaje arriesgado para buscar una cura a la <br/>
                             maldicion de su hermana y vengar a su familia asesinada por un<br/>
                            demonio.
                            </div>
                        </div>
                    <div className="w-2/5 h-full inline-block p-10">
                        <p className="text-sm mb-3 text-neutral-500">
                            Elenco: <span className="text-white">Nantsuki Hanae,Akari Kito, Hiro Shimono, más</span>
                        </p>
                        <p className="text-sm mb-3 text-neutral-500">
                            Generos: <span className="text-white">Animes shonen, Animes de sci-fi y fantasía, Animes de accion</span>
                        </p>
                        <p className="text-sm mb-3 text-neutral-500">
                            Este titulo es: <span className="text-white">Sombrío, Emocionante</span>
                        </p>
                    </div>
                </div>

                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
export default Modal;