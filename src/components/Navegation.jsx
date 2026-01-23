import Text from "./Text"

function Navegation() {
  return (
    <nav className='d-flex justify-content-center'>
        <Text as={'a'} className={'link-dark link-opacity-50-hover px-3'} rest={{href: '#'}}>Home</Text>
        <Text as={'a'} className={'link-dark link-opacity-50-hover px-3'} rest={{href: '#'}}>Projetos</Text>
        <Text as={'a'} className={'link-dark link-opacity-50-hover px-3'} rest={{href: '#'}}>Artistas</Text>
        <Text as={'a'} className={'link-dark link-opacity-50-hover px-3'} rest={{href: '#'}}>Contato</Text>
    </nav>
  )
}

export default Navegation