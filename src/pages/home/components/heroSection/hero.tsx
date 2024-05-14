export const Hero = () => {
  return (
    <div className="bg-[#DEEFF0]">
      <div className="container flex-col md:flex-row flex items-center justify-between gap-[3rem]">
        <div className="md:w-[45%] w-[100%]" data-aos="fade-right">
          <h1 className="md:text-[40px] text-[30px] md:text-center">
            Empowering Your business with data science and AI technology{" "}
          </h1>
          <p className="md:my-[1rem] my-8">
            Experience the Power of Tailored Technology Solutions and Data
            Expertise to Propel Your Business Forward. We integrate up-to-date
            global data, advanced analytic solution{" "}
          </p>
          <button className="button">Contact Us</button>
        </div>

        <div className="md:w-[40%] w-[100%]" data-aos="fade-left">
          <img src="/assets/hero.png" alt="" className="w-full" />
        </div>
      </div>

      <div
        className="container flex-col md:flex-row flex items-center justify-between mt-[1.5rem]"
        data-aos="fade-down">
        <h6 className="mb-7 md:mb-0 text-center md:text-left">
          Trusted by amazing companies all over the world
        </h6>

        <div className="flex flex-col md:flex-row items-center justify-between gap-[4rem]">
          <img src="/assets/info.png" alt="" className="w-[200px]" />
          <img src="/assets/liberty.png" alt="" className="w-[200px]" />
          <img src="/assets/inter.png" alt="" className="w-[200px]" />
        </div>
      </div>
    </div>
  );
};
