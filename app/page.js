"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const page = () => {

    useEffect(() => {
      getImages()
    }, [])
    
    
    const [images, setImages] = useState([])

    const getImages = async () => {
        const photos = await axios.get("https://picsum.photos/v2/list")
        const items = photos.data
        setImages(items)
        console.log(images)
    }


  return (
    <div>
        <h1 className='py-2 text-5xl font-bold text-center'>Image Fetching</h1>
        <button onClick={getImages} className='bg-green-400 m-5 px-5 py-2 text-white text-lg rounded'>Get Images</button>
        <div>
            {images.map((elem, idx)=>{
                return <img id={idx} className='m-5 inline-block rounded' src={elem.download_url} height={150} width={150}/>
            })}
        </div>
    </div>
  )
}

export default page