import { CirclePlus } from "lucide-react";
import React, { useRef } from "react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const menuRef = useRef(null);

  const openMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.remove("max-md:w-0");
      menuRef.current.classList.add("max-md:w-full");
    }
  };

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.classList.remove("max-md:w-full");
      menuRef.current.classList.add("max-md:w-0");
    }
  };

  return (
    <header className='flex items-center justify-between px-6 py-3 md:py-4 shadow max-w-5xl rounded-full mx-auto w-full bg-white/20 backdrop-blur-md'>
      {/* Logo */}
      <a></a>

      <nav
        ref={menuRef}
        className='max-md:absolute max-md:top-0 max-md:left-0 max-md:overflow-hidden items-center justify-center max-md:h-full max-md:w-0 transition-[width] bg-white/50 backdrop-blur flex-col md:flex-row flex gap-8 text-gray-900 text-sm font-normal'>
        <a className='hover:text-secondary' href='#'>
          Dashboard
        </a>
        <a className='hover:text-secondary' href='#'>
          Expenses
        </a>
        <a className='hover:text-secondary' href='#'>
          Budgets
        </a>
        <a className='hover:text-secondary' href='#'>
          Categories
        </a>
        <a className='hover:text-secondary' href='#'>
          Reports
        </a>
        <button onClick={closeMenu} className='md:hidden text-gray-600'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            viewBox='0 0 24 24'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
      </nav>

      <div className='flex items-center space-x-4'>
        <button className='size-8 flex items-center justify-center hover:bg-gray-100 transition border border-slate-300 rounded-md'>
          <svg
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M7.5 10.39a2.889 2.889 0 1 0 0-5.779 2.889 2.889 0 0 0 0 5.778M7.5 1v.722m0 11.556V14M1 7.5h.722m11.556 0h.723m-1.904-4.596-.511.51m-8.172 8.171-.51.511m-.001-9.192.51.51m8.173 8.171.51.511'
              stroke='#353535'
              strokeWidth={1.5}
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </button>

        <SignedOut>
          <SignInButton className='hidden md:flex bg-secondary text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-primary transition cursor-pointer' />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <button onClick={openMenu} className='md:hidden text-gray-600'>
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            strokeWidth={2}
            viewBox='0 0 24 24'
            strokeLinecap='round'
            strokeLinejoin='round'>
            <path d='M4 6h16M4 12h16M4 18h16' />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
