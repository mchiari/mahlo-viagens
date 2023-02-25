import React from 'react'
import { Link } from 'react-router-dom'

export const Subscribe = () => {
    return (
        <div className='relative flex justify-center items-center h-[200px] gap-1'>
            
            <Link to={'/home'}>
            <span className='underline text-primary'>
                Clique aqui
            </span>
            </Link>
            <span>
            e se inscreva na nossa newsletter do Telegram para ficar por dentro das promoções!

            </span>

        </div>
    )
}
