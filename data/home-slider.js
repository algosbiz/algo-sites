

const data = [
    {
        id: 1,
        title: "Social Media Strategy",
        slug: 'social-media-management',
        category: ['experienced digital marketer'],
        description: 'Our services include IG Influencers, coding solutions and publishing.',
        src: '/img/home/slider/Social-Media-Agency-Bali-Indonesia.jpg',
        href : {
            href: "/about"
        },
        buttonText: "About Us",
        overlay: 6
    },
    {
        id: 2,
        title: "SEO Agency",
        slug: 'search-engine-optimization',
        src: '/img/home/slider/default-images.jpg',
        href : {
            href: "/search-engine-optimization"
        },
        // category: ['pen'],
        description: 'symbols through which express themselves.',
        overlay: 8,

    },
    {
        id: 3,
        title: "Programming Agency",
        slug: 'website-development',
        src: '/img/home/slider/default-images.jpg',
        href : {
            href: "/about"
        },

        // category: ['induction'],
        description: 'Huggl is an induction charging.',
        overlay: 6
    },
    {
        id: 4,
        title: "Digital Marketing Agency",
        slug: 'principal-garden',
        category: ['Architecture'],
        src: '/img/home/slider/default-images.jpg',
        href : {
            href: "/about"
        },
        description: 'We are thrilled to share our new reel with you all.',
        overlay: 2
    },
]

export const getSliderData = () => data;

export const getSliderItem = (value, whereName = "slug") => {
    return data.find(item => item[whereName] === value);
};
export const getSliderLink = (item) => {
    if (item)
        return item.slug && '/portfolio/' + item.slug;

    return '';
};