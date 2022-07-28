import React from 'react'

export default function Contact() {
    return (
        <section className="text-gray-600 body-font relative mx-auto container" id='contact'>
            <div className="px-5 py-24">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
                    <p className="mx-auto md:text-base text-center">We&apos;ll try to get back to you as soon as possible, thanks!</p>
                </div>
                <div className='md:flex md:flex-row-reverse'>
                    <form className="lg:w-1/2 md:w-2/3 mx-auto py-4" action='https://formsubmit.co/floppsydogwalking@gmail.com' method='post'>
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-[#1308fe] border-0 py-2 px-8 focus:outline-none hover:bg-[#1006dc] rounded text-lg">Send</button>
                            </div>
                            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                                <a className="text-[#1308fe]" href='mailto:floppsydogwalking@gmail.com'>floppsydogwalking@gmail.com</a>
                                <p className="leading-normal my-5">
                                    Bordon, Hampshire, UK
                                </p>
                                <span className="inline-flex">
                                    <a className="text-gray-500" href='https://www.facebook.com/floppsysdogwalking' target="_blank" rel="noreferrer">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </form>
                    <div className='h-96 w-full lg:w-1/2 md:w-1/3 mx-auto bg-contain md:bg-cover bg-center md:mr-8' style={{ backgroundImage: `url(https://scontent.fltn2-1.fna.fbcdn.net/v/t39.30808-6/280384531_150775187442519_8879983874698601328_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_ohc=BxW4-out2scAX8PpNYb&_nc_ht=scontent.fltn2-1.fna&oh=00_AT_-Qp9PKBRphihmQ9sGI3jPnsX7e2jBDHI7qHFgWCUUnQ&oe=62E74680)` }}></div>
                </div>
            </div>
        </section >
    )
}
