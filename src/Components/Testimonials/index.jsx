import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData = [
  {
    id: 1,
    name: "Musharof Chy",
    designation: "Founder @TailGrids",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/570a1745898621.58408191aee7a.jpg",
    star: 5,
  },
  {
    id: 2,
    name: "Devid Weilium",
    designation: "Founder @UIdeck",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "https://i.pinimg.com/originals/6b/0f/93/6b0f93caf39224e407e1867b9b2cc56f.png",
    star: 5,
  },
  {
    id: 3,
    name: "Lethium Frenci",
    designation: "Founder @Lineicons",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "https://petapixel.com/assets/uploads/2019/02/download-4.jpeg",
    star: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white  dark:bg-darkBg relative z-10 py-16 md:py-20 lg:py-28">
      <SectionTitle
        title="What Our Users Says"
        paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
        center
      />
      <div className="mx-5 flex flex-wrap justify-center">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
