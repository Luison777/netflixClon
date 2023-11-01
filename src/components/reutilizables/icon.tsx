"use client"
import {useEffect, useState,} from 'react';
import  '../../css/utils.css';
import { useRouter } from 'next/navigation'
interface IconProps {
    id: string,
    text?:string,
    src:string,
    position?:string,
    style?:string,
    iconHeight:string,
    children?: React.ReactNode;
    route?:string;
    mutable?:string;
    mutableText?:string;
  }
  
function Icon(props:IconProps){
    const[propsIcon,setPropsIcon]=useState({info:'hidden'});
    const[mutableIcon,setMutableIcon]=useState(false);
    const router=useRouter();
    useEffect(()=>{
        const element=document.getElementById(props.id);
        element?.addEventListener('mouseenter',()=>{   
            setPropsIcon({...propsIcon,info:'visible'});
        })
        element?.addEventListener('mouseleave',()=>{
            setPropsIcon({...propsIcon,info:'hidden'});
        })
    },[]);

    return(
        <div onClick={(event)=>{event.stopPropagation(); props.route? router.push(`${props.route}`,{ scroll:false }):null; setMutableIcon(!mutableIcon)}} id={props.id} className={`${props.position} ${props.style} rounded-full h-10 w-10 flex items-center justify-center`}>
            <img  src={props.mutable? mutableIcon? props.src:props.mutable :props.src} alt={props.id} className={props.iconHeight}/>
            <div className={`${propsIcon.info} absolute bottom-14 whitespace-nowrap bg-white text-black rounded-md px-3 ${props.text? 'tooltipbottom':''} `}>{props.mutable? mutableIcon? props.text:props.mutableText : props.text}</div>
            {props.children}
        </div>
    );
}
export default Icon;