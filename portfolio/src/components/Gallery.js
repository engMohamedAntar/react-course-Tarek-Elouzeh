import IMAGES from "../data/images";
import ImageShadow from 'react-image-shadow';
import 'react-image-shadow/assets/index.css';

const Gallery = () => {
  return (
    <div>
      {
      IMAGES.map((imageObj) => {
        return (
          <Image key={imageObj.id} img={imageObj.image} description={imageObj.descriptoin} />
        );
      })
      }
    </div>
  );
};

const Image = ({ img, description }) => {
  return (
    <div className="gallery">
      <a href= {img} target="_blanc">
        {/* <img src={img} alt="profile" /> */}
        <ImageShadow src={img} />
      </a>
      <p>{description}</p>
    </div>
  );
};

export default Gallery;
