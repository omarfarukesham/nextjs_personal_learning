"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
   <>
   <h1 className='text-2xl bg-black text-yellow-200'>Hello home</h1>
   <button className='border p-2 m-2 bg-black text-white' onClick={()=> router.push('about')}>
        go to About page
   </button>
   </>
  )
}
