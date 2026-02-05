import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import '../gallery.css'
import data from '../data/traditional'
import Modal from '../components/Modal'
import HeaderPicture from '../assets/BANNER.webp'
import OptimizedImage from '../OptimizedImage'


function Traditional() {
  const baseUrl = 'https://joonaskirsipuu.github.io';
  const imageListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": data.map((item, index) => ({
      "@type": "ImageObject",
      "position": index + 1,
      "name": item.text,
      "contentUrl": `${baseUrl}${item.full}`,
      "thumbnailUrl": `${baseUrl}${item.thumbnail}`,
      "author": {
        "@type": "Person",
        "name": "Joonas Kirsipuu"
      }
    }))
  };

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.full);
  };

  const handelRotationRight = () => {
    const totalLength = data.length;
    const newIndex = (currentIndex + 1) % totalLength;
    setCurrentIndex(newIndex);
    setClickedImg(data[newIndex].full);
  };

  const handelRotationLeft = () => {
    const totalLength = data.length;
    const newIndex = (currentIndex - 1 + totalLength) % totalLength;
    setCurrentIndex(newIndex);
    setClickedImg(data[newIndex].full);
  };

  return (
    <>
      <Helmet>
        <title>Traditional Art Gallery | Joonas Kirsipuu</title>
        <meta name="description" content="A collection of traditional art pieces by Joonas Kirsipuu." />
        <link rel="canonical" href={`${baseUrl}/traditional`} />
        <script type="application/ld+json">{JSON.stringify(imageListSchema)}</script>
      </Helmet>
      <div name='Traditional' className='w-full min-h-screen bg-white'>
      {/* TITLE */}
      <div className='relative flex h-full m-auto bg-slate-900'>
        <img src={HeaderPicture} className='h-full' alt="Joonas Kirsipuu Banner" />
      </div>

      <Navbar />

      {/* BODY */}
      <div className=' bg-white columns-2 lg:columns-3 xl:columns-4 gap-4 pt-10 px-4 xl:px-0'>
      {data && data.map((item, index) => (
        <div key={index} className='images break-inside-avoid mb-10 group cursor-pointer'>
          <OptimizedImage className='text-transparent w-full object-fill grayscale group-hover:grayscale-0 transition-all duration-500'
            src={item.thumbnail}
            alt={item.alt}
            width={item.width}
            height={item.height}
            onClick={() => handleClick(item, index)}
          />
          <h2 className='pt-1 text-xs sm:text-base xl:text-lg font-bold pointer-events-none text-cyan-950'>{item.text}</h2>
          <h2 className='text-[8px] sm:text-xs font-thin pointer-events-none text-cyan-950'>{item.subtext}</h2>
        </div>
      ))}
      <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </div>
    </div>
      </div>
    </>
  );
}
 
export default Traditional;