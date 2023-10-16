
import RootLayout from './layout'
import Nav from "../components/estructura/nav";
import Main from "../components/estructura/main";
import Footer from "../components/estructura/footer";
import Header from "../components/estructura/header";
import Carousel from '@/components/reutilizables/carousel';


export default function Home() {
  

  return (
    <RootLayout>
      <Nav></Nav>
      <Header></Header>
      <Main>
        <Carousel id='carousel1' title='Los más buscados' style='mt-16'></Carousel>
 
        <Carousel id='carousel2' title='carousel2' style='my-20'></Carousel>

       
      </Main>
      <Footer></Footer> 
    </RootLayout>
  )
}
