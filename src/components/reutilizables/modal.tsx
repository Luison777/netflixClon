"use client"
import Link from "next/link";
import Icon from "../reutilizables/icon";
import { useEffect, useState,} from 'react';
import { useContext} from 'react';
import { Contexto } from '@/servicios/memoria';

function Modal(id){

    const [barralike,setBarraLike]=useState({
        like:'hidden',
        circle:'border-4 border-gray-400'
    });
    //este bloque agrega la animacin al boton like
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
     //esta funcion cambia el overflow del body para abrir el modal y se muestre una sola barra scroll
    useEffect(()=>{
        const body=document.body;
        if(body) {body.style.overflow='hidden'};

        return()=>{
            if(body) {body.style.overflow=''};
        }
    },[]);
    //este bloque recupera el contexto para los componentes dinamicos del modal
    const lista=useContext(Contexto);
    let modal;
    if(lista){modal=lista[id.id]};

    return(
        <div className="fixed h-[100%] w-full bg-black/50 top-0 left-0 z-50 overflow-y-scroll">
            <div className="w-7/12 bg-negro-netflix-ligero rounded absolute left-1/2 top-10 -translate-x-1/2 ">
                <section id="principal">
                <div className="w-full h-[600px] overflow-hidden relative">
                    <Link href='/' scroll={false} prefetch={false}>
                        <Icon id="close" src='../logo/plus.svg' style={`hover:bg-black mr-2 bg-black/50 absolute top-5 right-5 z-10 `} iconHeight='h-6 absolute rotate-45'></Icon>
                    </Link>
                    <img src={`../series/${modal?.img}`} alt={modal?.img} className="h-full w-full object-cover rounded relative" />
                    
                    <div className="absolute w-full h-10 bottom-10 left-0 flex">
                        <button className="bg-white hover:bg-white/90 h-10 w-44 ml-10 mr-2 text-black font-semibold rounded flex items-center justify-center">
                            <img src='../logo/play.svg' alt="serie imagen" className="h-8 "></img>
                                Reproducir
                        </button>
                        <Icon id="plus" src='../logo/plus.svg' text='Agregar'  style={`${barralike.circle} hover:bg-neutral-800 mr-2 bg-black/50 `} iconHeight='h-6 absolute'></Icon>
                        <Icon id="like" src='../logo/like.svg' text='Me gusta'  style={`${barralike.circle} hover:bg-neutral-800 bg-black/50 relative`} iconHeight='h-6 absolute'></Icon>
                            <div id="barralike" className={`${barralike.like} w-36 h-14 bg-black absolute left-[365px] -translate-x-1/2 -top-2 z-0 rounded-3xl bg-neutral-900 shadow-xl shadow-black `}>
                                <Icon id={`dislike`} src='../logo/dislike.svg' text='No me gusta' position='absolute top-2 left-2' iconHeight='h-6 z-10' style='hover:bg-neutral-800'></Icon>
                                <Icon id={`encanta`} src='../logo/encanta.svg' text='Me encanta' position='absolute top-2 right-2' iconHeight='h-6 z-10' style='hover:bg-neutral-800'></Icon>
                                <Icon id="likedos" src='../logo/like.svg' text='Me gusta' position='absolute top-2 left-[65px]' style={` hover:bg-neutral-800 relative`} iconHeight='h-6 '></Icon>
                            </div>
                    </div>
                </div>
                </section>

                <section id="description">
                <div className="h-92 w-full text-xs px-10 py-10">
                    <div className="w-3/5 h-full inline-block pr-5">
                        <div className='flex'>
                            <p className=' text-green-500 mr-2'>98% para ti </p>
                            <div className=' text-neutral-500 mr-2 border-2 rounded px-1'>TV-MA</div>
                            <p className=' text-neutral-500 mr-2'>2021 3 temporadas</p>
                            <div className=' right-12 border-2 rounded px-1'>HD</div>
                        </div>

                        <div className="mt-5 text-sm">Tanjiro emprende un viaje arriesgado para buscar una cura a la <br/>
                             maldicion de su hermana y vengar a su familia asesinada por un<br/>
                            demonio.
                        </div>
                    </div>
                    <div className="w-2/5 h-full inline-block">
                        <p className="text-sm mb-3 text-neutral-500">
                            Elenco: <span className="text-white">Nantsuki Hanae, Akari Kito, Hiro Shimono, más</span>
                        </p>
                        <p className="text-sm mb-3 text-neutral-500">
                            Generos: <span className="text-white">Animes shonen, Animes de sci-fi y fantasía, Animes de accion</span>
                        </p>
                        <p className="text-sm mb-3 text-neutral-500">
                            Este titulo es: <span className="text-white">Sombrío, Emocionante</span>
                        </p>
                    </div>
                </div>
                </section>

                <section id="episodes">
                <div className="px-10 pb-10">
                    <div className="w-full flex ">
                        <div className="w-2/3 text-xl font-semibold">Episodios
                            <p className="text-sm font-normal	">Tanjiro Kamado, Arco de resolucion inquebrantable: 
                            <span className=' text-neutral-500 mr-2 border-2 rounded px-1'>TV-14</span>
                            <span >miedo, sangre, lenguaje inapropiado, violencia</span>
                            </p>
                        </div>
                        <div className="w-1/3 ml-2">
                            <button className="w-full border-2 rounded bg-neutral-800 font-semibold p-1 text-sm relative">
                                Tanjiro Kamado, Arco de resolucion inquebrantable
                                <div className="tooltipdown top-1/2 right-2"></div>
                            </button>
                        </div>
                    </div>
                    <div id="episode" className="w-full h-28 p-10 rounded border-b-2">
                        <div className="w-full h-full flex items-center">
                            <p className="m-2">1</p>
                            <img src="../header/tanjiro.png" alt="eltanjiro" className="h-14 m-2 rounded" />
                            <div className="relative w-full">
                                <p className="absolute top-0 left-0 text-sm"> Crueldad</p>
                                <p className="absolute top-0 right-0 text-semibold text-sm">24 min</p>
                                <p className="text-xs mt-5"> Despues de vender carbón en el pueblo, Tajiro regresa a su casa y <br />
                                encuentra muerta a su familia. Una unica persona queda viva: su hermana <br />
                                Nezuko, pero no es la misma...
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-neutral-600 h-[3px] relative -top-[3px]">
                        <Icon id="arrowdown" src='../logo/arrow.svg' style={`hover:border-white border-2 border-neutral-400	 bg-neutral-600/50 h-8 w-8 absolute left-1/2 -translate-y-1/2 -translate-x-1/2`} iconHeight='h-4 absolute'></Icon>
                    </div>
                </div>
                </section>

                <section id="similares">
                <div className="px-10 pb-10 w-full ">
                    <p className="w-ful text-xl text-semibold">Más títulos similares a este</p>
                    <div id="modalCardContainer" className="flex w-full gap-4">
                        <div id="tarjetaModal" className="w-1/3 h-72 bg-neutral-800 rounded">
                            <img src="../header/tanjiro.png" alt="tanjiro" className="rounded" />
                            <div className="flex relative p-3">
                                <p className="text-sm text-green-500">95% para ti <br />
                                    <span className=' text-neutral-500 mr-2 border-2 rounded px-1 text-white'>TV-14</span>
                                    <span className="text-white">2019</span>
                                </p>
                                <Icon id="plusModalCard" src="../logo/plus.svg" iconHeight="h-6" style="absolute right-2 border-2 h-8 w-8 hover:border-white border-neutral-400 bg-neutral-600/50"></Icon>
                            </div>
                            <div className="text-xs p-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                                Sed euismod, ipsum a vestibulum facilisis, dolor quam auctor dolor, nec volutpat purus eros ut nisl.<br/>
                            </div>
                        </div>
                        <div id="tarjetaModal" className="w-1/3 h-72 bg-neutral-800 rounded">
                            <img src="../header/tanjiro.png" alt="tanjiro" className="rounded" />
                            <div className="flex relative p-3">
                                <p className="text-sm text-green-500">95% para ti <br />
                                    <span className=' text-neutral-500 mr-2 border-2 rounded px-1 text-white'>TV-14</span>
                                    <span className="text-white">2019</span>
                                </p>
                                <Icon id="plusModalCard" src="../logo/plus.svg" iconHeight="h-6" style="absolute right-2 border-2 h-8 w-8 hover:border-white border-neutral-400 bg-neutral-600/50"></Icon>
                            </div>
                            <div className="text-xs p-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                                Sed euismod, ipsum a vestibulum facilisis, dolor quam auctor dolor, nec volutpat purus eros ut nisl.<br/>
                            </div>
                        </div>
                        <div id="tarjetaModal" className="w-1/3 h-72 bg-neutral-800 rounded">
                            <img src="../header/tanjiro.png" alt="tanjiro" className="rounded" />
                            <div className="flex relative p-3">
                                <p className="text-sm text-green-500">95% para ti <br />
                                    <span className=' text-neutral-500 mr-2 border-2 rounded px-1 text-white'>TV-14</span>
                                    <span className="text-white">2019</span>
                                </p>
                                <Icon id="plusModalCard" src="../logo/plus.svg" iconHeight="h-6" style="absolute right-2 border-2 h-8 w-8 hover:border-white border-neutral-400 bg-neutral-600/50"></Icon>
                            </div>
                            <div className="text-xs p-3">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                                Sed euismod, ipsum a vestibulum facilisis, dolor quam auctor dolor, nec volutpat purus eros ut nisl.<br/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-neutral-600 h-[3px] relative -top-[3px]">
                        <Icon id="arrowdown" src='../logo/arrow.svg' style={`hover:border-white border-2 border-neutral-400	 bg-neutral-600/50 h-8 w-8 absolute left-1/2 -translate-y-1/2 -translate-x-1/2`} iconHeight='h-4 absolute'></Icon>
                    </div>
                </div>
                </section>

                <section id="aboutIt">
                <div className="px-10 pb-5">
                    <p className="w-ful text-2xl text-semibold">Acerca de Demon Slayer: Kimetsu no Yaiba</p>
                    <div>
                        <p className="text-xs text-neutral-500">Elenco:<span className="text-white"> Nantsuki Hanae,Akari Kito, Hiro Shimono, más</span></p>
                        <p className="text-xs text-neutral-500">Generos:<span className="text-white"> Animes shonen, Animes de sci-fi y fantasía, Animes de accion</span></p>
                        <p className="text-xs text-neutral-500">Este titulo es:<span className="text-white"> Sombrío, Emocionante</span></p>
                        <p className="text-xs text-neutral-500">Clasificacion por edad:
                            <span className="text-white">
                                <span className=' text-neutral-500 mr-2 border-2 rounded px-1 text-white'>TV-14</span>
                                desnudos  Recomendada Para publico adulto. No apta para menores de 17 años.
                            </span>
                        </p>
                    </div>
                </div>
                </section>

            </div>
        </div>
    )
}
export default Modal;