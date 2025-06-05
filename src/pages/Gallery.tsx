import ImageGallery from '../components/ImageGallery';
import { images } from '../data/images';
import '../components/Gallery.css';

export default function Gallery() {
  return (
    <div className="container">
      <div className="content-wrapper">
        <div className="content">
          <h1>Gallery</h1>
          <ImageGallery images={images} />
        </div>
      </div>
    </div>
  );
}
