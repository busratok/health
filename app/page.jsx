import Hero from "./_components/Hero";
import Categories from "./_components/Categories";
import Gallery from "./_components/Gallery";

export default function Home() {
  return (
    <div>
      <Hero />
      <Categories />
      {/* <HospitalList /> */}
      {/* <BeforeAfterComponent /> */}
      {/* <Testimonials /> */}
      <Gallery />
      {/* <OurServices /> */}
    </div>
  );
}
