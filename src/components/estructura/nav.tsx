'use client'
import { useEffect, useState} from 'react';

function Nav(){
    const flexAlign="inline-block flex items-center";
    const [gradiente,setGradiente]=useState('to-transparent');
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

    return(
       
        <nav className={`text-sm h-14 flex items-center w-full fixed z-50  bg-gradient-to-b from-black  ${gradiente} `}>
            <ul className="space-x-4 w-full flex">
                <li className= {`${flexAlign} w-1/12`} >
                    <img src='./logo/netflix.svg' alt="netflix logo" className="h-6 ml-10"></img>
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
                            <img src='./logo/search.svg' alt="netflix logo" className="h-5 w-5 absolute left-1 z-10"/>
                            <input placeholder='Titulo, personas, género' className={`absolute left-7 bg-transparent outline-none ${search.inputW}`} onClick={(e) => e.stopPropagation()}/>
                        </button>
                    </div>
                    
                    <img src='./logo/notification.svg' alt="netflix logo" className="h-5  absolute right-24"/>
                    <img src='./logo/banner.svg' alt="netflix logo" className="h-8  absolute right-14"/>
                </li>

            </ul>
        </nav>
        
    )
}

export default Nav;