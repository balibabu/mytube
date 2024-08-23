import React, { useEffect, useRef, useState } from 'react'
import Share from './Share';

export default function VidCard({ item, vid }) {
    const [quality, setQuality] = useState(0);
    const videoRef = useRef(null);
    const cardRef = useRef(null);
    useEffect(() => { if (window.location.hash === `#${vid}`) cardRef.current.scrollIntoView({ behavior: 'smooth' }) }, []);

    function changeQuality(e) {
        const index = e.target.value;
        setQuality(index);
        const currentTime = videoRef.current.currentTime;
        videoRef.current.src = item.video[index];
        videoRef.current.currentTime = currentTime;
        videoRef.current.addEventListener('loadeddata', () => videoRef.current.play(), { once: true });
    }

    function copyToClip() {
        navigator.clipboard.writeText(window.location.origin + `/mytube#${vid}`);
        alert('url copied to clipboard');
    }

    return (
        <div className='bg-white border-2 border-black m-1 rounded overflow-clip'>
            <div className='bg-green-300 px-2 py-1 font-bold flex justify-between' ref={cardRef} id={vid}>
                <div>{item.title}</div>
                <div className='w-5 cursor-pointer hover:text-blue-600' onClick={copyToClip}><Share {...{ strokeWidth: 2 }} /></div>
            </div>
            <div className='overflow-hidden'>
                <div className='relative'>
                    <div className='absolute z-10 right-0 opacity-50 hover:opacity-100 cursor-pointer font-bold'>
                        <select value={quality} onChange={changeQuality}>
                            {item.video.map((link, index) => <option key={index} value={index}>{index < 2 ? ['low', 'high'][index] : `Level-${index + 1}`}</option>)}
                        </select>
                    </div>
                    <video preload='none' controls className='w-full' ref={videoRef} poster={item.thumbnail} src={item.video[quality]} />
                </div>
            </div>
        </div>
    )
}