import logo from '../assets/images/logo.png'
import Container from './ui/container'
import Link from './ui/link'
import searchIcon from '../assets/icons/search.svg'
import worldIcon from '../assets/icons/world.svg'
import heartIcon from '../assets/icons/heart.svg'
import cartIcon from '../assets/icons/cart.svg'
import userIcon from '../assets/icons/user.svg'
import Navbar from './navbar'

function Header () {
  return (
    <>
      <header>
        <div className="bg-teal py-3">
          <Container size="xl">
            <div className="flex items-center justify-between gap-6">
              <div className="flex items-center gap-10 md:gap-4 xl:gap-10">
                <div>
                  <img src={logo} className="logo" alt="Vite logo" loading="lazy" />
                </div>
                <div className="hidden md:flex items-center gap-4 xl:gap-8">
                  <Link href="#" variant="white">Mūsu veikali</Link>
                  <Link href="#" variant="white">Jaunumi</Link>
                  <Link href="#" variant="white">Dāvanu kartes</Link>
                  <Link href="#" variant="white">Kontakti</Link>
                  <Link href="#" variant="white">Palīdzība</Link>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className='hidden lg:flex'>
                  <div className="flex items-center bg-white/15 rounded-full px-3 py-2 gap-2 max-w-[220px]">
                    <img src={searchIcon} alt="Search" className="w-5 h-5" />
                    <input
                      type="search"
                      name="Meklēt"
                      placeholder="Meklēt"
                      className="text-white h-5 placeholder:text-white focus:outline-none w-full bg-transparent"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex gap-1.5 items-center">
                    <img className="w-5 h-5" src={worldIcon} alt="" />
                    <span className="font-semibold font-inter text-sm text-white">LV</span>
                  </div>
                  <img className="w-5 h-5" src={userIcon} alt="" />
                  <img className="w-5 h-5" src={heartIcon} alt="" />
                  <img className="w-5 h-5" src={cartIcon} alt="" />
                </div>
              </div>
            </div>
          </Container>
        </div>
        <Navbar />
      </header>
    </>
  )
}

export default Header