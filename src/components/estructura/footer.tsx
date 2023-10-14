function Footer(){
    return(
        <>
        <footer className="h-24 pl-60 pr-60 text-xs text-zinc-400">
           <div className="w-full mb-3 flex">
                <img src="/logo/facebook.svg" alt="facebook" className="h-5 mx-2"/>
                <img src="/logo/instagram.svg" alt="instagram" className="h-5 mx-2"/>
                <img src="/logo/twitter.svg" alt="Twitter" className="h-5 mx-2"/>
                <img src="/logo/youtube.svg" alt="youtube" className="h-5 mx-2"/>
           </div>
           <ul className="flex items-start mb-1">
                <li className="inline-block mr-20">
                    <a href="#"className="block mb-3">Audio descriptivo</a>
                    <a href="#"className="block mb-3">Relaciones con inversionistas</a>
                    <a href="#"className="block mb-3">Privacidad</a>
                    <a href="#"className="block mb-3">Contáctanos</a>
                </li>
                <li className="inline-block mr-20">
                    <a href="#"className="block mb-3">Centro de ayuda</a>
                    <a href="#"className="block mb-3">Empleo</a>
                    <a href="#"className="block mb-3">Avisos legales</a>
                </li>
                <li className="inline-block mr-20">
                    <a href="#"className="block mb-3">Tarjetas de regalo</a>
                    <a href="#"className="block mb-3">Tienda de Netflix</a>
                    <a href="#"className="block mb-3">Preferencia de cookies</a>
                </li>
                <li className="inline-block mr-20">
                    <a href="#"className="block mb-3">Prensa</a>
                    <a href="#"className="block mb-3">Teminos de uso</a>
                    <a href="#"className="block mb-3">Informacion corporativa</a>
                </li>
           </ul>
           <div className="w-32 mb-2  border-2 px-3 py-1">Código de servicio</div>
           <p className="mb-4 texts-xs">&copy; 1997-2023 Netflix, inc.</p>
        </footer>
        </>
    )
}

export default Footer;