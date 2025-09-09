import logoImage from '../assets/logo.png'; 

function Header() {
  return (
    <header>
      <div>
        <img src={logoImage} alt="Logo da Confeitaria" />
      </div>
      <nav>
        <a href="#">Página Inicial</a>
        <a href="#">Sobre Nós</a>
        <a href="#">Cardápio</a>
        <a href="#">Contato</a>
      </nav>
    </header>
  );
}

export default Header;