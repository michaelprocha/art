import Logo from "./Logo";
import Text from "./Text";
import Navegation from "./Navegation";

function Header() {
  return (
    <header className="container-fluid px-0 py-2">
      <div className="row">
        <div className="col">
          <Logo />
          <Text as={'h2'} className={'h4 text-dark text-center pb-3'}>Exibições de arte urbana</Text>
          <Navegation />
        </div>
      </div>
    </header>
  )
}

export default Header