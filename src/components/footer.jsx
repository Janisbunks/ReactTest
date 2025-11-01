import Container from "./ui/container"
import Accordion from "./ui/accordion"
import Link from "./ui/link"
import FooterSection from "./ui/footer-section"
import Visa from '../assets/images/visa.jpg'
import Mastercard from '../assets/images/mastercard.jpg'
import Pasts from '../assets/images/pasts.jpg'
import Venipak from '../assets/images/venipak.jpg'
import Omniva from '../assets/images/omniva.jpg'
import Facebook from '../assets/icons/facebook.svg'
import Tiktok from '../assets/icons/tiktok.svg'
import Instagram from '../assets/icons/instagram.svg'

function Footer () {
  const paymentMethods = [
    { src: Visa, alt: 'Visa Card' },
    { src: Mastercard, alt: 'Mastercard' },
  ];

  const deliveryMethods = [
    { src: Pasts, alt: 'Pasts' },
    { src: Venipak, alt: 'Venipak' },
    { src: Omniva, alt: 'Omniva' },
  ];

  const socialLinks = [
    { src: Facebook, url: 'https://facebook.com', alt: 'Facebook' },
    { src: Instagram, url: 'https://instagram.com', alt: 'Instagram' },
    { src: Tiktok, url: 'https://twitter.com', alt: 'Tiktok' },
  ];

  const footerSections = [
    {
      name: 'Preces',
      items: [
        { title: 'Vīriešiem', path: '#' },
        { title: 'Sievietēm', path: '#' },
        { title: 'Bērniem', path: '#' },
        { title: 'Apavi', path: '#' },
        { title: 'Sporta formas', path: '#' },
        { title: 'Sporta inventārs', path: '#' },
        { title: 'Izpārdošana', path: '#' },
      ],
    },
    {
      name: 'SPORTA VEIDI',
      items: [
        { title: 'Basketbols', path: '#' },
        { title: 'Volejbols', path: '#' },
        { title: 'Handbols', path: '#' },
        { title: 'Futbols', path: '#' },
        { title: 'Florbols', path: '#' },
        { title: 'Regbijs', path: '#' },
        { title: 'Skriešana', path: '#' },
        { title: 'Treniņiem', path: '#' },
      ],
    },
    {
      name: 'KOMANDA',
      items: [
        { title: 'Par mums', path: '#' },
        { title: 'Mūsu veikali', path: '#' },
        { title: 'Jaunumi', path: '#' },
        { title: 'Dāvanu kartes', path: '#' },
        { title: 'Klienta karte', path: '#' },
        { title: 'Kontakti', path: '#' },
      ],
    },
    {
      name: 'PALĪDZĪBA',
      items: [
        { title: 'Izmēru tabula', path: '#' },
        { title: 'Biežāk uzdotie jautājumi', path: '#' },
        { title: 'Piegāde', path: '#' },
        { title: 'Apmaksa', path: '#' },
        { title: 'Atgriešana', path: '#' },
        { title: 'Garantija', path: '#' },
      ],
    },
  ];
  return (
    <>
    <footer className="pt-4 md:pt-12">
      <Container size="xl">
        <div className="hidden md:grid grid-cols-4 gap-10 mb-20">
          {footerSections.map((section, index) => (
            <FooterSection key={index} name={section.name} items={section.items} />
          ))}
        </div>
        {/* Mobile Accordion */}
        <div className="md:hidden mb-8">
          <Accordion
            wrapperClassName=""
            items={footerSections}
            renderContent={(item) => (
              <ul className="space-y-2 text-sm">
                {item.items?.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.path} variant="small">{link.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12 order-2 md:order-1">
            <div className="md:flex items-center gap-3">
              <p className='text-xs font-inter text-black mb-2 md:mb-0 text-center md:text-left'>Droši maksājumi:</p>
              <div className="flex items-center gap-1.5">
                {paymentMethods.map((method) => (
                  <img key={method.alt} className="max-w-[50px]" src={method.src} alt={method.alt} title={method.alt} loading="lazy" />
                ))}
              </div>
            </div>
            <div className="md:flex items-center gap-3">
              <p className='text-xs font-inter text-black mb-2 md:mb-0 text-center md:text-left'>Piegāde:</p>
              <div className="flex items-center gap-1.5">
                {deliveryMethods.map((method) => (
                  <img key={method.alt} className="max-w-[50px]" src={method.src} alt={method.alt} title={method.alt} loading="lazy" />
                ))}
              </div>
            </div>
          </div>
          <div className="flex gap-6 order-1 md:order-3 mb-8 md:mb-0">
            {socialLinks.map((link) => (
              <a key={link.alt} href={link.url} target="_blank" rel="noopener noreferrer">
                <img src={link.src} alt={link.alt} className="w-6 h-6" loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </Container>
      <div className="border-t border-grayStroke py-6">
        <Container size="xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-xs text-black order-2 md:order-1">© 2025</p>
            <ul className="md:flex text-center gap-6 md:gap-8 order-1 md:order-2 mb-8 md:mb-0">
              {['Privātuma politika', 'Lietošanas noteikumi', 'Sīkdatņu politika'].map((item) => (
                <li key={item}>
                  <Link href="#" variant="small">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
    </footer>
    </>
  )
}

export default Footer