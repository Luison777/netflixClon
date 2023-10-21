
import Tarjeta from '@/components/reutilizables/tarjeta';

interface BlockProps{
    id:string,
    style?:string
}
function Block(props:BlockProps){
    const listaMock={

    }
    return(
        <div id={props.id} className={`${props.style} h-full flex `}>
            
            <Tarjeta id={`${props.id}card1`} ></Tarjeta>
            <Tarjeta id={`${props.id}card2`} style='translate-x-1/2 right-1/2' ></Tarjeta>
            <Tarjeta id={`${props.id}card3`} style='translate-x-1/2 right-1/2' ></Tarjeta>
            <Tarjeta id={`${props.id}card4`} style='translate-x-1/2 right-1/2' ></Tarjeta>
            <Tarjeta id={`${props.id}card5`} style='translate-x-1/2 right-1/2' ></Tarjeta>
            <Tarjeta id={`${props.id}card6`} style='right-0'></Tarjeta>

        </div>
    )
}
export default Block;