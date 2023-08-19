import { React, useEffect } from 'react'
import '../App.css'

export default function Hero() {
    useEffect(() => {
        const initialPanelOverlay = document.querySelector('.panel.active .overlay')
        initialPanelOverlay.style.visibility = 'visible'
        initialPanelOverlay.style.display = 'flex'
        const panels = document.querySelectorAll('.panel')
        const panelOverlays = document.querySelectorAll('.panel .overlay')
        panels.forEach((panel, i) => {
            panel.addEventListener('click', () => {
                clearInterval(interval)
                interval = setInterval(autoChangingPanels, 6000)
                index = i + 1
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
            setTimeout(() => {
                activePanelOverlay.style.visibility = 'visible';
                activePanelOverlay.style.display = 'flex';
            }, 500);
        }
        let index = 1
        // TODO: auto changing panels
        function autoChangingPanels() {
            if (index > panels.length - 1) {
                index = 0
            }
            else if (index < 0) {
                index = panels.length - 1
            }
            // change panel here
            removeActiveClasses()
            panels[index].classList.add('active')
            panelVisibilityDelay()
            index++
        }
        let interval = setInterval(autoChangingPanels, 6000)
    }, [])

    return (
        <div className='flex container mx-auto mb-28'>
            <div className='panel active' id='panel0' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1525287218326-af08021239f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')` }}>
                <div className='w-full bg-gray-700 rounded-[50px] overlay'>
                    <p>Highly recommend. Joey has my puppy regularly and he loves her. I can tell he&apos;s had a fun filled day as he sleeps like a log after.</p>
                    <h3>Sasha Lane</h3>
                </div>
            </div>
            <div className='panel' id='panel1' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1554079501-7c366aa7cce1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZyUyMG91dHNpZGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60')` }}>
                <div className='w-full bg-gray-700 rounded-[50px] overlay'>
                    <p>Joey is so good with my Dog. His callback now is so good, he is well walked, looked after and in the safest of hands.</p>
                    <h3>Ron Jones</h3>
                </div>
            </div>
            <div className='panel' id='panel2' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1621878135994-8b56a55d4af5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')` }}>
                <div className='w-full bg-gray-700 rounded-[50px] overlay'>
                    <p>What can I say, just brilliant. So good with my two, wouldn't be able to work without Joey & Liam walking my dogs.</p>
                    <h3>Sophie Leadbetter</h3>
                </div>
            </div>
            <div className='panel' id='panel3' style={{ backgroundImage: `url('https://images.unsplash.com/photo-1575796267277-8728d6a36aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80')` }}>
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
