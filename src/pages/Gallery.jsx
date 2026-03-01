import React from 'react'
import data from '../data/images'
import HeaderPicture from '../assets/BANNER.webp'
import GalleryPage from '../components/GalleryPage'


function Gallery() {
  const baseUrl = 'https://joonaskirsipuu.eu';
  const firstItem = data && data.length > 0 ? data[0] : null;
  const ogImage = firstItem ? `${baseUrl}${firstItem.thumbnail}` : `${baseUrl}${HeaderPicture}`;
  const ogImageAlt = firstItem ? firstItem.alt : 'banner_alt';

  return (
    <GalleryPage 
      name='Gallery' 
      data={data} 
      headerImage={HeaderPicture} 
      isMasonry={true}
      ogImage={ogImage} 
      ogImageAlt={ogImageAlt} 
      title="seo.digital.title"
      description="seo.digital.desc"
    />
  );
}

export default Gallery;