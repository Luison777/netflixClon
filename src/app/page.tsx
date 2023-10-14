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
        <Carousel></Carousel>
      </Main>
      <Footer></Footer> 
    </RootLayout>
  )
}
