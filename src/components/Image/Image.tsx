import React from 'react';

interface ImageProps {
    src: string | undefined,
    alt?: string,
    height: number,
    width: number
}

const Image = ({src, alt="", height, width}: ImageProps) => {
    return (
        <img src={src} alt={alt} style={{height:`${height}px`, width: `${width}px`, borderRadius: "50%" }}/>
    )
}

export default Image;