export const Hero = () => {
  return (
    <>
      <div className="bg-[#a3cef1]" id="home">
        <div className="container flex-col md:flex-row flex items-center justify-between gap-[3rem]">
          <div className="md:w-[45%] w-[100%]" data-aos="fade-right">
            <h1 className="lg:text-[40px] text-[34px] md:text-left text-center">
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
      </div>
      <div
        className="container flex-col lg:flex-row flex items-center justify-between mt-[1.5rem]"
        data-aos="fade-down">
        <h6 className="mb-7 lg:mb-0 text-center md:text-left">
          Trusted by amazing companies all over the world
        </h6>

        <div className="flex flex-col md:flex-row items-center justify-between gap-[4rem] py-4">
          <img src="/assets/info.png" alt="" className="w-[100px]" />
          <img src="/assets/liberty.png" alt="" className="w-[100px]" />
          <img src="/assets/inter.png" alt="" className="w-[100px]" />
        </div>
      </div>
    </>
  );
};
