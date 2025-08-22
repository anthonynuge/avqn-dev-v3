import ScrollSpySide from "../components/ScrollAside";
import FeaturedProjects from "../components/sections/FeaturedProjects";
import Hero from "../components/sections/Hero";
import Explore from "../components/sections/Explore";

const Home = () => {
  return (
    <>
      <ScrollSpySide />
      <div className="space-y-12">
        <section id="hero" className="pt-12 app-container h-[60vh]">
          <Hero />
        </section>
        <section className="app-container with-aside">
          <FeaturedProjects />
        </section>
        <section className="app-container with-aside h-[100vh]">
          <Explore />
        </section>
        <section className="min-h-screen"></section>
      </div>
    </>
  );
};

export default Home;
