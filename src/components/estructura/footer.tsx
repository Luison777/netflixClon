import Image from 'next/image'
function Footer(){
    return(
        <>
        <footer className="h-24 md:px-56 text-xs text-zinc-400 ">
           <div className="w-full mb-3 flex relative">
                <Image src="/logo/facebook.svg" alt="facebook" height={25} width={25} style={{marginRight:"10px"}}/>
                <Image src="/logo/instagram.svg" alt="instagram" height={25} width={25}style={{marginRight:"10px"}}/>
                <Image src="/logo/twitter.svg" alt="Twitter" height={25} width={25}style={{marginRight:"10px"}}/>
                <Image src="/logo/youtube.svg" alt="youtube" height={25} width={25}style={{marginRight:"10px"}}/>
           </div>
           <ul className="flex items-start mb-1 flex-wrap w-full">
                <li className="inline-block md:mr-20 mt-5">
                    <a href="#"className="block mb-3">Audio descriptivo</a>
                    <a href="#"className="block mb-3">Relaciones con inversionistas</a>
                    <a href="#"className="block mb-3">Privacidad</a>
                    <a href="#"className="block mb-3">Contáctanos</a>
                </li>
                <li className="inline-block mr-5 md:mr-20 mt-5">
                    <a href="#"className="block mb-3">Centro de ayuda</a>
                    <a href="#"className="block mb-3">Empleo</a>
                    <a href="#"className="block mb-3">Avisos legales</a>
                </li>
                <li className="inline-block md:mr-20 mt-5">
                    <a href="#"className="block mb-3">Tarjetas de regalo</a>
                    <a href="#"className="block mb-3">Tienda de Netflix</a>
                    <a href="#"className="block mb-3">Preferencia de cookies</a>
                </li>
                <li className="inline-block mt-5">
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