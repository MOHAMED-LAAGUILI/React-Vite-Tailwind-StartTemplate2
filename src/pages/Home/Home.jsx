import { motion } from "framer-motion";
import Layout from "../../layout/Layout";
import Hero from "../../Components/Hero/Hero";
import SectionTitle from "../../Components/Common/SectionTitle";
import Brands from "../../Components/Brands/Brands";
import Features from "../../Components/Features/Features";
import Video from "../../Components/Video";
import Testimonials from "../../Components/Testimonials";
import Pricing from "../../Components/Pricing";

function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <Layout title="Home Page" description={"Main page"}>
      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <Hero />
      </motion.div>

      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="pb-20"
      >
        <SectionTitle title="Brands" paragraph={"Our Customers"} center />

        <Brands />
      </motion.div>

      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="pb-20"
      >
        <Features />
      </motion.div>

      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="pb-20"
      >
        <Video />
      </motion.div>

      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="pb-20"
      >
        <Testimonials />
      </motion.div>
      <motion.div
        {...fadeInUp}
        transition={{ delay: 0.4 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="pb-20"
      >
        <Pricing />
      </motion.div>
    </Layout>
  );
}

export default Home;
