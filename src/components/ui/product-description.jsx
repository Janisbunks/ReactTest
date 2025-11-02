import { useState } from 'react';
import ColorThumbnail from '../../assets/images/color-preview-thumbnail.jpg'
import Ruler from '../../assets/icons/ruler.svg'
import Button from './button'
import HeartIcon from '../../assets/icons/heart-black.svg'
import Accordion from './accordion'
import ProductHeader from './product-header'
import PlusIcon from '../../assets/icons/plus.svg'
import MinusIcon from '../../assets/icons/minus.svg'

function ProductDescription () {
  const images = [];
  for (let i = 0; i < 8; i++) {
    images.push(
      <img
        key={i}
        src={ColorThumbnail}
        alt="color"
        className={`w-[62px] h-[62] md:w-[60px] md:h-[60px] rounded-[4px] cursor-pointer ${i === 0 ? 'border-2 border-black' : ''}`}
      />
    );
  }
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(quantity + 1);
  const decrement = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  return (
    <>
      <div>
        <div className='hidden md:block'>
          <ProductHeader />
        </div>
        <div className='space-y-6 md:space-y-8'>
          <div>
            <p className="text-sm text-darkGray">Krāsa: Melns</p>
            <div className='flex gap-2 mt-3 flex-wrap'>
              {images.map((img, i) => (
                <img
                  key={i}
                  src={ColorThumbnail}
                  alt="color"
                  className={`w-[62px] h-[62] md:w-[60px] md:h-[60px] rounded-[4px] cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-md ${i === 0 ? 'border-2 border-black' : ''}`}
                />
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm text-darkGray">Izmērs: L</p>
            <div className='flex gap-2 mt-3 flex-wrap'>
              <button className='text-sm font-bold font-montserrat border border-grayStroke py-3 px-4 rounded-[4px] min-w-20 transition-all duration-200 hover:border-black hover:shadow-sm active:scale-95'>
                XS
              </button>
              <button className='text-sm font-bold font-montserrat border border-grayStroke py-3 px-4 rounded-[4px] min-w-20 transition-all duration-200 hover:border-black hover:shadow-sm active:scale-95'>
                S
              </button>
              <button className='text-sm font-bold font-montserrat border border-grayStroke py-3 px-4 rounded-[4px] min-w-20 transition-all duration-200 hover:border-black hover:shadow-sm active:scale-95'>
                M
              </button>
              <button className='text-sm font-bold font-montserrat border-2 border-black py-3 px-4 rounded-[4px] min-w-20 transition-all duration-200 hover:shadow-md active:scale-95'>
                L
              </button>
              <button className='text-sm font-bold font-montserrat border border-grayStroke py-3 px-4 rounded-[4px] min-w-20 transition-all duration-200 hover:border-black hover:shadow-sm active:scale-95'>
                XL
              </button>
              <button className='text-sm font-bold font-montserrat border border-grayStroke py-3 px-4 rounded-[4px] min-w-20 transition-all duration-200 hover:border-black hover:shadow-sm active:scale-95'>
                2XL
              </button>
            </div>
            <div className='mt-4 flex gap-1.5 items-center cursor-pointer hover:text-teal transition-colors duration-200'>
              <img src={Ruler} alt="" />
              <p className='font-semibold'>Skatīt izmēru tabulu</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-darkGray">Skaits:</p>
            <div className='flex flex-wrap items-center mt-3 gap-2.5'>
              <div className="flex items-center border border-lightGray rounded-l-[4px] rounded-r-[4px] w-full md:w-fit mb-8 md:mb-0">
                <button
                  onClick={decrement}
                  className="px-6 py-3 hover:bg-gray-100 transition-colors duration-200 active:bg-gray-200"
                >
                  <img src={MinusIcon} alt="Minus Icon" title="Minus" />
                </button>
                <div className="px-8 py-3 text-center flex-grow font-semibold border-l border-r border-lightGray">
                  {quantity}
                </div>
                <button
                  onClick={increment}
                  className="px-6 py-3 hover:bg-gray-100 transition-colors duration-200 active:bg-gray-200"
                >
                  <img src={PlusIcon} alt="Plus Icon" title="Plus" />
                </button>
              </div>
              <div className='flex gap-2 w-full lg:w-fit'>
                <Button color='bg-teal' className='lg:ml-4 md:mr-2 flex-grow md:flex-grow-0'>pievienot grozam</Button>
                <button className='flex items-center justify-center bg-light rounded-full w-11 h-11 flex-shrink-0 transition-all duration-200 hover:scale-110 hover:bg-gray-200 active:scale-95'>
                  <img src={HeartIcon} alt="Heart Icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Accordion
          items={[
            { title: 'pieejamība veikalos', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'PRECES APRAKSTS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'APMAKSA', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
            { title: 'JAUTĀJUMI PAR PRECI', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },
          ]}
          defaultOpen={1}
        />
      </div>
    </>
  )
}

export default ProductDescription