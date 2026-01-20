import imgLogo from '../assets/art_logo.svg'
import Text from './Text'

function Logo() {
    return (
        
            <div className='row'>
                <div className='col d-flex justify-content-end' >
                    <img className='logo' src={imgLogo} alt="logo" />
                </div>
                <div className='col'>
                    <Text as="h1" className='display-3 text-dark'>Art</Text>
                </div>
            </div>
        
    )
}

export default Logo