import Home from '../../assets/icons/home-line.svg'
import ArrowRight from '../../assets/icons/arrow-right.svg'
import Container from './container'

function Breadcrumbs() {
  return (
    <>
      <Container className="mt-10 hidden md:block" size="xl">
        <div className="flex items-center gap-2">
          <img src={Home} alt="" />
          <img src={ArrowRight} alt="" />
          <a className="block font-semibold text-sm font-inter text-gray" href="#">Vīriešiem</a>
          <img src={ArrowRight} alt="" />
          <a className="block font-semibold text-sm font-inter text-gray" href="#">T-krekli un krekli</a>
          <img src={ArrowRight} alt="" />
          <a className="block font-semibold text-sm font-inter text-black" href="#">Bezpiedurkņu krekls vīriešiem GALE</a>
        </div>
      </Container>
    </>
  )
}
export default Breadcrumbs