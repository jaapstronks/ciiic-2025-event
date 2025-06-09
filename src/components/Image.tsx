import { useState } from 'react';
import { images } from '../data/images';
import './Image.css';

interface ImageProps {
  src: string;
}

export default function Image({ src }: ImageProps) {
  const [isLightboxOpen, setIsLightboxOpen] =
    useState(false);
  const image = images.find((img) => img.src === src);

  if (!image) {
    console.warn(`Image not found: ${src}`);
    return null;
  }

  return (
    <div className="standalone-image">
      <div className="image-container">
        <img
          src={image.src}
          alt={image.caption}
          className="image"
          onClick={() => setIsLightboxOpen(true)}
        />
        <div className="image-meta">
          <div className="image-caption">
            {image.caption}
          </div>
          <div className="image-credit">
            Photo:{' '}
            <a
              href="https://benhoudijk.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ben Houdijk
            </a>
          </div>
        </div>
      </div>

      {isLightboxOpen && (
        <div
          className="lightbox"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="lightbox-content">
            <button
              className="lightbox-close"
              onClick={() => setIsLightboxOpen(false)}
            >
              ×
            </button>
            <img src={image.src} alt={image.caption} />
          </div>
        </div>
      )}
    </div>
  );
}
