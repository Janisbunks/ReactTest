function ProductHeader () {
  return (
    <div>
      <h1 className="text-lg md:text-2xl font-montserrat leading-[24px] font-bold uppercase mb-2">
        Bezpiedurkņu krekls vīriešiem GALE
      </h1>
      <div className="flex gap-2 text-sm text-darkGray">
        <p>Produkta kods: #ID8757</p> | <p>Ražotājs: Mizuno</p>
      </div>
      <p className="flex gap-2 items-center mt-4 mb-6 md:mb-8">
        <data value="25.99" className="text-lg md:text-2xl font-bold font-montserrat">25.99 €</data>
        <data value="19.99" className="line-through text-darkGray text-sm">19.99 €</data>
      </p>
    </div>
  )
}

export default ProductHeader
