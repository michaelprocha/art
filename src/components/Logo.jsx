import imgLogo from '../assets/art_logo.svg'
import Text from './Text'

function Logo() {
    return (
        <div className='d-flex justify-content-center gap-3'>
            <img className='logo' src={imgLogo} alt="logo" />
            <Text as={"h1"} className={'display-3 text-dark'}>Art</Text>
        </div>
    )
}

export default Logo