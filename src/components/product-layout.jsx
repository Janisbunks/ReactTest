import Container from "./ui/container"
import Thumbnails from './ui/product-thumbnails'
import MainPhoto from '../assets/images/cover-photo.jpg'
import ArrowRight from '../assets/icons/arrow-right-black.svg'
import ArrowLeft from '../assets/icons/arrow-left-black.svg'
import MainDescription from './ui/product-description'
import ProductHeader from './ui/product-header'

function Product () {
  return (
    <>
    <section className="pt-8 md:pt-10">
      <Container size="xl">
        <div className="md:grid grid-cols-2 gap-10">
          <div className='md:hidden'>
            <ProductHeader />
          </div>
          <div className="flex gap-3 mb-6">
            <Thumbnails />
            <div className="relative h-fit">
              <img src={MainPhoto} alt="" />
              <div className="absolute flex items-center bottom-6 right-6 gap-2">
                <button className="w-11 h-11 flex items-center justify-center bg-white rounded-full transition-all duration-200 hover:scale-110 hover:shadow-lg active:scale-95" aria-label="Previous image">
                  <img src={ArrowLeft} alt="" aria-hidden="true" />
                </button>
                <button className="w-11 h-11 flex items-center justify-center bg-white rounded-full transition-all duration-200 hover:scale-110 hover:shadow-lg active:scale-95" aria-label="Next image">
                  <img src={ArrowRight} alt="" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <MainDescription />
        </div>
      </Container>
    </section>
    </>
  )
}

export default Product