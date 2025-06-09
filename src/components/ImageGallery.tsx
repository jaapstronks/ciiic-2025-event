import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
import 'photoswipe/style.css';
import type { Image } from '../data/images';

interface ImageGalleryProps {
  images: Image[];
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
            width={400}
            height={Math.round(
              (400 * image.height) / image.width
            )}
            className="gallery-image"
            loading="lazy"
          />
          <div className="gallery-caption">
            {image.caption || image.alt}
          </div>
        </a>
      ))}
    </div>
  );
}
