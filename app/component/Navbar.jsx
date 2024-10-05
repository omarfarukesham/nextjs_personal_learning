import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <nav>
        <ul>
           <div className='logo'>
            <h1>Logo</h1>
           </div>
           <div className='link-container'>
            <Link className='link' href='/'>
                Home
            </Link>
            <Link className='link' href='/contact'>
                Contact
            </Link>
            <Link className='link' href='/about/user'>
                User
            </Link>
            <Link className='link' href='/profile'>
                Profile
            </Link>
            <Link className='link' href='/user'>
                newUser
            </Link>
           </div>
        </ul>
    </nav>
  )
}

export default Navbar