import AboutSectionOne from "../../Components/About/AboutSectionOne";
import AboutSectionTwo from "../../Components/About/AboutSectionTwo";
import Layout from "../../layout/Layout";

const AboutPage = () => {
  return (
    <Layout title={"about"} description={"about page"}>
      <div className="pt-10">
        <AboutSectionOne />
        <AboutSectionTwo />
      </div>
    </Layout>
  );
};

export default AboutPage;
