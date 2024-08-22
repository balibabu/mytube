import React, { useEffect, useState } from 'react'
import { getLinks } from './components/extractor';
import VidCard from './components/VidCard';

export default function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getLinks(setItems);
    }, [])


    return (
        <div className='w-full sm:w-1/3 mx-auto border-x-2 border-gray-500'>
            <div className='bg-gray-500 text-3xl font-mono text-center font-bold py-1 tracking-widest text-green-950'>VIDEOS</div>
            {items.map((item, index) => <VidCard key={index} {...{ item }} />)}
        </div>
    )
}