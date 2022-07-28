import { React, useEffect } from 'react'
import '../App.css'

export default function Hero() {
    useEffect(() => {
        const initialPanelOverlay = document.querySelector('.panel.active .overlay')
        initialPanelOverlay.style.visibility = 'visible'
        initialPanelOverlay.style.display = 'flex'
        const panels = document.querySelectorAll('.panel');
        const panelOverlays = document.querySelectorAll('.panel .overlay');
        panels.forEach((panel) => {
            panel.addEventListener('click', () => {
                if (!panel.classList.contains('active')) {
                    removeActiveClasses()
                    panel.classList.add('active')
                    panelVisibilityDelay()
                }
            })
        })
        function removeActiveClasses() {
            panels.forEach((panel) => {
                panel.classList.remove('active')
            })
            panelOverlays.forEach((panelOverlay) => {
                panelOverlay.style.visibility = 'hidden'
                panelOverlay.style.display = 'none'

            })
        }

        function panelVisibilityDelay() {
            const activePanelOverlay = document.querySelector('.panel.active .overlay');
            console.log(activePanelOverlay)
            setTimeout(() => {
                activePanelOverlay.style.visibility = 'visible';
                activePanelOverlay.style.display = 'flex';
            }, 500);
        }
        // TODO: auto changing panels
    }, [])


    return (
        <div className='flex container mx-auto mb-28'>
            <div className='panel active' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1525287218326-af08021239f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')` }}>
                <div className='w-full bg-gray-700 rounded-[50px] overlay'>
                    <p>Highly recommend. Joey has my puppy regularly and he loves her. I can tell he&apos;s had a fun filled day as he sleeps like a log after.</p>
                    <h3>Sasha Lane</h3>
                </div>
            </div>
            <div className='panel' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1554079501-7c366aa7cce1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZyUyMG91dHNpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60')` }}>
                <div className='w-full bg-gray-700 rounded-[50px] overlay'>
                    <p>Joey is so good with my Dog. His callback now is so good, he is well walked, looked after and in the safest of hands.</p>
                    <h3>Ron Jones</h3>
                </div>
            </div>
            <div className='panel' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1621878135994-8b56a55d4af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')` }}>
                <div className='w-full bg-gray-700 rounded-[50px] overlay'>
                    <p>What can I say, just brilliant. So good with my two, wouldn't be able to work without Joey & Liam walking my dogs.</p>
                    <h3>Sophie Leadbetter</h3>
                </div>
            </div>
            <div className='panel' style={{ backgroundImage: `url('https://scontent.fltn2-1.fna.fbcdn.net/v/t39.30808-6/292166381_163243319529039_2375465210644663366_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=e3f864&_nc_ohc=iljfwMU9jSoAX-8mkm6&_nc_ht=scontent.fltn2-1.fna&oh=00_AT-yNnQsTLf9IT3s4uq36_woZhGfsnSt3CZ2yPdIqT3zVw&oe=62E85745')` }}>
                <div className='w-full bg-gray-700 rounded-[50px] overlay'>
                    <p className='small-text'>100% recommend Liam. I am very fortunate Liam was able to help me last minute after I had been cancelled on twice. It isn't always easy to find a dog walker as my boy can be reactive, however Liam was happy to help from the get-go, listened to all my worries and notes about the dog!
                        <br /><br />Amazing service, very professional, nothing was too much to ask even with all my needs! I really loved receiving photos of my boy on his walks- such a nice touch!
                    </p>
                    <h3>Jess Gates</h3>
                </div>
            </div>
        </div >
    )
}
