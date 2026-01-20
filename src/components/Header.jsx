import Logo from "./Logo";
import Text from "./Text";

function Header() {
  return (
    <header className="container p-4">
        <Logo/>
        <div className="row">
            <Text as={'h2'} className={'h4 text-dark text-center'}>Exibições de arte urbana</Text>
        </div>
    </header>
  )
}

export default Header