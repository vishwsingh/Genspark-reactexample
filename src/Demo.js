import React from 'react'
import { useState } from 'react';
import { sculptureList } from './data';

const Demo = () => {
    const [Index, setIndex] = useState(0);

    function click_handle() {
        setIndex( Index + 1 );
    }

    function click_handle1() {
        setIndex( Index - 1);
    }

    function click_handle2() {
        setIndex(0);
    }

    let sculp = sculptureList[Index];
    return (
        <div>
            <button onClick = {click_handle1} > Previous </button>
            <button onClick = {click_handle} > Next </button>
            <button onClick = {click_handle2} > Reset </button>
            <h2>
                <i> {sculp.name}</i>
                by {sculp.artist}
            </h2>

            <h3>
                ({Index + 1} of {sculptureList.length})
            </h3>

            <img
                src = {sculp.url}
                alt = {sculp.alt}
            />

            <p>
                {sculp.description}
            </p>
        </div>
    )
}

export default Demo;