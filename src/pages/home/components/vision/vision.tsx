export const Vision = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/ellipse.png')",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "top",
        backgroundSize: "30%",
      }}
      className="py-20">
      <div className="container flex-col md:flex-row flex items-center justify-around ">
        <div className="md:w-[40%] w-full text-center">
          <div className="icon_bg mx-auto">
            <img src="/assets/vision.svg" alt="" />
          </div>
          <h1 className="text-[25px] font-bold my-4 ">Vision</h1>
          <p className="mb-4">
            We embrace AI as the cornerstone of our culture and solutions,
            enabling business to reach their goals and unlock value quicker than
            ever before.{" "}
          </p>

          <p>
            We are committed to providing next-generation solutions that
            leverage high-performant technology and advanced data analytics to
            empower organisations across industries{" "}
          </p>
        </div>

        <div className="w-[1px] h-[100px] bg-[#858585]"></div>

        <div className="md:w-[40%] w-full text-center">
          <div className="icon_bg mx-auto">
            <img src="/assets/mission.svg" alt="" />
          </div>
          <h1 className="text-[25px] font-bold my-4 ">Mission</h1>
          <p className="mb-4">
            Our mission is to deliver world-class tech, software and data
            solutions that empower organizations to boldly challenge the status
            quo. We are committed to providing extraordinary value through
            innovative disruption, driving forward progress and redefining
            industry standards
          </p>

          <p>
            We are dedicated to delivering world-class tech solutions that
            empowers organisations to challenge the status quo and drive
            innovation
          </p>
        </div>
      </div>
    </div>
  );
};
