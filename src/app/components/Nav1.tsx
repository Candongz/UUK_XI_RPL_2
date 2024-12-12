import React from 'react'
import Foto2 from '@/assets/logo.png'
import Image from 'next/image'
import Link from 'next/link'

function Nav1() {
  return (
    <>
        <div>
            <nav className='bg-primary h-16 flex'>
                <div className='flex'>
                    <div className='pt-5 pl-7 mr-[700px]'>
                        <Image src={Foto2} alt='logo' width={170} height={170}/>
                    </div>
                    <div className='flex justify-end pt-5 mr-10 gap-7 font-semibold'>
                        <Link href="/Login">Login</Link>
                        <Link href="/Akses">akses</Link>
                        <Link href="/Tambah">Tambah</Link>
                        <Link href="/DataA">DataA</Link>
                        <Link href="/DataB">DataB</Link>
                        <Link href="/Update">Update</Link>
                    </div>
                </div>
            </nav>
        </div>
    </>
  )
}

export default Nav1