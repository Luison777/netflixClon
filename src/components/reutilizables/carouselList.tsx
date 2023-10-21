import Carousel from "./carousel"

type ListaMock = {
    orden: number[];
    objetos: Record<number, string>; 
  };
  
export default function CarouselList(){
    const listaMock:ListaMock={
        orden:[1,2,3],
        objetos:{
            1:'Tendencia en Netflix',
            2:'Recomendados',
            3:'Los más buscados',
        }}
    
    return(
        <>
        {listaMock.orden.map(id=><Carousel key={id} id={`carusel${id}`} title={`${listaMock.objetos[id]}`}/>)}
        </>
        )
}