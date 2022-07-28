import React from 'react'

export default function Prices() {
    return (
        <section className='container mx-auto mt-24 text-gray-600 flex flex-col items-center p-8 md:mb-20 mb-0' id='prices'>
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Prices</h1>
            <p className='py-2 mx-auto text-center md:text-base'>Here are the prices for our services. Contact us if you're after something slightly different.</p>
            <div className='flex flex-col md:flex-row justify-center pt-8'>
                <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                    <table className="table-auto w-full text-left whitespace-no-wrap">
                        <thead>
                            <tr>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Service</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Price per hour</th>
                                <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Details</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-3">Daytime Dog Walk</td>
                                <td className="px-4 py-3">£15</td>
                                <td className="px-4 py-3">Solo walk. 60 minutes on or off lead.</td>
                            </tr>
                            <tr>
                                <td className="border-t-2 border-gray-200 px-4 py-3">Daytime Visit</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">£15 - £25</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">30 min or 1 hour visits available where time is spent with your dog,
                                    letting them out for a toilet break and fresh air, giving them clean water, feeding, medications whatever you require but most of all a friendly caring person to play with.</td>
                            </tr>
                            <tr>
                                <td className="border-t-2 border-gray-200 px-4 py-3">Custom</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">£ ?</td>
                                <td className="border-t-2 border-gray-200 px-4 py-3">Contact us to see if we can meet your needs, we're quite flexible with what we offer.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="lg:w-1/3 w-full mx-auto overflow-auto bg-cover bg-center ml-8" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1609075939132-1f7e076a5f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c3ByaW5nZXIlMjBzcGFuaWVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60)` }}>
                </div>
            </div>
        </section>
    )
}
