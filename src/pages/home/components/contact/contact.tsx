export const Contact = () => {
  return (
    <div className="bg-[#DEEFF0] py-12">
      <div className="container flex-col md:flex-row flex items-center justify-between gap-[3rem]">
        <div className="md:w-[40%] w-[100%]" data-aos="fade-left">
          <img src="/assets/contact.png" alt="" className="w-full" />
        </div>

        <div className="md:w-[45%] w-[100%]" data-aos="fade-right">
          <h1 className="text-[40px]">Contact Us</h1>
          <p className="my-[1rem]">
            Explore Innovative IT Solutions with Cybernetic Business Group.
            Reach out for inquiries, collaborations, or customized services.
            Your path to cutting-edge technology begins here.
          </p>
          <form className="w-full mb-4">
            <div className="flex flex-col gap-1 mb-2">
              <label className="font-medium" htmlFor="name">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input p-3 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email"
                className="input p-3 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="font-medium" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="input p-3 rounded-md"
              />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Message"
                style={{ resize: "none" }}
                className="input p-3 rounded-md"
              />
            </div>
          </form>
          <button className="button">Contact Us</button>
        </div>
      </div>
    </div>
  );
};
