import React from 'react'

const Card = () => {
    return (
        <div className='text-white flex flex-col gap-2'>
            <div className='w-44 h-60 bg-violet-300'>
                <img className='w-full h-full' src='https://gogocdn.net/cover/kuma-kuma-kuma-bear-punch-dub.png' alt="img"/>
            </div>
            <div className=' text-center flex flex-col justify-center items-center'>
                <div className='text-[16px] flex flex-wrap text-orange-400 capitalize hover:text-white transition-all w-44 px-2'>hi how are you there do you know</div>
                <div className='text-[12px]' >Episodes: 4</div>
            </div>
        </div>
    )
}

export default Card