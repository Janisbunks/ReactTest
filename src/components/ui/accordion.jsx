import { useState } from 'react';
import PlusIcon from '../../assets/icons/plus.svg'

function Accordion({ items, renderContent, wrapperClassName = 'mt-12 md:mt-14', defaultOpen = null }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={wrapperClassName}>
      {items.map((item, index) => (
        <div key={index} className="border-t first:border-t-0 last:border-b border-grayStroke">
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center py-4 font-bold text-left text-black text-sm uppercase"
          >
            {item.title || item.name}
            <span className={`text-xl transition-transform duration-300 ${openIndex === index ? 'rotate-90' : ''}`}>
              <img src={PlusIcon} alt="" />
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="pb-4 text-darkGray">
              {renderContent ? renderContent(item, index) : item.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
