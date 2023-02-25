import React from 'react'

export const Footer = () => {

    let yyyy = new Date;
    const year = yyyy.getFullYear()

    return (
        <div className='flex justify-center items-center w-full h-20 absolute bottom-0 bg-red-100'>
           <span className=''> Mahlo Viagens © - {year} </span>
        </div>
    )
}
