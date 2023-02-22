import React from 'react'

export const Footer = () => {

    let yyyy = new Date;
    const year = yyyy.getFullYear()

    return (
        <div className='flex justify-center items-center w-full h-40'>
            Mahlo Viagens © - {year}
        </div>
    )
}
