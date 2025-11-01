import Container from "./ui/container"
import ArrowRight from '../assets/icons/arrow-right.svg'
import PackageIcon from '../assets/icons/package.svg'
import TruckIcon from '../assets/icons/truck.svg'
import LayersIcon from '../assets/icons/layers.svg'

function Newsletter () {
  return (
    <>
      <section className="bg-teal py-8 md:py-10">
        <Container size="md">
          <div className="grid md:grid-cols-2 items-center justify-between gap-8 md:gap-10">
            <div>
              <p className="font-montserrat font-bold text-lg mb-4 uppercase text-white">pieraksties jaunumiem</p>
              <div className="flex items-center border border-cyan rounded-[4px] overflow-hidden">
                <input
                  type="email"
                  placeholder="levadiet e-pastu"
                  className="flex-1 bg-transparent text-white/80 placeholder-white/80 px-3 py-2.5 focus:outline-none"
                />
                <div className="w-px h-11 bg-cyan"></div>
                <button className="bg-transparent p-3">
                  <img src={ArrowRight} alt="subscribe" className="w-5 h-5" />
                </button>
              </div>
            </div>
            <div className="text-white space-y-3">
              <div className="flex items-center gap-3">
                <img src={LayersIcon} alt="Three Layers Icon" title="Three Layers" />
                <p className="text-sm font-inter">Uzziniet pirmie par gaidāmajiem produktiem</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={TruckIcon} alt="Truck Icon" title="Truck" />
                <p className="text-sm font-inter">Saņem informāciju par īpašiem piedāvājumiem</p>
              </div>
              <div className="flex items-center gap-3">
                <img src={PackageIcon} alt="Package Icon" title="Package" />
                <p className="text-sm font-inter">Maksā par pasūtījumu veikalā vai internetā</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}

export default Newsletter