export const Hero = () => {
  return (
    <>
      <div className="bg-[#d3f1f0]" id="home">
        <div className="container flex-col md:flex-row flex items-center justify-between gap-[3rem]">
          <div className="md:w-[45%] w-[100%]" data-aos="fade-right">
            <h1 className="lg:text-[40px] text-[34px] md:text-left text-center">
              Transform Your Business with our Cutting-Edge Augmented
              Data-Driven Solutions.
            </h1>
            <p className="md:my-[1rem] my-8">
              Are you ready to transform your business and elevate your revenue
              to new heights? You've come to the right place.
              <br /> <br />
              At Cybernetic Business Group, we enable companies to achieve
              exponential growth by unlocking the full potential of their data
              assets. We help monetize these assets, increase revenue, reduce
              operational costs, and achieve unparalleled operational
              efficiency.
              <br /> <br />
              We are more than just a data analytics and software solutions
              company. We are pioneers in harnessing the power of Artificial
              Intelligence (AI) to
            </p>
            <p className="md:my-[1rem] my-8 text-center font-bold">Cybernetic Business Group: Your AI-First Data Specialist Partner </p>
            <button className="button">Contact Us</button>
          </div>

          <div className="md:w-[40%] w-[100%]" data-aos="fade-left">
            <img src="/assets/hero.png" alt="" className="w-full" />
          </div>
        </div>
      </div>
      <div className="container flex-col lg:flex-row flex items-center justify-between mt-[1.5rem]">
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
