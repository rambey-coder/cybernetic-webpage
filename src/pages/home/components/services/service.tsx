export const Service = () => {
  return (
    <div className="container" id="service">
      <div className="py-10">
        <h1 className="text-[40px] text-center">Our Services</h1>
        <p className="mt-4 mb-8 text-center">
          Elevating Possibilities: Unveiling the Essence of Cybernetic Business
          Group.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-12">
          <div data-aos="flip-right" className="card">
            <div className="icon_bg">
              <img src="/assets/management.svg" alt="" />
            </div>
            <h6 className="my-4 font-semibold">Data Management</h6>
            <p>
              Data Warehousing, VAS short code integration, Master Data
              Management, Data Visualization and Reporting, Analytics.
            </p>
          </div>

          <div data-aos="flip-left" className="card">
            <div className="icon_bg">
              <img src="/assets/engineering.svg" alt="" />
            </div>
            <h6 className="my-4 font-semibold">Data Engineering</h6>
            <p>
              Build a solid foundation for your data ecosystem with our expert
              data engineering services. From data pipelines to architecture
              design.
            </p>
          </div>

          <div data-aos="fade-down-right" className="card">
            <div className="icon_bg">
              <img src="/assets/intelligence.svg" alt="" />
            </div>
            <h6 className="my-4 font-semibold">Data Intelligence</h6>
            <p>
              Transform data into insights. Gain a competitive edge. Small,
              secure, accessible data solution.
            </p>
          </div>

          <div data-aos="fade-right" className="card">
            <div className="icon_bg">
              <img src="/assets/software.svg" alt="" />
            </div>
            <h6 className="my-4 font-semibold">Software Engineering</h6>
            <p>
              Seamlessly integrate data solutions with our expert software
              engineering for optimal performance.
            </p>
          </div>

          <div data-aos="fade-down" className="card">
            <div className="icon_bg">
              <img src="/assets/computing.svg" alt="" />
            </div>
            <h6 className="my-4 font-semibold">Cloud Computing</h6>
            <p>
              Boost operations with our cloud solutions. Enhance data
              capabilities with scalability and cost-efficiency
            </p>
          </div>

          <div data-aos="flip-down" className="card">
            <div className="icon_bg">
              <img src="/assets/architecture.svg" alt="" />
            </div>
            <h6 className="my-4 font-semibold">Data Architecture</h6>
            <p>
              Craft a robust data foundation with our expert services. Efficient
              management and security guaranteed.
            </p>
          </div>

          <div data-aos="zoom-in" className="card">
            <div className="icon_bg">
              <img src="/assets/quality.svg" alt="" />
            </div>
            <h6 className="my-4 font-semibold">Data Quality</h6>
            <p>
              Ensure data integrity with our quality solutions. Rigorous
              processes for accurate and reliable information.
            </p>
          </div>

          <div data-aos="zoom-out-left" className="card">
            <div className="icon_bg">
              <img src="/assets/science.svg" alt="" />
            </div>
            <h6 className="my-4 font-semibold">Data Science</h6>
            <p>
              Uncover data insights with our advanced solutions. Skilled
              scientists extract actionable intelligence for informed decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
