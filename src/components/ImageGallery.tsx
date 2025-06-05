import React from 'react';

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
  return (
    <div className="gallery-grid">
      {images.map((image, idx) => (
        <div key={idx} className="gallery-item">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            className="gallery-image"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
            }}
          />
          <div className="gallery-caption">{image.alt}</div>
        </div>
      ))}
    </div>
  );
}
