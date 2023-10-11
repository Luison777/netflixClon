"use client"
import { Children, useEffect, useState,} from 'react';
import  '../../css/utils.css';

interface IconProps {
    id: string,
    text:string,
    src:string,
    position:string,
    style?:string,
    iconHeight:string,
    children?: React.ReactNode;
  }
  
function Icon(props:IconProps){
    const[propsIcon,setPropsIcon]=useState({
        info:'hidden'
    });

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
        <div id={props.id} className={`${props.position} ${props.style} rounded-full h-10 w-10 flex items-center justify-center`}>
            <img  src={props.src} alt={props.id} className={props.iconHeight}/>
            <div className={`${propsIcon.info} absolute bottom-12 whitespace-nowrap bg-white text-black rounded-md px-3 tooltipbottom`}>{props.text}</div>
            {props.children}
        </div>
    );
}
export default Icon;