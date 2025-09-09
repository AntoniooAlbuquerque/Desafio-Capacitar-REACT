import "./Header.css";
import logoImage from "../assets/logo.png";

function Header() {
  return (
    <header>
      {" "}
      {/* Header = Cabeçalho */}
      {/* Parte de Cima:Logo */}
      <div className="Header-top">
        <img src={logoImage} alt="Logo da Confeitaria Gourmet Delight" />
      </div>
      {/* Parte de Baixo:Navegação*/}
      <nav className="main-nav">
        {" "}
        {/* nav = navigation */}
        <a href="#">Página Inicial</a>
        <a href="#">Sobre Nós</a>
        <a href="#">Cardápio</a>
        <a href="#">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
