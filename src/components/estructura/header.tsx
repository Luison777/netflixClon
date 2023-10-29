

function Header(){
    
    return(
        <>
            <header id="head" className=" relative overflow-hidden ">
            <img src='/header/demonSlayer.jpg' alt="serie imagen" className="h-full w-full relative object-cover"></img>
                <div className="h-full w-full absolute top-2/3 -translate-y-1/2 p-2 ml-5 ">
                    <img src='/header\logoDemon.png' alt="serie imagen" className="h-2/5"></img>
                    <div className="mt-5 text-base">Tanjiro emprende un viaje arriesgado para buscar una cura a la <br/>
                    maldicion de su hermana y vengar a su familia asesinada por un<br/>
                    demonio.
                    </div>
                    
                    <div className="flex h-10 w-1/2">
                        <button className="bg-white hover:bg-white/90 h-8 w-40 mr-1 mt-5 text-black text-base font-semibold rounded flex items-center justify-center inline-block">
                            <img src='/logo/play.svg' alt="serie imagen" className="h-2/3 "></img>
                            Reproducir
                        </button>
                        <button className="bg-gray-950/70 hover:bg-gray-950/60 h-8 w-44 mt-5 text-white text-base font-semibold rounded flex items-center justify-center inline-block ">
                            <img src='/logo/info.svg' alt="serie imagen" className="h-2/3 "></img>
                            Más información
                        </button>
                    </div>
                </div>
                <div className="absolute w-full h-5 bottom-0 bg-gradient-to-b from-transparent to-negro-netflix-ligero"></div>
            </header>
        </>
    )
}

export default Header;