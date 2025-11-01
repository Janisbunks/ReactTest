import Container from './ui/container'
import Link from './ui/link'

function Navbar () {
  const navItems = [
    { title: 'Vīriešiem', path: '#', variant: 'default' },
    { title: 'Sievietēm', path: '#', variant: 'default' },
    { title: 'Bērniem', path: '#', variant: 'default' },
    { title: 'Sporta formas', path: '#', variant: 'default' },
    { title: 'Sporta Inventārs', path: '#', variant: 'default' },
    { title: 'Izpārdošana', path: '#', variant: 'sale' },
  ];

  return (
    <>
      <div className="hidden md:flex border-b border-grayStroke">
        <Container size="sm">
          <div className="flex items-center">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                variant={item.variant}
                className={item.variant === 'sale' ? 'bg-red text-white py-3 px-4' : 'py-3 px-4'}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </Container>
      </div>
    </>
  )
}

export default Navbar