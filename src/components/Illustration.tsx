import { useState } from 'react';
import { illustrations } from '../data/illustrations';

interface IllustrationProps {
  filename: string;
}

export default function Illustration({
  filename,
}: IllustrationProps) {
  const [isLightboxOpen, setIsLightboxOpen] =
    useState(false);
  const illustration = illustrations.find((i) =>
    i.src.includes(filename)
  );

  if (!illustration) {
    console.error(`Illustration not found: ${filename}`);
    return null;
  }

  return (
    <>
      <div className="article-illustration">
        <img
          src={illustration.src}
          alt={illustration.alt}
          onClick={() => setIsLightboxOpen(true)}
        />
        <p className="article-illustration-credit">
          Illustration by{' '}
          <a
            href="https://suusvandenakker.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Suus van den Akker
          </a>
        </p>
      </div>

      {isLightboxOpen && (
        <div
          className="lightbox"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div className="lightbox-content">
            <img
              src={illustration.src}
              alt={illustration.alt}
            />
            <button
              className="lightbox-close"
              onClick={() => setIsLightboxOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
