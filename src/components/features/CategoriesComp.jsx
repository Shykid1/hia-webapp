import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CardComp from './Card'

export const CategoriesComp = () => {
    return (
        <div className='justify-center content-center p-4 text-center'>
            <h1 className='text-center underline text-orange-400 font-bold text-4xl'>Categories</h1>
            <div className='flex justify-center gap-20 mt-4 mb-4 flex-wrap'>
                <CardComp className="" title="Best Student Of The Year" details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
                <CardComp className="" title="Best Student Of The Year" details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
                <CardComp className="" title="Best Student Of The Year" details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua" />
            </div>
            <Link to='/categories'><Button variant="outline-warning" className='bg-red-500 text-white'>Read More</Button></Link>
        </div>
    )
}
