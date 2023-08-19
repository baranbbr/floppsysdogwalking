import React from 'react'
import DogLogo from '../assets/doglogo.jpeg'

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a href='/'>
                    <img className="h-24 w-24" src={DogLogo} alt="" />
                </a>
                <span className="ml-3 text-xl">Floppsy's Dog Walking</span>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 — Created by
                    <a href="https://x.com/banf" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Baran</a>.
                </p>
            </div>
        </footer >
    )
}
