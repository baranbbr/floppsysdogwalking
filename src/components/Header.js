import React from 'react'
import DogLogo from '../assets/doglogo.jpeg'

function Header() {
    return (
        <header className="text-gray-600 body-font container mx-auto flex px-5 py-3 flex-col md:flex-row items-center justify-center">
            <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href='/'>
                <img className="h-24 w-24" src={DogLogo} alt="" />
                <span className="ml-3 text-3xl">Floppsy's Dog Walking</span>
            </a>
            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
                <a className="mr-5 hover:text-gray-900" href='#services'>Services</a>
                <a className="mr-5 hover:text-gray-900" href='#prices'>Prices</a>
                {/* <a className="hover:text-gray-900" href='https://www.facebook.com/floppsysdogwalking' target="_blank" rel="noreferrer">Our Facebook</a> */}
            </nav>
            <a className="inline-flex items-center text-white bg-[#1308fe] border-0 py-1 px-3 focus:outline-none hover:bg-[#281df9] rounded text-base mt-4 md:mt-0" href='#contact'>
                Contact Us
                <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-4 h-4 ml-1"
                    viewBox="0 0 24 24"
                >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </a>
        </header>

    )
}

export default Header