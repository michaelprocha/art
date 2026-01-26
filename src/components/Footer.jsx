import Text from "./Text"
import SocialMedia from "./SocialMedia"

function Footer() {
    return (
        <footer className="container border-top py-5">
            <div className="row">
                <div className="col text-center">
                    <Text as={'h5'} className={'h6 text-body-secondary'} >Nos encontre nas redes sociais:</Text>
                    <SocialMedia/>
                    <Text as={'p'} className={'text-body-secondary m-0'} >Art © 2021:</Text>
                </div>
            </div>
        </footer>
    )
}

export default Footer