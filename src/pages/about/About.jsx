import AboutSectionOne from "../../Components/About/AboutSectionOne";
import AboutSectionTwo from "../../Components/About/AboutSectionTwo";
import Layout from "../../layout/Layout";

 

const AboutPage = () => {
  return (
        <Layout title={"contact"} description={"contact page"}>
    <AboutSectionOne/>
    <AboutSectionTwo/>
    </Layout>
  );
};

export default AboutPage;
