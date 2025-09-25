import { useState } from 'react'
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import pibbles from './assets/download.jpg'
import meowl from './assets/meowl.jpg'
import produto1 from './assets/produto1.svg'
import produto2 from './assets/produto2.svg'
import produto3 from './assets/produto4.svg'
import produto5 from './assets/produto5.svg'
import pumalogo from './assets/produto3.svg'
import instagram from './assets/instalogo.webp'
import facebook from './assets/facelogo.png'
import twitter from './assets/xlogo.png'
import slider1 from './assets/slider1.png'
import slider2 from './assets/slider2.png'
import slider3 from './assets/slider3.png'
import slider4 from './assets/slider4.png'
import slider5 from './assets/slider5.png'

function App() {

  return (
    <>
     <main>
      <header>
        <img src={pumalogo} alt="" />
        <a href={pibbles}><h3 id='prod'>Nossos Produtos</h3></a>
        <a href={pibbles}><h3 id='des'>Destaques</h3></a>
      </header>

      {/* O Slider se situara aqui.*/}
      <section className='header2'>
      <Swiper
      modules={[Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="mySwiper"
    >
      
      <SwiperSlide>
        <img src={slider1} alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={slider2} alt="" />
      </SwiperSlide>

      <SwiperSlide>
        <img src={slider3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider4} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider5} alt="" />
      </SwiperSlide>
      ...
    </Swiper>
      </section>

      <section className="produtos">
        <h1>Produtos</h1>
        <a href="#">
            <div className="p1">
            <img src={produto1} alt="" />
              <h2>PIBBLES!!!!!!!</h2>
              <h3>R$ 15,99</h3>
              <p>Classificação <span>★★★★★</span></p>
          </div>
        </a>
        <a href="#">
          <div className="p2">
            <img src={produto2} alt="" />
            <h2>Roupa Verde Pibbles!!</h2>
            <h3>R$ 199,99</h3>
            <p>Classificação <span>★★★★★</span></p>
          </div>
        </a>
        <a href="#" >
          <div className="p3">
            <img src={produto5} alt="" />
            <h2>Sombrero do Cachorro</h2>
            <h3>R$ 280,99</h3>
            <p>Classificação <span>★★★★★</span></p>
          </div>
        </a>
      </section>
      <section className="destaque">
        <div className="desta">
        <iframe src="https://www.youtube.com/embed/t4ZJv5zxE4I?si=cEc3nX20kyDKy-w" frameborder="0" allow="autoplay; fullscreen"></iframe>
          <img src={produto3} alt="" />
          <h2>PIBBLES CAMINHONEIRO!!</h2>
          <p id='destaque'>Nosso UNICO Produto item de Colecionador!</p>
          <h3>R$ 959,99</h3>
          <p id='classi'>Classificação <span>★★★★★★★</span></p>

          <a href="#">
            <div className='compra'>
            <p id='comprar'>Comprar</p>
          </div>
          </a>
        </div>
      </section>
      <footer>
        <img id='pumalogo' src={pumalogo} alt="" />

        <div className="social-footer">
          <div className="icon-social">
            <a href="https://www.instagram.com/">
              <img id='icon-insta' src={instagram} alt="" />
            </a>
          </div>
          <div className="icon-social">
            <a href="https://www.facebook.com/">
              <img id='icon-face' src={facebook} alt="" />
            </a>
          </div>
          <div className="icon-social">
            <a href="https://x.com/">
              <img id='icon-x' src={twitter} alt="" />
            </a>
          </div>
        </div>
        <p id='info1'>PIBBLES!!!!! LTDA CNPJ 05.406.034/0023-00 Inscrição Estadual 278.205.224.119 Endereço: Rua Passadena 104 - Parque Industrial, Cotia - SP CEP: 06715864. </p>
        <p id='info2'>Fale Conosco: Atendimento ao Cliente | (11) 4003-2304 | Segundas às Sextas, das 9h às 20h</p>
      </footer>
     </main>
    </>
  )
}

export default App
