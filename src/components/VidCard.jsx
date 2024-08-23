import React, { useRef, useState } from 'react'

export default function VidCard({ item }) {
    const [quality, setQuality] = useState(0);
    const videoRef = useRef(null);

    function changeQuality(e) {
        const index = e.target.value;
        setQuality(index);
        const currentTime = videoRef.current.currentTime;
        videoRef.current.src = item.video[index];
        videoRef.current.currentTime = currentTime;
        videoRef.current.addEventListener('loadeddata', () => {
            videoRef.current.play();
        }, { once: true });
    }


    return (
        <div className='bg-white border-2 border-black m-1 rounded overflow-clip'>
            <div className='bg-green-300 px-2 font-bold'>{item.title}</div>
            <div className='overflow-hidden'>
                <div className='relative'>
                    <div className='absolute z-10 right-0 opacity-25 hover:opacity-100 cursor-pointer font-bold'>quality
                        <select value={quality} onChange={changeQuality}>
                            {item.video.map((link, index) => <option key={index} value={index}>A{index + 1}</option>)}
                        </select>
                    </div>
                    <video preload='none' controls className='w-full' ref={videoRef} poster={item.thumbnail} src={item.video[quality]} />
                </div>
            </div>
        </div>
    )
}