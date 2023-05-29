import React from 'react';

import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';

import BannerMain from '../../components/BannerMain';
import Carrousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div className="App">
      <Menu />
      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
      />
      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
      />
      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[3]}
      />
      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[4]}
      />
      <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[5]}
      />

      <Footer />
    </div>
  );
}

export default Home;
