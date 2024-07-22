"use client"
import React, { useState } from 'react'
import styles from '../styles'
import { close, logo, menu } from '../assets'
import Image from 'next/image'
import { navLinks } from '../constants'

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const handleScroll = (id: string) => {
    setActive(id);
    setToggle(false); // Cierra el menú en móvil
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <div 
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}>
          <Image src={logo} alt='logo' width={36} height={36} className='object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>Ebert &nbsp; <span className='sm:block hidden'>| Full Stack Developer </span></p>
        </div>
        <div className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <div 
              key={link.id} 
              className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => handleScroll(link.id)} // Cambiado aquí
            >
              {link.title}
            </div>
          ))}
        </div>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Image
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <div className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <div
                  key={link.id}
                  className={`${active === link.title ? 'text-white' : 'text-secondary'} font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => handleScroll(link.id)} // Cambiado aquí
                >
                  {link.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav