import React, { useEffect, useState } from 'react'
import { getLinks } from './components/extractor';
import VidCard from './components/VidCard';

let stored = localStorage.getItem('nofcols') || '1';
export default function App() {
    const [items, setItems] = useState([]);
    const [columns, setColumns] = useState(parseInt(stored));

    useEffect(() => {
        getLinks(setItems);
    }, [])

    function adjustColumns(e) {
        const name = e.target.name;
        setColumns((prev) => {
            let newVal = prev;
            if (name === 'increase') {
                newVal += 1;
            } else {
                newVal -= 1;
            }
            let val = newVal < 1 ? 1 : newVal;
            localStorage.setItem('nofcols', val);
            return val;
        })
    }

    return (
        <div>
            <div className='bg-gray-500'>
                <button className='font-bold text-3xl mx-5 my-2 bg-gray-300 px-4 pb-2 rounded-full' onClick={adjustColumns} name='increase'>-</button>
                <button className='font-bold text-3xl bg-gray-300 px-3 pb-1 rounded-full' onClick={adjustColumns} name='decrease'>+</button>
            </div>
            <div className={`grid grid-cols-${columns} gap-1`}>
                {items.map((item, index) => <VidCard key={index} {...{ item }} />)}
            </div>
        </div>
    )
}