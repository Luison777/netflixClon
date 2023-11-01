import Nav from "@/components/estructura/nav";
import '@/app/globals.css';
import Footer from "@/components/estructura/footer";
import ResponsiveNav from "@/components/estructura/responsiveNav";

export default function(){
    return(
        <>
            <Nav></Nav>
            <div className="h-full w-full flex justify-center relative items-center">
                <p className="text-base ml-5 lg:text-2xl">Pagina en construccion...</p>
                <img src="/header/desarrollo.png" alt="desarrollo" className="my-10"/>
                
            </div>
            <ResponsiveNav></ResponsiveNav>
            <Footer></Footer>
        </>
    )
}