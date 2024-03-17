import React from 'react'
import Image from 'next/image'
import img1 from "../../../public/boat.jpg"

function page() {
    console.log(img1);

    return (
        <>
            <h3>Normal img</h3>
            <img src={img1.src}
                alt="boat-img"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            <h3>Next Image</h3>
            <Image
                src={img1}
                alt='boat-Image'
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            <h3>Remote Image</h3>
            <Image
                src="https://images.pexels.com/photos/87452/flowers-background-butterflies-beautiful-87452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt='flower-Image'
                width="900"
                height="500"
            />
        </>
    )
}

export default page