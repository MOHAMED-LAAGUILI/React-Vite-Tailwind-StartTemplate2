/* eslint-disable react/prop-types */


const brandsData = [
  {
    id: 1,
    name: "UIdeck",
    href: "",
    image: "https://tse3.mm.bing.net/th?id=OIP.JflGW8e1fT4_ttSuFTQXJwHaHj&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    name: "Tailgrids",
    href: "",
    image: "http://pngimg.com/uploads/netflix/netflix_PNG8.png",
  },
  {
    id: 3,
    name: "Lineicons",
    href: "",
    image: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
  },
  {
    id: 4,
    name: "GrayGrids",
    href: "h",
    image: "http://pngimg.com/uploads/apple_logo/apple_logo_PNG19673.png",
  },
  {
    id: 5,
    name: "TailAdmin",
    href: "",
    image: "https://logodix.com/logo/2028160.png",
  },
];

const Brands = () => {
  return (
    <section className=" pb-10 flex flex-wrap justify-center">
      <div className="container">
        <div className=" flex flex-wrap">
          <div className="w-full">
            <div
              className="gap-10 flex flex-wrap items-center justify-center rounded-md bg-dark py-8 px-8 dark:bg-primary dark:bg-opacity-5 sm:px-10 md:py-[40px] md:px-[50px] xl:p-[50px] 2xl:py-[60px] 2xl:px-[70px]              "
            >
              {brandsData.map((brand) => (
                <SingleBrand key={brand.id} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }) => {
  const { href, image, name } = brand;

  return (
    <div className="mx-3 flex w-full max-w-[160px] items-center justify-center py-[15px] sm:mx-4 lg:max-w-[130px] xl:mx-6 xl:max-w-[150px] 2xl:mx-8 2xl:max-w-[160px]">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0 dark:opacity-60 dark:hover:opacity-100"
      >
        <img src={image} alt={name}  />
      </a>
    </div>
  );
};
