import Link from './link'

function FooterSection({ name, items }) {
  return (
    <div>
      <h3 className="font-montserrat text-lg uppercase font-bold mb-6">
        {name}
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterSection;
