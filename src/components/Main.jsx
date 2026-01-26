import Hero from "./Hero"
import Card from "./Card"
import useCards from "../hooks/useCards"

function Main() {

    const { cardsBody } = useCards();

    return (
        <main className='container pt-2 pb-5'>
            <Hero />
            <div className="row">
                <div className="col">
                    <h2 className=" text-center py-4">Artes em destaque</h2>
                </div>
            </div>
            {cardsBody.map((row, iRow) => (
                <div key={iRow} className="row g-5 my-2">
                    {row.map((card, iCard, arrCard) => {
                        if (arrCard.length === 1) {
                            return (
                                <div key={iCard} className="col-6">
                                    <Card cardType={card.cardType}
                                        family={card.family}
                                        hrefImg={card.hrefImg} className={card.className} />
                                </div>
                            )
                        }
                        return (
                            <div key={iCard} className="col">
                                <Card cardType={card.cardType}
                                    family={card.family}
                                    hrefImg={card.hrefImg} className={card.className} />
                            </div>
                        )
                    })}
                </div>
            ))}
        </main>
    )
}

export default Main