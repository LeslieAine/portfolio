// import PortfolioImg from '@/public/images/portfolio-img.jpg';
import MainImage from '@/public/images/col-1.jpg';

import beatsPortfolio from '@/public/images/beatsByLa/homepage.png';
import beatsMain1 from '@/public/images/beatsByLa/services.png';

import fitnessPortfolio from '@/public/images/fitness/1.png';
import fitnessMain1 from '@/public/images/fitness/2.png';
import fitnessMain2 from '@/public/images/fitness/3.png';


import healthcarePortfolio from '@/public/images/healthcare/homepage.png';
import healthcareMain1 from '@/public/images/healthcare/AboutPage.png';
// import fitnessMain2 from '@/public/images/fitness/3.png';

import photoPortfolio from '@/public/images/photography/top.png';
import photoMain1 from '@/public/images/photography/2.png';
import photoMain2 from '@/public/images/photography/3.png';

import rentalPortfolio from '@/public/images/rental/1.png';
import rentalMain1 from '@/public/images/rental/2.png';
import rentalMain2 from '@/public/images/rental/3.png';





export const portfolioData = {
    mainData: {
        title: "Portfolio",
        title2: "My Latest Works",
        description: "Here, you get to see some of the sites I have developed in detail, including their site links. (Some of the data on the sites has been replaced with samples as some clients want to keep their info confidential)"
    },
    navigationList: [
        {
            title: "First",
            classes: "first",
            dataFilter: ".first"
        },
        {
            title: "Second",
            classes: "second",
            dataFilter: ".second"
        },
    ],
    projects: [
        {
            projectTitle: 'House Rental',
            slug: 'first',
            description: 'This project is a house rental website that gives the details of the house, displays its outlook and also has contats on how to reach the renter.',
            keywords: 'key1, key2, key3',
            category: 'House Rental',
            services: 'Housing, Renting',
            client: 'Casa-lulu',
            duration: '20 hours',
            imageSrc: rentalPortfolio,
            mainImage: rentalPortfolio,
            categories: {
                name: 'Click to view the Website',
                url: 'https://house-rental-casa.netlify.app'
              },
            images: [
                { image: rentalMain1},
                { image: rentalMain2 },
            ]
        },
        {
            projectTitle: 'Fitness Trainer',
            slug: 'second',
            description: 'This is a website for a fitness trainer. It lists the services offered, has a lead contact form, and the imporatnce of each activity offered, all delivered in an appealing site to the client.',
            keywords: 'key1, key2, key3',
            category: 'Fitness Trainer',
            services: 'Fitness, Personal Training',
            client: 'Trainer',
            duration: '15 hours',
            imageSrc: fitnessPortfolio,
            mainImage: fitnessPortfolio,
            categories: {
                name: 'Click to view the Website',
                url: 'https://fitness-trainerapp.netlify.app'
              },
            images: [
                { image:fitnessMain1 },
                { image: fitnessMain2 },
            ]
        },
        {
            projectTitle: 'Photography Portfolio',
            slug: 'first-1',
            description: 'This website displays a photographer portfolio from their work samples, to about them, to how they can be contacted.',
            keywords: 'key1, key2, key3',
            category: 'Photography',
            services: 'Branding, Photoshoot',
            client: 'Photographer',
            duration: '15 hours',
            imageSrc: photoPortfolio,
            mainImage: photoPortfolio,
            categories: {
                name: 'Click to view the Website',
                url: 'https://myphotosite-portfolio.netlify.app'
              },
            images: [
                { image: photoMain1 },
                { image: photoMain2 },
            ]
        },
        {
            projectTitle: 'Online Shop',
            slug: 'second-1',
            description: 'This is a website that is a tech gadget accessories online shop. It lists the products sold, prices, and also how the shop can be reached. It includes a shopping cart and payment feature too',
            keywords: 'key1, key2, key3',
            category: 'Online Shop',
            services: 'Online Shop',
            client: 'Beats',
            duration: '18 hours',
            imageSrc: beatsPortfolio,
            mainImage: beatsPortfolio,
            categories: {
                name: 'Click to view the Website',
                url: 'https://beatsbyla.netlify.app/'
              },
            images: [
                { image: beatsMain1 },
                { image: MainImage },
            ]
        },
        {
            projectTitle: 'Eldery Care Home',
            slug: 'second-2',
            description: 'This is a website for an Eldery Care Home. It includes services offered, the care-takers, contacts, and an appointment scheduling feature. ',
            keywords: 'key1, key2, key3',
            category: 'Hospice Home',
            services: 'Healthcare',
            client: 'AllinOne',
            duration: '18 hours',
            imageSrc: healthcarePortfolio,
            mainImage: healthcarePortfolio,
            categories: {
                name: 'Click to view the Website',
                url: 'https://allinonecare.netlify.app'
              },
            images: [
                { image: healthcareMain1 },
                { image: MainImage },
            ]
        },
    ]
};