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
      {images.map((image, idx) => {
        const displayWidth = 400;
        const displayHeight = Math.round(
          (displayWidth * (image.height ?? 1066)) /
            (image.width ?? 1600)
        );

        return (
          <a
            key={idx}
            href={image.src}
            className="gallery-item"
            data-pswp-width={image.width ?? 1600}
            data-pswp-height={image.height ?? 1066}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={image.src}
              alt={image.alt}
              width={displayWidth}
              height={displayHeight}
              className="gallery-image"
              loading="lazy"
            />
            <div className="gallery-caption">
              {image.caption || image.alt}
            </div>
          </a>
        );
      })}
    </div>
  );
}
