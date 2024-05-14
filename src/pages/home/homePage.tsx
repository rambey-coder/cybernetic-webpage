import { Hero } from "./components/heroSection/hero";
import { Navbar } from "./components/navbar/navbar";
import { Section } from "./components/section/section";

export const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
    </div>
  );
};
