/* eslint-disable react/prop-types */
const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "10px",
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold  text-black dark:text-white sm:text-4xl md:text-[45px]">
                {title}
        </h2>
        <p className="dark:text-darkText
        ">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
