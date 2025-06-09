import ImageGallery from '../components/ImageGallery';
import { images } from '../data/images';
import { illustrations } from '../data/illustrations';
import '../components/Gallery.css';
import SEO from '../components/SEO';

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery"
        description="Photo gallery and illustrations from the CIIIC Annual Meet-Up 2025. Explore images and artwork from the event."
        image={undefined}
      />
      <div className="container">
        <div className="content-wrapper">
          <div className="content">
            <h1>Gallery</h1>
            <section className="gallery-section">
              <h2>Illustrations</h2>
              <p className="gallery-credit">
                Illustrations by{' '}
                <a
                  href="https://suusvandenakker.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Suus van den Akker
                </a>
              </p>
              <ImageGallery images={illustrations} />
            </section>

            <section className="gallery-section">
              <h2>Photos</h2>
              <p className="gallery-credit">
                Photos by{' '}
                <a
                  href="https://www.benhoudijk.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ben Houdijk
                </a>
              </p>
              <ImageGallery images={images} />
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
