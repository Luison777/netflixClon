function Header(){
    return(
        <>
            <header id="head" className=" w-full relative  overflow-hidden ">
            <img src='./tanjiro.png' alt="serie imagen" className="h-full w-full relative object-cover"></img>
                <div className="h-full w-full absolute top-32 left-12 ">
                    <img src='./logoDemon.png' alt="serie imagen" className="h-2/5"></img>
                    <div className="mt-5">Tanjiro emprende un viaje arriesgado para buscar una cura a la <br/>
                    maldicion de su hermana y vengar a su familia asesinada por un<br/>
                    demonio.
                    </div>
                    
                    <div className="flex w-3/5 h-1/6">
                        <button className="bg-white hover:bg-white/90 h-1/3 w-1/5 mr-5 mt-5 text-black font-semibold rounded flex items-center justify-center inline-block">
                        <img src='./logo/play.svg' alt="serie imagen" className="h-8 "></img>
                            Reproducir
                        </button>
                        <button className="bg-gray-950/70 hover:bg-gray-950/60 h-1/3 w-1/4 mr-5 mt-5 text-white font-semibold rounded flex items-center justify-center inline-block ">
                        <img src='./logo/info.svg' alt="serie imagen" className="h-8 "></img>
                            Más información
                        </button>
                    </div>
                </div>
                <div className="absolute w-full h-10 bottom-0 bg-gradient-to-b from-transparent to-negro-netflix-ligero"></div>
            </header>
        </>
    )
}

export default Header;