import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Searchbar from '@/app/components/header/Searchbar';

const Header = ({placeholder} : {placeholder?:string}) => {
  return (
   <header className='sticky top-0 z-50 bg-white shadow-md py-5 '>
    <div className='container flex justify-between px-6 items-center relative gap-x-4 md:gap-x-0'>
    <Link href="/">
        <Image src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt="logo" width= {200} height={100}/>
    </Link>
    <Searchbar placeholder={placeholder}/>
    <div className='hidden md:flex'>Become a host</div>
    </div>
   </header>
  )
}

export default Header
