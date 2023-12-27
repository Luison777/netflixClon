"use client"
import Link from "next/link";
import Icon from "../reutilizables/icon";
import { useEffect, useState,} from 'react';
import { useContext} from 'react';
import { Contexto, contextoModal } from '@/servicios/memoria';
import { useRouter } from 'next/navigation';
import ModalCard from "./modalcard";
import Image from 'next/image';

function Modal(id: {
    id: string;
  }){

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
        //cambiar overflow
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

    const listaModal=useContext(contextoModal);
    let modalData;
    if(listaModal){modalData=listaModal[id.id]};
    //este bloque cierra el modal al dar click fuera del contenido
    const router = useRouter();
    function closeModal(){
        router.back();
    }
    //este bloque agrega funcionalidad a los botones de las secciones mas episodios y series similares
    const[seeMoreEpisodes,setSeeMoreEpisodes]=useState(false);
    function moreEpidodes(){
        setSeeMoreEpisodes(!seeMoreEpisodes);
    }
    const[seeMoreSeries,setSeeMoreSeries]=useState(false);
    function moreSeries(){
        setSeeMoreSeries(!seeMoreSeries);
    }

    return(
        <div id="modalcontainer" className="fixed h-full w-full bg-black/50 top-0 left-0 z-50 overflow-y-scroll" onClick={closeModal}>
            <div className="w-full xl:w-7/12 xl:top-10 bg-negro-netflix-ligero rounded absolute left-1/2 -translate-x-1/2 " onClick={event=>event?.stopPropagation()}>
                <section id="principal">
                <div className=" md:h-[600px] overflow-hidden relative">
                    
                    <Icon route="/" id="close" src='../logo/plus.svg' style={`hover:bg-black mr-2 bg-black/50 absolute top-5 right-5 z-10 h-1/6  md:h-10 md:w-10`} iconHeight='h-2/3 absolute rotate-45'></Icon>
                    
                    <Image src={`/series/${modal?.img}`} alt={modal? modal?.img:''} fill={true}/>
                    
                    <div className="absolute w-full h-1/6 bottom-5 left-0 md:w-full md:h-10 md:bottom-10 md:left-0 flex items-center">
                        <button onClick={()=>router.push('/video')} className="bg-white hover:bg-white/90 h-full w-full ml-10 mr-2 md:w-1/3 md:text-[1em] text-black text-xl font-semibold rounded flex items-center justify-center">
                            <Image src='../logo/play.svg' alt="serie imagen" height={40} width={40}/>
                                Reproducir
                        </button>
                        <div className="flex relative">
                        <Icon id="plus" src='/logo/check.svg' mutable='/logo/plus.svg' mutableText='Agregar a mi lista' text='Quitar de mi lista'  style={`${barralike.circle} hover:bg-neutral-800 mr-2 bg-black/50 h-5/6 md:h-10 md:w-10`} iconHeight='h-1/2 absolute'></Icon>
                        <Icon id="like" src='../logo/like.svg' text='Me gusta'  style={`${barralike.circle} hover:bg-neutral-800 bg-black/50 relative h-5/6 mr-10 md:h-10 md:w-10`} iconHeight='h-2/3 absolute'></Icon>
                            <div id="barralike" className={`${barralike.like} w-36 h-14 bg-black absolute left-0 -top-2 z-0 rounded-3xl bg-neutral-900 shadow-xl shadow-black `}>
                                <Icon id={`dislike`} src='../logo/dislike.svg' text='No me gusta' position='absolute top-2 left-2' iconHeight='h-6 z-10' style='hover:bg-neutral-800'></Icon>
                                <Icon id={`encanta`} src='../logo/encanta.svg' text='Me encanta' position='absolute top-2 right-2' iconHeight='h-6 z-10' style='hover:bg-neutral-800'></Icon>
                                <Icon id="likedos" src='../logo/like.svg' text='Me gusta' position='absolute top-2 left-[65px]' style={` hover:bg-neutral-800 relative`} iconHeight='h-6 '></Icon>
                            </div>
                        </div>
                    </div>
                </div>
                </section>

                <section id="description">
                <div className="h-92 w-full text-xs px-10 py-10">
                    <div className="w-full md:w-3/5 md:h-full md:inline-block md:pr-5">
                        <div className='flex'>
                            <p className=' text-green-500 mr-2'>{modal?.afinidad}</p>
                            <div className=' text-neutral-500 mr-2 border-2 rounded px-1'>{modal?.calsificacion}</div>
                            <p className=' text-neutral-500 mr-2'>{modal?.temporadas}</p>
                            <div className=' right-12 border-2 rounded px-1'>HD</div>
                        </div>

                        <div className="mt-5 text-sm">{modalData?.description}</div>
                    </div>
                    <div className="w-full md:w-2/5 md:h-full md:inline-block">
                        <p className="text-sm mb-3 text-neutral-500">
                            Elenco: <span className="text-white">{modalData?.personajes}</span>
                        </p>
                        <p className="text-sm mb-3 text-neutral-500">
                            Generos: <span className="text-white">{modalData?.genero}</span>
                        </p>
                        <p className="text-sm mb-3 text-neutral-500">
                            Este titulo es: <span className="text-white">{modal?.temas}</span>
                        </p>
                    </div>
                </div>
                </section>

                <section id="episodes">
                <div className="px-10 pb-10">
                    <div className="w-full md:flex ">
                        <div className="md:w-2/3 text-xl font-semibold">Episodios
                            <p className="text-sm font-normal	">Lorem ipsum dolor sit amet.
                            <span className=' text-neutral-500 mr-2 border-2 rounded px-1'>TV-14</span>
                            <span >Vivamus lacinia leo eu tortor tristique, eu fermentum ex bibendum. </span>
                            </p>
                        </div>
                        <div className="mt-2 md:w-1/3 md:ml-2">
                            <select className="w-full border-2 rounded bg-neutral-800 font-semibold p-1 text-sm relative">
                            <option  value="opcion1">Vivamus lacinia leo eu tortor tristique.</option>
                            <option value="opcion2">Nullam id purus a velit varius volutpat.</option>
                            <option value="opcion3">Sed id metus in nulla lacinia hendrerit.</option>
                            <option value="opcion4">Vivamus lacinia leo eu tortor tristique.</option>
                            </select>
                
                        </div>
                    </div>
                    <div id="episode1" className="w-full py-2 h-28 rounded border-b-2 ">
                        <div className="w-full h-full flex items-center overflow-hidden">
                            <p className="md:m-2">1</p>
                            <Image src={`/series/${modal?.img}`} alt="eltanjiro" height={80} width={120} className="m-2 rounded" />
                            <div className="relative w-full">
                                <p className="absolute top-0 left-0 text-sm"> Sed id metus in nulla.</p>
                                <p className="absolute top-0 right-0 text-semibold text-sm">24 min</p>
                                <p className="text-xs mt-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                Vivamus lacinia leo eu tortor tristique, eu fermentum ex bibendum. <br />
                                Sed id metus in nulla lacinia hendrerit. Nullam id purus a velit varius volutpat.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div id="episode2" className={`${seeMoreEpisodes? 'visible':'hidden'} w-full py-2 h-28  rounded border-b-2`}>
                        <div className="w-full h-full flex items-center overflow-hidden">
                            <p className="md:m-2">2</p>
                            <Image src={`/series/${modal?.img}`} alt="eltanjiro" height={80} width={120} className=" m-2 rounded" />
                            <div className="relative w-full">
                                <p className="absolute top-0 left-0 text-sm"> Sed id metus in nulla.</p>
                                <p className="absolute top-0 right-0 text-semibold text-sm">24 min</p>
                                <p className="text-xs mt-5"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                                Vivamus lacinia leo eu tortor tristique, eu fermentum ex bibendum. <br />
                                Sed id metus in nulla lacinia hendrerit. Nullam id purus a velit varius volutpat.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full bg-neutral-600 h-[3px] relative -top-[3px]" onClick={moreEpidodes}>
                        <div className="hover:border-white border-2 border-neutral-400 bg-neutral-600/50 h-8 w-8 rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                            <Image src="/logo/arrow.svg" alt="arrow" height={40} width={40} className={`h-4 ${seeMoreEpisodes? 'rotate-180':''}`}/>
                        </div>
                    </div>
                </div>
                </section>

                <section id="similares">
                <div className="px-10 pb-10 w-full ">
                    <p className="w-ful text-xl text-semibold">Más títulos similares a este</p>
                    <ModalCard seeMoreSeries={true}></ModalCard>
                    <ModalCard seeMoreSeries={seeMoreSeries}></ModalCard>
                    <div className="w-full bg-neutral-600 h-[3px] relative -top-[3px]" onClick={moreSeries}>
                        <div className="hover:border-white border-2 border-neutral-400 bg-neutral-600/50 h-8 w-8 rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                            <Image src="/logo/arrow.svg" alt="arrow" height={40} width={40} className={`h-4 ${seeMoreSeries? 'rotate-180':''}`}/>
                        </div>
                    </div>
                </div>
                </section>

                <section id="aboutIt">
                <div className="px-10 pb-5">
                    <p className="w-ful text-2xl text-semibold">Acerca de: {modalData?.name}</p>
                    <div>
                        <p className="text-xs text-neutral-500">Elenco:<span className="text-white"> {modalData?.personajes}</span></p>
                        <p className="text-xs text-neutral-500">Generos:<span className="text-white"> {modalData?.genero}</span></p>
                        <p className="text-xs text-neutral-500">Este titulo es:<span className="text-white"> {modal?.temas}</span></p>
                        <p className="text-xs text-neutral-500">Clasificacion por edad:
                            <span className="text-white">
                                <span className=' text-neutral-500 mr-2 border-2 rounded px-1 text-white'>{modal?.calsificacion}</span>
                               
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