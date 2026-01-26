import imgBody from '../assets/g_2.jpg'
import imgBodyTwo from '../assets/g_3.jpg'
import imgBodyThree from '../assets/g_4.jpg'
import imgBodyFour from '../assets/g_5.jpg'
import imgBodyFive from '../assets/g_6.jpg'

export default function useCards() {
    const cardsBody = [
        [
            {
                cardType: 'cardBody',
                family: ['Obra de Arthur', 'Realizada em: 26/01/2018', 'Detalhes'],
                hrefImg: imgBody,
                className: 'body-card'
            },
            {
                cardType: 'cardBody',
                family: ['Grafite da Av. Paulista', 'Realizada em: 14/06/2021', 'Detalhes'],
                hrefImg: imgBodyTwo,
                className: 'body-card'
            }
        ],
        [
            {
                cardType: 'cardBody',
                family: ['Arte em conjunto do Metrô', 'Realizada em: 19/01/2018', 'Detalhes'],
                hrefImg: imgBodyThree,
                className: 'body-card'
            },
            {
                cardType: 'cardBody',
                family: ['Obra de Paulo', 'Realizada em: 12/12/2015', 'Detalhes'],
                hrefImg: imgBodyFour,
                className: 'body-card'
            }
        ],
        [
            {
                cardType: 'cardBody',
                family: ['Grafite no centro da cidade', 'Realizada em: 13/02/2012', 'Detalhes'],
                hrefImg: imgBodyFive,
                className: 'body-card'
            }
        ]
    ]

    return {cardsBody};
}