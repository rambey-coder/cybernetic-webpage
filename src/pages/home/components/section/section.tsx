export const Section = () => {
  return (
    <div className="bg-[#000000ef]">
      <div className="container">
        <div className="py-10 flex-col md:flex-row flex items-center justify-between gap-[3rem]">
          <div className="md:w-[40%] w-[100%]">
            <img src="/assets/sec.png" alt="" className="w-full" />
          </div>

          <div className="md:w-[50%] w-[100%]">
            <h1 className="font-medium text-[30px] mb-4">
              Our Impactful Solutions Across Various Industries
            </h1>
            <h6 className="text-[18px] my-8 text-white">
              Discover how our versatile technology solutions and data expertise
              can drive success and innovation across diverse sectors.
            </h6>

            <div className="mt-8 grid lg:grid-cols-2 grid-cols-1 gap-6">
              <div data-aos="fade-right">
                <div className="icon_bg mb-4">
                  <img src="/assets/health.svg" alt="" />
                </div>
                <h6 className="mb-4 text-[#0d47a1]">Healthcare</h6>
                <p className='text-white'>
                  In the healthcare sector, we excel in data management,
                  analysis, and engineering tools. Our focus on precision and
                  innovation ensures strategic optimization of your healthcare
                  data for advanced analytics.
                </p>
              </div>
              <div data-aos="fade-down">
                <div className="icon_bg mb-4">
                  <img src="/assets/finance.svg" alt="" />
                </div>
                <h6 className="mb-4 text-[#0d47a1]">Finance</h6>
                <p className='text-white'>
                  Data management is more than just a process; it's a strategic
                  imperative. We ensure the quality, integrity, and security of
                  your data assets, empowering financial institutions to unleash
                  their data's full potential.
                </p>
              </div>
              <div data-aos="fade-right">
                <div className="icon_bg mb-4">
                  <img src="/assets/telecom.svg" alt="" />
                </div>
                <h6 className="mb-4 text-[#0d47a1]">Telecommunication</h6>
                <p className='text-white'>
                  We enable telecommunications companies to extract significant
                  value from their data through comprehensive analytics. Our
                  expertise covers descriptive, predictive, and prescriptive
                  analytics, propelling us into the cutting-edge realm of Next
                  Gen AI.
                </p>
              </div>
              <div data-aos="fade-left">
                <div className="icon_bg mb-4">
                  <img src="/assets/estate.svg" alt="" />
                </div>
                <h6 className="mb-4 text-[#0d47a1]">Real Estate</h6>
                <p className='text-white'>
                  In an innovation-driven world, Cybernetic Business Group leads
                  the future of real estate with AI and Machine Learning. Join
                  us on this transformative journey forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
