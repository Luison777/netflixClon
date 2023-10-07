function Header(){
    return(
        <>
            <header className=" w-full relative overflow-hidden">
            <img src='./tanjiro.png' alt="serie imagen" className="w-full relative"></img>
                <div className="h-full w-full absolute top-40 left-10 ">
                    <img src='./logoDemon.png' alt="serie imagen" className="h-50"></img>
                    <div className="mt-5">Tanjiro emprende un viaje arriesgado para buscar una cura a la <br/>
                    maldicion de su hermana y vengar a su familia asesinada por un<br/>
                    demonio.
                    </div>
                    
                    <div className="flex">
                        <button className="bg-white h-10 w-40 mr-5 mt-5 text-black font-semibold rounded flex items-center inline-block">
                        <img src='./logo/play.svg' alt="serie imagen" className="h-8 ml-5 mr-2"></img>
                            Reproducir
                        </button>
                        <button className="bg-gray-950/80 h-10 w-50 mr-5 mt-5 text-white font-semibold rounded flex items-center inline-block ">
                        <img src='./logo/info.svg' alt="serie imagen" className="h-8 ml-5 mr-2"></img>
                            Más información
                        </button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;