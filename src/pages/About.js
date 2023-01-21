import React from 'react'
import CarouselComp from '../components/features/CarouselComp'
import { DiscriptionComp } from '../components/features/DiscriptionComp'

const About = () => {
    return (
        <div>
            {/* Carousel Feature */}

            <CarouselComp />

            {/* Discription Feature */}

            <DiscriptionComp />
        </div>
    )
}

export default About