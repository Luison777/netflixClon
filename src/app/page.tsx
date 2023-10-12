import RootLayout from './layout'
import Nav from "../components/estructura/nav";
import Main from "../components/estructura/main";
import Footer from "../components/estructura/footer";
import Header from "../components/estructura/header";
import Carrusel from '@/components/reutilizables/carrusel';



export default function Home() {
  return (
    <RootLayout>
      <Nav></Nav>
      <Header></Header>
      <Main>
        <Carrusel></Carrusel>
        <Carrusel></Carrusel>
      </Main>
      <Footer></Footer> 
    </RootLayout>
  )
}
