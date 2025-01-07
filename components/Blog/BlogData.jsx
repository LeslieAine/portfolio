// import PostImage from '@/public/images/blog-post-img.jpg';
import CubesImage from '@/public/images/cubes.png';
import DataImage from '@/public/images/data-fetching.png';
import Image from '@/public/images/col-1.jpg';

export const blogData = {
    mainData: {
        title: "Blog",
        title2: "Latest Blog Posts",
        description: "Here are blog posts written by me. I hope you find an interesting one to read on!"
    },
    posts: [
        {
            title: 'Marching Cube Algorithm',
            slug: 'blog-post-title',
            description: 'The Algorithm that started a revolution in 3D visualization',
            keywords: 'key1, key2, key3',
            category: 'Algorithms',
            date: 'Sept 25 2024',
            postedBy: 'Leslie Aine',
            image: CubesImage,
            content: '<div class="row g-4 mt-2"><div class="col-12"> <h4 class="fw-medium">The Marching Cube Algorithm</h4> <p>This article explains the origins of the Marching Cube Algorithm, an algorithm that has proved its importance in the 3D space, from the gaming industry, to healthcare, engineering, and many other entertainment and scientific fields. The article also makes an effort to break down the logic and reasoning behind the functionality of the algorithm. From the most basic maths lesson, to revilutionary tech, this is the story of the Marching Cubes Algorithm. </p> </div></div>',
            images: [
                { image: Image },
                { image: Image },
            ],
            tags: 
                { url: 'https://medium.com/the-quantastic-journal/how-the-marching-cubes-algorithm-works-266614fd317b',
                name: 'View the entire blog here' },

        },
        {
            title: 'Dynamic Routes with Data Fetching(NextJS)',
            slug: 'data-fetching',
            description: 'This article explains how to create dynamic routes that an API route depends on to redirect an endpoint',
            keywords: 'key1, key2, key3',
            category: 'Data Fetching',
            date: 'Sept 4 2024',
            postedBy: 'Leslie Aine',
            image: DataImage,
            content: '<div class="row g-4 mt-2"><div class="col-12"> <h4 class="fw-medium">Dynamic Routes in NextJS</h4> <p>In this article, I dive in with examples to illustrate how one can create a site using a dynamic route that fetches data from an API endpoint in a case where this endpoint is dictated by the dynamic route&apos;s URL. This is paricularly helpful when the general outlook of several pages is the same but they fetch from different endpoints. </p> </div></div>',
            images: [
                { image: Image },
                { image: Image },
            ],
            tags: 
                { url: 'https://medium.com/@aineleslie/how-to-use-dynamic-routes-with-api-data-fetching-in-nextjs-1967d85d669e',
                name: 'View the entire blog here' },

        },
        {
            title: 'The Fast Fourier Transform Algorithm',
            slug: 'algorithms',
            description: 'This article explains the genius and breaks down how the Fast Fourier Transform works and why it is considered the most important of our time',
            keywords: 'key1, key2, key3',
            category: 'Algorithms',
            date: 'Oct 29 2024',
            postedBy: 'Leslie Aine',
            image: DataImage,
            content: '<div class="row g-4 mt-2"><div class="col-12"> <h4 class="fw-medium">The Fast Fourier Transform</h4> <p>Famously called the most ingenious algorithm of all time, in this article, I break down the Fast Fourier Transform Algorithm, its origin, modifications, and its importance to our technology today.  </p> </div></div>',
            images: [
                { image: Image },
                { image: Image },
            ],
            tags: 
                { url: 'https://medium.com/@aineleslie/the-genius-of-the-fast-fourier-transform-agorithm-fb0ed48ab1ed',
                name: 'View the entire blog here' },

        },
    ],

};