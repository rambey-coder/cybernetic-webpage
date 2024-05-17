export const About = () => {
  return (
    <div className="bg-[#a3cef1] py-10" id="about">
      <div className="container flex-col md:flex-row flex items-center justify-between gap-[3rem]">
        <div className="md:w-[50%] w-[100%]" data-aos="flip-right">
          <h1 className="font-bold text-[30px] mb-4">About Us</h1>
          <p className="mb-4">
            Cybernetic Business Group is a pioneering technology-agnostic
            solutions company, operating as a fully remote entity. Our
            unwavering commitment to innovation, client-centricity, and data
            integrity defines our mission. We offer extensive industry expertise
            drawn from a wealth of experience across various domains, setting
            standards and upholding best practices in all our endeavours.
          </p>

          <p>
            Our profound understanding of technology serves as a catalyst, but
            our primary focus lies in crafting tailored software and data
            solutions that grant businesses a decisive competitive edge.
          </p>
        </div>

        <div className="md:w-[40%] w-[100%]" data-aos="zoom-out">
          <img src="/assets/abt.png" alt="" className="w-full" />
        </div>
      </div>
    </div>
  );
};
