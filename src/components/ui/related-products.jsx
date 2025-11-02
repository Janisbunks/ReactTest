import Container from "./container"
import ArrowRight from "../../assets/icons/arrow-right-black.svg"
import ArrowLeft from "../../assets/icons/arrow-left-black.svg"
import Card from "./product-card";

function OtherProducts () {
  const products = [];
  for (let i = 0; i < 5; i++) {
      products.push(
        <Card key={i} />
      );
    }
  return (
    <>
      <section className="pt-14 pb-10">
        <Container size="xl">
          <div className="flex justify-between">
            <h2 className="text-lg md:text-2xl font-bold font-montserrat uppercase tracking-[-1%]">
              tev varētu patikt
            </h2>
            <div className="hidden md:flex gap-2 items-center">
              <button className="w-11 h-11 flex items-center justify-center bg-light rounded-full transition-all duration-200 hover:scale-110 hover:shadow-md active:scale-95" aria-label="Previous products">
                <img src={ArrowLeft} alt="" aria-hidden="true" />
              </button>
              <button className="w-11 h-11 flex items-center justify-center bg-light rounded-full transition-all duration-200 hover:scale-110 hover:shadow-md active:scale-95" aria-label="Next products">
                <img src={ArrowRight} alt="" aria-hidden="true" />
              </button>
            </div>
          </div>
        </Container>
        <div className="overflow-x-auto mt-4 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
          <div className="flex gap-4 px-6 md:px-4 xl:px-10">
            {products}
          </div>
        </div>
      </section>
    </>
  )
}

export default OtherProducts