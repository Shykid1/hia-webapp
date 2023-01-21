import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Footer.css';


const Footer = () => {
    const [values, setValues] = useState({
        fullName: "",
        footer_email: "",
        message: "",

    });

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        })
    }

    const handleFooterFormSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()));
    }

    return (
        <div className='footer-container'>
            <div>
                <Card bg='danger' className='w-full  mt-4 rounded-xl'>
                    <Card.Body className='flex justify-between'>
                        <div>
                            <Card.Title className='text-white'>HIA</Card.Title>
                            <Card.Text className='text-3xl text-orange-400 underline'>Useful Links</Card.Text>
                            <ul className='text-center mt-2'>
                                <li className='mt-3'><a href='/' className='decoration-white text-white'>Home</a></li>
                                <li className='mt-3'><a href='/categories' className='decoration-white text-white'>Categories</a></li>
                                <li className='mt-3'><a href='/about' className='decoration-white text-white'>About</a></li>
                                <li className='mt-3'><a href='/registeration' className='decoration-white text-white'>SignUp</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='text-3xl text-orange-400 underline mt-10 '>Social Media</h4>
                            <div className='items-center justify-center'>
                                <ul className='text-center mt-2'>
                                    <li className='mt-3'><a href='#home' className='decoration-white text-white'>Facebook</a></li>
                                    <li className='mt-3'><a href='#home' className='decoration-white text-white'>Instagram</a></li>
                                    <li className='mt-3'><a href='#home' className='decoration-white text-white'>Twitter</a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <form onSubmit={handleFooterFormSubmit}>
                                <div>
                                    <h3 className='text-3xl text-orange-400 underline mt-10'>Contact Us</h3>
                                    <label className='text-white'>Fullname</label>
                                    <div>
                                        <input type="text" name="fullName" value={values.fullName} onChange={handleChange} className='rounded-xl border-none' />
                                    </div>
                                    <label className='text-white'>Email</label>
                                    <div>
                                        <input type="email" name="footer_email" value={values.footer_email} onChange={handleChange} className='rounded-xl border-none' />
                                    </div>
                                    <label className='text-white'>Message</label>
                                    <div>
                                        <textarea name="message" value={values.message} onChange={handleChange} className='rounded-xl border-none' />
                                    </div>
                                    <Button type='submit' variant="outline-warning">Send</Button>
                                </div>
                            </form>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Footer