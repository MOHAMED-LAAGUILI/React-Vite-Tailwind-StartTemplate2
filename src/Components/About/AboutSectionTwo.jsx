const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:mb-0"
              data-wow-delay=".15s"
            >
              <img
                src="https://www.uctoday.com/wp-content/uploads/2023/03/How-to-Integrate-Microsoft-Teams-Rooms-With-Other-Conference-Room-Technology.jpg"
                alt="about image"
                className="mx-auto max-w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className=" dark:text-white max-w-[470px]" data-wow-delay=".2s">
              {[
                {
                  title: "Bug free code",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                },
                {
                  title: "Premier support",
                  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                },
                {
                  title: "Next.js",
                  description: "Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt consectetur adipiscing elit setim."
                }
              ].map((item, index) => (
                <div key={index} className={`mb-9 ${index === 2 ? 'mb-0' : ''}`}>
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;