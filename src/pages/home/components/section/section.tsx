export const Section = () => {
  return (
    <div className="container">
      <div className="py-10 flex-col md:flex-row flex items-center justify-between gap-[3rem]">
        <div className="md:w-[40%] w-[100%]">
          <img src="/assets/sec.png" alt="" className="w-full" />
        </div>

        <div className="md:w-[50%] w-[100%]">
          <h1 className="font-medium text-[30px] mb-4">
            Our Impactful Solutions Across Various Industries
          </h1>
          <h6 className="text-[18px]">
            Discover how our versatile technology solutions and data expertise
            can drive success and innovation across diverse sectors.
          </h6>

          <div className="mt-8 grid grid-cols-2 gap-6">
            <div>
              <div className="icon_bg mb-4">
                <img src="/assets/health.svg" alt="" />
              </div>
              <h6 className="mb-4">Healthcare</h6>
              <p>
                In the healthcare sector, we excel in data management, analysis,
                and engineering tools. Our focus on precision and innovation
                ensures strategic optimization of your healthcare data for
                advanced analytics.
              </p>
            </div>
            <div>
              <div className="icon_bg mb-4">
                <img src="/assets/finance.svg" alt="" />
              </div>
              <h6 className="mb-4">Finance</h6>
              <p>
                Data management is more than just a process; it's a strategic
                imperative. We ensure the quality, integrity, and security of
                your data assets, empowering financial institutions to unleash
                their data's full potential.
              </p>
            </div>
            <div>
              <div className="icon_bg mb-4">
                <img src="/assets/telecom.svg" alt="" />
              </div>
              <h6 className="mb-4">Telecommunication</h6>
              <p>
                We enable telecommunications companies to extract significant
                value from their data through comprehensive analytics. Our
                expertise covers descriptive, predictive, and prescriptive
                analytics, propelling us into the cutting-edge realm of Next Gen
                AI.
              </p>
            </div>
            <div>
              <div className="icon_bg mb-4">
                <img src="/assets/estate.svg" alt="" />
              </div>
              <h6 className="mb-4">Real Estate</h6>
              <p>
                In an innovation-driven world, Cybernetic Business Group leads
                the future of real estate with AI and Machine Learning. Join us
                on this transformative journey forward.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
