

const data = [
    {
        id: 1,
        title: "The Villasku",
        slug: 'the-villasku',
        category: ['Creative Web Design', 'Hospitality'],
        description: 'Luxury villas placed in middle of attractive spot\'s.',
        src: '/img/project/web-design/the-villasku-c.jpg',
        overlay: 6
    },
    {
        id: 2,
        title: "Cuca Bali",
        slug: 'cuca-bali',
        src: '/img/project/web-design/Cuca_Bali-Entrance.jpg',
        category: ['Creative web design', 'SEO', 'Restaurant'],
        description: 'symbols through which express themselves.',
        overlay: 6,

    },
    {
        id: 3,
        title: "Spa Balimoon",
        slug: 'spa-balimoon',
        src: '/img/project/web-design/spa-balimoon.jpg',

        category: ['Creative web design', 'SEO', 'Spa & Wellness'],
        description: 'Huggl is an induction charging.',
        overlay: 6
    },
    {
        id: 4,
        title: "Drum Factory",
        slug: 'drum-factory',
        category: ['E-commerce','Creative web design', 'SEO', 'Digital Marketing', 'Social Media'],
        src: '/img/project/web-design/drum-factory.jpg',
        description: 'We are thrilled to share our new reel with you all.',
        overlay: 2
    },
    {
        id: 5,
        title: "Budhi Ayu Silver ",
        slug: 'budhi-ayu-silver',
        src: '/img/project/web-design/budhi-ayu.jpg',
        category: ['E-commerce','Creative web design', 'SEO', 'Digital Marketing', 'Social Media'],
        description: 'Cal was first. The first public university in the great state of California.',
        overlay: 5
    },
    {
        id: 5,
        title: "Budhi Ayu Silver 2 ",
        slug: 'budhi-ayu-silver-2',
        src: '/img/project/web-design/budhi-ayu.jpg',
        category: ['E-commerce','Creative web design', 'SEO', 'Digital Marketing', 'Social Media'],
        description: 'Cal was first. The first public university in the great state of California.',
        overlay: 5
    },
]

export const getPortfolioData = () => data;

export const getPortfolioItem = (value, whereName = "slug") => {
    return data.find(item => item[whereName] === value);
};
export const getPortfolioLink = (item) => {
    if (item)
        return item.slug && '/portfolio/' + item.slug;

    return '';
};