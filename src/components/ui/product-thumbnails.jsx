import thumbnail1 from '../../assets/images/thumbnail-1.jpg';
import thumbnail2 from '../../assets/images/thumbnail-2.jpg';
import thumbnail3 from '../../assets/images/thumbnail-3.jpg';
import thumbnail4 from '../../assets/images/thumbnail-4.jpg';

function ProductGallery() {
  const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

  return (
    <div className="hidden md:flex flex-col gap-2 w-16 flex-shrink-0">
      {thumbnails.map((thumbnail, index) => (
        <img
          key={index}
          src={thumbnail}
          alt={`thumbnail ${index + 1}`}
          className="cursor-pointer"
        />
      ))}
    </div>
  );
}

export default ProductGallery;
