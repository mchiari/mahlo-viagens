import React from 'react'

export const Footer = () => {

    let yyyy = new Date;
    const year = yyyy.getFullYear()

    return (
        <div className='relative flex flex-col justify-center items-center w-full h-60'>
           <span className=''> Mahlo Viagens © - {year} </span>
           <span className=''> designed by <a href='https://github.com/mchiari' target={'blank'}>@mchiaridev</a> </span>
        </div>
    )
}
