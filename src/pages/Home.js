import React from 'react'
import { AboutComp } from '../components/features/AboutComp';
import CarouselComp from '../components/features/CarouselComp'
import { CategoriesComp } from '../components/features/CategoriesComp';

const Home = () => {
    return (
        <>
            {/* Carousel Feature */}

            <CarouselComp />

            {/* Categories Feature */}

            <CategoriesComp />

            {/* About Feature */}
            
            <AboutComp />

            {/* Sponsers Feature */}

        </>
    )
}

export default Home