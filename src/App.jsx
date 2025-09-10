// Esses import servem para importar o componentes que criamos em outros arquivos.
import Header from "./components/Header";
import Hero from "./components/Hero";
import Delicias from './components/Delicias';

function App() {
  return (
    <>
      <Header /> {/* Desenha o componente do cabeçalho na tela */}
      <Hero /> {/* Desenha o componente da imagem central(hero) */}
      <Delicias /> {/* Desenha o componente de delicias */}
    </>
  );
}

export default App; // Exporta o componente App fazendo com que ele possa ser usado
