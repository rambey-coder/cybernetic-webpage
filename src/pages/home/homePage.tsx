import { useEffect } from "react";
import { About } from "./components/about/about";
import { Hero } from "./components/heroSection/hero";
import { Navbar } from "./components/navbar/navbar";
import { Section } from "./components/section/section";
import { Vision } from "./components/vision/vision";
import AOS from "aos";
import "aos/dist/aos.css";
import { Stack } from "./components/stack/stack";
import { Service } from "./components/services/service";
import { Contact } from "./components/contact/contact";

export const HomePage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Section />
      <About />
      <Vision />
      <Stack />
      <Service />
      <Contact />
    </div>
  );
};
