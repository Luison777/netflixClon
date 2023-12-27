'use client'
import { useEffect, useState} from 'react';
import  '../../css/utils.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import Image from 'next/image'
function Nav(){
    const flexAlign=" flex items-center";
    const [gradiente,setGradiente]=useState('to-transparent');
    const [seeIcon,setSeeIcon]=useState({'notify':'hidden','banner':'hidden',tooltip:''});
    const [search,setSearch]=useState({
        'w':'w-5',
        'bg':'',
        'inputW':'hidden',
        'open':false
    });
    const pathname = usePathname()
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
      }, [search]);

    function searchclick(){
        if(search.w=='w-5'){
            
            setSearch({...search,
                'w':'w-44 md:56',
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
    });
//este bloque agrega la animacion al icono de banner
    useEffect(()=>{
    const banner=document.getElementById('banner');
    const bannerInfo=document.getElementById('bannerInfo');
        if(banner){
            banner.addEventListener("mouseenter", () => {
                // Este código se ejecuta cuando el cursor entra en el elemento
                setSeeIcon({...seeIcon,'banner':'',tooltip:'rotate-180'});
                bannerInfo?.addEventListener("mouseenter",()=>{
                    setSeeIcon({...seeIcon,'banner':'',tooltip:' rotate-180 '});
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
    },);
    
    return(
        <nav className={`text-sm h-14  flex items-center w-full fixed z-50 bg-gradient-to-b from-black ${gradiente} `}>
            <ul className=" w-full flex">
                <li className= {`${flexAlign} w-20 relative`} >
                    <Image src='/logo/netflix.svg' alt="netflix logo" height={50} width={200} style={{marginLeft:"20px"}}></Image>
                </li>
                <p></p>
                <li className={`max-lg:hidden ${flexAlign}`} >
                    <Link href="/" ><p className={`${pathname === '/' ? 'font-semibold' : ''} mr-4 ml-10`}>Inicio</p></Link>
                    <Link href="/construction" className="mr-4">Series</Link>
                    <Link href="/construction" className="mr-4">Peliculas</Link>
                    <Link href="/construction" className="mr-4">Novedades Populares</Link>
                    <Link href="/construction" className="mr-4">Mi lista</Link>
                    <Link href="/construction" className="mr-4">Explorar por idiomas</Link>
                </li>

                 <li className={`${flexAlign} h-6 -translate-y-1/2 absolute right-0 top-1/2`} >
                    <div id='search' className={`${flexAlign} relative right-4   h-8 transition-width duration-150 ease-in ${search.bg} ${search.w}`}>
                        <button  onClick={(e) => { e.stopPropagation(); searchclick();}} className={`${flexAlign}`}>
                            <Image src='/logo/search.svg' alt="netflix logo" height={30} width={30} style={{left:"10",zIndex:"10"}}/>
                            <input id='inputSearch' placeholder='Titulo, personas, género' className={`absolute left-7 bg-transparent outline-none ${search.inputW}`} onClick={(e) => e.stopPropagation()}/>
                        </button>
                    </div>

                    <Image id='notification' src='/logo/notification.svg' alt="notification" className="max-lg:hidden " height={25} width={25} style={{marginRight:"10px"}}/>
                    <div id='notificationInfo' className={`${seeIcon.notify} border-t-4 tooltiptop absolute bg-black/50 border-2 w-56 h-20 top-8 right-20`}></div>

                    
                    <div className='mr-6 relative flex max-lg:hidden ' >
                        <Image id='banner' src='/logo/banner.svg' alt="banner" height={40} width={40}/>
                        <Image src="/logo/tooltip.svg" alt="tooltip" className={` ${seeIcon.tooltip}`} height={20} width={20} style={{marginLeft:"5px"}}/>
                    </div>
                    <div id='bannerInfo' className={`${seeIcon.banner} flex items-end text-xs tooltiptop absolute bg-black/50 border-2 border-t-4 w-44 h-36 top-8 right-12`}>
                        <div className='absolute left-5  top-5 w-full flex'>
                            <Image src='/logo/admin.svg' alt="admin"  height={25} width={25} style={{marginRight:"5px"}} />
                             Administrar Perfiles
                        </div>
                        <div className='absolute left-5 top-12 w-full flex'>
                            <Image src='/logo/user.svg' alt="user"  height={25} width={25} style={{marginRight:"5px"}}/>
                            Cuenta
                        </div>
                        <div className='absolute left-5 top-20 w-full flex'>  
                            <Image src='/logo/help.svg' alt="help"  height={25} width={25} style={{marginRight:"5px"}}/>
                            Centro de Ayuda  
                        </div>
                        <div className='w-full border-t-2 h-8 py-2 px-5'>Cerrar Sesión de Netflix</div>
                    </div>
                </li>
            </ul>
        </nav>
        
    )
}

export default Nav;