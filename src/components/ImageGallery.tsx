import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
import 'photoswipe/style.css';

interface ImageData {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ImageGalleryProps {
  images: ImageData[];
}

export default function ImageGallery({
  images,
}: ImageGalleryProps) {
  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: '.gallery-grid',
      children: '.gallery-item',
      pswpModule: PhotoSwipe,
      showHideAnimationType: 'fade',
      showAnimationDuration: 300,
      hideAnimationDuration: 300,
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, [images]);

  return (
    <div className="gallery-grid">
      {images.map((image, idx) => (
        <a
          key={idx}
          href={image.src}
          className="gallery-item"
          data-pswp-width={image.width}
          data-pswp-height={image.height}
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="gallery-image"
            loading="lazy"
          />
          <div className="gallery-caption">{image.alt}</div>
        </a>
      ))}
    </div>
  );
}
