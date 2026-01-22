import Logo from "./Logo";
import Text from "./Text";
import Navegation from "./Navegation";

function Header() {
  return (
    <header className="container-fluid px-0">
      <Logo />
      <div className="row">
        <div className="col">
          <Text as={'h2'} className={'h4 text-dark text-center'}>Exibições de arte urbana</Text>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <hr />
        </div>
      </div>
      <div className="row">
        <Navegation />
      </div>
    </header>
  )
}

export default Header