import React, { useState } from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import First from '../images/pexels-pixabay-531321.jpg'

const Register = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    dob: "",
    institution: "",
    category: "",
});

// handleChange Updates Form Data When Entered
const handleChange = (e) => {
  setValues({
    ...values,
    [e.target.name]: e.target.value,
  })
}

// handleFormSubmit Prevents The Default Browser Reload When Submit Butten Is Clicked 
// And Also Collects Form Data From User To The Database 
const handleFormSubmit = (e) => {
  e.preventDefault();
  const data = new FormData(e.target)
  console.log(Object.fromEntries(data.entries()));
}

  return (
    <div className='min-h-screen py-40 rounded-xl bg-red-400'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden'>
          <div className='w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center' style={{ backgroundImage: `url(${First})` }}>
            <h1 className='text-white text-3xl mb3'>Welcome</h1>
            <div>
              <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div className='w-full lg:w-1/2 py-16 px-12'>
            <h2 className='text-3xl mb-4'>HIA Apllication form</h2>
            <p className='mb-4'>
              Fill your application form here it only takes a minute
            </p>
            <Form onSubmit={handleFormSubmit}>
              <div className='grid grid-cols-2 gap-5'>
                <input name='firstName' value={values.firstName} onChange={handleChange} type="text" placeholder='Firstname' className='border border-gray-400 py-1 px-2' />
                <input name='lastName' value={values.lastName} onChange={handleChange} type="text" placeholder='Surname' className='border border-gray-400 py-1 px-2' />
              </div>
              <div className='mt-5'>
                <input name='email' value={values.email} onChange={handleChange} type="email" placeholder='Email' className='border border-gray-400 py-1 px-2 w-full' />
              </div>
              <div className='mt-5'>
                <FloatingLabel controlId="floatingSelect" label="Gender" >
                  <Form.Select aria-label="Floating label select example" name='gender' value={values.gender} onChange={handleChange}>
                    <option>Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
              <div>
                <div className="row mt-5">
                  <div className="col-md-4">
                    <Form.Group controlId="dob">
                      <Form.Label>DOB</Form.Label>
                      <Form.Control type="date" name="dob" value={values.dob} onChange={handleChange} placeholder="Date of Birth" />
                    </Form.Group>
                  </div>
                </div>
              </div>
              <div className='mt-5'>
              <input type="text" name='institution' value={values.institution} onChange={handleChange} placeholder='Name of Institution' className='border border-gray-400 py-1 px-2 w-full' />
              </div>
              <div className='mt-5'>
                <FloatingLabel controlId="floatingSelect" label="Award catigories" >
                  <Form.Select aria-label="Floating label select example" name='category' value={values.category} onChange={handleChange}>
                    <option>Select</option>
                    <option value="Overrall Best Student of The Year">1. Overrall Best Student of The Year</option>
                    <option value="Female Student of The Year">2. Female Student of The Year</option>
                    <option value="Most Influencial Student of The Year">3. Most Influencial Student of The Year</option>
                  </Form.Select>
                </FloatingLabel>
              </div>
              <div className='mt-5'>
                <span className='text-black px-1'>
                  By Applying You've Agreed To The <a href='#home' className='text-red-500 font-semibold'>Terms</a> & <a href='#home' className='text-red-500'>Conditions</a> of this Organization.
                </span>
              </div>
              <div className='mt-5'>
                <button type='submit' className='w-full bg-red-500 py-3 text-center text-white'>Apply Now</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register