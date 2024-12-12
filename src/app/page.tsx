import React from 'react'
import Nav from './components/Nav'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import Hakakses from './components/Hakakses'

function page() {
  return (
    <>
    <section className=' bg-primary'>
      <Nav/>
    </section> 
    <section>
      <Login/>
    </section>
    <section className='flex grid-flow-row bg-belakang1 mt-5'>
      <Sidebar/>
      <Hakakses/>
    </section>
    <section>
    </section>
    </>
  )
}

export default page