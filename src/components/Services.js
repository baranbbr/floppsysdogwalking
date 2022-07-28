import React from 'react'

export default function Services() {
    return (
        <section className='flex flex-col text-gray-600 container mx-auto pt-14 -mt-14' id='services'>
            <article className='block md:flex w-full md:h-[25rem]'>
                <div className='hidden md:block w-1/2 bg-cover bg-center' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1626982998101-037a46a8367b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)` }}></div>
                <div className='md:w-1/2 p-8 flex flex-col justify-center relative'>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 md:-top-12 md:absolute">Services</h1>

                    <h3 className='text-gray-900 text-2xl'>Exercise <span className='inline-block md:hidden'>– 🐾</span></h3>
                    <p className='max-w-[50ch]'>
                        My exercise service allows you to make sure your pet is well taken care of, even when you&apos;re not around.
                        I offer this for all sizes and breeds. Reserve my time and relax knowing your pet is in the best possible hands.
                    </p>
                </div>
            </article>
            <article className='block md:flex w-full md:h-[25rem] mt-2 md:mt-4 lg:mt-8'>
                <div className='md:w-1/2 p-8 flex flex-col justify-center md:text-right'>
                    <h3 className='text-gray-900 text-2xl'>Socialisation <span className='inline-block md:hidden'>– 🐶</span></h3>
                    <p className=''>
                        Regardless of your pet&apos;s breed, age or behavior, each of my services can be curated to fit their specific needs
                        — no matter how unique. My socialisation service is one of my specialties and is often booked well in advance.
                    </p>
                </div>
                <div className='hidden md:block w-1/2 bg-cover bg-center' style={{ backgroundImage: `url(https://images.unsplash.com/photo-1556866261-8763a7662333?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)` }}></div>
            </article>
        </section >
    )
}
