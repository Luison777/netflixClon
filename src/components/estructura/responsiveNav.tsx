"use client"
import { useState } from 'react';
import { useEffect } from "react";

export default function ResponsiveNav(){
    const[seeMenu,setSeeMenu]=useState(false);
    const[seeInfo,setSeeInfo]=useState({banner:false,notification:false});
    const menu=()=>{setSeeMenu(!seeMenu);}
    //este bloque anima el div de info de notificacion
    useEffect(()=>{
        const notification=document.getElementById('notificationMenu');
        const notificationInfo=document.getElementById('notificationMenuInfo');
        notification?.addEventListener('mouseenter',()=>{
            setSeeInfo({...seeInfo,notification:true});
            notificationInfo?.addEventListener('mouseenter',()=>{
                setSeeInfo({...seeInfo,notification:true});
                notificationInfo?.addEventListener('mouseleave',()=>{
                    setSeeInfo({...seeInfo,notification:false});
                });
            });
        });
        notification?.addEventListener('mouseleave',()=>{
            setSeeInfo({...seeInfo,notification:false});
        });
    },[]);
     //este bloque anima el div de info del banner
     useEffect(()=>{
        const bannerMenu=document.getElementById('bannerMenu');
        const bannerMenuInfo=document.getElementById('bannerMenuInfo');
        bannerMenu?.addEventListener('mouseenter',()=>{
            setSeeInfo({...seeInfo,banner:true});
            bannerMenuInfo?.addEventListener('mouseenter',()=>{
                setSeeInfo({...seeInfo,banner:true});
                bannerMenuInfo?.addEventListener('mouseleave',()=>{
                    setSeeInfo({...seeInfo,banner:false});
                });
            });
        });
        bannerMenu?.addEventListener('mouseleave',()=>{
            setSeeInfo({...seeInfo,banner:false});
        });
    },[]);
    return(
        <div className="fixed lg:hidden bottom-0 bg-black w-full h-10 flex justify-center items-center text-sm z-40 ">
            <button className='border-2 p-1 rounded-full text-xs' onClick={menu}>Categorias</button>
            <ul className={`bg-black w-full absolute bottom-full text-xs text-center border-t ${seeMenu? '':'hidden'}`}>
                <li className='w-full hover:bg-neutral-800 mt-1'><a href="#">Inicio</a></li>
                <li className='w-full hover:bg-neutral-800 mt-1'><a href="#">Series</a></li>
                <li className='w-full hover:bg-neutral-800 mt-1'><a href="#">Peliculas</a></li>
                <li className='w-full hover:bg-neutral-800 mt-1'><a href="#">Novedades populares</a></li>
                <li className='w-full hover:bg-neutral-800 mt-1'><a href="#">Mi lista</a></li>
                <li className='w-full hover:bg-neutral-800 mt-1'><a href="#">Explorar por idiomas</a></li>
            </ul>

            <div className='absolute right-20 '>
                <img id='notificationMenu' src='/logo/notification.svg' alt="notification" className="h-5 w-5 mr-2  "/>
                <div id='notificationMenuInfo' className={`${seeInfo.notification? 'visible':'hidden'} border-t-4 absolute bg-black/50 border-2 w-56 h-20 bottom-full -translate-y-2 right-2`}>
                    <img src='/logo/tooltip.svg' alt="tooltip" className={`relative top-full left-full -translate-x-full -translate-y-1/2 mt-1 w-4 `}/>
                </div>
            </div>
     
            <div className='mr-6 flex absolute right-0  ' >
                <img id='bannerMenu' src='/logo/banner.svg' alt="banner" className="h-8  "/>
                <img src='/logo/tooltip.svg' alt="tooltip" className={`ml-1 w-4 ${seeInfo.banner? 'rotate-180':''}`}/>
            </div>
            <div id='bannerMenuInfo' className={`${seeInfo.banner? 'visible':'hidden'} flex items-end text-xs absolute bg-black/50 border-2 border-t-4 w-44 h-36 bottom-full right-12`}>
                
                <div className='absolute left-10 top-5'>Administrar Perfiles
                    <img src='/logo/admin.svg' alt="admin" className="h-5 absolute right-28 bottom-0"/>
                </div>
                <div className='absolute left-10 top-12'>Cuenta
                    <img src='/logo/user.svg' alt="user" className="h-5 absolute right-12 bottom-0"/>
                </div>
                <div className='absolute left-10 top-20'>Centro de Ayuda    
                    <img src='/logo/help.svg' alt="help" className="h-5 absolute right-24 bottom-0"/>
                </div>
                <div className='w-full border-t-2 h-8 py-2 px-5'>Cerrar Sesión de Netflix
                    <img src='/logo/tooltip.svg' alt="tooltip" className={`relative top-full w-5 -translate-y-full mt-1 left-full`}/>
                </div>
            </div>
        </div>
    )
}