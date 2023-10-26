'use client'
import { useEffect, useState} from 'react';
import  '../../css/utils.css';
function Nav(){
    const flexAlign=" flex items-center";
    const [gradiente,setGradiente]=useState('to-transparent');
    const [seeIcon,setSeeIcon]=useState({'notify':'hidden','banner':'hidden',tooltip:'tooltipbanner left-6'});
    const [search,setSearch]=useState({
        'w':'w-5',
        'bg':'',
        'inputW':'hidden',
        'open':false
    });

 //este bloque maneja la animacion del background de la barra nav
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
      }, []);
    function handleScroll(){
        if(window.scrollY>100){
            setGradiente('to-negro-netflix-ligero');
        }else{
            setGradiente('to-transparent');
        }
    }
//este bloque maneja la animacion de la barra search
    useEffect(() => {
        const handleClick = () => {
            
            setSearch({...search,
                'w':'w-5',
                'bg':'',
                'inputW':'hidden',
                'open':false,
            });    
            
      
        };
      
        if (search.open === true) {
          window.addEventListener('click', handleClick);
        } else {
          window.removeEventListener('click', handleClick);
        }
      
        // Limpia el listener cuando el componente se desmonta
        return () => {
          window.removeEventListener('click', handleClick);
        };
      }, [search.open]);

    function searchclick(){
        if(search.w=='w-5'){
            
            setSearch({...search,
                'w':'w-56',
                'bg':'bg-black/50 border-2 border-inherit', 
                'inputW':'w-3/4', 
                'open':true,
            });
        }
        else{
            setSearch({...search,
                'w':'w-5',
                'bg':'',
                'inputW':'hidden',
                'open':false,
            });    
        }
    }
//este bloque de codigo agrega la animacion de hover al icono de notificacion
    useEffect(()=>{
    const notificacion=document.getElementById('notification');
    const notificationInfo=document.getElementById('notificationInfo');
        if(notificacion){
            notificacion.addEventListener("mouseenter", () => {
                // Este código se ejecuta cuando el cursor entra en el elemento
                setSeeIcon({...seeIcon,'notify':''});
                notificationInfo?.addEventListener("mouseenter",()=>{
                    setSeeIcon({...seeIcon,'notify':''});
                    notificationInfo?.addEventListener("mouseleave",()=>{
                        setSeeIcon({...seeIcon,'notify':'hidden'});
                    });
                });
            });
            notificacion.addEventListener("mouseleave", () => {
                // Este código se ejecuta cuando el cursor sale del elemento
                setSeeIcon({...seeIcon,'notify':'hidden'});
            });
        }
    },[]);
//este bloque agrega la animacion al icono de banner
    useEffect(()=>{
    const banner=document.getElementById('banner');
    const bannerInfo=document.getElementById('bannerInfo');
        if(banner){
            banner.addEventListener("mouseenter", () => {
                // Este código se ejecuta cuando el cursor entra en el elemento
                setSeeIcon({...seeIcon,'banner':'',tooltip:'tooltipbanner rotate-180 left-6'});
                bannerInfo?.addEventListener("mouseenter",()=>{
                    setSeeIcon({...seeIcon,'banner':'',tooltip:'tooltipbanner rotate-180 left-6'});
                    bannerInfo?.addEventListener("mouseleave", () => {
                        // Este código se ejecuta cuando el cursor sale del elemento
                        setSeeIcon({...seeIcon,'banner':'hidden'});
                    });
                });
            });
            banner.addEventListener("mouseleave", () => {
                // Este código se ejecuta cuando el cursor sale del elemento
                setSeeIcon({...seeIcon,'banner':'hidden'});
            });
        }
    },[]);

    return(
        <nav className={`text-sm h-14 flex items-center w-full fixed z-50  bg-gradient-to-b from-black  ${gradiente} `}>
            <ul className="space-x-4 w-full flex">
                <li className= {`${flexAlign} w-1/12`} >
                    <img src='/logo/netflix.svg' alt="netflix logo" className="h-6 ml-10"></img>
                </li>
                <li className={` w-full ${flexAlign} w-5/12`} >
                    <a href="#" className="mr-4 ml-10">Inicio</a>
                    <a href="#" className="mr-4">Series</a>
                    <a href="#" className="mr-4">Peliculas</a>
                    <a href="#" className="mr-4">Novedades populares</a>
                    <a href="#" className="mr-4">Mi lista</a>
                    <a href="#" className="mr-4">Explorar por idiomas</a>
                </li>
                <li className='w-1/6'></li>

                 <li className={`${flexAlign} w-1/12 relative`} >
                    <div className={`${flexAlign} absolute right-32 h-8 transition-width duration-150 ease-in ${search.bg} ${search.w}`}>
                        <button  onClick={(e) => { e.stopPropagation(); searchclick();}} className={`${flexAlign}`}>
                            <img src='/logo/search.svg' alt="netflix logo" className="h-5 w-5 absolute left-1 z-10"/>
                            <input id='inputSearch' placeholder='Titulo, personas, género' className={`absolute left-7 bg-transparent outline-none ${search.inputW}`} onClick={(e) => e.stopPropagation()}/>
                        </button>
                    </div>
                    <img id='notification' src='/logo/notification.svg' alt="notification" className="h-5  absolute right-24"/>
                    <div id='notificationInfo' className={`${seeIcon.notify} border-t-4 tooltiptop absolute bg-black/50 border-2 w-56 h-20 top-8 right-24`}>
                    </div>

                    <img id='banner' src='/logo/banner.svg' alt="banner" className="h-8  absolute right-14"/>
                    <div className={seeIcon.tooltip}></div>
                    <div id='bannerInfo' className={`${seeIcon.banner} flex items-end text-xs tooltiptop absolute bg-black/50 border-2 border-t-4 w-44 h-36 top-8 right-16`}>
                        <div className='absolute left-10 top-5'>Administrar Perfiles
                            <img src='/logo/admin.svg' alt="admin" className="h-5 absolute right-28 bottom-0"/>
                        </div>
                        <div className='absolute left-10 top-12'>Cuenta
                            <img src='/logo/user.svg' alt="user" className="h-5 absolute right-12 bottom-0"/>
                        </div>
                        <div className='absolute left-10 top-20'>Centro de Ayuda    
                            <img src='/logo/help.svg' alt="help" className="h-5 absolute right-24 bottom-0"/>
                        </div>
                        <div className='w-full border-t-2 h-8 py-2 px-5'>Cerrar Sesión de Netflix</div>
                    </div>
                </li>
            </ul>
        </nav>
        
    )
}

export default Nav;