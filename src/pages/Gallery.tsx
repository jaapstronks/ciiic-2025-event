import ImageGallery from '../components/ImageGallery';
import { images } from '../data/images';
import '../components/Gallery.css';
import SEO from '../components/SEO';

export default function Gallery() {
  return (
    <>
      <SEO
        title="Gallery"
        description="Photo gallery from the CIIIC Annual Meet-Up 2025. Explore images from the event."
        image={undefined}
      />
      <div className="container">
        <div className="content-wrapper">
          <div className="content">
            <h1>Gallery</h1>
            <ImageGallery images={images} />
          </div>
        </div>
      </div>
    </>
  );
}
