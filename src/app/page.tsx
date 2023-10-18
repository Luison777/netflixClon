
import RootLayout from './layout'
import Nav from "../components/estructura/nav";
import Main from "../components/estructura/main";
import Footer from "../components/estructura/footer";
import Header from "../components/estructura/header";
import Carousel from '@/components/reutilizables/carousel';
import Modal from '@/components/reutilizables/modal';


export default function Home() {
  

  return (
    <RootLayout>
      <Nav></Nav>
      <Header></Header>
      <Main>
        <Modal></Modal>   
      </Main>
      <Footer></Footer> 
    </RootLayout>
  )
}
