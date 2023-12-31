'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
type ObjectFit = 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';
function Header(){
    const router = useRouter();
    const imgcover = {
        objectFit: 'cover' as ObjectFit,
      }

    const imgcontain={
        objectFit: "contain" as ObjectFit,
       
    }
    return(
        <>
            <header id="head" className=" relative overflow-hidden h-[90%]  ">
            <Image src='/header/demonSlayer.jpg' alt="serie imagen"  fill={true}  style={imgcover} priority={true} ></Image>
                <div className="h-full w-full absolute top-2/3 -translate-y-1/2 p-2 ml-5  ">
                    <div className='w-1/4 h-2/5 relative'>
                        <Image src='/header/logoDemon.png' alt="serie imagen" fill={true} priority={true} style={imgcontain}  ></Image>
                    </div>
                    <div className=" text-base">Tanjiro emprende un viaje arriesgado para buscar una cura a la <br/>
                    maldicion de su hermana y vengar a su familia asesinada por un<br/>
                    demonio.
                    </div>
                    
                    <div className="flex h-10 w-1/2">
                        <button onClick={()=>router.push('/video')} className="bg-white hover:bg-white/90 h-8 w-40 mt-2  mr-1 text-black text-base font-semibold rounded flex items-center justify-center inline-block ">
                            <div className='relative h-[90%] w-1/4'>
                                <Image src='/logo/play.svg' alt="serie imagen" fill={true} priority={true} ></Image>
                            </div>
                            Reproducir
                        </button>
                        <button onClick={()=>router.push('/modal/carusel1block0card1',{scroll:false})} className="bg-gray-950/70 hover:bg-gray-950/60 h-8 w-44 mt-2 text-white text-base font-semibold rounded flex items-center justify-center inline-block ">
                            <div className='relative h-[90%] w-1/5'>
                            <Image src='/logo/info.svg' alt="serie imagen" fill={true} priority={true}></Image>
                            </div>
                            Más información
                        </button>
                    </div>
                </div>
                <div className="absolute w-full h-2 bottom-0 bg-gradient-to-b from-transparent to-negro-netflix-ligero"></div>
            </header>
        </>
    )
}

export default Header;