"use client"
import { useRouter } from 'next/navigation';
import { useEffect, useState,} from 'react';
import Image from 'next/image';
export default function Video(){
    const router = useRouter();
    let timeOutId: NodeJS.Timeout | undefined;
    const [seeClose,setSeeClose]=useState(false);
    //este bloque controla el boton de close para desvanecerse
    useEffect(()=>{
        const video=document.getElementById('video');
        video?.addEventListener('mousemove',()=>{
            setSeeClose(true);
        
           setTimeout(()=>{setSeeClose(false)}, 3000);
        })
    },[]);
    return(
        <div className="fixed w-full h-full top-0 left-0 bg-black flex items-center z-50 ">
            <div className="relative w-full h-full flex items-center ">
                <button className={`absolute z-50 right-10 top-5 h-10 w-10 rounded-full bg-black/90 hover:bg-black/50 flex items-center justify-center  ${seeClose? '':'hidden'}`} id="closeVideo" onClick={()=>router.back()}>
                    <Image className="rotate-45" fill={true} src="/logo/plus.svg" alt="close" />
                </button>
                <video id="video"  src="/series/video.mp4" className='w-full' autoPlay controls></video>
                <p className='absolute top-1/2 left-1/2 -translate-x-1/2 z-50 text-2xl'>Video ilustrativo</p>
            </div>
        </div>
    )
}