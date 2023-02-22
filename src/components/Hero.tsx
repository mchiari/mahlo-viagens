import React from 'react'

export const Hero = () => {
    return (
        <div className='flex justify-center items-center gap-40 p-6'>

            <div className='flex flex-col'>

                <span className='text-8xl'>
                    Mahlo Viagens
                </span>
                <span className='text-2xl'>Agencia de viagens descricao</span>
            </div>

            <img className='p-2 rounded-xl object-cover aspect-square h-[400px]' src='/public/assets/flyingAmico.svg' />

        </div>
    )
}
