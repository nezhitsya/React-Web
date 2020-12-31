import moment from 'moment'

const trending = [
    {
        title: 'Baguette',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['France', 'Food'],
        link: '#',
        image: 'baguette.jpeg',
    },
    {
        title: 'Mango!',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Food', 'Taiwan'],
        link: '#',
        image: 'mango.jpeg',
    },
    {
        title: 'Paragliding',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Activity', 'paragliding'],
        link: '#',
        image: 'paragliding.jpeg',
    },
    {
        title: 'Tracking course',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Activity', 'Tracking'],
        link: '#',
        image: 'tracking.jpeg',
    },
    {
        title: 'The country I want to go',
        date: moment().format('MMMM DD, YYYY'),
        categories: ['Greece', 'Trip'],
        link: '#',
        image: 'city.jpeg',
    },
]

export default trending;