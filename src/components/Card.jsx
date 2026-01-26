import Text from "./Text"

function Card({cardType = false, family, hrefImg, descImg, className }) {

    if (cardType) {
        return (
            <div className={`card ${className}`}>
                <img src={hrefImg} alt={descImg} className={`card-img-top body-image`}/>
                <div className="card-body px-0">
                    <Text as={'h5'} className={'card-title text-dark h3'}>
                        {family[0]}
                    </Text>
                    <Text as={'p'} className={'card-text text-body-secondary'}>
                        {family[1]}
                    </Text>
                    <Text as={"button"} className={'btn btn-dark mx-auto'} rest={{ type: 'button' }}>
                        {family[2]}
                    </Text>
                </div>
            </div>
        )
    }

    return (
        <div className={`card-img-overlay p-4 ${className}`}>
            <Text as={'h4'} className={'card-title text-dark h2'}>
                {family[0]}
            </Text>
            <Text as={'p'} className={'card-text text-body-secondary'}>
                {family[1]}
            </Text>
            <Text as={"button"} className={'btn btn-dark mx-auto'} rest={{ type: 'button' }}>
                {family[2]}
            </Text>
        </div>
    )
}

export default Card