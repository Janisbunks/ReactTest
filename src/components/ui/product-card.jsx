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
    <>
      <div>
        <div className='relative'>
          <img className='min-w-[254px] xl:min-w-[320px]' src={ProductCover} alt="image" title="image" />
          <div className='w-11 h-11 flex items-center justify-center rounded-full bg-white absolute top-2 right-2'>
            <img src={HeartIcon} alt="Heart Icon" title="Heart" />
          </div>
        </div>
        <div className='mt-3 space-y-2'>
          <div className="flex items-center gap-2 mb-4">
            {colors.slice(0, 5).map((color, index) => (
              <div
                key={index}
                className={`w-3 h-3 md:w-6 md:h-6 rounded-full cursor-pointer hover:scale-110 transition ${
                  color.hex === '#ffffff' ? 'border-2 border-grayStroke' : ''
                }`}
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
            ))}
            <span className="text-darkGray text-xs font-inter">+3</span>
          </div>
          <div>
            <p className='font-semibold text-sm font-inter mb-1'>Sieviešu sporta crop-tops </p>
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
    </>
  )
}

export default ProductCard