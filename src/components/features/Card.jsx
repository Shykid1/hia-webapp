import React from 'react';
import { Card } from 'react-bootstrap';
import Crown from '../../images/PNGPIX-COM-Crown-PNG-Transparent-Image.png'
const CardComp = ({ details, title }) => {
    return (
        <Card bg="danger" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={Crown} />
            <Card.Body >
                <Card.Title className='text-center text-white'>{title}</Card.Title>
                <Card.Text className='text-center text-white'>
                    {details}
                </Card.Text>
            </Card.Body>
        </Card>

    )
}

export default CardComp