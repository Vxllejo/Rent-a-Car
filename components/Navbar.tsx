"use client";

import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';
import { SignInProps } from '@/types';
import CustomButton from './CustomButton';
import SignIn from './SignIn';
import { UserAuth } from '@/context/AuthContext';

interface SignInModalProps {
  sign: SignInProps;
}

const Navbar = ({sign}: SignInModalProps) => {
  const [isOpen,setIsOpen] = useState(false);
  const {user} = UserAuth();
  

  
  
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href="/" className='fkex justify-center items-center'>
            <Image 
            src="/logo.svg"
            alt='Car Hub Logo'
            width={118}
            height={18}
            className='object-contain'
            />
            </Link>

            <CustomButton 
            title="Sign In"
            btnType="button"
            containerStyles="text-primary-blue rounded-full bg-white min-w-[130px] "
            handleClick={() =>setIsOpen(true)}           
           />
        </nav>
        <SignIn isOpen={isOpen} closeModal={() => setIsOpen(false)} sign={sign} />
        <button ></button>
    </header>
  )
}

export default Navbar