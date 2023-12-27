import Nav from "@/components/estructura/nav";
import '@/app/globals.css';
import Footer from "@/components/estructura/footer";
import ResponsiveNav from "@/components/estructura/responsiveNav";
import Image from 'next/image';
export default function ConstructionPage(){
    return(
        <>
            <Nav></Nav>
            <div className="h-full w-full flex justify-center relative items-center">
                <p className="text-base ml-5 lg:text-2xl">Pagina en construccion...</p>
                <Image src="/header/desarrollo.png" alt="desarrollo" height={600} width={600}  className="my-10"/>
                
            </div>
            <ResponsiveNav></ResponsiveNav>
            <Footer></Footer>
        </>
    )
}