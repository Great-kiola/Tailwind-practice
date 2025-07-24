import React from 'react'
import Navbar from './Navbar'
import SideMenu from './SideMenu'

const PageLayout = ({children, activeMenu}) => {
    const {user} = "ola"
    return (
        <div className=''>
            <Navbar activeMenu={activeMenu} />

            {user && (
                <div className='flex'>
                    <div className='max-[1080px]:hidden'>
                        <SideMenu activeMenu={activeMenu} />
                    </div>

                    <div className='grow mx-5'>{children}</div>
                </div>

            )}


        </div>
    )
}

export default PageLayout