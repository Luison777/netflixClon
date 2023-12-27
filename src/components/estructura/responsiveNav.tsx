"use client"
import { useState } from 'react';
import { useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image'
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
    });
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
    });
    return(
        <div className="fixed lg:hidden bottom-0 bg-black w-full h-10 flex justify-center items-center text-sm z-40 ">
            <button className='border-2 p-1 rounded-full text-xs' onClick={menu}>Categorias</button>
            <ul className={`bg-black w-full absolute bottom-full text-xs text-center border-t ${seeMenu? '':'hidden'}`}>
                <Link  href="/"><p className='w-full hover:bg-neutral-800 mt-1'>Inicio</p></Link >
                <Link   href="/construction"><p className='w-full hover:bg-neutral-800 mt-1'>Series</p></Link >
                <Link  href="/construction"><p className='w-full hover:bg-neutral-800 mt-1'>Peliculas</p></Link>
                <Link   href="/construction"><p className='w-full hover:bg-neutral-800 mt-1'>Novedades populares</p></Link>
                <Link href="/construction"><p className='w-full hover:bg-neutral-800 mt-1'>Mi lista</p ></Link >
                <Link  href="/construction"><p  className='w-full hover:bg-neutral-800 mt-1'>Explorar por idiomas</p></Link>
            </ul>

            <div className='absolute right-20 '>
                <Image id='notificationMenu' src='/logo/notification.svg' alt="notification"  height={30} width={30} style={{marginRight:"5px"}}/>
                <div id='notificationMenuInfo' className={`${seeInfo.notification? 'visible':'hidden'} border-t-4 absolute bg-black/50 border-2 w-56 h-20 bottom-full -translate-y-2 right-2`}>
                    <Image src='/logo/tooltip.svg' alt="tooltip" height={30} width={30} className='absolute right-0 top-full -translate-y-1/3'/>
                </div>
            </div>
     
            <div className='mr-6 flex absolute right-0  ' >
                <Image id='bannerMenu' src='/logo/banner.svg' alt="banner" height={40} width={40}/>
                <Image src='/logo/tooltip.svg' alt="tooltip" height={20} width={20} style={{marginRight:"5px"}} className={`${seeInfo.banner? 'rotate-180':''}`}/>
            </div>
            <div id='bannerMenuInfo' className={`${seeInfo.banner? 'visible':'hidden'} flex items-end text-xs absolute bg-black/50 border-2 border-t-4 w-44 h-36 bottom-full right-12`}>
                
                <div className='absolute left-5 top-5 flex'>
                    <Image src='/logo/admin.svg' alt="admin" height={25} width={25} style={{marginRight:"5px"}}/>
                    Administrar Perfiles
                </div>
                <div className='absolute left-5 top-12 flex'>
                    <Image src='/logo/user.svg' alt="user" height={25} width={25} style={{marginRight:"5px"}}/>
                    Cuenta
                </div>
                <div className='absolute left-5 top-20 flex'>  
                    <Image src='/logo/help.svg' alt="help" height={25} width={25} style={{marginRight:"5px"}}/>
                    Centro de Ayuda  
                </div>
                <div className='w-full border-t-2 h-8 py-2 px-5 relative'>
                    Cerrar Sesión de Netflix
                    <Image src='/logo/tooltip.svg' alt="tooltip" height={30} width={30} className='absolute right-1'/>
                    
                </div>
            </div>
        </div>
    )
}