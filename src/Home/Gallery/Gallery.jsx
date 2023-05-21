import React, { useEffect, useState} from 'react';
import './Gallery.css'
const Gallery = () => {
    const [images, setImages] =useState([])
    useEffect(()=>{
        fetch("/public/gallery.json")
        .then(res=>res.json())
        .then(data=>setImages(data))
    },[])
    return (
        <div className='container mx-auto my-12' data-aos="fade-down">
            
            <div className='gallery'>
                {
                  images.map((item,index)=>{
                    return (
                        <div className='images' key={index}>
                           <img src={item.img} style={{width:"100%"}} alt="" />
                        </div>
                    )
                  })  
                }
            </div>
        </div>
    );
};

export default Gallery;