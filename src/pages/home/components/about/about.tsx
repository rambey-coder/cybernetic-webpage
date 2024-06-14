export const About = () => {
  return (
    <div className="bg-[#d3f1f0] py-10" id="about">
      <div className="container flex-col md:flex-row flex items-center justify-between gap-[3rem]">
        <div className="md:w-[50%] w-[100%]" data-aos="flip-right">
          <h1 className="font-bold text-[30px] mb-4">About Us</h1>
          <p>
            At Cybernetic Business Group, we believe in the revolutionary
            potential of AI. By placing AI at the forefront of our culture and
            solutions, we enable businesses to reach their goals and unlock
            value faster than ever before. Our AI-first approach ensures that
            every solution we provide is innovative, efficient, and tailored to
            the unique needs of our clients.
          </p>

          <p className="my-4">
            Join us on a journey to leverage cutting-edge technology and
            data-driven insights to transform your business. With Cybernetic
            Business Group, you are partnering with a leader dedicated to
            driving success and innovation in your industry
          </p>

          <p className="text-center font-bold">AI?... Yes, We Can!!!</p>
        </div>

        <div className="md:w-[40%] w-[100%]" data-aos="zoom-out">
          <img src="/assets/abt.jpg" alt="" className="w-full rounded-md" />
        </div>
      </div>
    </div>
  );
};
