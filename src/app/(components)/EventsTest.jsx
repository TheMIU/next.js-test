'use client'
import React, { useState } from 'react'

function EventsTest() {
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleClick = () => {
        alert("Hello");
    }

    return (
        <>
            <h3>Hello : {input} </h3>
            <input onChange={handleChange} />
            <button onClick={handleClick}>Click me</button>

            <p>type hi to check conditional rendering</p>
            {input == "hi" &&
                <div>
                    <h2>conditional rendering</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione et animi voluptatem ipsam beatae, est ipsa voluptas reprehenderit.
                        Quis, suscipit consequatur
                    </p>
                </div>
            }

        </>
    )
}

export default EventsTest