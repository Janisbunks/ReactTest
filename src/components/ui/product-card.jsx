import ProductCover from '../../assets/images/related-products-photo.jpg'
import HeartIcon from '../../assets/icons/heart-black.svg'

function ProductCard () {
  const colors = [
    { hex: '#ffffff', name: 'White' },
    { hex: '#cccccc', name: 'Gray' },
    { hex: '#000000', name: 'Black' },
    { hex: '#1e40af', name: 'Blue' },
    { hex: '#15803d', name: 'Green' },
  ];
  return (
    <div>
      <div className='relative group'>
        <img className='min-w-[254px] xl:min-w-[320px] transition-transform duration-300 group-hover:scale-105' src={ProductCover} alt="image" title="image" />
        <button className='w-11 h-11 flex items-center justify-center rounded-full bg-white absolute top-2 right-2 transition-all duration-200 hover:scale-110 hover:shadow-lg active:scale-95' aria-label="Add to favorites">
          <img src={HeartIcon} alt="Heart" aria-hidden="true" />
        </button>
      </div>
      <div className='mt-3 space-y-2'>
        <div className="flex items-center gap-2 mb-4">
          {colors.slice(0, 5).map((color, index) => (
            <button
              key={index}
              className={`w-3 h-3 md:w-6 md:h-6 rounded-full cursor-pointer hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-teal ${
                color.hex === '#ffffff' ? 'border-2 border-grayStroke' : ''
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
              aria-label={`Select ${color.name}`}
            />
          ))}
          <span className="text-darkGray text-xs font-inter">+3</span>
        </div>
        <div>
          <p className='font-semibold text-sm font-inter mb-1 hover:text-teal transition-colors duration-200'>Sieviešu sporta crop-tops </p>
          <p className='text-xs font-inter text-darkGray'>Mizuno</p>
        </div>
        <div>
          <p className="flex gap-2 items-end mt-2 md:mt-4 text-sm font-inter">
            <data value="25.99" className="font-semibold font-montserrat">25.99 €</data>
            <data value="19.99" className="line-through text-gray">19.99 €</data>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductCard