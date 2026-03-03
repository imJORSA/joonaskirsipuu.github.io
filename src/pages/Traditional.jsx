import React from 'react'
import data from '../data/traditional'
import GalleryPage from '../components/GalleryPage'

const HeaderPicture = '/images/BANNER.webp';

function Traditional() {
  const baseUrl = 'https://joonaskirsipuu.eu';
  const firstItem = data && data.length > 0 ? data[0] : null;
  const ogImage = firstItem ? `${baseUrl}${firstItem.thumbnail}` : `${baseUrl}${HeaderPicture}`;
  const ogImageAlt = firstItem ? firstItem.alt : 'banner_alt';

  return (
    <GalleryPage 
      name='Traditional' 
      data={data} 
      headerImage={HeaderPicture} 
      isMasonry={true} 
      ogImage={ogImage} 
      ogImageAlt={ogImageAlt} 
      title="seo.traditional.title"
      description="seo.traditional.desc"
    />
  );
}
 
export default Traditional;