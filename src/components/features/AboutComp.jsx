import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const AboutComp = () => {
    return (
        <div>
            <div className='items-center'>
                <Card bg='danger' className='w-full text-center'>
                    <Card.Body>
                        <Card.Title className='text-orange-400 underline text-center text-4xl mb-4'>About Us</Card.Title>
                        <Card.Text className='text-white text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </Card.Text>
                        <Link to='/about'><Button variant="outline-warning">Read More</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}
