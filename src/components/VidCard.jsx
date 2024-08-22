import React, { useState } from 'react'

export default function VidCard({ item }) {
    const [status, setStatus] = useState(false);

    return (
        <div className='bg-white border-2 border-black m-1 rounded overflow-clip'>
            <div className='bg-green-300 px-2 font-bold'>{item.title}</div>
            <div className='overflow-hidden'>
                {
                    status ?
                        <video controls className='w-full'>
                            <source src={item.video} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        :
                        <img src={item.thumbnail} onClick={() => setStatus(true)} className='w-full' alt={item.title} />
                }
            </div>
        </div>
    )
}