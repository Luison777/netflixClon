import Tarjeta from '@/components/reutilizables/tarjeta';

function Carrusel(){
    return(
        <div className='w-full h-36 flex relative bottom-28 ml-4 mt-10'>
            <p className='absolute left-0 bottom-44 translate-y-full text-xl font-bold '>Los más buscados</p>
            <Tarjeta id='card1' ></Tarjeta>
            <Tarjeta id='card2' style='translate-x-1/2 right-1/2' ></Tarjeta>
            <Tarjeta id='card3' style='translate-x-1/2 right-1/2' ></Tarjeta>
            <Tarjeta id='card4' style='translate-x-1/2 right-1/2' ></Tarjeta>
            <Tarjeta id='card5' style='translate-x-1/2 right-1/2' ></Tarjeta>
            <Tarjeta id='card6' style='translate-x-1/2 right-1/2' ></Tarjeta>
            <Tarjeta id='card7' style='translate-x-1/2 right-1/2' ></Tarjeta>
            <Tarjeta id='card8' style='right-0'></Tarjeta>
        </div>
    )
}
export default Carrusel;