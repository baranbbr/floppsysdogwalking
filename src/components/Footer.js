import React from 'react'

export default function Footer() {
    return (
        <footer className="text-gray-600 body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <a href='/'>
                    <img className="h-24 w-24" src="https://scontent.fltn2-1.fna.fbcdn.net/v/t39.30808-6/259238446_101316049055100_9113257431166935227_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=QUan7CZFEnIAX8PYxgM&tn=fl25b0Ewg8bKHHQe&_nc_ht=scontent.fltn2-1.fna&oh=00_AT-f5ccZwF0L7UZf5Yoq-Q5y55vdRK2k5J3ho2b_Wq9jrA&oe=62E8134D" alt="" />
                </a>
                <span className="ml-3 text-xl">Floppsy's Dog Walking</span>
                <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2022 — Created by
                    <a href="https://baran.live" className="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">Baran</a>.
                </p>
            </div>
        </footer >
    )
}
